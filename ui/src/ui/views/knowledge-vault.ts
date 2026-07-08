import { html, nothing, type TemplateResult } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { VaultFileEntry, VaultGraph } from "../controllers/vault.ts";
import { icons } from "../icons.js";
import { toSanitizedMarkdownHtml } from "../markdown.ts";
import "../components/vault-graph-view.ts";

export type KnowledgeVaultViewMode = "notes" | "graph";

export type KnowledgeVaultProps = {
  loading: boolean;
  error: string | null;
  vaultDir: string;
  files: VaultFileEntry[];
  folders: string[];
  viewMode: KnowledgeVaultViewMode;
  selectedPath: string | null;
  expandedFolders: string[];
  content: string;
  contentLoading: boolean;
  editMode: boolean;
  draftContent: string;
  saving: boolean;
  saveMessage: string | null;
  syncing: boolean;
  graph: VaultGraph | null;
  graphLoading: boolean;
  query: string;
  onRefresh: () => void;
  onSyncIndex: () => void;
  onViewModeChange: (mode: KnowledgeVaultViewMode) => void;
  onSelectFile: (path: string) => void;
  onToggleFolder: (folderPath: string) => void;
  onQueryChange: (q: string) => void;
  onToggleEdit: () => void;
  onDraftChange: (content: string) => void;
  onSave: () => void;
  onCreateFile: () => void;
  onCreateFolder: () => void;
  onConfigureVaultDir: () => void;
  dirSaving: boolean;
};

type TreeNode = {
  name: string;
  filePath: string | null;
  folderPath: string | null;
  children: TreeNode[];
};

function buildFileTree(files: VaultFileEntry[], folders: string[]): TreeNode[] {
  const root: TreeNode[] = [];
  const ensureFolder = (list: TreeNode[], name: string, folderPath: string): TreeNode => {
    let node = list.find((n) => n.folderPath === folderPath);
    if (!node) {
      node = { name, filePath: null, folderPath, children: [] };
      list.push(node);
    }
    return node;
  };
  for (const folderPath of folders) {
    const parts = folderPath.split("/");
    let list = root;
    let acc = "";
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      acc = acc ? `${acc}/${part}` : part;
      const folder = ensureFolder(list, part, acc);
      list = folder.children;
    }
  }
  for (const file of files) {
    const parts = file.path.split("/");
    let list = root;
    let acc = "";
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      if (isFile) {
        list.push({ name: part, filePath: file.path, folderPath: null, children: [] });
      } else {
        acc = acc ? `${acc}/${part}` : part;
        const folder = ensureFolder(list, part, acc);
        list = folder.children;
      }
    }
  }
  const sortNodes = (nodes: TreeNode[]) => {
    nodes.sort((a, b) => {
      const aFolder = a.filePath === null ? 0 : 1;
      const bFolder = b.filePath === null ? 0 : 1;
      if (aFolder !== bFolder) return aFolder - bFolder;
      return a.name.localeCompare(b.name, "zh-Hans-CN");
    });
    for (const n of nodes) {
      if (n.children.length) sortNodes(n.children);
    }
  };
  sortNodes(root);
  return root;
}

function collectExpandedForSearch(nodes: TreeNode[], query: string, expanded: Set<string>) {
  const q = query.trim().toLowerCase();
  if (!q) return;
  for (const node of nodes) {
    if (node.filePath) {
      const match =
        node.filePath.toLowerCase().includes(q) || node.name.toLowerCase().includes(q);
      if (match && node.filePath.includes("/")) {
        const parts = node.filePath.split("/");
        let acc = "";
        for (let i = 0; i < parts.length - 1; i++) {
          acc = acc ? `${acc}/${parts[i]}` : parts[i];
          expanded.add(acc);
        }
      }
    }
    if (node.children.length) {
      collectExpandedForSearch(node.children, query, expanded);
    }
  }
}

function filterFiles(files: VaultFileEntry[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return files;
  return files.filter(
    (f) => f.path.toLowerCase().includes(q) || (f.title ?? "").toLowerCase().includes(q),
  );
}

function isFolderExpanded(folderPath: string, props: KnowledgeVaultProps, searchExpanded: Set<string>) {
  if (searchExpanded.has(folderPath)) return true;
  return props.expandedFolders.includes(folderPath);
}

function renderTree(
  nodes: TreeNode[],
  props: KnowledgeVaultProps,
  depth = 0,
  searchExpanded: Set<string> = new Set(),
): TemplateResult {
  return html`
    ${repeat(
      nodes,
      (n) => `${depth}:${n.filePath ?? n.folderPath ?? n.name}`,
      (node) => {
        const isFolder = node.filePath === null && node.folderPath !== null;
        const selected = !isFolder && node.filePath === props.selectedPath;
        const expanded =
          isFolder && node.folderPath
            ? isFolderExpanded(node.folderPath, props, searchExpanded)
            : false;
        return html`
          <div class="kv-tree__item">
            ${isFolder
              ? html`<button
                  type="button"
                  class="kv-tree__folder"
                  style=${`padding-left:${depth * 14 + 8}px`}
                  @click=${() => props.onToggleFolder(node.folderPath!)}
                >
                  <span
                    class="kv-tree__chevron ${expanded ? "kv-tree__chevron--open" : ""}"
                    aria-hidden="true"
                    >${icons.chevronRight}</span
                  >
                  <span class="kv-tree__icon">${icons.folder}</span>
                  <span class="kv-tree__label">${node.name}</span>
                </button>`
              : html`<button
                  type="button"
                  class="kv-tree__file ${selected ? "kv-tree__file--active" : ""}"
                  style=${`padding-left:${depth * 14 + 28}px`}
                  @click=${() => props.onSelectFile(node.filePath!)}
                >
                  <span class="kv-tree__icon">${icons.fileText}</span>
                  <span class="kv-tree__label">${node.name.replace(/\.md$/i, "")}</span>
                </button>`}
            ${isFolder && expanded && node.children.length
              ? renderTree(node.children, props, depth + 1, searchExpanded)
              : nothing}
          </div>
        `;
      },
    )}
  `;
}

function renderGraph(props: KnowledgeVaultProps): TemplateResult {
  return html`
    <vault-graph-view
      .graph=${props.graph}
      .loading=${props.graphLoading}
      .selectedPath=${props.selectedPath}
      .onSelectFile=${props.onSelectFile}
    ></vault-graph-view>
  `;
}

export function renderKnowledgeVault(props: KnowledgeVaultProps): TemplateResult {
  const filtered = filterFiles(props.files, props.query);
  const tree = buildFileTree(filtered, props.folders);
  const searchExpanded = new Set<string>();
  if (props.query.trim()) {
    collectExpandedForSearch(tree, props.query, searchExpanded);
  }

  return html`
    <div class="kv-page ${props.viewMode === "graph" ? "kv-page--graph" : ""}">
      <header class="kv-header">
        <div class="kv-header__left">
          <h1 class="kv-header__title">知识库</h1>
          ${props.vaultDir
            ? html`<p class="kv-header__path" title=${props.vaultDir}>${props.vaultDir}</p>`
            : nothing}
        </div>
        <div class="kv-header__actions">
          <button
            type="button"
            class="btn btn--ghost btn--sm kv-header__dir-btn"
            ?disabled=${props.dirSaving}
            @click=${props.onConfigureVaultDir}
          >
            ${props.dirSaving ? "保存中…" : "配置目录"}
          </button>
          <div class="kv-segment">
            <button
              type="button"
              class="kv-segment__btn ${props.viewMode === "notes" ? "kv-segment__btn--active" : ""}"
              @click=${() => props.onViewModeChange("notes")}
            >
              文档
            </button>
            <button
              type="button"
              class="kv-segment__btn ${props.viewMode === "graph" ? "kv-segment__btn--active" : ""}"
              @click=${() => props.onViewModeChange("graph")}
            >
              图谱
            </button>
          </div>
          <button type="button" class="btn btn--secondary" ?disabled=${props.loading} @click=${props.onRefresh}>
            刷新
          </button>
          <button
            type="button"
            class="btn btn--secondary"
            ?disabled=${props.syncing || props.loading}
            @click=${props.onSyncIndex}
          >
            ${props.syncing ? "同步中…" : "同步索引"}
          </button>
        </div>
      </header>

      ${props.error ? html`<div class="kv-alert kv-alert--error">${props.error}</div>` : nothing}
      ${props.saveMessage ? html`<div class="kv-alert kv-alert--ok">${props.saveMessage}</div>` : nothing}
      ${props.syncing
        ? html`
            <div class="kv-sync-progress" role="status" aria-live="polite">
              <div class="kv-sync-progress__track">
                <div class="kv-sync-progress__bar"></div>
              </div>
              <span class="kv-sync-progress__label">正在同步索引，请稍候…</span>
            </div>
          `
        : nothing}
      ${!props.loading && props.viewMode === "notes"
        ? html`<div class="kv-hint">
            对话中 Agent 会通过 <code>memory_search</code> 检索知识库；更新笔记后请点击「同步索引」，并在会话中再发一条新消息。
          </div>`
        : nothing}

      ${props.loading
        ? html`<div class="kv-loading">加载知识库…</div>`
        : props.viewMode === "graph"
          ? renderGraph(props)
          : html`
              <div class="kv-layout">
                <aside class="kv-sidebar">
                  <div class="kv-sidebar__toolbar">
                    <button type="button" class="btn btn--secondary btn--sm" @click=${props.onCreateFile}>
                      新建笔记
                    </button>
                    <button type="button" class="btn btn--secondary btn--sm" @click=${props.onCreateFolder}>
                      新建文件夹
                    </button>
                  </div>
                  <div class="kv-search">
                    <span class="kv-search__icon">${icons.search}</span>
                    <input
                      class="input kv-search__input"
                      type="search"
                      placeholder="搜索笔记…"
                      .value=${props.query}
                      @input=${(e: Event) =>
                        props.onQueryChange((e.target as HTMLInputElement).value)}
                    />
                  </div>
                  <div class="kv-tree">
                    ${tree.length
                      ? renderTree(tree, props, 0, searchExpanded)
                      : html`<div class="kv-tree__empty">暂无笔记</div>`}
                  </div>
                </aside>
                <section class="kv-main">
                  ${!props.selectedPath
                    ? html`<div class="kv-main__empty">
                        <p>从左侧选择一篇笔记，或点击「新建笔记」创建 Markdown 文档。</p>
                        <p class="kv-main__hint">支持 Obsidian 双链 <code>[[笔记]]</code> 与 Markdown 链接。</p>
                      </div>`
                    : html`
                        <div class="kv-doc-header">
                          <h2 class="kv-doc-title">${props.selectedPath.replace(/\.md$/i, "")}</h2>
                          <div class="kv-doc-actions">
                            <button type="button" class="btn btn--ghost btn--sm" @click=${props.onToggleEdit}>
                              ${props.editMode ? "预览" : "编辑"}
                            </button>
                            ${props.editMode
                              ? html`<button
                                  type="button"
                                  class="btn btn--primary btn--sm"
                                  ?disabled=${props.saving}
                                  @click=${props.onSave}
                                >
                                  ${props.saving ? "保存中…" : "保存"}
                                </button>`
                              : nothing}
                          </div>
                        </div>
                        ${props.contentLoading
                          ? html`<div class="kv-main__loading">加载中…</div>`
                          : props.editMode
                            ? html`<textarea
                                class="kv-editor"
                                .value=${props.draftContent}
                                @input=${(e: Event) =>
                                  props.onDraftChange((e.target as HTMLTextAreaElement).value)}
                              ></textarea>
                              <p class="kv-main__hint">
                                引用其他笔记请使用 Obsidian 双链 <code>[[笔记名]]</code> 或 Markdown 链接
                                <code>[标题](路径.md)</code>，保存后 Obsidian 与图谱均可识别。
                              </p>`
                            : html`<article class="kv-preview sidebar-markdown">
                                ${unsafeHTML(toSanitizedMarkdownHtml(props.content))}
                              </article>`}
                      `}
                </section>
              </div>
            `}
    </div>
  `;
}
