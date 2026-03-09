import { html, nothing } from "lit";
import { t } from "../strings.js";
import type { SandboxConfigForm } from "../controllers/sandbox.ts";
import type { ApprovalEntry, ApprovalsListResult } from "../controllers/approvals.ts";
import type { Tab } from "../navigation.ts";

export type SandboxProps = {
  sandbox: SandboxConfigForm | null;
  saving: boolean;
  onToggleEnabled: () => void;
  onPatch: (path: string[], value: unknown) => void;
  onSave: () => void;
  // Approval queue (embedded in sandbox page)
  approvalsLoading: boolean;
  approvalsResult: ApprovalsListResult | null;
  approvalsError: string | null;
  onApprovalsRefresh: () => void;
  onApprove: (requestId: string, ttlSeconds?: number) => void;
  onDeny: (requestId: string, reason?: string) => void;
  pathForTab: (tab: Tab) => string;
};

function ensureArray(arr: string[] | undefined): string[] {
  return Array.isArray(arr) ? arr : [];
}

function joinLines(arr: string[]): string {
  return ensureArray(arr).filter(Boolean).join("\n");
}

function splitLines(s: string): string[] {
  return (s || "")
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);
}

function formatApprovalTime(ms: number | undefined): string {
  if (ms == null) return "—";
  const d = new Date(ms);
  return d.toLocaleString();
}

export function renderSandbox(props: SandboxProps) {
  const s = props.sandbox ?? {};
  const enabled = s.enabled !== false;
  const allowedPaths = joinLines(ensureArray(s.allowedPaths));
  const networkAllow = joinLines(ensureArray(s.networkAllow));
  const hooks = s.hooks ?? {};
  const validator = s.validator ?? {};
  const banCommands = joinLines(ensureArray(validator.banCommands));
  const banArguments = joinLines(ensureArray(validator.banArguments));
  const banFragments = joinLines(ensureArray(validator.banFragments));
  const resourceLimit = s.resourceLimit ?? {};
  const maxCpuPercent = resourceLimit.maxCpuPercent ?? "";
  const maxMemoryBytes = resourceLimit.maxMemoryBytes ?? "";
  const maxDiskBytes = resourceLimit.maxDiskBytes ?? "";
  const secretPatterns = joinLines(ensureArray(validator.secretPatterns));

  const entries = props.approvalsResult?.entries ?? [];
  const storePath = props.approvalsResult?.storePath ?? "";

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${t("navTitleSandbox")}</div>
          <div class="card-sub">${t("subtitleSandbox")}</div>
        </div>
        <button
          type="button"
          class="btn ${enabled ? "btn-ok" : ""}"
          ?disabled=${props.saving}
          @click=${props.onToggleEnabled}
        >
          ${enabled ? t("sandboxActionDisable") : t("sandboxActionEnable")}
        </button>
      </div>

      <div class="sandbox-sections" style="margin-top: 20px;">
        <details class="sandbox-details" open>
          <summary class="sandbox-summary">${t("sandboxSectionConfig")}</summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="sandbox-form-center">
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${t("sandboxAllowedPaths")}</span>
                <textarea
                  rows="3"
                  .value=${allowedPaths}
                  placeholder="/tmp&#10;./workspace"
                  @input=${(e: Event) => {
                    const v = (e.target as HTMLTextAreaElement).value;
                    props.onPatch(["allowedPaths"], splitLines(v));
                  }}
                ></textarea>
              </div>
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${t("sandboxNetworkAllow")}</span>
                <textarea
                  rows="2"
                  .value=${networkAllow}
                  placeholder="localhost&#10;127.0.0.1&#10;*.anthropic.com"
                  @input=${(e: Event) => {
                    const v = (e.target as HTMLTextAreaElement).value;
                    props.onPatch(["networkAllow"], splitLines(v));
                  }}
                ></textarea>
              </div>

              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${t("sandboxResourceLimit")}</div>
                <div class="row" style="flex-wrap: wrap; gap: 12px;">
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${t("sandboxMaxCPUPercent")}</span>
                    <input
                      type="text"
                      min="0"
                      max="100"
                      step="1"
                      .value=${String(maxCpuPercent)}
                      placeholder="80"
                      @input=${(e: Event) => {
                        const raw = (e.target as HTMLInputElement).value.trim();
                        const v = raw === "" ? undefined : Number(raw);
                        props.onPatch(["resourceLimit", "maxCpuPercent"], Number.isNaN(v as number) ? undefined : v);
                      }}
                    />
                  </div>
                  <div class="field" style="flex: 1 1 220px; min-width: 0;">
                    <span style="font-size: 14px;">${t("sandboxMaxMemoryBytes")}</span>
                    <input
                      type="text"
                      .value=${String(maxMemoryBytes)}
                      placeholder="1G, 512M, 1024"
                      @input=${(e: Event) => {
                        const raw = (e.target as HTMLInputElement).value.trim();
                        props.onPatch(["resourceLimit", "maxMemoryBytes"], raw === "" ? undefined : raw);
                      }}
                    />
                  </div>
                  <div class="field" style="flex: 1 1 220px; min-width: 0;">
                    <span style="font-size: 14px;">${t("sandboxMaxDiskBytes")}</span>
                    <input
                      type="text"
                      .value=${String(maxDiskBytes)}
                      placeholder="10G, 100G, 10240"
                      @input=${(e: Event) => {
                        const raw = (e.target as HTMLInputElement).value.trim();
                        props.onPatch(["resourceLimit", "maxDiskBytes"], raw === "" ? undefined : raw);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${t("sandboxHooks")}</div>
                <div class="sandbox-hooks-grid">
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.beforeAgent !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "beforeAgent"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescBeforeAgent")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.beforeModel !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "beforeModel"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescBeforeModel")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.afterModel !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "afterModel"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescAfterModel")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.beforeTool !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "beforeTool"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescBeforeTool")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.afterTool !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "afterTool"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescAfterTool")}</span>
                  </label>
                  <label class="sandbox-hook-label" style="font-size: 14px;">
                    <input type="checkbox" ?checked=${hooks.afterAgent !== false} @change=${(e: Event) =>
                      props.onPatch(["hooks", "afterAgent"], (e.target as HTMLInputElement).checked)} />
                    <span>${t("sandboxHookDescAfterAgent")}</span>
                  </label>
                </div>
              </div>

              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${t("sandboxValidator")}</div>
                <div class="row" style="flex-direction: column; gap: 12px;">
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${t("sandboxBanCommands")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${banCommands}
                      placeholder="dd&#10;mkfs&#10;sudo"
                      @input=${(e: Event) => {
                        const v = (e.target as HTMLTextAreaElement).value;
                        props.onPatch(["validator", "banCommands"], splitLines(v));
                      }}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${t("sandboxBanArguments")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${banArguments}
                      placeholder="--no-preserve-root&#10;/dev/"
                      @input=${(e: Event) => {
                        const v = (e.target as HTMLTextAreaElement).value;
                        props.onPatch(["validator", "banArguments"], splitLines(v));
                      }}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${t("sandboxBanFragments")}</span>
                    <textarea
                      rows="2"
                      style="font-size: 14px;"
                      .value=${banFragments}
                      placeholder="rm -rf&#10;rm -r"
                      @input=${(e: Event) => {
                        const v = (e.target as HTMLTextAreaElement).value;
                        props.onPatch(["validator", "banFragments"], splitLines(v));
                      }}
                    ></textarea>
                  </div>
                  <div class="field" style="width: 100%;">
                    <span style="font-size: 14px;">${t("sandboxSecretPatterns")}</span>
                    <textarea
                      rows="3"
                      style="font-size: 14px; font-family: var(--mono);"
                      .value=${secretPatterns}
                      placeholder="sk-[a-zA-Z0-9]{48}&#10;ghp_[a-zA-Z0-9]{36}"
                      @input=${(e: Event) => {
                        const v = (e.target as HTMLTextAreaElement).value;
                        props.onPatch(["validator", "secretPatterns"], splitLines(v));
                      }}
                    ></textarea>
                    <div class="muted" style="font-size: 12px; margin-top: 4px;">${t("sandboxSecretPatternsHint")}</div>
                  </div>
                </div>
              </div>

              <div class="row" style="gap: 8px; margin-top: 16px;">
                <button type="button" class="btn primary" ?disabled=${props.saving} @click=${props.onSave}>
                  ${props.saving ? t("commonLoading") : t("commonSave")}
                </button>
              </div>
            </div>
          </div>
        </details>

        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">${t("sandboxSectionApprovals")}</summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
              <div class="muted" style="font-size: 13px;">${storePath || ""}</div>
              <button class="btn primary" ?disabled=${props.approvalsLoading} @click=${props.onApprovalsRefresh}>
                ${props.approvalsLoading ? t("commonLoading") : t("commonRefresh")}
              </button>
            </div>
            ${props.approvalsError ? html`<div class="callout danger" style="margin-bottom: 12px;">${props.approvalsError}</div>` : nothing}
            <div class="mcp-table table sandbox-approvals-table">
              <div class="mcp-table-head table-head sandbox-approvals-head">
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
                        ${props.approvalsLoading ? t("commonLoading") : t("approvalsNoEntries")}
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
                            <div class="mcp-table-cell mono">${e.id}</div>
                            <div class="mcp-table-cell mono muted" style="max-width: 160px; overflow: hidden; text-overflow: ellipsis;" title=${e.sessionKey ?? ""}>${e.sessionKey ?? "—"}</div>
                            <div class="mcp-table-cell mono muted">${e.sessionId}</div>
                            <div class="mcp-table-cell mono" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${e.command}>${e.command}</div>
                            <div class="mcp-table-cell muted">${formatApprovalTime(e.timeoutAt)}</div>
                            <div class="mcp-table-cell muted">${e.ttlSeconds ?? "—"}</div>
                            <div class="mcp-table-cell">${e.status === "expired" ? t("approvalsExpired") : e.status === "pending" ? t("approvalsPending") : e.status}</div>
                            <div class="mcp-table-cell row" style="gap: 6px; justify-content: flex-end;">
                              ${sessionPath ? html`<a class="btn btn--sm" href="${sessionPath}">${t("approvalsViewSession")}</a>` : nothing}
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
          </div>
        </details>
      </div>
    </section>
  `;
}
