import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { SkillDetail, SkillListItem } from "../controllers/remote-market.ts";
import { toSanitizedMarkdownHtml } from "../markdown.ts";
import { t } from "../strings.js";

/** Skills default icon (layers) - same as skills.ts */
const SKILL_ICON_SVG = html`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
  </svg>
`;

export type SkillLibraryProps = {
  loading: boolean;
  error: string | null;
  /** 安装成功提示（如 "安装成功：summarize-100（测试与安全）"） */
  installSuccess: string | null;
  query: string;
  items: SkillListItem[];
  selectedFolder: string | null;
  selectedDetail: SkillDetail | null;
  selectedCategory: string;
  selectedStatus: string;
  installedKeys?: Set<string>;
  /** 已禁用的 skillKey 集合 */
  disabledKeys?: Set<string>;
  installingFolder?: string | null;
  onQueryChange: (next: string) => void;
  onCategoryChange: (next: string) => void;
  onStatusChange: (next: string) => void;
  onRefresh: () => void;
  onSelect: (folder: string) => void;
  onDetailClose?: () => void;
  addModalOpen: boolean;
  uploadName: string;
  uploadFiles: File[];
  uploadError: string | null;
  uploadTemplate: string | null;
  uploadBusy: boolean;
  onAddClick: () => void;
  onAddClose: () => void;
  onUploadNameChange: (next: string) => void;
  onUploadFilesChange: (files: File[]) => void;
  onUploadSubmit: () => void;
  onInstall?: (folder: string, category?: string) => Promise<void>;
  onDelete?: (folder: string) => Promise<void>;
  onToggleEnabled?: (folder: string, enabled: boolean) => Promise<void>;
};

function normalizeCategory(raw?: string) {
  const v = (raw ?? "").trim();
  return v ? v : "其它";
}

function uniqueCategories(items: SkillListItem[]) {
  const map = new Map<string, number>();
  for (const it of items) {
    const cat = normalizeCategory(it.categoryCn);
    map.set(cat, (map.get(cat) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count }));
}

export type SkillLibraryCategoryInfo = {
  orderedCategories: string[];
  counts: Map<string, number>;
};

export function computeSkillLibraryCategories(
  items: SkillListItem[],
  query: string,
  status: string
): SkillLibraryCategoryInfo {
  const q = (query ?? "").trim().toLowerCase();
  const activeStatus = (status ?? "").trim() || "__all__";
  const filtered = (items ?? []).filter((it) => {
    if (q) {
      const text = `${it.name ?? ""} ${it.description ?? ""} ${it.folder ?? ""}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    if (activeStatus !== "__all__") {
      if ((it.status ?? "").trim().toLowerCase() !== activeStatus) return false;
    }
    return true;
  });
  const counts = new Map<string, number>();
  counts.set("__all__", filtered.length);
  for (const it of filtered) {
    const cat = normalizeCategory(it.categoryCn);
    counts.set(cat, (counts.get(cat) ?? 0) + 1);
  }
  const orderedCategories = [
    "__all__",
    ...Array.from(counts.keys())
      .filter((k) => k !== "__all__")
      .sort((a, b) => a.localeCompare(b, "zh-Hans-CN")),
  ];
  return { orderedCategories, counts };
}

function splitCsv(raw?: string) {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Strip YAML frontmatter (--- ... ---) from the start of markdown. */
function stripFrontmatter(text: string): string {
  const trimmed = text.trimStart();
  if (!trimmed.startsWith("---")) return text;
  const afterFirst = trimmed.slice(3);
  const newlineIdx = afterFirst.search(/\r?\n/);
  if (newlineIdx === -1) return text;
  const rest = afterFirst.slice(newlineIdx + (afterFirst[newlineIdx] === "\r" ? 2 : 1));
  const closeMatch = rest.match(/\r?\n\s*---\s*\r?\n?/);
  if (!closeMatch) return text;
  return rest.slice(closeMatch.index! + closeMatch[0].length).trimStart();
}

function statusLabel(status?: string) {
  const v = (status ?? "").trim().toLowerCase();
  if (!v) return "";
  if (v === "open") return "开放";
  if (v === "paid") return "付费";
  if (v === "private") return "私有";
  return status ?? "";
}

function renderSkillCardActions(
  props: SkillLibraryProps,
  folder: string,
  installed: boolean,
  enabled: boolean,
  installing: boolean,
  category?: string
) {
  if (installed) {
    return html`
      <div class="market-card-actions">
        ${props.onDelete
          ? html`<button class="btn small" type="button" @click=${(e: Event) => { e.stopPropagation(); void props.onDelete!(folder); }}>删除</button>`
          : nothing}
        ${props.onToggleEnabled
          ? html`<button class="btn small" type="button" @click=${(e: Event) => { e.stopPropagation(); void props.onToggleEnabled!(folder, !enabled); }}>${enabled ? "禁用" : "启用"}</button>`
          : nothing}
      </div>
    `;
  }
  if (props.onInstall) {
    return html`
      <button
        class="btn small"
        type="button"
        ?disabled=${installing}
        @click=${(e: Event) => {
          e.stopPropagation();
          void props.onInstall!(folder, category);
        }}
      >
        ${installing ? "安装中" : "安装"}
      </button>
    `;
  }
  return html`
    <a
      class="btn small"
      href=${`/api/v1/skills/${encodeURIComponent(folder)}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${(e: Event) => e.stopPropagation()}
    >
      安装
    </a>
  `;
}

function renderSkillMeta(tags: string[], os: string[], status: string) {
  return html`
    <div class="market-card-meta">
      ${status
        ? html`<span class="market-card-chip">${status}</span>`
        : html`<span class="market-card-chip market-card-chip--muted">未标注</span>`}
      ${tags.slice(0, 3).map((t) => html`<span class="market-card-chip">${t}</span>`)}
      ${os.length > 0 ? html`<span class="market-card-chip">OS: ${os.join("/")}</span>` : nothing}
    </div>
  `;
}

export function renderSkillLibrary(props: SkillLibraryProps) {
  const categoryList = uniqueCategories(props.items);
  const activeCategory = props.selectedCategory || "__all__";
  const activeStatus = props.selectedStatus || "__all__";
  const q = (props.query ?? "").trim().toLowerCase();

  const filtered = props.items.filter((it) => {
    if (q) {
      const text = `${it.name ?? ""} ${it.description ?? ""} ${it.folder ?? ""}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    const okCategory =
      activeCategory === "__all__" ? true : normalizeCategory(it.categoryCn) === activeCategory;
    const okStatus =
      activeStatus === "__all__" ? true : (it.status ?? "").trim().toLowerCase() === activeStatus;
    return okCategory && okStatus;
  });

  const grouped = new Map<string, SkillListItem[]>();
  for (const it of filtered) {
    const cat = normalizeCategory(it.categoryCn);
    const arr = grouped.get(cat) ?? [];
    arr.push(it);
    grouped.set(cat, arr);
  }

  const orderedGroups =
    activeCategory === "__all__"
      ? categoryList
          .map((c) => c.name)
          .filter((name) => grouped.has(name))
          .map((name) => ({ name, items: grouped.get(name) ?? [] }))
      : [{ name: activeCategory, items: grouped.get(activeCategory) ?? [] }];
  const showToolbarActions = !props.error || props.items.length > 0;

  const toolbarActions = html`
    <div class="emp-toolbar__actions">
      <div class="emp-search">
        <span class="input"><input
          class="emp-search__input"
          type="text"
          placeholder="搜索技能"
          .value=${props.query}
          ?disabled=${props.loading}
          @input=${(e: Event) => props.onQueryChange((e.target as HTMLInputElement).value)}
        /></span>
        <span class="emp-search__icon" aria-hidden="true">🔍</span>
      </div>
      <button class="btn" @click=${props.onRefresh} ?disabled=${props.loading}>刷新</button>
      <button class="btn primary" ?disabled=${props.loading} @click=${props.onAddClick}>${t("skillsAdd")}</button>
    </div>
  `;

  const installedItems = (props.items ?? []).filter((it) => {
    if (!(props.installedKeys?.has(it.folder) ?? false)) return false;
    if (!q) return true;
    const text = `${it.name ?? ""} ${it.description ?? ""} ${it.folder ?? ""}`.toLowerCase();
    return text.includes(q);
  });
  const showSections = !props.loading && !(orderedGroups.length === 0 && installedItems.length === 0);
  const showMainBody = showToolbarActions || installedItems.length > 0 || showSections;

  const showDetailModal = Boolean(props.selectedFolder);
  const closeDetail = () =>
    props.onDetailClose ? props.onDetailClose() : props.onSelect("");

  return html`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}
            ${props.installSuccess ? html`<div class="callout success">${props.installSuccess}</div>` : nothing}
            ${showMainBody
              ? html`
                  <div class="emp-main__body">
                    ${showToolbarActions ? toolbarActions : nothing}
                    ${(() => {
                      if (installedItems.length === 0) return nothing;
                      return html`
                        <div class="emp-installed-section">
                          <h3 class="emp-section__title">已安装 (${installedItems.length})</h3>
                          <div class="emp-grid emp-installed-grid">
                            ${installedItems.map((it) => {
                              const active = props.selectedFolder === it.folder;
                              const disabled = props.disabledKeys?.has(it.folder) ?? false;
                              const enabled = !disabled;
                              const installing = props.installingFolder === it.folder;
                              const tags = splitCsv(it.tags);
                              const os = splitCsv(it.os);
                              const status = statusLabel(it.status);
                              return html`
                                <div class="emp-card-wrap ${active ? "active" : ""}">
                                  <div class="emp-card emp-card-btn" @click=${() => props.onSelect(it.folder)}>
                                    <div class="emp-card__icon ${!it.emoji ? "emp-card__icon--default" : ""}">
                                      ${it.emoji ? it.emoji : SKILL_ICON_SVG}
                                    </div>
                                    <div class="emp-card__actions">
                                      ${renderSkillCardActions(props, it.folder, true, enabled, installing, it.categoryCn)}
                                    </div>
                                    <h3 class="emp-card__title">${it.name || it.folder}</h3>
                                    <p class="emp-card__desc">${it.description ?? it.folder ?? "暂无描述"}</p>
                                    ${renderSkillMeta(tags, os, status)}
                                  </div>
                                </div>
                              `;
                            })}
                          </div>
                        </div>
                      `;
                    })()}
                    ${showSections
                      ? html`
                          <div class="emp-sections">
                            ${orderedGroups.map(
                              (group) => html`
                                <div class="emp-section">
                                  <div class="emp-section__header">
                                    <h3 class="emp-section__title">${group.name}</h3>
                                  </div>
                                  <div class="emp-grid">
                                    ${group.items.map((it) => {
                                      const active = props.selectedFolder === it.folder;
                                      const installed =
                                        props.installedKeys && props.installedKeys.size > 0
                                          ? props.installedKeys.has(it.folder)
                                          : false;
                                      const disabled = props.disabledKeys?.has(it.folder) ?? false;
                                      const enabled = !disabled;
                                      const installing = props.installingFolder === it.folder;
                                      const tags = splitCsv(it.tags);
                                      const os = splitCsv(it.os);
                                      const status = statusLabel(it.status);
                                      return html`
                                        <div class="emp-card-wrap ${active ? "active" : ""}">
                                          <div class="emp-card emp-card-btn" @click=${() => props.onSelect(it.folder)}>
                                            <div class="emp-card__icon ${!it.emoji ? "emp-card__icon--default" : ""}">
                                              ${it.emoji ? it.emoji : SKILL_ICON_SVG}
                                            </div>
                                            <div class="emp-card__actions">
                                              ${renderSkillCardActions(
                                                props,
                                                it.folder,
                                                installed,
                                                enabled,
                                                installing,
                                                it.categoryCn,
                                              )}
                                            </div>
                                            <h3 class="emp-card__title">${it.name || it.folder}</h3>
                                            <p class="emp-card__desc">${it.description ?? it.folder ?? "暂无描述"}</p>
                                            ${renderSkillMeta(tags, os, status)}
                                          </div>
                                        </div>
                                      `;
                                    })}
                                  </div>
                                </div>
                              `,
                            )}
                          </div>
                        `
                      : nothing}
                  </div>
                `
              : nothing}

            ${props.addModalOpen
              ? html`
                  <div class="modal-overlay" @click=${props.onAddClose}>
                    <div class="modal card" @click=${(e: Event) => e.stopPropagation()}>
                      <div class="card-title">${t("skillsAddSkill")}</div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${t("skillsUploadName")}</span>
                        <span class="input"><input
                          type="text"
                          .value=${props.uploadName}
                          @input=${(e: Event) =>
                            props.onUploadNameChange((e.target as HTMLInputElement).value)}
                          placeholder=${t("skillsUploadNamePlaceholder")}
                          pattern="[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}"
                          ?disabled=${props.uploadFiles.length > 1}
                        /></span>
                        ${props.uploadFiles.length > 1
                          ? html`
                              <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                                已选择多个压缩包：将自动从每个文件名提取技能名称（此处无需填写）。
                              </div>
                            `
                          : nothing}
                      </div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${t("skillsUploadFile")}</span>
                        <input
                          type="file"
                          accept=".md,.zip"
                          multiple
                          @change=${(e: Event) => {
                            const input = e.target as HTMLInputElement;
                            const files = input.files ? Array.from(input.files) : [];
                            props.onUploadFilesChange(files);
                          }}
                        />
                        <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                          ${t("skillsUploadFileHint")}
                        </div>
                        ${props.uploadFiles.length > 0
                          ? html`
                              <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                                ${props.uploadFiles.map(
                                  (f) => html`<span class="chip" style="font-size: 12px;">${f.name}</span>`,
                                )}
                              </div>
                            `
                          : nothing}
                      </div>
                      ${props.uploadError
                        ? html`
                            <div class="callout danger" style="margin-top: 12px;">
                              ${props.uploadError}
                            </div>
                          `
                        : nothing}
                      ${props.uploadTemplate
                        ? html`
                            <details class="muted" style="margin-top: 12px;">
                              <summary>Template</summary>
                              <pre
                                style="
                                  margin-top: 8px;
                                  padding: 12px;
                                  background: var(--bg-content, #f5f5f5);
                                  border-radius: 6px;
                                  overflow: auto;
                                  max-height: 200px;
                                  font-size: 0.85em;
                                  white-space: pre-wrap;
                                "
                              >${props.uploadTemplate}</pre>
                            </details>
                          `
                        : nothing}
                      <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                        <button class="btn" ?disabled=${props.uploadBusy} @click=${props.onAddClose}>
                          ${t("commonCancel")}
                        </button>
                        <button
                          class="btn primary"
                          ?disabled=${props.uploadBusy || props.uploadFiles.length === 0 || (props.uploadFiles.length === 1 && !props.uploadName.trim())}
                          @click=${props.onUploadSubmit}
                        >
                          ${props.uploadBusy ? t("commonLoading") : t("skillsUploadSubmit")}
                        </button>
                      </div>
                    </div>
                  </div>
                `
              : nothing}

            ${props.loading
              ? html`<div class="emp-loading">加载中...</div>`
              : orderedGroups.length === 0 && installedItems.length === 0
                ? html`<div class="emp-empty">暂无匹配的技能</div>`
                : nothing}
          </div>
        </div>

        ${showDetailModal
          ? html`
              <div class="modal-overlay" @click=${closeDetail} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${(e: Event) => e.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">${props.selectedFolder}</h1>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(() => {
                          const folder = props.selectedFolder ?? "";
                          const installed = props.installedKeys?.has(folder) ?? false;
                          const disabled = props.disabledKeys?.has(folder) ?? false;
                          const enabled = !disabled;
                          if (installed) {
                            return renderSkillCardActions(props, folder, true, enabled, false);
                          }
                          if (props.onInstall) {
                            return renderSkillCardActions(
                              props,
                              folder,
                              false,
                              false,
                              props.installingFolder === folder,
                            );
                          }
                          return renderSkillCardActions(props, folder, false, false, false);
                        })()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right">
                      ${(() => {
                        const sel = props.items.find((it) => it.folder === props.selectedFolder);
                        if (!sel) return nothing;
                        const cat = normalizeCategory(sel.categoryCn);
                        const tags = splitCsv(sel.tags);
                        return html`
                          ${cat ? html`<span class="badge ghost">${cat}</span>` : nothing}
                          ${tags.map((t) => html`<span class="badge ghost">${t}</span>`)}
                        `;
                      })()}
                      <button
                        class="emp-detail-modal__close"
                        type="button"
                        aria-label="关闭"
                        @click=${closeDetail}
                      ></button>
                    </div>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${props.selectedDetail?.content
                      ? html`<div class="emp-detail-markdown emp-detail-content">${unsafeHTML(toSanitizedMarkdownHtml(stripFrontmatter(props.selectedDetail.content)))}</div>`
                      : html`<div class="callout info">加载中或无内容</div>`}
                  </div>
                </div>
              </div>
            `
          : nothing}
      </section>
    </main>
  `;
}
