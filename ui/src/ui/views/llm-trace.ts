import { html, nothing } from "lit";
import { t } from "../strings.js";
import type { TraceListEntry } from "../controllers/llm-trace.ts";

export type LlmTraceProps = {
  loading: boolean;
  result: { traceDir: string; entries: TraceListEntry[] } | null;
  error: string | null;
  mode: "active" | "all";
  search: string;
  enabled: boolean;
  saving: boolean;
  viewContent: string | null;
  viewingSessionId: string | null;
  viewLoading: boolean;
  onRefresh: () => void;
  onModeChange: (mode: "active" | "all") => void;
  onSearchChange: (value: string) => void;
  onToggleEnabled: () => void;
  onView: (sessionId: string) => void;
  onBack: () => void;
  onDownload: (sessionId: string) => void;
};

function formatUpdatedAt(ms: number | undefined): string {
  if (ms == null) return "—";
  const d = new Date(ms);
  return d.toLocaleString();
}

function formatFileSize(bytes: number | undefined): string {
  if (bytes == null || bytes < 0) return "—";
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(i > 0 ? 2 : 0)} ${units[i]}`;
}

function filterEntries(entries: TraceListEntry[], search: string): TraceListEntry[] {
  if (!search.trim()) return entries;
  const q = search.trim().toLowerCase();
  return entries.filter(
    (e) =>
      e.sessionKey.toLowerCase().includes(q) || e.sessionId.toLowerCase().includes(q),
  );
}

/** 注入滚动样式，确保 trace 内容可完整显示并支持滚动 */
function ensureTraceContentScrollable(html: string): string {
  const scrollStyle =
    "<style>html,body{overflow-y:auto!important;overflow-x:auto!important;min-height:100%;}</style>";
  if (html.includes("</head>")) {
    return html.replace("</head>", `${scrollStyle}</head>`);
  }
  if (html.includes("<body")) {
    return html.replace("<body", `<head>${scrollStyle}</head><body`);
  }
  return scrollStyle + html;
}

export function renderLlmTrace(props: LlmTraceProps) {
  const isViewing = props.viewingSessionId != null;

  if (isViewing) {
    return html`
      <section class="card llm-trace-detail">
        <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
          <button type="button" class="btn btn--sm" @click=${props.onBack}>
            ← ${t("llmTraceBack")}
          </button>
          <span class="muted" style="font-size: 14px;">${props.viewingSessionId}</span>
        </div>
        ${props.viewLoading
          ? html`<div class="muted" style="padding: 24px; text-align: center;">${t("commonLoading")}</div>`
          : props.viewContent
            ? html`
                <div class="llm-trace-iframe-wrap">
                  <iframe
                    class="llm-trace-iframe"
                    srcdoc=${ensureTraceContentScrollable(props.viewContent)}
                    sandbox="allow-same-origin allow-scripts"
                    title=${props.viewingSessionId ?? "Trace"}
                  ></iframe>
                </div>
              `
            : html`<div class="callout danger">${props.error ?? t("commonNA")}</div>`}
      </section>
    `;
  }

  const entries = props.result?.entries ?? [];
  const filtered = filterEntries(entries, props.search);

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${t("navTitleLlmTrace")}</div>
          <div class="card-sub">${t("subtitleLlmTrace")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;">
            <button
              type="button"
              class="btn ${props.mode === "active" ? "primary" : ""}"
              style="padding: 6px 12px;"
              @click=${() => props.onModeChange("active")}
            >
              ${t("llmTraceModeActive")}
            </button>
            <button
              type="button"
              class="btn ${props.mode === "all" ? "primary" : ""}"
              style="padding: 6px 12px;"
              @click=${() => props.onModeChange("all")}
            >
              ${t("llmTraceModeAll")}
            </button>
          </div>
          <button
            type="button"
            class="btn ${props.enabled ? "btn-ok" : ""}"
            ?disabled=${props.saving}
            @click=${props.onToggleEnabled}
            title=${t("llmTraceToggleTooltip")}
          >
            ${props.enabled ? t("llmTraceActionDisable") : t("llmTraceActionEnable")}
          </button>
          <button class="btn primary" ?disabled=${props.loading} @click=${props.onRefresh}>
            ${props.loading ? t("commonLoading") : t("commonRefresh")}
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 16px; gap: 12px; align-items: center;">
        <div class="field" style="flex: 1; min-width: 200px;">
          <span>${t("llmTraceSearch")}</span>
          <span class="input"><input
            type="text"
            .value=${props.search}
            placeholder=${t("llmTraceSearchPlaceholder")}
            @input=${(e: Event) => props.onSearchChange((e.target as HTMLInputElement).value)}
          /></span>
        </div>
      </div>

      ${props.error ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>` : nothing}

      <div class="llm-trace-table mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${t("llmTraceSessionKey")}</div>
          <div>${t("llmTraceSessionId")}</div>
          <div>${t("llmTraceUpdatedAt")}</div>
          <div>${t("llmTraceFile")}</div>
          <div>${t("llmTraceFileSize")}</div>
          <div class="llm-trace-actions-col">${t("mcpTableActions")}</div>
        </div>
        ${
          filtered.length === 0
            ? html`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${props.loading ? t("commonLoading") : t("llmTraceNoEntries")}
                </div>
              `
            : filtered.map(
                (e) => html`
                  <div class="mcp-table-row table-row">
                    <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${e.sessionKey}>
                      ${e.sessionKey}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title=${e.sessionId}>
                      ${e.sessionId}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${formatUpdatedAt(e.updatedAt)}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px;">
                      ${e.file}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${formatFileSize(e.fileSize)}
                    </div>
                    <div class="mcp-table-cell llm-trace-actions-col row" style="gap: 6px; justify-content: flex-end;">
                      ${
                        e.file !== "-"
                          ? html`
                              <button
                                class="btn btn--sm"
                                @click=${() => props.onView(e.sessionId)}
                              >
                                ${t("llmTraceView")}
                              </button>
                              <button
                                class="btn btn--sm"
                                @click=${() => props.onDownload(e.sessionId)}
                              >
                                ${t("llmTraceDownload")}
                              </button>
                            `
                          : nothing
                      }
                    </div>
                  </div>
                `,
              )
        }
      </div>
    </section>
  `;
}
