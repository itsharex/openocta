import { html, nothing } from "lit";
import { t } from "../strings.js";
import type { ApprovalEntry, ApprovalsListResult } from "../controllers/approvals.ts";
import type { Tab } from "../navigation.ts";

export type ApprovalsProps = {
  loading: boolean;
  result: ApprovalsListResult | null;
  error: string | null;
  onRefresh: () => void;
  onApprove: (requestId: string, ttlSeconds?: number) => void;
  onDeny: (requestId: string, reason?: string) => void;
  pathForTab: (tab: Tab) => string;
};

function formatTime(ms: number | undefined): string {
  if (ms == null) return "—";
  const d = new Date(ms);
  return d.toLocaleString();
}

export function renderApprovals(props: ApprovalsProps) {
  const entries = props.result?.entries ?? [];
  const storePath = props.result?.storePath ?? "";

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${t("navTitleApprovals")}</div>
          <div class="card-sub">${t("subtitleApprovals")}</div>
        </div>
        <button class="btn primary" ?disabled=${props.loading} @click=${props.onRefresh}>
          ${props.loading ? t("commonLoading") : t("commonRefresh")}
        </button>
      </div>

      ${storePath ? html`<div class="muted" style="margin-top: 8px; font-size: 12px;">${storePath}</div>` : nothing}
      ${props.error ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>` : nothing}

      <div class="mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${t("approvalsId")}</div>
          <div>${t("approvalsSessionKey")}</div>
          <div>${t("approvalsSessionId")}</div>
          <div>${t("approvalsCommand")}</div>
          <div>${t("approvalsTimeout")}</div>
          <div>${t("approvalsTTL")}</div>
          <div>${t("approvalsStatus")}</div>
          <div>${t("mcpTableActions")}</div>
        </div>
        ${
          entries.length === 0
            ? html`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${props.loading ? t("commonLoading") : t("approvalsNoEntries")}
                </div>
              `
            : entries.map(
                (e: ApprovalEntry) => {
                  const canAct = e.status === "pending";
                  const sessionPath = e.sessionKey
                    ? `${props.pathForTab("sessions")}?key=${encodeURIComponent(e.sessionKey)}`
                    : "";
                  return html`
                    <div class="mcp-table-row table-row">
                      <div class="mcp-table-cell mono" style="font-size: 12px;">${e.id}</div>
                      <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 160px; overflow: hidden; text-overflow: ellipsis;" title=${e.sessionKey ?? ""}>${e.sessionKey ?? "—"}</div>
                      <div class="mcp-table-cell mono muted" style="font-size: 12px;">${e.sessionId}</div>
                      <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${e.command}>${e.command}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${formatTime(e.timeoutAt)}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${e.ttlSeconds ?? "—"}</div>
                      <div class="mcp-table-cell" style="font-size: 12px;">${e.status === "expired" ? t("approvalsExpired") : e.status === "pending" ? t("approvalsPending") : e.status}</div>
                      <div class="mcp-table-cell row" style="gap: 6px; justify-content: flex-end;">
                        ${sessionPath
                          ? html`<a class="btn btn--sm" href="${sessionPath}">${t("approvalsViewSession")}</a>`
                          : nothing}
                        ${canAct
                          ? html`
                              <button class="btn btn--sm btn-ok" @click=${() => props.onApprove(e.id, e.ttlSeconds)}>${t("approvalsApprove")}</button>
                              <button class="btn btn--sm" @click=${() => props.onDeny(e.id)}>${t("approvalsDeny")}</button>
                            `
                          : nothing}
                      </div>
                    </div>
                  `;
                },
              )
        }
      </div>
    </section>
  `;
}
