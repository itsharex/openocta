import { html, nothing } from "lit";
import type { AppViewState } from "./app-view-state.ts";
import type { UsageState } from "./controllers/usage.ts";
import { parseAgentSessionKey } from "./routing/session-key.js";
import { refreshChatAvatar } from "./app-chat.ts";
import { renderChatControls, renderTab } from "./app-render.helpers.ts";
import { loadChannels } from "./controllers/channels.ts";
import { loadChatHistory } from "./controllers/chat.ts";
import { applyConfig, loadConfig, runUpdate, saveConfig, saveConfigPatch, updateConfigFormValue, removeConfigFormValue } from "./controllers/config.ts";
import {
  loadCronRuns,
  toggleCronJob,
  runCronJob,
  removeCronJob,
  addCronJob,
} from "./controllers/cron.ts";
import { loadDebug, callDebugMethod } from "./controllers/debug.ts";
import {
  approveDevicePairing,
  loadDevices,
  rejectDevicePairing,
  revokeDeviceToken,
  rotateDeviceToken,
} from "./controllers/devices.ts";
import {
  loadExecApprovals,
  removeExecApprovalsFormValue,
  saveExecApprovals,
  updateExecApprovalsFormValue,
} from "./controllers/exec-approvals.ts";
import { loadLogs } from "./controllers/logs.ts";
import { loadNodes } from "./controllers/nodes.ts";
import { createSession, deleteSession, deleteSessions, loadSessions, patchSession } from "./controllers/sessions.ts";
import {
  deleteSkill,
  loadSkillDoc,
  installSkill,
  loadSkills,
  saveSkillApiKey,
  updateSkillEdit,
  updateSkillEnabled,
  uploadSkill,
} from "./controllers/skills.ts";
import { loadUsage, loadSessionTimeSeries, loadSessionLogs } from "./controllers/usage.ts";
import { icons } from "./icons.ts";
import { normalizeBasePath, getTabGroups, iconForTab, pathForTab, subtitleForTab, titleForTab } from "./navigation.ts";

/** 从 session key 提取数字员工 ID，如 agent:main:employee:xxx:run:uuid -> xxx */
function extractEmployeeIdFromSessionKey(key: string): string | null {
  const lower = (key ?? "").toLowerCase();
  const empPrefix = "agent:main:employee:";
  const empDash = "agent:main:employee-";
  if (lower.startsWith(empPrefix)) {
    const rest = key.slice(empPrefix.length);
    const colon = rest.indexOf(":");
    return colon >= 0 ? rest.slice(0, colon) : rest;
  }
  if (lower.startsWith(empDash)) {
    return key.slice(empDash.length).split(/[:/-]/)[0] || null;
  }
  return null;
}

// Module-scope debounce for usage date changes (avoids type-unsafe hacks on state object)
let usageDateDebounceTimeout: number | null = null;
const debouncedLoadUsage = (state: UsageState) => {
  if (usageDateDebounceTimeout) {
    clearTimeout(usageDateDebounceTimeout);
  }
  usageDateDebounceTimeout = window.setTimeout(() => void loadUsage(state), 400);
};
import { renderDigitalEmployee, renderDigitalEmployeeCreateModal, renderDigitalEmployeeEditModal } from "./views/digital-employee.ts";
import {
  loadDigitalEmployees,
  createDigitalEmployee,
  updateDigitalEmployeeEnabled,
  deleteDigitalEmployee,
  copyDigitalEmployee,
  getDigitalEmployee,
  updateDigitalEmployee,
} from "./controllers/digital-employees.ts";
import { renderChannels } from "./views/channels.ts";
import { renderChat } from "./views/chat.ts";
import { renderConfig } from "./views/config.ts";
import { renderEnvVars } from "./views/env-vars.ts";
import { renderCronConfig, renderCronHistory } from "./views/cron.ts";
import { renderDebug } from "./views/debug.ts";
import { installFromSite } from "./controllers/remote-market.ts";
import { computeEmployeeMarketCategories, renderEmployeeMarket } from "./views/employee-market.ts";
import { renderExecApprovalPrompt } from "./views/exec-approval.ts";
import { renderGatewayUrlConfirmation } from "./views/gateway-url-confirmation.ts";
import { renderLogs } from "./views/logs.ts";
import { renderNodes } from "./views/nodes.ts";
import { renderOverview } from "./views/overview.ts";
import { renderSessions } from "./views/sessions.ts";
import { computeSkillLibraryCategories, renderSkillLibrary } from "./views/skill-library.ts";
import { computeToolLibraryCategories, renderToolLibrary } from "./views/tool-library.ts";
import { renderTutorials } from "./views/tutorials.ts";
import { requestDesktopUninstall } from "./controllers/desktop-uninstall.ts";
import { openExternalUrl } from "./open-external-url.ts";
import { renderAbout } from "./views/about.ts";
import { renderLlmTrace } from "./views/llm-trace.ts";
import { renderSecurity } from "./views/security.ts";
import { renderModels } from "./views/models.ts";
import { renderUsage } from "./views/usage.ts";
import {
  handleMcpAddServer,
  handleMcpAddClose,
  handleMcpAddNameChange,
  handleMcpAddFormPatch,
  handleMcpAddRawChange,
  handleMcpAddConnectionTypeChange,
  handleMcpAddEditModeChange,
  handleMcpAddSubmit,
  handleMcpDelete,
  handleMcpToggle,
  handleMcpSelect,
  handleMcpFormPatch,
  handleMcpRawChange,
  handleMcpEditConnectionTypeChange,
  handleMcpSave,
  handleMcpCancel,
} from "./app-mcp.ts";
import { renderMcpEditModal } from "./views/mcp.ts";
import { cloneConfigObject } from "./controllers/config/form-utils.ts";
import {
  handleLlmTraceRefresh,
  handleLlmTraceModeChange,
  handleLlmTraceSearchChange,
  handleLlmTraceToggleEnabled,
  handleLlmTraceView,
  handleLlmTraceBack,
  handleLlmTraceDownload,
} from "./app-llm-trace.ts";
import {
  syncSecurityFromConfig,
  handleSecurityPresetApply,
  handleSecurityPatch,
  handleSecuritySave,
} from "./app-security.ts";
import { getSecurityFromConfig } from "./controllers/security.ts";
import {
  loadApprovalsList,
  approveApproval,
  denyApproval,
  whitelistSessionApprovals,
} from "./controllers/approvals.ts";
import {
  handleModelsAddProvider,
  handleModelsAddProviderModalClose,
  handleModelsAddProviderFormChange,
  handleModelsAddProviderSubmit,
  handleModelsAddModel,
  handleModelsAddModelModalClose,
  handleModelsAddModelFormChange,
  handleModelsAddModelSubmit,
  handleModelsRemoveModel,
  handleModelsPatchModelEnv,
  handleModelsCancel,
  handleModelsPatch,
  handleModelsSave,
  handleModelsSelect,
  handleModelsRefresh,
  handleModelsCancelUse,
  handleModelsUseModel,
  handleModelsUseModelClick,
  handleModelsUseModelModalClose,
} from "./app-models.ts";
import { generateUUID } from "./uuid.ts";
import {
  fetchEduCategories,
  fetchEmployeeDetail,
  fetchEmployees,
  fetchMcpDetail,
  fetchMcps,
  fetchSkillDetail,
  fetchSkills,
} from "./controllers/remote-market.ts";

const AVATAR_DATA_RE = /^data:/i;
const AVATAR_HTTP_RE = /^https?:\/\//i;

function resolveDefaultModelRef(config: Record<string, unknown> | null | undefined): string | null {
  if (!config?.agents) return null;
  const agents = config.agents as Record<string, unknown>;
  const defaults = agents.defaults as Record<string, unknown> | undefined;
  if (!defaults?.model) return null;
  const model = defaults.model;
  if (typeof model === "string" && model) return model;
  if (model && typeof model === "object" && !Array.isArray(model)) {
    const primary = (model as Record<string, unknown>).primary;
    return typeof primary === "string" && primary ? primary : null;
  }
  return null;
}

function resolveAssistantAvatarUrl(state: AppViewState): string | undefined {
  const list = state.agentsList?.agents ?? [];
  const parsed = parseAgentSessionKey(state.sessionKey);
  const agentId = parsed?.agentId ?? state.agentsList?.defaultId ?? "main";
  const agent = list.find((entry) => entry.id === agentId);
  const identity = agent?.identity;
  const candidate = identity?.avatarUrl ?? identity?.avatar;
  if (!candidate) {
    return undefined;
  }
  if (AVATAR_DATA_RE.test(candidate) || AVATAR_HTTP_RE.test(candidate)) {
    return candidate;
  }
  return identity?.avatarUrl;
}

export function renderApp(state: AppViewState) {
  const presenceCount = state.presenceEntries.length;
  const sessionsCount = state.sessionsResult?.count ?? null;
  const cronNext = state.cronStatus?.nextWakeAtMs ?? null;
  const chatDisabledReason = state.connected ? null : "Disconnected from gateway.";
  const isChat = state.tab === "chat" || state.tab === "message";
  const chatFocus = isChat && (state.settings.chatFocusMode || state.onboarding);
  const showThinking = state.onboarding ? false : state.settings.chatShowThinking;
  const assistantAvatarUrl = resolveAssistantAvatarUrl(state);
  const chatAvatarUrl = state.chatAvatarUrl ?? assistantAvatarUrl ?? null;
  const configValue =
    state.configForm ?? (state.configSnapshot?.config as Record<string, unknown> | null);
  const basePath = normalizeBasePath(state.basePath ?? "");
  const isScheduledTasks =
    state.tab === "scheduledTasks" || state.tab === "cronHistory" || state.tab === "cron";
  const isCatalogArea =
    state.tab === "employeeMarket" ||
    state.tab === "skillLibrary" ||
    state.tab === "toolLibrary" ||
    state.tab === "tutorials";
  const isConfigArea =
    state.tab === "config" ||
    state.tab === "envVars" ||
    state.tab === "debug" ||
    state.tab === "logs" ||
    state.tab === "models" ||
    state.tab === "overview" ||
    state.tab === "channels" ||
    state.tab === "sessions" ||
    state.tab === "usage" ||
    state.tab === "sandbox" ||
    state.tab === "llmTrace" ||
    state.tab === "aboutUs";
  return html`
    <div class="shell ${isChat ? "shell--chat" : ""} ${isCatalogArea ? "shell--catalog" : ""} ${state.tab === "tutorials" ? "shell--tutorials" : ""} ${chatFocus ? "shell--chat-focus" : ""} ${state.settings.navCollapsed ? "shell--nav-collapsed" : ""} ${state.onboarding ? "shell--onboarding" : ""}">
      <header class="topbar">
        <div class="topbar-left">
          <div class="brand">
            <div class="brand-logo">
              <img
                src=${basePath ? `${basePath}/favicon.svg` : "/favicon.svg"}
                alt="OpenOcta"
              />
            </div>
          </div>
        </div>
        <nav class="top-tabs" aria-label="Primary navigation">
          ${[
            { tab: "message", label: "消息" },
            { tab: "scheduledTasks", label: "定时任务" },
            { tab: "employeeMarket", label: "员工市场" },
            { tab: "skillLibrary", label: "技能库" },
            { tab: "toolLibrary", label: "工具库" },
            { tab: "tutorials", label: "教程" },
            { tab: "community", label: "社区", href: "https://community.databuff.com/" },
            { tab: "config", label: "配置" },
          ].map((item) => {
            const tab = (item as any).tab;
            const iconName = tab ? iconForTab(tab) : "globe";
            const iconEl = html`<span class="nav-item__icon" aria-hidden="true">${icons[iconName]}</span>`;
            if ((item as any).href) {
              const extHref = String((item as any).href);
              return html`
                <button
                  type="button"
                  class="top-tab top-tab--link"
                  @click=${() =>
                    void openExternalUrl(extHref, {
                      gatewayHost: state.settings.gatewayUrl,
                      gatewayToken: state.settings.token,
                    })}
                >
                  ${iconEl}
                  ${(item as any).label}
                </button>
              `;
            }
            const active =
              tab === "scheduledTasks"
                ? isScheduledTasks
                : tab === "config"
                  ? isConfigArea
                  : state.tab === tab;
            return html`
              <button
                class="top-tab ${active ? "top-tab--active" : ""}"
                @click=${() => state.setTab((tab === "config" ? "overview" : tab)!)}
                type="button"
              >
                ${iconEl}
                ${(item as any).label}
              </button>
            `;
          })}
        </nav>
        <div class="topbar-status">
          <div class="pill pill--version">
            <span>Version</span>
            <span>${state.configSchemaVersion ?? "---"}</span>
          </div>
          <div class="pill">
            <button
              type="button"
              title="GitHub 仓库（新窗口打开）"
              class="topbar-link"
              @click=${() =>
                void openExternalUrl("https://github.com/openocta/openocta.git", {
                  gatewayHost: state.settings.gatewayUrl,
                  gatewayToken: state.settings.token,
                })}
            >
              <span class="topbar-link__icon" aria-hidden="true">${icons.github}</span>
              <span>GitHub</span>
            </button>
          </div>
          <div class="pill">
            <button
              type="button"
              title="OpenOcta 官网（新窗口打开）"
              class="topbar-link"
              @click=${() =>
                void openExternalUrl("https://www.openocta.com/", {
                  gatewayHost: state.settings.gatewayUrl,
                  gatewayToken: state.settings.token,
                })}
            >
              <img
                src=${basePath ? `${basePath}/favicon.ico` : "/favicon.ico"}
                alt=""
                class="topbar-link__img"
                width="16"
                height="16"
              />
              <span>官网</span>
            </button>
          </div>
          <div class="pill">
            <span class="statusDot ${state.connected ? "ok" : ""}"></span>
            <span>Health</span>
            <span>${state.connected ? "OK" : "Offline"}</span>
          </div>
        </div>
      </header>
      ${state.tab === "tutorials"
        ? nothing
        : html`<aside class="nav ${isCatalogArea ? "nav--catalog" : ""} ${state.settings.navCollapsed ? "nav--collapsed" : ""}">
        ${
          state.tab === "message"
            ? html`
                <div class="session-sidebar">
                  <button
                    class="session-new"
                    type="button"
                    @click=${async () => {
                      const res = await createSession(state);
                      if (res?.key) {
                        state.sessionKey = res.key;
                        state.chatMessage = "";
                        state.chatAttachments = [];
                        state.resetToolStream();
                        state.applySettings({
                          ...state.settings,
                          sessionKey: res.key,
                          lastActiveSessionKey: res.key,
                        });
                        void state.loadAssistantIdentity();
                        await Promise.all([loadChatHistory(state), refreshChatAvatar(state)]);
                        /* 仅展示默认空页面，不自动发送问候；用户输入并发送后再开始会话 */
                      }
                    }}
                  >
                    <span class="session-new__icon" aria-hidden="true">${icons.plus}</span>
                    <span>新消息</span>
                  </button>

                  <div class="session-list">
                    ${
                      (state.sessionsResult?.sessions ?? []).map((s) => {
                        const key = (s as any).key ?? (s as any).sessionId ?? "";
                        const isCustom = key.toLowerCase().startsWith("custom:");
                        const employeeId = isCustom ? null : extractEmployeeIdFromSessionKey(key);
                        const emp = employeeId
                          ? state.digitalEmployees?.find((e) => e.id === employeeId)
                          : null;
                        const displayName =
                          emp?.name ||
                          ((s as any).origin && (((s as any).origin.label || (s as any).origin.from || (s as any).origin.to) as string)) ||
                          (s as any).label ||
                          (s as any).displayName ||
                          (s as any).sessionId ||
                          key ||
                          "会话";
                        const subtitle = (s as any).lastMessagePreview?.trim() || "";
                        const active = key && state.sessionKey === key;
                        const canEdit = isCustom;
                        const isEditing = canEdit && state.sessionEditingKey === key;
                        const saveEdit = async (newLabel: string) => {
                          if (!key || !newLabel.trim()) {
                            state.sessionEditingKey = null;
                            return;
                          }
                          await patchSession(state, key, { label: newLabel.trim() });
                          state.sessionEditingKey = null;
                        };
                        return html`
                          <div
                            class="session-item ${active ? "session-item--active" : ""} ${canEdit ? "session-item--editable" : ""}"
                            role="button"
                            tabindex="0"
                            @click=${async (e: Event) => {
                              const target = e.target as HTMLElement;
                              if (target.closest(".session-item__edit") || target.closest("input")) return;
                              if (!key) return;
                              state.sessionKey = key;
                              state.chatMessage = "";
                              state.resetToolStream();
                              state.applySettings({
                                ...state.settings,
                                sessionKey: key,
                                lastActiveSessionKey: key,
                              });
                              await Promise.all([loadChatHistory(state), refreshChatAvatar(state)]);
                            }}
                            @dblclick=${(e: Event) => {
                              if (!canEdit) return;
                              e.stopPropagation();
                              state.sessionEditingKey = key;
                            }}
                            @keydown=${(e: KeyboardEvent) => {
                              if (e.key === "Enter" && !isEditing) {
                                e.preventDefault();
                                (e.currentTarget as HTMLElement).click();
                              }
                            }}
                          >
                            <span class="session-item__icon" aria-hidden="true">
                              ${emp
                                ? html`<span class="session-item__icon-emp">${(emp as any).name?.slice(0, 1) || "?"}</span>`
                                : html`<span class="session-item__icon-default">${icons.messageSquare}</span>`}
                            </span>
                            <div class="session-item__body">
                              ${isEditing
                                ? html`
                                    <input
                                      class="session-item__input"
                                      type="text"
                                      .value=${displayName}
                                      @blur=${(e: Event) => saveEdit((e.target as HTMLInputElement).value)}
                                      @keydown=${(e: KeyboardEvent) => {
                                        if (e.key === "Enter") {
                                          e.preventDefault();
                                          saveEdit((e.target as HTMLInputElement).value);
                                        }
                                        if (e.key === "Escape") {
                                          state.sessionEditingKey = null;
                                        }
                                      }}
                                      @click=${(e: Event) => e.stopPropagation()}
                                    />
                                  `
                                : html`<span class="session-item__text">${displayName}</span>`}
                              ${!isEditing && subtitle ? html`<span class="session-item__sub muted">${subtitle}</span>` : nothing}
                            </div>
                          </div>
                        `;
                      })
                    }
                  </div>
                </div>
              `
            : isScheduledTasks
              ? html`
                  <div class="nav-group">
                    <button class="nav-label nav-label--static" type="button">
                      <span class="nav-label__text">定时任务</span>
                    </button>
                    <div class="nav-group__items">
                      ${renderTab(state, "scheduledTasks")}
                      ${renderTab(state, "cronHistory")}
                    </div>
                  </div>
                `
              : isConfigArea
                ? html`
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">控制</span>
                      </button>
                      <div class="nav-group__items">
                        ${renderTab(state, "overview")}
                        ${renderTab(state, "channels")}
                        ${renderTab(state, "sessions")}
                        ${renderTab(state, "usage")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">Agent</span>
                      </button>
                      <div class="nav-group__items">
                        ${renderTab(state, "models")}
                        ${renderTab(state, "sandbox")}
                        ${renderTab(state, "llmTrace")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">配置</span>
                      </button>
                      <div class="nav-group__items">
                        ${renderTab(state, "config")}
                        ${renderTab(state, "envVars")}
                        ${renderTab(state, "logs")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">资源</span>
                      </button>
                      <div class="nav-group__items">
                        <button
                          type="button"
                          class="nav-item"
                          title="在线文档（新窗口打开）"
                          @click=${() =>
                            void openExternalUrl("https://www.openocta.com/docs", {
                              gatewayHost: state.settings.gatewayUrl,
                              gatewayToken: state.settings.token,
                            })}
                        >
                          <span class="nav-item__icon" aria-hidden="true">${icons.book}</span>
                          <span class="nav-item__text">在线文档</span>
                        </button>
                        ${renderTab(state, "aboutUs")}
                      </div>
                    </div>
                  `
              : state.tab === "employeeMarket"
                ? (() => {
                    const { orderedCategories, counts } = computeEmployeeMarketCategories(
                      state.employeeMarketItems,
                      state.employeeMarketQuery
                    );
                    const effectiveCategory = (state.employeeMarketCategory ?? "").trim() || "__all__";
                    return html`
                      <div class="nav-group">
                        <div class="nav-group__items">
                          <div class="emp-categories">
                          ${orderedCategories.map((catKey) => {
                            const label = catKey === "__all__" ? "全部" : catKey;
                            const active = effectiveCategory === catKey;
                            const count = counts.get(catKey) ?? 0;
                            return html`
                              <button
                                class="emp-cat ${active ? "active" : ""}"
                                type="button"
                                ?disabled=${state.employeeMarketLoading}
                                @click=${() => (state.employeeMarketCategory = catKey)}
                              >
                                <span class="emp-cat__name">${label}</span>
                                <span class="emp-cat__count">${count}</span>
                              </button>
                            `;
                          })}
                          </div>
                        </div>
                      </div>
                    `;
                  })()
                : state.tab === "skillLibrary"
                  ? (() => {
                      const { orderedCategories, counts } = computeSkillLibraryCategories(
                        state.skillLibraryItems,
                        state.skillLibraryQuery,
                        state.skillLibraryStatus ?? ""
                      );
                      const effectiveCategory = (state.skillLibraryCategory ?? "").trim() || "__all__";
                      return html`
                        <div class="nav-group">
                          <div class="nav-group__items">
                            <div class="emp-categories">
                            ${orderedCategories.map((catKey) => {
                              const label = catKey === "__all__" ? "全部" : catKey;
                              const active = effectiveCategory === catKey;
                              const count = counts.get(catKey) ?? 0;
                              return html`
                                <button
                                  class="emp-cat ${active ? "active" : ""}"
                                  type="button"
                                  ?disabled=${state.skillLibraryLoading}
                                  @click=${() => (state.skillLibraryCategory = catKey)}
                                >
                                  <span class="emp-cat__name">${label}</span>
                                  <span class="emp-cat__count">${count}</span>
                                </button>
                              `;
                            })}
                            </div>
                          </div>
                        </div>
                      `;
                    })()
                    : state.tab === "toolLibrary"
                    ? (() => {
                        const { orderedCategories, counts } = computeToolLibraryCategories(
                          state.toolLibraryItems,
                          state.toolLibraryQuery
                        );
                        const effectiveCategory = (state.toolLibraryCategory ?? "").trim() || "__all__";
                        return html`
                          <div class="nav-group">
                            <div class="nav-group__items">
                              <div class="emp-categories">
                              ${orderedCategories.map((catKey) => {
                                const label = catKey === "__all__" ? "全部" : catKey;
                                const active = effectiveCategory === catKey;
                                const count = counts.get(catKey) ?? 0;
                                return html`
                                  <button
                                    class="emp-cat ${active ? "active" : ""}"
                                    type="button"
                                    ?disabled=${state.toolLibraryLoading}
                                    @click=${() => (state.toolLibraryCategory = catKey)}
                                  >
                                    <span class="emp-cat__name">${label}</span>
                                    <span class="emp-cat__count">${count}</span>
                                  </button>
                                `;
                              })}
                              </div>
                            </div>
                          </div>
                        `;
                      })()
                    : state.tab === "tutorials"
                      ? html`<div class="nav-empty"></div>`
                      : html`<div class="nav-empty"></div>`
        }
      </aside>`}
      <main class="content ${isChat ? "content--chat" : ""} ${isCatalogArea ? "content--catalog" : ""} ${state.tab === "tutorials" ? "content--tutorials" : ""} ${state.tab === "llmTrace" && state.llmTraceViewingSessionId != null ? "content--llm-trace-detail" : ""}">
        ${isCatalogArea
          ? nothing
          : html`
              <section class="content-header">
                <div>
                  ${state.tab === "usage" ? nothing : html`<div class="page-title">${titleForTab(state.tab)}</div>`}
                </div>
                <div class="page-meta">
                  ${state.lastError ? html`<div class="pill danger">${state.lastError}</div>` : nothing}
                  ${isChat ? renderChatControls(state) : nothing}
                </div>
              </section>
            `}

        ${
          state.tab === "overview"
            ? renderOverview({
                connected: state.connected,
                hello: state.hello,
                settings: state.settings,
                password: state.password,
                lastError: state.lastError,
                presenceCount,
                sessionsCount,
                cronEnabled: state.cronStatus?.enabled ?? null,
                cronNext,
                lastChannelsRefresh: state.channelsLastSuccess,
                onSettingsChange: (next) => state.applySettings(next),
                onPasswordChange: (next) => (state.password = next),
                onSessionKeyChange: (next) => {
                  state.sessionKey = next;
                  state.chatMessage = "";
                  state.resetToolStream();
                  state.applySettings({
                    ...state.settings,
                    sessionKey: next,
                    lastActiveSessionKey: next,
                  });
                  void state.loadAssistantIdentity();
                },
                onConnect: () => state.connect(),
                onRefresh: () => state.loadOverview(),
              })
            : nothing
        }

        ${
          state.tab === "channels"
            ? renderChannels({
                connected: state.connected,
                loading: state.channelsLoading,
                snapshot: state.channelsSnapshot,
                lastError: state.channelsError,
                lastSuccessAt: state.channelsLastSuccess,
                whatsappMessage: state.whatsappLoginMessage,
                whatsappQrDataUrl: state.whatsappLoginQrDataUrl,
                whatsappConnected: state.whatsappLoginConnected,
                whatsappBusy: state.whatsappBusy,
                weworkQrModalOpen: state.weworkQrModalOpen,
                weworkQrModalLoading: state.weworkQrModalLoading,
                weworkQrModalPolling: state.weworkQrModalPolling,
                weworkQrModalSuccess: state.weworkQrModalSuccess,
                weworkQrModalError: state.weworkQrModalError,
                weworkQrModalReplaceWarn: state.weworkQrModalReplaceWarn,
                weworkQrModalAuthUrl: state.weworkQrModalAuthUrl,
                weworkQrModalGenPageUrl: state.weworkQrModalGenPageUrl,
                configSchema: state.configSchema,
                configSchemaLoading: state.configSchemaLoading,
                configForm: state.configForm,
                configUiHints: state.configUiHints,
                configSaving: state.configSaving,
                configFormDirty: state.configFormDirty,
                selectedChannelId: state.channelsSelectedChannelId,
                nostrProfileFormState: state.nostrProfileFormState,
                nostrProfileAccountId: state.nostrProfileAccountId,
                onRefresh: (probe) => loadChannels(state, probe),
                onChannelSelect: (channelId) => {
                  state.channelsSelectedChannelId = channelId;
                },
                onWhatsAppStart: (force) => state.handleWhatsAppStart(force),
                onWhatsAppWait: () => state.handleWhatsAppWait(),
                onWhatsAppLogout: () => state.handleWhatsAppLogout(),
                onWeWorkQrStart: () => state.handleWeWorkQrStart(),
                onWeWorkQrModalClose: () => state.handleWeWorkQrModalClose(),
                onConfigPatch: (path, value) => updateConfigFormValue(state, path, value),
                onConfigSave: () => state.handleChannelConfigSave(),
                onConfigReload: () => state.handleChannelConfigReload(),
                onNostrProfileEdit: (accountId, profile) =>
                  state.handleNostrProfileEdit(accountId, profile),
                onNostrProfileCancel: () => state.handleNostrProfileCancel(),
                onNostrProfileFieldChange: (field, value) =>
                  state.handleNostrProfileFieldChange(field, value),
                onNostrProfileSave: () => state.handleNostrProfileSave(),
                onNostrProfileImport: () => state.handleNostrProfileImport(),
                onNostrProfileToggleAdvanced: () => state.handleNostrProfileToggleAdvanced(),
              })
            : nothing
        }

        ${
          state.tab === "sessions"
            ? renderSessions({
                loading: state.sessionsLoading,
                result: state.sessionsResult,
                error: state.sessionsError,
                activeMinutes: state.sessionsFilterActive,
                limit: state.sessionsFilterLimit,
                includeGlobal: state.sessionsIncludeGlobal,
                includeUnknown: state.sessionsIncludeUnknown,
                basePath: state.basePath,
                bulkMode: state.sessionsBulkMode,
                selectedKeys: state.sessionsSelectedKeys,
                onFiltersChange: (next) => {
                  state.sessionsFilterActive = next.activeMinutes;
                  state.sessionsFilterLimit = next.limit;
                  state.sessionsIncludeGlobal = next.includeGlobal;
                  state.sessionsIncludeUnknown = next.includeUnknown;
                },
                onRefresh: () => loadSessions(state),
                onPatch: (key, patch) => patchSession(state, key, patch),
                onDelete: (key) => deleteSession(state, key),
                onBulkModeToggle: () => {
                  const next = !state.sessionsBulkMode;
                  state.sessionsBulkMode = next;
                  if (!next) {
                    state.sessionsSelectedKeys = [];
                  }
                },
                onSelectionChange: (key, selected) => {
                  if (!key || key === "agent.main.main") {
                    return;
                  }
                  if (selected) {
                    if (!state.sessionsSelectedKeys.includes(key)) {
                      state.sessionsSelectedKeys = [...state.sessionsSelectedKeys, key];
                    }
                  } else {
                    state.sessionsSelectedKeys = state.sessionsSelectedKeys.filter(
                      (entry: string) => entry !== key,
                    );
                  }
                },
                onSelectAll: (keys) => {
                  const safeKeys = keys.filter((key) => key && key !== "agent.main.main");
                  state.sessionsSelectedKeys = Array.from(new Set(safeKeys));
                },
                onClearSelection: () => {
                  state.sessionsSelectedKeys = [];
                },
                onBulkDelete: async (keys) => {
                  const safeKeys = keys.filter((key) => key && key !== "agent.main.main");
                  if (safeKeys.length === 0) {
                    return;
                  }
                  await deleteSessions(state, safeKeys);
                  state.sessionsSelectedKeys = [];
                  state.sessionsBulkMode = false;
                },
              })
            : nothing
        }

        ${
          state.tab === "usage"
            ? renderUsage({
                loading: state.usageLoading,
                error: state.usageError,
                startDate: state.usageStartDate,
                endDate: state.usageEndDate,
                sessions: state.usageResult?.sessions ?? [],
                sessionsLimitReached: (state.usageResult?.sessions?.length ?? 0) >= 1000,
                totals: state.usageResult?.totals ?? null,
                aggregates: state.usageResult?.aggregates ?? null,
                costDaily: state.usageCostSummary?.daily ?? [],
                selectedSessions: state.usageSelectedSessions,
                selectedDays: state.usageSelectedDays,
                selectedHours: state.usageSelectedHours,
                chartMode: state.usageChartMode,
                dailyChartMode: state.usageDailyChartMode,
                timeSeriesMode: state.usageTimeSeriesMode,
                timeSeriesBreakdownMode: state.usageTimeSeriesBreakdownMode,
                timeSeries: state.usageTimeSeries,
                timeSeriesLoading: state.usageTimeSeriesLoading,
                sessionLogs: state.usageSessionLogs,
                sessionLogsLoading: state.usageSessionLogsLoading,
                sessionLogsExpanded: state.usageSessionLogsExpanded,
                logFilterRoles: state.usageLogFilterRoles,
                logFilterTools: state.usageLogFilterTools,
                logFilterHasTools: state.usageLogFilterHasTools,
                logFilterQuery: state.usageLogFilterQuery,
                query: state.usageQuery,
                queryDraft: state.usageQueryDraft,
                sessionSort: state.usageSessionSort,
                sessionSortDir: state.usageSessionSortDir,
                recentSessions: state.usageRecentSessions,
                sessionsTab: state.usageSessionsTab,
                visibleColumns:
                  state.usageVisibleColumns as import("./views/usage.ts").UsageColumnId[],
                timeZone: state.usageTimeZone,
                contextExpanded: state.usageContextExpanded,
                headerPinned: state.usageHeaderPinned,
                onStartDateChange: (date) => {
                  state.usageStartDate = date;
                  state.usageSelectedDays = [];
                  state.usageSelectedHours = [];
                  state.usageSelectedSessions = [];
                  debouncedLoadUsage(state);
                },
                onEndDateChange: (date) => {
                  state.usageEndDate = date;
                  state.usageSelectedDays = [];
                  state.usageSelectedHours = [];
                  state.usageSelectedSessions = [];
                  debouncedLoadUsage(state);
                },
                onRefresh: () => loadUsage(state),
                onTimeZoneChange: (zone) => {
                  state.usageTimeZone = zone;
                },
                onToggleContextExpanded: () => {
                  state.usageContextExpanded = !state.usageContextExpanded;
                },
                onToggleSessionLogsExpanded: () => {
                  state.usageSessionLogsExpanded = !state.usageSessionLogsExpanded;
                },
                onLogFilterRolesChange: (next) => {
                  state.usageLogFilterRoles = next;
                },
                onLogFilterToolsChange: (next) => {
                  state.usageLogFilterTools = next;
                },
                onLogFilterHasToolsChange: (next) => {
                  state.usageLogFilterHasTools = next;
                },
                onLogFilterQueryChange: (next) => {
                  state.usageLogFilterQuery = next;
                },
                onLogFilterClear: () => {
                  state.usageLogFilterRoles = [];
                  state.usageLogFilterTools = [];
                  state.usageLogFilterHasTools = false;
                  state.usageLogFilterQuery = "";
                },
                onToggleHeaderPinned: () => {
                  state.usageHeaderPinned = !state.usageHeaderPinned;
                },
                onSelectHour: (hour, shiftKey) => {
                  if (shiftKey && state.usageSelectedHours.length > 0) {
                    const allHours = Array.from({ length: 24 }, (_, i) => i);
                    const lastSelected =
                      state.usageSelectedHours[state.usageSelectedHours.length - 1];
                    const lastIdx = allHours.indexOf(lastSelected);
                    const thisIdx = allHours.indexOf(hour);
                    if (lastIdx !== -1 && thisIdx !== -1) {
                      const [start, end] =
                        lastIdx < thisIdx ? [lastIdx, thisIdx] : [thisIdx, lastIdx];
                      const range = allHours.slice(start, end + 1);
                      state.usageSelectedHours = [
                        ...new Set([...state.usageSelectedHours, ...range]),
                      ];
                    }
                  } else {
                    if (state.usageSelectedHours.includes(hour)) {
                      state.usageSelectedHours = state.usageSelectedHours.filter((h) => h !== hour);
                    } else {
                      state.usageSelectedHours = [...state.usageSelectedHours, hour];
                    }
                  }
                },
                onQueryDraftChange: (query) => {
                  state.usageQueryDraft = query;
                  if (state.usageQueryDebounceTimer) {
                    window.clearTimeout(state.usageQueryDebounceTimer);
                  }
                  state.usageQueryDebounceTimer = window.setTimeout(() => {
                    state.usageQuery = state.usageQueryDraft;
                    state.usageQueryDebounceTimer = null;
                  }, 250);
                },
                onApplyQuery: () => {
                  if (state.usageQueryDebounceTimer) {
                    window.clearTimeout(state.usageQueryDebounceTimer);
                    state.usageQueryDebounceTimer = null;
                  }
                  state.usageQuery = state.usageQueryDraft;
                },
                onClearQuery: () => {
                  if (state.usageQueryDebounceTimer) {
                    window.clearTimeout(state.usageQueryDebounceTimer);
                    state.usageQueryDebounceTimer = null;
                  }
                  state.usageQueryDraft = "";
                  state.usageQuery = "";
                },
                onSessionSortChange: (sort) => {
                  state.usageSessionSort = sort;
                },
                onSessionSortDirChange: (dir) => {
                  state.usageSessionSortDir = dir;
                },
                onSessionsTabChange: (tab) => {
                  state.usageSessionsTab = tab;
                },
                onToggleColumn: (column) => {
                  if (state.usageVisibleColumns.includes(column)) {
                    state.usageVisibleColumns = state.usageVisibleColumns.filter(
                      (entry) => entry !== column,
                    );
                  } else {
                    state.usageVisibleColumns = [...state.usageVisibleColumns, column];
                  }
                },
                onSelectSession: (key, shiftKey) => {
                  state.usageTimeSeries = null;
                  state.usageSessionLogs = null;
                  state.usageRecentSessions = [
                    key,
                    ...state.usageRecentSessions.filter((entry) => entry !== key),
                  ].slice(0, 8);

                  if (shiftKey && state.usageSelectedSessions.length > 0) {
                    // Shift-click: select range from last selected to this session
                    // Sort sessions same way as displayed (by tokens or cost descending)
                    const isTokenMode = state.usageChartMode === "tokens";
                    const sortedSessions = [...(state.usageResult?.sessions ?? [])].toSorted(
                      (a, b) => {
                        const valA = isTokenMode
                          ? (a.usage?.totalTokens ?? 0)
                          : (a.usage?.totalCost ?? 0);
                        const valB = isTokenMode
                          ? (b.usage?.totalTokens ?? 0)
                          : (b.usage?.totalCost ?? 0);
                        return valB - valA;
                      },
                    );
                    const allKeys = sortedSessions.map((s) => s.key);
                    const lastSelected =
                      state.usageSelectedSessions[state.usageSelectedSessions.length - 1];
                    const lastIdx = allKeys.indexOf(lastSelected);
                    const thisIdx = allKeys.indexOf(key);
                    if (lastIdx !== -1 && thisIdx !== -1) {
                      const [start, end] =
                        lastIdx < thisIdx ? [lastIdx, thisIdx] : [thisIdx, lastIdx];
                      const range = allKeys.slice(start, end + 1);
                      const newSelection = [...new Set([...state.usageSelectedSessions, ...range])];
                      state.usageSelectedSessions = newSelection;
                    }
                  } else {
                    // Regular click: focus a single session (so details always open).
                    // Click the focused session again to clear selection.
                    if (
                      state.usageSelectedSessions.length === 1 &&
                      state.usageSelectedSessions[0] === key
                    ) {
                      state.usageSelectedSessions = [];
                    } else {
                      state.usageSelectedSessions = [key];
                    }
                  }

                  // Load timeseries/logs only if exactly one session selected
                  if (state.usageSelectedSessions.length === 1) {
                    void loadSessionTimeSeries(state, state.usageSelectedSessions[0]);
                    void loadSessionLogs(state, state.usageSelectedSessions[0]);
                  }
                },
                onSelectDay: (day, shiftKey) => {
                  if (shiftKey && state.usageSelectedDays.length > 0) {
                    // Shift-click: select range from last selected to this day
                    const allDays = (state.usageCostSummary?.daily ?? []).map((d) => d.date);
                    const lastSelected =
                      state.usageSelectedDays[state.usageSelectedDays.length - 1];
                    const lastIdx = allDays.indexOf(lastSelected);
                    const thisIdx = allDays.indexOf(day);
                    if (lastIdx !== -1 && thisIdx !== -1) {
                      const [start, end] =
                        lastIdx < thisIdx ? [lastIdx, thisIdx] : [thisIdx, lastIdx];
                      const range = allDays.slice(start, end + 1);
                      // Merge with existing selection
                      const newSelection = [...new Set([...state.usageSelectedDays, ...range])];
                      state.usageSelectedDays = newSelection;
                    }
                  } else {
                    // Regular click: toggle single day
                    if (state.usageSelectedDays.includes(day)) {
                      state.usageSelectedDays = state.usageSelectedDays.filter((d) => d !== day);
                    } else {
                      state.usageSelectedDays = [day];
                    }
                  }
                },
                onChartModeChange: (mode) => {
                  state.usageChartMode = mode;
                },
                onDailyChartModeChange: (mode) => {
                  state.usageDailyChartMode = mode;
                },
                onTimeSeriesModeChange: (mode) => {
                  state.usageTimeSeriesMode = mode;
                },
                onTimeSeriesBreakdownChange: (mode) => {
                  state.usageTimeSeriesBreakdownMode = mode;
                },
                onClearDays: () => {
                  state.usageSelectedDays = [];
                },
                onClearHours: () => {
                  state.usageSelectedHours = [];
                },
                onClearSessions: () => {
                  state.usageSelectedSessions = [];
                  state.usageTimeSeries = null;
                  state.usageSessionLogs = null;
                },
                onClearFilters: () => {
                  state.usageSelectedDays = [];
                  state.usageSelectedHours = [];
                  state.usageSelectedSessions = [];
                  state.usageTimeSeries = null;
                  state.usageSessionLogs = null;
                },
              })
            : nothing
        }

        ${
          state.tab === "cron" || state.tab === "scheduledTasks"
            ? renderCronConfig({
                basePath: state.basePath,
                loading: state.cronLoading,
                status: state.cronStatus,
                jobs: state.cronJobs,
                error: state.cronError,
                busy: state.cronBusy,
                form: state.cronForm,
                channels: state.channelsSnapshot?.channelMeta?.length
                  ? state.channelsSnapshot.channelMeta.map((entry) => entry.id)
                  : (state.channelsSnapshot?.channelOrder ?? []),
                channelLabels: state.channelsSnapshot?.channelLabels ?? {},
                channelMeta: state.channelsSnapshot?.channelMeta ?? [],
                runsJobId: state.cronRunsJobId,
                runs: state.cronRuns,
                onFormChange: (patch) => (state.cronForm = { ...state.cronForm, ...patch }),
                onRefresh: () => state.loadCron(),
                onAdd: () => addCronJob(state),
                onToggle: (job, enabled) => toggleCronJob(state, job, enabled),
                onRun: (job) => runCronJob(state, job),
                onRemove: (job) => removeCronJob(state, job),
                onLoadRuns: (jobId) => loadCronRuns(state, jobId),
                onShowHistory: (jobId) => {
                  state.setTab("cronHistory");
                  void loadCronRuns(state, jobId);
                },
              })
            : nothing
        }

        ${
          state.tab === "cronHistory"
            ? renderCronHistory({
                basePath: state.basePath,
                loading: state.cronLoading,
                status: state.cronStatus,
                jobs: state.cronJobs,
                error: state.cronError,
                busy: state.cronBusy,
                form: state.cronForm,
                channels: state.channelsSnapshot?.channelMeta?.length
                  ? state.channelsSnapshot.channelMeta.map((entry) => entry.id)
                  : (state.channelsSnapshot?.channelOrder ?? []),
                channelLabels: state.channelsSnapshot?.channelLabels ?? {},
                channelMeta: state.channelsSnapshot?.channelMeta ?? [],
                runsJobId: state.cronRunsJobId,
                runs: state.cronRuns,
                onFormChange: (patch) => (state.cronForm = { ...state.cronForm, ...patch }),
                onRefresh: () => state.loadCron(),
                onAdd: () => addCronJob(state),
                onToggle: (job, enabled) => toggleCronJob(state, job, enabled),
                onRun: (job) => runCronJob(state, job),
                onRemove: (job) => removeCronJob(state, job),
                onLoadRuns: (jobId) => loadCronRuns(state, jobId),
                onShowHistory: (jobId) => {
                  state.setTab("cronHistory");
                  void loadCronRuns(state, jobId);
                },
              })
            : nothing
        }

        ${
          state.tab === "employeeMarket"
            ? (() => {
                const onRefresh = async () => {
                  state.employeeMarketLoading = true;
                  state.employeeMarketError = null;
                  try {
                    const category =
                      state.employeeMarketCategory && state.employeeMarketCategory !== "__all__"
                        ? state.employeeMarketCategory
                        : undefined;
                    state.employeeMarketItems = await fetchEmployees(
                      { q: state.employeeMarketQuery, category },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                    // 从 API 响应（含 .install-metadata.json）推导已安装状态，刷新后仍可识别
                    const empItems = state.employeeMarketItems;
                    const empInstalled = new Set<string>();
                    const empMap: Record<string, string> = {};
                    for (const it of empItems) {
                      if (it.installed && it.localId) {
                        const rid = String(it.id);
                        if (typeof it.id !== "string" || !rid.startsWith("local:")) {
                          empInstalled.add(rid);
                          empMap[rid] = it.localId;
                        }
                      }
                    }
                    state.employeeMarketInstalledRemoteIds = empInstalled;
                    state.employeeMarketRemoteToLocal = empMap;
                  } catch (err) {
                    state.employeeMarketError = (err as any)?.message
                      ? String((err as any).message)
                      : String(err);
                  } finally {
                    state.employeeMarketLoading = false;
                  }
                };

                // Auto-load once when entering the page.
                if (!state.employeeMarketLoadedOnce && !state.employeeMarketLoading) {
                  state.employeeMarketLoadedOnce = true;
                  queueMicrotask(() => void onRefresh());
                }

                return renderEmployeeMarket({
                loading: state.employeeMarketLoading,
                error: state.employeeMarketError,
                query: state.employeeMarketQuery,
                category: state.employeeMarketCategory,
                items: state.employeeMarketItems,
                selectedId: state.employeeMarketSelectedId,
                selectedDetail: state.employeeMarketSelectedDetail,
                onQueryChange: (next) => (state.employeeMarketQuery = next),
                onCategoryChange: (next) => (state.employeeMarketCategory = next),
                onRefresh: async () => {
                    await onRefresh();
                },
                onSelect: async (id) => {
                  state.employeeMarketSelectedId = id;
                  state.employeeMarketSelectedDetail = null;
                  state.employeeMarketError = null;
                  try {
                    state.employeeMarketSelectedDetail = await fetchEmployeeDetail(id, {
                      gatewayHost: state.settings?.gatewayUrl?.trim(),
                      token: state.settings?.token?.trim(),
                    });
                  } catch (err) {
                    state.employeeMarketError = (err as any)?.message ? String((err as any).message) : String(err);
                  }
                },
                onDetailClose: () => {
                  state.employeeMarketSelectedId = null;
                  state.employeeMarketSelectedDetail = null;
                },
                onAdd: () => {
                  state.digitalEmployeeCreateModalOpen = true;
                  state.digitalEmployeeAdvancedOpen = false;
                  state.digitalEmployeeCreateMcpMode = "builder";
                  state.digitalEmployeeCreateMcpJson = "";
                  state.digitalEmployeeCreateMcpItems = [];
                  state.digitalEmployeeSkillUploadName = "";
                  state.digitalEmployeeSkillUploadFiles = [];
                  state.digitalEmployeeSkillUploadError = null;
                },
                onInstall: async (id, category) => {
                  const remoteId = String(id);
                  state.employeeMarketInstallingId = remoteId;
                  state.employeeMarketError = null;
                  try {
                    const res = await installFromSite(
                      {
                        kind: "employee",
                        id: remoteId,
                        type: category ?? undefined,
                        category: category ?? undefined,
                      },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                    state.employeeMarketInstalledRemoteIds = new Set([
                      ...state.employeeMarketInstalledRemoteIds,
                      remoteId,
                    ]);
                    if (res?.id) {
                      state.employeeMarketRemoteToLocal = {
                        ...state.employeeMarketRemoteToLocal,
                        [remoteId]: res.id,
                      };
                    }
                    await onRefresh();
                  } catch (err) {
                    state.employeeMarketError = (err as Error)?.message ?? String(err);
                  } finally {
                    state.employeeMarketInstallingId = null;
                  }
                },
                onDelete: async (localId) => {
                  state.employeeMarketError = null;
                  state.digitalEmployeesError = null;
                  await deleteDigitalEmployee(state, localId);
                  if (state.digitalEmployeesError) {
                    state.employeeMarketError = state.digitalEmployeesError;
                  } else {
                    const ridsToRemove = Object.entries(state.employeeMarketRemoteToLocal)
                      .filter(([, lid]) => lid === localId)
                      .map(([rid]) => rid);
                    const next = { ...state.employeeMarketRemoteToLocal };
                    for (const rid of ridsToRemove) delete next[rid];
                    state.employeeMarketRemoteToLocal = next;
                    state.employeeMarketInstalledRemoteIds = new Set(
                      [...state.employeeMarketInstalledRemoteIds].filter(
                        (rid) => !ridsToRemove.includes(rid),
                      ),
                    );
                    await onRefresh();
                    state.employeeMarketSelectedId = null;
                    state.employeeMarketSelectedDetail = null;
                  }
                },
                onOpenEmployee: async (employeeId) => {
                  const idPart = employeeId.trim() || "default";
                  await loadSessions(state, { activeMinutes: 10080, limit: 200, includeLastMessage: true });
                  const sessions = state.sessionsResult?.sessions ?? [];
                  const employeePatterns = [
                    `agent:main:employee:${idPart}:`,
                    `agent:main:employee-${idPart}`,
                    `employee:${idPart}:`,
                    `employee-${idPart}`,
                  ];
                  const existing = sessions.find((s) =>
                    employeePatterns.some((p) => s.key.includes(p) || s.key === p),
                  );
                  const sessionKey = existing
                    ? existing.key
                    : `agent:main:employee:${idPart}:run:${generateUUID()}`;
                  state.sessionKey = sessionKey;
                  state.chatMessage = "";
                  state.chatAttachments = [];
                  state.chatStream = null;
                  state.chatStreamStartedAt = null;
                  state.chatRunId = null;
                  state.chatQueue = [];
                  state.resetToolStream();
                  state.resetChatScroll();
                  state.applySettings({
                    ...state.settings,
                    sessionKey,
                    lastActiveSessionKey: sessionKey,
                  });
                  void state.loadAssistantIdentity();
                  void loadChatHistory(state);
                  void refreshChatAvatar(state);
                  state.setTab("message");
                  if (!existing) {
                    state.handleSendChat(
                      "当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",
                      { refreshSessions: true },
                    );
                  }
                },
                onEdit: async (localId) => {
                  const emp = state.digitalEmployees.find((e) => e.id === localId);
                  const manifest = await getDigitalEmployee(state, localId);
                  if (!manifest) {
                    state.employeeMarketError = "无法加载员工详情";
                    return;
                  }
                  const buildEditMcpItems = (servers: Record<string, unknown> | undefined) => {
                    const items: import("./views/digital-employee.js").EmployeeMcpItem[] = [];
                    if (!servers || typeof servers !== "object") return items;
                    for (const [key, value] of Object.entries(servers)) {
                      const k = String(key ?? "").trim();
                      if (!k) continue;
                      const v = value as Record<string, unknown>;
                      const isObj = v && typeof v === "object" && !Array.isArray(v);
                      const connectionType: "stdio" | "url" | "service" =
                        isObj && typeof v.url === "string" && v.url.trim()
                          ? "url"
                          : isObj && typeof v.service === "string" && v.service.trim()
                            ? "service"
                            : "stdio";
                      const isForm =
                        isObj &&
                        ((connectionType === "stdio" && typeof v.command === "string" && v.command.trim()) ||
                          (connectionType === "url" && typeof v.url === "string" && v.url.trim()) ||
                          (connectionType === "service" &&
                            typeof v.service === "string" &&
                            v.service.trim() &&
                            typeof v.serviceUrl === "string" &&
                            v.serviceUrl.trim()));
                      items.push({
                        id: generateUUID(),
                        key: k,
                        editMode: isForm ? "form" : "raw",
                        connectionType,
                        draft: isForm ? (v as any) : { command: "npx", args: [], env: {} },
                        rawJson: isObj ? JSON.stringify(v, null, 2) : "{}",
                        rawError: null,
                        collapsed: true,
                      });
                    }
                    return items;
                  };
                  state.digitalEmployeeEditModalOpen = true;
                  state.digitalEmployeeEditId = manifest.id;
                  state.digitalEmployeeEditName = manifest.name || manifest.id;
                  state.digitalEmployeeEditDescription = manifest.description ?? "";
                  state.digitalEmployeeEditPrompt = manifest.prompt ?? "";
                  state.digitalEmployeeEditMcpJson =
                    manifest.mcpServers && Object.keys(manifest.mcpServers).length > 0
                      ? JSON.stringify(manifest.mcpServers, null, 2)
                      : "";
                  state.digitalEmployeeEditMcpMode = "builder";
                  state.digitalEmployeeEditMcpItems = buildEditMcpItems(manifest.mcpServers);
                  state.digitalEmployeeEditSkillNames =
                    (emp?.skillNames ?? emp?.skillIds ?? manifest.skillIds ?? []) as string[];
                  state.digitalEmployeeEditSkillFilesToUpload = [];
                  state.digitalEmployeeEditSkillsToDelete = [];
                  state.digitalEmployeeEditEnabled = manifest.enabled !== false;
                  state.digitalEmployeeEditError = null;
                },
                installedIds: new Set(
                  state.employeeMarketItems
                    .filter((it) => typeof it.id === "string" && String(it.id).startsWith("local:"))
                    .map((it) => String(it.id)),
                ),
                installedRemoteIds: state.employeeMarketInstalledRemoteIds,
                remoteToLocalMap: state.employeeMarketRemoteToLocal,
                installingId: state.employeeMarketInstallingId,
                });
              })()
            : nothing
        }

        ${state.tab === "employeeMarket" && state.digitalEmployeeCreateModalOpen
          ? (() => {
              const onRefreshEmp = async () => {
                state.employeeMarketLoading = true;
                state.employeeMarketError = null;
                try {
                  const category =
                    state.employeeMarketCategory && state.employeeMarketCategory !== "__all__"
                      ? state.employeeMarketCategory
                      : undefined;
                  state.employeeMarketItems = await fetchEmployees(
                    { q: state.employeeMarketQuery, category },
                    { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                  );
                } catch (err) {
                  state.employeeMarketError = (err as any)?.message ? String((err as any).message) : String(err);
                } finally {
                  state.employeeMarketLoading = false;
                }
              };
              return renderDigitalEmployeeCreateModal({
                createModalOpen: state.digitalEmployeeCreateModalOpen,
                createName: state.digitalEmployeeCreateName,
                createDescription: state.digitalEmployeeCreateDescription,
                createPrompt: state.digitalEmployeeCreatePrompt,
                createError: state.digitalEmployeeCreateError,
                createBusy: state.digitalEmployeeCreateBusy,
                advancedOpen: state.digitalEmployeeAdvancedOpen,
                createMcpMode: state.digitalEmployeeCreateMcpMode,
                mcpJson: state.digitalEmployeeCreateMcpJson,
                mcpItems: state.digitalEmployeeCreateMcpItems ?? [],
                skillUploadName: state.digitalEmployeeSkillUploadName,
                skillUploadFiles: state.digitalEmployeeSkillUploadFiles ?? [],
                skillUploadError: state.digitalEmployeeSkillUploadError,
                onMcpJsonChange: (v) => (state.digitalEmployeeCreateMcpJson = v),
                onMcpModeChange: (m) => (state.digitalEmployeeCreateMcpMode = m),
                onMcpAddItem: () => {
                  const next = state.digitalEmployeeCreateMcpItems ?? [];
                  state.digitalEmployeeCreateMcpItems = [
                    ...next,
                    {
                      id: generateUUID(),
                      key: "",
                      editMode: "form",
                      connectionType: "stdio",
                      draft: { command: "npx", args: [], env: {} },
                      rawJson: "{}",
                      rawError: null,
                      collapsed: false,
                    },
                  ];
                },
                onMcpRemoveItem: (id) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).filter(
                    (it) => it.id !== id,
                  );
                },
                onMcpCollapsedChange: (id, collapsed) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, collapsed } : it,
                  );
                },
                onMcpKeyChange: (id, key) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, key } : it,
                  );
                },
                onMcpEditModeChange: (id, mode) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, editMode: mode } : it,
                  );
                },
                onMcpConnectionTypeChange: (id, type) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, connectionType: type } : it,
                  );
                },
                onMcpFormPatch: (id, patch) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, draft: { ...(it.draft ?? {}), ...(patch ?? {}) } } : it,
                  );
                },
                onMcpRawChange: (id, json) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, rawJson: json, rawError: null } : it,
                  );
                },
                onCreateClose: () => {
                  if (state.digitalEmployeeCreateBusy) return;
                  state.digitalEmployeeCreateModalOpen = false;
                  state.digitalEmployeeCreateError = null;
                  state.digitalEmployeeAdvancedOpen = false;
                  state.digitalEmployeeCreateMcpMode = "builder";
                  state.digitalEmployeeCreateMcpJson = "";
                  state.digitalEmployeeCreateMcpItems = [];
                  state.digitalEmployeeSkillUploadName = "";
                  state.digitalEmployeeSkillUploadFiles = [];
                  state.digitalEmployeeSkillUploadError = null;
                },
                onCreateNameChange: (v) => (state.digitalEmployeeCreateName = v),
                onCreateDescriptionChange: (v) => (state.digitalEmployeeCreateDescription = v),
                onCreatePromptChange: (v) => (state.digitalEmployeeCreatePrompt = v),
                onToggleAdvanced: () => (state.digitalEmployeeAdvancedOpen = !state.digitalEmployeeAdvancedOpen),
                onSkillUploadNameChange: (v) => (state.digitalEmployeeSkillUploadName = v),
                onSkillUploadFilesChange: (f) => (state.digitalEmployeeSkillUploadFiles = f ?? []),
                onCreateSubmit: async () => {
                  if (state.digitalEmployeeCreateMcpMode === "builder") {
                    const items = state.digitalEmployeeCreateMcpItems ?? [];
                    const servers: Record<string, unknown> = {};
                    const seen = new Set<string>();
                    let firstError: string | null = null;
                    const nextItems = items.map((it) => ({ ...it, rawError: null as string | null }));
                    for (let i = 0; i < nextItems.length; i++) {
                      const it = nextItems[i];
                      const key = it.key?.trim() ?? "";
                      if (!key) continue;
                      if (seen.has(key)) {
                        firstError ??= `MCP key 重复：${key}`;
                        continue;
                      }
                      seen.add(key);
                      if (it.editMode === "raw") {
                        const raw = it.rawJson?.trim() ?? "";
                        if (!raw) continue;
                        try {
                          const parsed = JSON.parse(raw) as unknown;
                          if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                            it.rawError = "JSON 必须是对象";
                            firstError ??= `MCP ${key} 的 JSON 无效`;
                            continue;
                          }
                          servers[key] = parsed;
                        } catch {
                          it.rawError = "JSON 格式无效";
                          firstError ??= `MCP ${key} 的 JSON 无效`;
                          continue;
                        }
                      } else {
                        const entry = it.draft ?? {};
                        if (it.connectionType === "stdio" && !(entry as { command?: string }).command?.trim()) {
                          firstError ??= `MCP ${key} 缺少 command`;
                          continue;
                        }
                        if (it.connectionType === "url" && !(entry as { url?: string }).url?.trim()) {
                          firstError ??= `MCP ${key} 缺少 url`;
                          continue;
                        }
                        if (
                          it.connectionType === "service" &&
                          (!(entry as { service?: string }).service?.trim() ||
                            !(entry as { serviceUrl?: string }).serviceUrl?.trim())
                        ) {
                          firstError ??= `MCP ${key} 缺少 service/serviceUrl`;
                          continue;
                        }
                        servers[key] = entry;
                      }
                    }
                    state.digitalEmployeeCreateMcpItems = nextItems;
                    state.digitalEmployeeCreateMcpJson =
                      Object.keys(servers).length > 0 ? JSON.stringify(servers, null, 2) : "";
                    if (firstError) {
                      state.digitalEmployeeCreateError = firstError;
                      return;
                    }
                  }
                  await createDigitalEmployee(state);
                  if (!state.digitalEmployeeCreateError) {
                    state.digitalEmployeeCreateModalOpen = false;
                    state.digitalEmployeeAdvancedOpen = false;
                    void onRefreshEmp();
                  }
                },
              });
            })()
          : nothing}

        ${
          state.tab === "skillLibrary"
            ? (() => {
                const onRefresh = async () => {
                  state.skillLibraryLoading = true;
                  state.skillLibraryError = null;
                  try {
                    const category =
                      state.skillLibraryCategory && state.skillLibraryCategory !== "__all__"
                        ? state.skillLibraryCategory
                        : undefined;
                    const status =
                      state.skillLibraryStatus && state.skillLibraryStatus !== "__all__"
                        ? state.skillLibraryStatus
                        : undefined;
                    state.skillLibraryItems = await fetchSkills(
                      { q: state.skillLibraryQuery, category, status },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                  } catch (err) {
                    state.skillLibraryError = (err as any)?.message ? String((err as any).message) : String(err);
                  } finally {
                    state.skillLibraryLoading = false;
                  }
                };

                if (!state.skillLibraryLoadedOnce && !state.skillLibraryLoading) {
                  state.skillLibraryLoadedOnce = true;
                  queueMicrotask(() => void onRefresh());
                }

                return renderSkillLibrary({
                loading: state.skillLibraryLoading,
                error: state.skillLibraryError,
                installSuccess: state.skillLibraryInstallSuccess,
                query: state.skillLibraryQuery,
                selectedCategory: state.skillLibraryCategory,
                selectedStatus: state.skillLibraryStatus,
                items: state.skillLibraryItems,
                selectedFolder: state.skillLibrarySelectedFolder,
                selectedDetail: state.skillLibrarySelectedDetail,
                installedKeys: new Set([
                  ...(state.skillsReport?.skills ?? []).map((entry) => entry.skillKey),
                  ...(state.skillLibraryItems ?? []).filter((s) => s.installed).map((s) => s.folder),
                ]),
                disabledKeys: new Set(
                  (state.skillsReport?.skills ?? []).filter((e) => e.disabled).map((e) => e.skillKey),
                ),
                installingFolder: state.skillLibraryInstallingFolder,
                onInstall: async (folder, category) => {
                  state.skillLibraryInstallingFolder = folder;
                  state.skillLibraryError = null;
                  state.skillLibraryInstallSuccess = null;
                  try {
                    const res = await installFromSite(
                      { kind: "skill", id: folder, type: category, category },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                    await loadSkills(state);
                    await onRefresh();
                    const id = res?.id ?? folder;
                    const cat = (res?.type ?? res?.category ?? category ?? "").trim();
                    state.skillLibraryInstallSuccess = cat ? `安装成功：${id}（${cat}）` : `安装成功：${id}`;
                    setTimeout(() => {
                      state.skillLibraryInstallSuccess = null;
                    }, 5000);
                  } catch (err) {
                    state.skillLibraryError = (err as Error)?.message ?? String(err);
                  } finally {
                    state.skillLibraryInstallingFolder = null;
                  }
                },
                onDelete: async (folder) => {
                  state.skillLibraryError = null;
                  await deleteSkill(state, folder);
                  if (state.skillsError) {
                    state.skillLibraryError = state.skillsError;
                  } else {
                    await onRefresh();
                    state.skillLibrarySelectedFolder = null;
                    state.skillLibrarySelectedDetail = null;
                  }
                },
                onToggleEnabled: async (folder, enabled) => {
                  state.skillLibraryError = null;
                  await updateSkillEnabled(state, folder, enabled);
                  if (state.skillsError) {
                    state.skillLibraryError = state.skillsError;
                  } else {
                    await onRefresh();
                  }
                },
                onQueryChange: (next) => (state.skillLibraryQuery = next),
                onCategoryChange: (next) => (state.skillLibraryCategory = next),
                onStatusChange: (next) => (state.skillLibraryStatus = next),
                onRefresh: async () => {
                    await onRefresh();
                },
                onSelect: async (folder) => {
                  state.skillLibrarySelectedFolder = folder || null;
                  state.skillLibrarySelectedDetail = null;
                  state.skillLibraryError = null;
                  if (!folder) return;
                  try {
                    state.skillLibrarySelectedDetail = await fetchSkillDetail(folder, {
                      gatewayHost: state.settings?.gatewayUrl?.trim(),
                      token: state.settings?.token?.trim(),
                    });
                  } catch (err) {
                    state.skillLibraryError = (err as any)?.message ? String((err as any).message) : String(err);
                  }
                },
                onDetailClose: () => {
                  state.skillLibrarySelectedFolder = null;
                  state.skillLibrarySelectedDetail = null;
                },
                addModalOpen: state.skillsAddModalOpen,
                uploadName: state.skillsUploadName,
                uploadFiles: state.skillsUploadFiles,
                uploadError: state.skillsUploadError,
                uploadTemplate: state.skillsUploadTemplate,
                uploadBusy: state.skillsUploadBusy,
                onAddClick: () => {
                  state.skillsAddModalOpen = true;
                  state.skillsUploadName = "";
                  state.skillsUploadFiles = [];
                  state.skillsUploadError = null;
                  state.skillsUploadTemplate = null;
                },
                onAddClose: () => {
                  state.skillsAddModalOpen = false;
                  state.skillsUploadName = "";
                  state.skillsUploadFiles = [];
                  state.skillsUploadError = null;
                  state.skillsUploadTemplate = null;
                },
                onUploadNameChange: (next) => (state.skillsUploadName = next),
                onUploadFilesChange: (files) => (state.skillsUploadFiles = files ?? []),
                onUploadSubmit: async () => {
                  const files = state.skillsUploadFiles ?? [];
                  const name = state.skillsUploadName?.trim() ?? "";
                  if (files.length === 0) return;
                  state.skillsUploadBusy = true;
                  state.skillsUploadError = null;
                  state.skillLibraryError = null;
                  const gatewayUrl = state.settings?.gatewayUrl?.trim();
                  if (!gatewayUrl) {
                    state.skillsUploadError = "Gateway URL 未配置";
                    state.skillsUploadBusy = false;
                    return;
                  }
                  const skillState = {
                    gatewayUrl,
                    token: state.settings?.token?.trim(),
                  } as Parameters<typeof uploadSkill>[0];
                  try {
                    for (let i = 0; i < files.length; i++) {
                      const file = files[i];
                      const skillName =
                        files.length > 1
                          ? file.name.replace(/\.(zip|md)$/i, "").replace(/[^a-zA-Z0-9_-]/g, "-")
                          : name || file.name.replace(/\.(zip|md)$/i, "").replace(/[^a-zA-Z0-9_-]/g, "-");
                      if (!skillName) {
                        state.skillsUploadError = "技能名称不能为空";
                        break;
                      }
                      const res = await uploadSkill(skillState, skillName, file);
                      if (!res.ok) {
                        state.skillsUploadError = res.error ?? "上传失败";
                        state.skillsUploadTemplate = res.template ?? null;
                        break;
                      }
                    }
                    if (!state.skillsUploadError) {
                      state.skillsAddModalOpen = false;
                      state.skillsUploadName = "";
                      state.skillsUploadFiles = [];
                      state.skillsUploadTemplate = null;
                      await loadSkills(state);
                    }
                  } finally {
                    state.skillsUploadBusy = false;
                  }
                },
                });
              })()
            : nothing
        }

        ${
          state.tab === "toolLibrary"
            ? (() => {
                const onRefresh = async () => {
                  state.toolLibraryLoading = true;
                  state.toolLibraryError = null;
                  try {
                    state.toolLibraryItems = await fetchMcps(
                      { q: state.toolLibraryQuery },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                    // 从 API 响应（含 .install-metadata.json）推导已安装状态
                    const mcpItems = state.toolLibraryItems;
                    const mcpInstalled = new Set<string>();
                    const mcpMap = new Map<number | string, string>();
                    for (const it of mcpItems) {
                      if (it.installed && it.serverKey) {
                        mcpInstalled.add(String(it.id));
                        mcpMap.set(it.id, it.serverKey);
                      }
                    }
                    state.toolLibraryInstalledRemoteIds = mcpInstalled;
                    state.toolLibraryInstalledMcpMap = mcpMap;
                  } catch (err) {
                    state.toolLibraryError = (err as any)?.message ? String((err as any).message) : String(err);
                  } finally {
                    state.toolLibraryLoading = false;
                  }
                };

                if (!state.toolLibraryLoadedOnce && !state.toolLibraryLoading) {
                  state.toolLibraryLoadedOnce = true;
                  queueMicrotask(() => void onRefresh());
                }

                const mcpServers = (state.configSnapshot?.config as { mcp?: { servers?: Record<string, { enabled?: boolean }> } } | undefined)?.mcp?.servers ?? {};
                const disabledMcpKeys = new Set<string>();
                for (const [k, v] of Object.entries(mcpServers)) {
                  if (v?.enabled === false) disabledMcpKeys.add(k);
                }
                return renderToolLibrary({
                loading: state.toolLibraryLoading,
                error: state.toolLibraryError,
                query: state.toolLibraryQuery,
                  category: state.toolLibraryCategory,
                  onCategoryChange: (next) => (state.toolLibraryCategory = next),
                items: state.toolLibraryItems,
                addModalOpen: state.mcpAddModalOpen,
                addName: state.mcpAddName,
                addDraft: (state.mcpAddDraft ?? {}) as import("./views/mcp.ts").McpServerEntry,
                addConnectionType: state.mcpAddConnectionType,
                addEditMode: state.mcpAddEditMode,
                addRawJson: state.mcpAddRawJson,
                addRawError: state.mcpAddRawError,
                saving: state.configSaving,
                onAddServer: () => handleMcpAddServer(state),
                onAddClose: () => handleMcpAddClose(state),
                onAddNameChange: (name) => handleMcpAddNameChange(state, name),
                onAddFormPatch: (patch) => handleMcpAddFormPatch(state, patch),
                onAddRawChange: (json) => handleMcpAddRawChange(state, json),
                onAddConnectionTypeChange: (type) => handleMcpAddConnectionTypeChange(state, type),
                onAddEditModeChange: (mode) => handleMcpAddEditModeChange(state, mode),
                onAddSubmit: async () => {
                  await handleMcpAddSubmit(state);
                  await loadConfig(state);
                },
                selectedId: state.toolLibrarySelectedId,
                selectedDetail: state.toolLibrarySelectedDetail,
                installedRemoteIds: state.toolLibraryInstalledRemoteIds,
                disabledMcpKeys,
                installingId: state.toolLibraryInstallingId,
                installedMcpMap: state.toolLibraryInstalledMcpMap,
                onInstall: async (id, category) => {
                  if (typeof id !== "number") return;
                  state.toolLibraryInstallingId = id;
                  state.toolLibraryError = null;
                  try {
                    const res = await installFromSite(
                      { kind: "mcp", id: String(id), type: category, category },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    );
                    if (res?.id) {
                      state.toolLibraryInstalledRemoteIds = new Set([...state.toolLibraryInstalledRemoteIds, String(id)]);
                      state.toolLibraryInstalledMcpMap = new Map(state.toolLibraryInstalledMcpMap).set(id, res.id);
                    }
                    await loadConfig(state);
                    await onRefresh();
                  } catch (err) {
                    state.toolLibraryError = (err as Error)?.message ?? String(err);
                  } finally {
                    state.toolLibraryInstallingId = null;
                  }
                },
                onDelete: async (serverKey) => {
                  state.toolLibraryError = null;
                  handleMcpDelete(state, serverKey);
                  let ridToRemove: number | string | null = null;
                  for (const [rid, sk] of state.toolLibraryInstalledMcpMap) {
                    if (sk === serverKey) {
                      ridToRemove = rid;
                      break;
                    }
                  }
                  if (ridToRemove != null) {
                    state.toolLibraryInstalledRemoteIds = new Set([...state.toolLibraryInstalledRemoteIds].filter((x) => x !== String(ridToRemove)));
                    const next = new Map(state.toolLibraryInstalledMcpMap);
                    next.delete(ridToRemove);
                    state.toolLibraryInstalledMcpMap = next;
                  }
                  await onRefresh();
                  state.toolLibrarySelectedId = null;
                  state.toolLibrarySelectedDetail = null;
                },
                onToggleEnabled: async (serverKey, enabled) => {
                  state.toolLibraryError = null;
                  handleMcpToggle(state, serverKey, enabled);
                  await onRefresh();
                },
                onEdit: (serverKey) => {
                  if (!state.configForm && state.configSnapshot?.config) {
                    state.configForm = cloneConfigObject(state.configSnapshot.config as Record<string, unknown>);
                  }
                  handleMcpSelect(state, serverKey);
                  state.toolLibraryMcpEditModalOpen = true;
                  state.toolLibraryMcpEditServerKey = serverKey;
                },
                onQueryChange: (next) => (state.toolLibraryQuery = next),
                onRefresh: async () => {
                    await onRefresh();
                },
                onSelect: async (id) => {
                  state.toolLibrarySelectedId = id;
                  state.toolLibrarySelectedDetail = null;
                  state.toolLibraryError = null;
                  if (typeof id === "number" && id < 0) return;
                  try {
                    state.toolLibrarySelectedDetail = await fetchMcpDetail(id, {
                      gatewayHost: state.settings?.gatewayUrl?.trim(),
                      token: state.settings?.token?.trim(),
                    });
                  } catch (err) {
                    state.toolLibraryError = (err as any)?.message ? String((err as any).message) : String(err);
                  }
                },
                onDetailClose: () => {
                  state.toolLibrarySelectedId = null;
                  state.toolLibrarySelectedDetail = null;
                },
                });
              })()
            : nothing
        }

        ${
          state.tab === "tutorials"
            ? (() => {
                const onRefresh = async () => {
                  state.tutorialsLoading = true;
                  state.tutorialsError = null;
                  try {
                    state.tutorialCategories = await fetchEduCategories({
                      gatewayHost: state.settings?.gatewayUrl?.trim(),
                      token: state.settings?.token?.trim(),
                    });
                    if (!state.tutorialsSelectedCategoryId && state.tutorialCategories.length) {
                      state.tutorialsSelectedCategoryId = state.tutorialCategories[0]?.id ?? null;
                    } else if (state.tutorialsSelectedCategoryId) {
                      const exists = state.tutorialCategories.some((c) => c.id === state.tutorialsSelectedCategoryId);
                      if (!exists) {
                        state.tutorialsSelectedCategoryId = state.tutorialCategories[0]?.id ?? null;
                      }
                    }
                  } catch (err) {
                    state.tutorialsError = (err as any)?.message ? String((err as any).message) : String(err);
                  } finally {
                    state.tutorialsLoading = false;
                  }
                };

                if (!state.tutorialsLoadedOnce && !state.tutorialsLoading) {
                  state.tutorialsLoadedOnce = true;
                  queueMicrotask(() => void onRefresh());
                }

                return renderTutorials({
                loading: state.tutorialsLoading,
                error: state.tutorialsError,
                categories: state.tutorialCategories,
                query: state.tutorialsQuery,
                selectedCategoryId: state.tutorialsSelectedCategoryId,
                playingLink: state.tutorialsPlayingLink,
                onQueryChange: (next) => (state.tutorialsQuery = next),
                onSelectCategory: (id) => (state.tutorialsSelectedCategoryId = id),
                onLessonClick: (link) => {
                  state.tutorialsPlayingLink = link;
                },
                onPlayingClose: () => (state.tutorialsPlayingLink = null),
                onRefresh: async () => {
                    await onRefresh();
                },
                });
              })()
            : nothing
        }

        ${
          state.tab === "aboutUs"
            ? renderAbout({
                basePath,
                uninstallModalOpen: state.aboutUninstallModalOpen,
                uninstallMode: state.aboutUninstallMode,
                uninstallLoading: state.aboutUninstallLoading,
                uninstallError: state.aboutUninstallError,
                onOpenUninstallModal: () => {
                  state.aboutUninstallModalOpen = true;
                  state.aboutUninstallError = null;
                  state.aboutUninstallMode = "program";
                },
                onCloseUninstallModal: () => {
                  state.aboutUninstallModalOpen = false;
                  state.aboutUninstallError = null;
                },
                onUninstallModeChange: (mode) => {
                  state.aboutUninstallMode = mode;
                },
                onConfirmUninstall: async () => {
                  const gw = state.settings?.gatewayUrl?.trim();
                  if (!gw) {
                    state.aboutUninstallError = "请先在 Overview 中配置 Gateway URL。";
                    return;
                  }
                  state.aboutUninstallLoading = true;
                  state.aboutUninstallError = null;
                  try {
                    const token = state.settings?.token?.trim() ?? "";
                    const r = await requestDesktopUninstall({
                      gatewayHost: gw,
                      token,
                      mode: state.aboutUninstallMode,
                    });
                    if (!r.ok) {
                      state.aboutUninstallError = [r.message, r.detail].filter(Boolean).join(" — ");
                      return;
                    }
                    state.aboutUninstallModalOpen = false;
                    window.alert(r.message ?? "已安排卸载，桌面应用将自动退出。");
                    try {
                      window.close();
                    } catch {
                      /* embedded webview may ignore */
                    }
                  } catch (e) {
                    state.aboutUninstallError = e instanceof Error ? e.message : String(e);
                  } finally {
                    state.aboutUninstallLoading = false;
                  }
                },
              })
            : nothing
        }

        ${
          state.tab === "llmTrace"
            ? renderLlmTrace({
                loading: state.llmTraceLoading,
                result: state.llmTraceResult,
                error: state.llmTraceError,
                mode: state.llmTraceMode,
                search: state.llmTraceSearch,
                enabled: state.llmTraceEnabled,
                saving: state.llmTraceSaving,
                viewContent: state.llmTraceViewContent,
                viewingSessionId: state.llmTraceViewingSessionId,
                viewLoading: state.llmTraceViewLoading,
                onRefresh: () => handleLlmTraceRefresh(state),
                onModeChange: (mode) => handleLlmTraceModeChange(state, mode),
                onSearchChange: (value) => handleLlmTraceSearchChange(state, value),
                onToggleEnabled: () => handleLlmTraceToggleEnabled(state),
                onView: (sessionId) => handleLlmTraceView(state, sessionId),
                onBack: () => handleLlmTraceBack(state),
                onDownload: (sessionId) => handleLlmTraceDownload(state, sessionId),
              })
            : nothing
        }

        ${
          state.tab === "sandbox"
            ? renderSecurity({
                security:
                  state.securityForm ??
                  getSecurityFromConfig(state) ??
                  {},
                saving: state.configSaving,
                pendingApprovalsCount: (state.approvalsResult?.pending ?? state.approvalsResult?.entries ?? []).filter((e) => e.status === "pending" && !e.expired).length,
                onPresetApply: (preset) => handleSecurityPresetApply(state, preset),
                onPatch: (path, value) => {
                  if (!state.securityForm) {
                    state.securityForm = syncSecurityFromConfig(state) ?? {};
                  }
                  handleSecurityPatch(state, state.securityForm as Record<string, unknown>, path, value);
                },
                onSave: () =>
                  handleSecuritySave(
                    state,
                    state.securityForm ?? getSecurityFromConfig(state) ?? {},
                  ),
                pathForTab: (tab) => pathForTab(tab, state.basePath),
                approvalsLoading: state.approvalsLoading,
                approvalsResult: state.approvalsResult,
                approvalsError: state.approvalsError,
                onApprovalsRefresh: () => loadApprovalsList(state),
                onApprove: (requestId) => approveApproval(state, requestId, "ui"),
                onDeny: (requestId, reason) => denyApproval(state, requestId, "ui", reason),
                onWhitelistSession: (requestId) =>
                  whitelistSessionApprovals(state, requestId, "ui"),
              })
            : nothing
        }

        ${
          state.tab === "nodes"
            ? renderNodes({
                loading: state.nodesLoading,
                nodes: state.nodes,
                devicesLoading: state.devicesLoading,
                devicesError: state.devicesError,
                devicesList: state.devicesList,
                configForm:
                  state.configForm ??
                  (state.configSnapshot?.config as Record<string, unknown> | null),
                configLoading: state.configLoading,
                configSaving: state.configSaving,
                configDirty: state.configFormDirty,
                configFormMode: state.configFormMode,
                execApprovalsLoading: state.execApprovalsLoading,
                execApprovalsSaving: state.execApprovalsSaving,
                execApprovalsDirty: state.execApprovalsDirty,
                execApprovalsSnapshot: state.execApprovalsSnapshot,
                execApprovalsForm: state.execApprovalsForm,
                execApprovalsSelectedAgent: state.execApprovalsSelectedAgent,
                execApprovalsTarget: state.execApprovalsTarget,
                execApprovalsTargetNodeId: state.execApprovalsTargetNodeId,
                onRefresh: () => loadNodes(state),
                onDevicesRefresh: () => loadDevices(state),
                onDeviceApprove: (requestId) => approveDevicePairing(state, requestId),
                onDeviceReject: (requestId) => rejectDevicePairing(state, requestId),
                onDeviceRotate: (deviceId, role, scopes) =>
                  rotateDeviceToken(state, { deviceId, role, scopes }),
                onDeviceRevoke: (deviceId, role) => revokeDeviceToken(state, { deviceId, role }),
                onLoadConfig: () => loadConfig(state),
                onLoadExecApprovals: () => {
                  const target =
                    state.execApprovalsTarget === "node" && state.execApprovalsTargetNodeId
                      ? { kind: "node" as const, nodeId: state.execApprovalsTargetNodeId }
                      : { kind: "gateway" as const };
                  return loadExecApprovals(state, target);
                },
                onBindDefault: (nodeId) => {
                  if (nodeId) {
                    updateConfigFormValue(state, ["tools", "exec", "node"], nodeId);
                  } else {
                    removeConfigFormValue(state, ["tools", "exec", "node"]);
                  }
                },
                onBindAgent: (agentIndex, nodeId) => {
                  const basePath = ["agents", "list", agentIndex, "tools", "exec", "node"];
                  if (nodeId) {
                    updateConfigFormValue(state, basePath, nodeId);
                  } else {
                    removeConfigFormValue(state, basePath);
                  }
                },
                onSaveBindings: () => saveConfig(state),
                onExecApprovalsTargetChange: (kind, nodeId) => {
                  state.execApprovalsTarget = kind;
                  state.execApprovalsTargetNodeId = nodeId;
                  state.execApprovalsSnapshot = null;
                  state.execApprovalsForm = null;
                  state.execApprovalsDirty = false;
                  state.execApprovalsSelectedAgent = null;
                },
                onExecApprovalsSelectAgent: (agentId) => {
                  state.execApprovalsSelectedAgent = agentId;
                },
                onExecApprovalsPatch: (path, value) =>
                  updateExecApprovalsFormValue(state, path, value),
                onExecApprovalsRemove: (path) => removeExecApprovalsFormValue(state, path),
                onSaveExecApprovals: () => {
                  const target =
                    state.execApprovalsTarget === "node" && state.execApprovalsTargetNodeId
                      ? { kind: "node" as const, nodeId: state.execApprovalsTargetNodeId }
                      : { kind: "gateway" as const };
                  return saveExecApprovals(state, target);
                },
              })
            : nothing
        }

        ${
          isChat
            ? renderChat({
                sessionKey: state.sessionKey,
                onSessionKeyChange: (next) => {
                  state.sessionKey = next;
                  state.chatMessage = "";
                  state.chatAttachments = [];
                  state.chatModelRef = null;
                  state.chatStream = null;
                  state.chatStreamStartedAt = null;
                  state.chatRunId = null;
                  state.chatQueue = [];
                  state.resetToolStream();
                  state.resetChatScroll();
                  state.applySettings({
                    ...state.settings,
                    sessionKey: next,
                    lastActiveSessionKey: next,
                  });
                  void state.loadAssistantIdentity();
                  void loadChatHistory(state);
                  void refreshChatAvatar(state);
                },
                thinkingLevel: state.chatThinkingLevel,
                showThinking,
                modelRef: state.chatModelRef,
                defaultModelRef: resolveDefaultModelRef(configValue),
                modelOptions: (() => {
                  type ModelEntry = { id: string; name?: string };
                  const cfg = configValue as
                    | {
                        agents?: { defaults?: { models?: Record<string, { alias?: string }> } };
                        models?: { providers?: Record<string, { models?: ModelEntry[] }> };
                      }
                    | null;
                  const defaultRef = resolveDefaultModelRef(configValue);
                  const seen = new Set<string>();
                  const opts: Array<{ value: string; label: string }> = [];

                  // 1. agents.defaults.models（优先）
                  const agentModels = cfg?.agents?.defaults?.models;
                  if (agentModels && typeof agentModels === "object") {
                    for (const [id, raw] of Object.entries(agentModels)) {
                      const value = id.trim();
                      if (!value || seen.has(value)) continue;
                      seen.add(value);
                      const alias =
                        raw && typeof raw === "object" && "alias" in raw && typeof raw.alias === "string"
                          ? raw.alias.trim()
                          : "";
                      const label = alias && alias !== value ? `${alias} (${value})` : value;
                      opts.push({ value, label });
                    }
                  }

                  // 2. models.providers 中的模型（补充）
                  const providers = cfg?.models?.providers;
                  if (providers && typeof providers === "object") {
                    for (const [providerKey, prov] of Object.entries(providers)) {
                      const models = prov && typeof prov === "object" ? (prov as { models?: ModelEntry[] }).models : undefined;
                      if (!Array.isArray(models)) continue;
                      for (const m of models) {
                        const modelId = m?.id?.trim();
                        if (!modelId) continue;
                        const value = `${providerKey}/${modelId}`;
                        if (seen.has(value)) continue;
                        seen.add(value);
                        const label = m.name && m.name !== modelId ? `${m.name} (${value})` : value;
                        opts.push({ value, label });
                      }
                    }
                  }

                  // 3. 默认模型不在列表中时补充
                  if (defaultRef && !seen.has(defaultRef)) {
                    opts.unshift({ value: defaultRef, label: defaultRef });
                  }

                  // 4. 若仍为空，至少提供「默认」选项
                  if (opts.length === 0) {
                    opts.push({
                      value: defaultRef ?? "",
                      label: defaultRef ? `默认 (${defaultRef})` : "默认",
                    });
                  }

                  return opts;
                })(),
                onModelRefChange: (next) => (state.chatModelRef = next),
                loading: state.chatLoading,
                sending: state.chatSending,
                compactionStatus: state.compactionStatus,
                assistantAvatarUrl: chatAvatarUrl,
                messages: state.chatMessages,
                toolMessages: state.chatToolMessages,
                stream: state.chatStream,
                streamStartedAt: state.chatStreamStartedAt,
                draft: state.chatMessage,
                queue: state.chatQueue,
                connected: state.connected,
                canSend: state.connected,
                disabledReason: chatDisabledReason,
                error: state.lastError,
                sessions: state.sessionsResult,
                focusMode: chatFocus,
                onRefresh: () => {
                  state.resetToolStream();
                  return Promise.all([loadChatHistory(state), refreshChatAvatar(state)]);
                },
                onToggleFocusMode: () => {
                  if (state.onboarding) {
                    return;
                  }
                  state.applySettings({
                    ...state.settings,
                    chatFocusMode: !state.settings.chatFocusMode,
                  });
                },
                onChatScroll: (event) => state.handleChatScroll(event),
                onDraftChange: (next) => (state.chatMessage = next),
                attachments: state.chatAttachments,
                onAttachmentsChange: (next) => (state.chatAttachments = next),
                onSend: () => state.handleSendChat(),
                canAbort: Boolean(state.chatRunId),
                onAbort: () => void state.handleAbortChat(),
                onQueueRemove: (id) => state.removeQueuedMessage(id),
                onNewSession: () => state.handleSendChat("/new", { restoreDraft: true }),
                showNewMessages: state.chatNewMessagesBelow,
                onScrollToBottom: () => state.scrollToBottom(),
                // Sidebar props for tool output viewing
                sidebarOpen: state.sidebarOpen,
                sidebarContent: state.sidebarContent,
                sidebarError: state.sidebarError,
                splitRatio: state.splitRatio,
                onOpenSidebar: (content: string) => state.handleOpenSidebar(content),
                onCloseSidebar: () => state.handleCloseSidebar(),
                onSplitRatioChange: (ratio: number) => state.handleSplitRatioChange(ratio),
                assistantName: state.assistantName,
                assistantAvatar: state.assistantAvatar,
              })
            : nothing
        }

        ${
          state.tab === "digitalEmployee"
            ? renderDigitalEmployee({
                loading: state.digitalEmployeesLoading,
                employees: state.digitalEmployees,
                error: state.digitalEmployeesError,
                filter: state.digitalEmployeesFilter,
                viewMode: state.digitalEmployeesViewMode,
                onRefresh: () => loadDigitalEmployees(state),
                createModalOpen: state.digitalEmployeeCreateModalOpen,
                createName: state.digitalEmployeeCreateName,
                createDescription: state.digitalEmployeeCreateDescription,
                createPrompt: state.digitalEmployeeCreatePrompt,
                createError: state.digitalEmployeeCreateError,
                createBusy: state.digitalEmployeeCreateBusy,
                advancedOpen: state.digitalEmployeeAdvancedOpen,
                createMcpMode: state.digitalEmployeeCreateMcpMode,
                mcpJson: state.digitalEmployeeCreateMcpJson,
                mcpItems: state.digitalEmployeeCreateMcpItems ?? [],
                onFilterChange: (next) => {
                  state.digitalEmployeesFilter = next;
                },
                onViewModeChange: (mode) => {
                  state.digitalEmployeesViewMode = mode;
                },
                onCopy: async (employeeId) => {
                  await copyDigitalEmployee(state, employeeId);
                },
                onMcpJsonChange: (value) => {
                  state.digitalEmployeeCreateMcpJson = value;
                },
                onMcpModeChange: (mode) => {
                  state.digitalEmployeeCreateMcpMode = mode;
                },
                onMcpAddItem: () => {
                  const next = state.digitalEmployeeCreateMcpItems ?? [];
                  state.digitalEmployeeCreateMcpItems = [
                    ...next,
                    {
                      id: generateUUID(),
                      key: "",
                      editMode: "form",
                      connectionType: "stdio",
                      draft: { command: "npx", args: [], env: {} },
                      rawJson: "{}",
                      rawError: null,
                      collapsed: false,
                    },
                  ];
                },
                onMcpRemoveItem: (id) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).filter(
                    (it) => it.id !== id,
                  );
                },
                onMcpCollapsedChange: (id, collapsed) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, collapsed } : it,
                  );
                },
                onMcpKeyChange: (id, key) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, key } : it,
                  );
                },
                onMcpEditModeChange: (id, mode) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, editMode: mode } : it,
                  );
                },
                onMcpConnectionTypeChange: (id, type) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, connectionType: type } : it,
                  );
                },
                onMcpFormPatch: (id, patch) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, draft: { ...(it.draft ?? {}), ...(patch ?? {}) } } : it,
                  );
                },
                onMcpRawChange: (id, json) => {
                  state.digitalEmployeeCreateMcpItems = (state.digitalEmployeeCreateMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, rawJson: json, rawError: null } : it,
                  );
                },
                skillUploadName: state.digitalEmployeeSkillUploadName,
                skillUploadFiles: state.digitalEmployeeSkillUploadFiles ?? [],
                skillUploadError: state.digitalEmployeeSkillUploadError,
                onCreateOpen: () => {
                  state.digitalEmployeeCreateModalOpen = true;
                  state.digitalEmployeeAdvancedOpen = false;
                  state.digitalEmployeeCreateMcpMode = "builder";
                  state.digitalEmployeeCreateMcpJson = "";
                  state.digitalEmployeeCreateMcpItems = [];
                  state.digitalEmployeeSkillUploadName = "";
                  state.digitalEmployeeSkillUploadFiles = [];
                  state.digitalEmployeeSkillUploadError = null;
                },
                onCreateClose: () => {
                  if (state.digitalEmployeeCreateBusy) return;
                  state.digitalEmployeeCreateModalOpen = false;
                  state.digitalEmployeeCreateError = null;
                  state.digitalEmployeeAdvancedOpen = false;
                  state.digitalEmployeeCreateMcpMode = "builder";
                  state.digitalEmployeeCreateMcpJson = "";
                  state.digitalEmployeeCreateMcpItems = [];
                  state.digitalEmployeeSkillUploadName = "";
                  state.digitalEmployeeSkillUploadFiles = [];
                  state.digitalEmployeeSkillUploadError = null;
                },
                onCreateNameChange: (value) => {
                  state.digitalEmployeeCreateName = value;
                },
                onCreateDescriptionChange: (value) => {
                  state.digitalEmployeeCreateDescription = value;
                },
                onCreatePromptChange: (value) => {
                  state.digitalEmployeeCreatePrompt = value;
                },
                onCreateSubmit: async () => {
                  // 将点选配置的 MCP 条目汇总为 JSON（与原 mcp.servers 结构一致）。
                  if (state.digitalEmployeeCreateMcpMode === "builder") {
                    const items = state.digitalEmployeeCreateMcpItems ?? [];
                    const servers: Record<string, unknown> = {};
                    const seen = new Set<string>();
                    let firstError: string | null = null;
                    const nextItems = items.map((it) => ({ ...it, rawError: null as string | null }));
                    for (let i = 0; i < nextItems.length; i++) {
                      const it = nextItems[i];
                      const key = it.key?.trim() ?? "";
                      if (!key) {
                        continue;
                      }
                      if (seen.has(key)) {
                        firstError ??= `MCP key 重复：${key}`;
                        continue;
                      }
                      seen.add(key);
                      if (it.editMode === "raw") {
                        const raw = it.rawJson?.trim() ?? "";
                        if (!raw) continue;
                        try {
                          const parsed = JSON.parse(raw) as unknown;
                          if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                            it.rawError = "JSON 必须是对象";
                            firstError ??= `MCP ${key} 的 JSON 无效`;
                            continue;
                          }
                          servers[key] = parsed;
                        } catch {
                          it.rawError = "JSON 格式无效";
                          firstError ??= `MCP ${key} 的 JSON 无效`;
                          continue;
                        }
                      } else {
                        const entry = it.draft ?? {};
                        // 轻量校验：必须满足其连接类型的必要字段
                        if (it.connectionType === "stdio" && !(entry as { command?: string }).command?.trim()) {
                          firstError ??= `MCP ${key} 缺少 command`;
                          continue;
                        }
                        if (it.connectionType === "url" && !(entry as { url?: string }).url?.trim()) {
                          firstError ??= `MCP ${key} 缺少 url`;
                          continue;
                        }
                        if (
                          it.connectionType === "service" &&
                          (!(entry as { service?: string }).service?.trim() ||
                            !(entry as { serviceUrl?: string }).serviceUrl?.trim())
                        ) {
                          firstError ??= `MCP ${key} 缺少 service/serviceUrl`;
                          continue;
                        }
                        servers[key] = entry;
                      }
                    }
                    state.digitalEmployeeCreateMcpItems = nextItems;
                    state.digitalEmployeeCreateMcpJson =
                      Object.keys(servers).length > 0 ? JSON.stringify(servers, null, 2) : "";
                    if (firstError) {
                      state.digitalEmployeeCreateError = firstError;
                      return;
                    }
                  }
                  await createDigitalEmployee(state);
                  if (!state.digitalEmployeeCreateError) {
                    state.digitalEmployeeCreateModalOpen = false;
                    state.digitalEmployeeAdvancedOpen = false;
                  }
                },
                onToggleAdvanced: () => {
                  state.digitalEmployeeAdvancedOpen = !state.digitalEmployeeAdvancedOpen;
                },
                onSkillUploadNameChange: (next) => {
                  state.digitalEmployeeSkillUploadName = next;
                },
                onSkillUploadFilesChange: (files) => {
                  state.digitalEmployeeSkillUploadFiles = files ?? [];
                },
                onOpenEmployee: async (employeeId) => {
                  const idPart = employeeId.trim() || "default";
                  await loadSessions(state, { activeMinutes: 10080, limit: 200, includeLastMessage: true });
                  const sessions = state.sessionsResult?.sessions ?? [];
                  const employeePatterns = [
                    `agent:main:employee:${idPart}:`,
                    `agent:main:employee-${idPart}`,
                    `employee:${idPart}:`,
                    `employee-${idPart}`,
                  ];
                  const existing = sessions.find((s) =>
                    employeePatterns.some((p) => s.key.includes(p) || s.key === p),
                  );
                  const sessionKey = existing
                    ? existing.key
                    : `agent:main:employee:${idPart}:run:${generateUUID()}`;
                  state.sessionKey = sessionKey;
                  state.chatMessage = "";
                  state.chatAttachments = [];
                  state.chatStream = null;
                  state.chatStreamStartedAt = null;
                  state.chatRunId = null;
                  state.chatQueue = [];
                  state.resetToolStream();
                  state.resetChatScroll();
                  state.applySettings({
                    ...state.settings,
                    sessionKey,
                    lastActiveSessionKey: sessionKey,
                  });
                  void state.loadAssistantIdentity();
                  void loadChatHistory(state);
                  void refreshChatAvatar(state);
                  state.setTab("message");
                  if (!existing) {
                    state.handleSendChat(
                      "当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",
                      { refreshSessions: true },
                    );
                  }
                },
                onToggleEnabled: (employeeId, enabled) =>
                  updateDigitalEmployeeEnabled(state, employeeId, enabled),
                onDelete: (employeeId) => deleteDigitalEmployee(state, employeeId),
                onEdit: async (employeeId) => {
                  const emp = state.digitalEmployees.find((e) => e.id === employeeId);
                  const manifest = await getDigitalEmployee(state, employeeId);
                  if (!manifest) {
                    state.digitalEmployeesError = "无法加载员工详情";
                    return;
                  }
                  const buildEditMcpItems = (servers: Record<string, unknown> | undefined) => {
                    const items: import("./views/digital-employee.js").EmployeeMcpItem[] = [];
                    if (!servers || typeof servers !== "object") return items;
                    for (const [key, value] of Object.entries(servers)) {
                      const k = String(key ?? "").trim();
                      if (!k) continue;
                      const v = value as Record<string, unknown>;
                      const isObj = v && typeof v === "object" && !Array.isArray(v);
                      const connectionType: "stdio" | "url" | "service" =
                        isObj && typeof v.url === "string" && v.url.trim()
                          ? "url"
                          : isObj && typeof v.service === "string" && v.service.trim()
                            ? "service"
                            : "stdio";
                      const isForm =
                        isObj &&
                        ((connectionType === "stdio" && typeof v.command === "string" && v.command.trim()) ||
                          (connectionType === "url" && typeof v.url === "string" && v.url.trim()) ||
                          (connectionType === "service" &&
                            typeof v.service === "string" &&
                            v.service.trim() &&
                            typeof v.serviceUrl === "string" &&
                            v.serviceUrl.trim()));
                      items.push({
                        id: generateUUID(),
                        key: k,
                        editMode: isForm ? "form" : "raw",
                        connectionType,
                        draft: isForm ? (v as any) : { command: "npx", args: [], env: {} },
                        rawJson: isObj ? JSON.stringify(v, null, 2) : "{}",
                        rawError: null,
                        collapsed: true,
                      });
                    }
                    return items;
                  };
                  state.digitalEmployeeEditModalOpen = true;
                  state.digitalEmployeeEditId = manifest.id;
                  state.digitalEmployeeEditName = manifest.name || manifest.id;
                  state.digitalEmployeeEditDescription = manifest.description ?? "";
                  state.digitalEmployeeEditPrompt = manifest.prompt ?? "";
                  state.digitalEmployeeEditMcpJson =
                    manifest.mcpServers && Object.keys(manifest.mcpServers).length > 0
                      ? JSON.stringify(manifest.mcpServers, null, 2)
                      : "";
                  state.digitalEmployeeEditMcpMode = "builder";
                  state.digitalEmployeeEditMcpItems = buildEditMcpItems(manifest.mcpServers);
                  state.digitalEmployeeEditSkillNames =
                    (emp?.skillNames ?? emp?.skillIds ?? manifest.skillIds ?? []) as string[];
                  state.digitalEmployeeEditSkillFilesToUpload = [];
                  state.digitalEmployeeEditSkillsToDelete = [];
                  state.digitalEmployeeEditEnabled = manifest.enabled !== false;
                  state.digitalEmployeeEditError = null;
                },
                editModalOpen: state.digitalEmployeeEditModalOpen,
                editId: state.digitalEmployeeEditId,
                editName: state.digitalEmployeeEditName,
                editDescription: state.digitalEmployeeEditDescription,
                editPrompt: state.digitalEmployeeEditPrompt,
                editMcpJson: state.digitalEmployeeEditMcpJson,
                editMcpMode: state.digitalEmployeeEditMcpMode,
                editMcpItems: state.digitalEmployeeEditMcpItems ?? [],
                onEditMcpModeChange: (mode) => {
                  state.digitalEmployeeEditMcpMode = mode;
                },
                onEditMcpAddItem: () => {
                  const next = state.digitalEmployeeEditMcpItems ?? [];
                  state.digitalEmployeeEditMcpItems = [
                    ...next,
                    {
                      id: generateUUID(),
                      key: "",
                      editMode: "form",
                      connectionType: "stdio",
                      draft: { command: "npx", args: [], env: {} },
                      rawJson: "{}",
                      rawError: null,
                      collapsed: false,
                    },
                  ];
                },
                onEditMcpRemoveItem: (id) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).filter((it) => it.id !== id);
                },
                onEditMcpCollapsedChange: (id, collapsed) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, collapsed } : it,
                  );
                },
                onEditMcpKeyChange: (id, key) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, key } : it,
                  );
                },
                onEditMcpEditModeChange: (id, mode) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, editMode: mode } : it,
                  );
                },
                onEditMcpConnectionTypeChange: (id, type) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, connectionType: type } : it,
                  );
                },
                onEditMcpFormPatch: (id, patch) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, draft: { ...(it.draft ?? {}), ...(patch ?? {}) } } : it,
                  );
                },
                onEditMcpRawChange: (id, json) => {
                  state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                    it.id === id ? { ...it, rawJson: json, rawError: null } : it,
                  );
                },
                editSkillNames: state.digitalEmployeeEditSkillNames ?? [],
                editSkillFilesToUpload: state.digitalEmployeeEditSkillFilesToUpload ?? [],
                editSkillsToDelete: state.digitalEmployeeEditSkillsToDelete ?? [],
                editError: state.digitalEmployeeEditError,
                editBusy: state.digitalEmployeeEditBusy,
                onEditClose: () => {
                  if (state.digitalEmployeeEditBusy) return;
                  state.digitalEmployeeEditModalOpen = false;
                  state.digitalEmployeeEditError = null;
                  state.digitalEmployeeEditMcpMode = "raw";
                  state.digitalEmployeeEditMcpItems = [];
                },
                onEditDescriptionChange: (v) => {
                  state.digitalEmployeeEditDescription = v;
                },
                onEditPromptChange: (v) => {
                  state.digitalEmployeeEditPrompt = v;
                },
                onEditMcpJsonChange: (v) => {
                  state.digitalEmployeeEditMcpJson = v;
                },
                onEditSkillFilesChange: (files) => {
                  state.digitalEmployeeEditSkillFilesToUpload = files ?? [];
                },
                onEditSkillDelete: (name) => {
                  const list = state.digitalEmployeeEditSkillsToDelete ?? [];
                  if (!list.includes(name)) {
                    state.digitalEmployeeEditSkillsToDelete = [...list, name];
                  }
                },
                onEditSkillUndoDelete: (name) => {
                  state.digitalEmployeeEditSkillsToDelete = (
                    state.digitalEmployeeEditSkillsToDelete ?? []
                  ).filter((n) => n !== name);
                },
                onEditSubmit: async () => {
                  // 将点选配置的 MCP 条目汇总为 JSON（与原 mcp.servers 结构一致）。
                  if (state.digitalEmployeeEditMcpMode === "builder") {
                    const items = state.digitalEmployeeEditMcpItems ?? [];
                    const servers: Record<string, unknown> = {};
                    const seen = new Set<string>();
                    let firstError: string | null = null;
                    const nextItems = items.map((it) => ({ ...it, rawError: null as string | null }));
                    for (let i = 0; i < nextItems.length; i++) {
                      const it = nextItems[i];
                      const key = it.key?.trim() ?? "";
                      if (!key) continue;
                      if (seen.has(key)) {
                        firstError ??= `MCP key 重复：${key}`;
                        continue;
                      }
                      seen.add(key);
                      if (it.editMode === "raw") {
                        const raw = it.rawJson?.trim() ?? "";
                        if (!raw) continue;
                        try {
                          const parsed = JSON.parse(raw) as unknown;
                          if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                            it.rawError = "JSON 必须是对象";
                            firstError ??= `MCP ${key} 的 JSON 无效`;
                            continue;
                          }
                          servers[key] = parsed;
                        } catch {
                          it.rawError = "JSON 格式无效";
                          firstError ??= `MCP ${key} 的 JSON 无效`;
                          continue;
                        }
                      } else {
                        const entry = it.draft ?? {};
                        if (it.connectionType === "stdio" && !(entry as { command?: string }).command?.trim()) {
                          firstError ??= `MCP ${key} 缺少 command`;
                          continue;
                        }
                        if (it.connectionType === "url" && !(entry as { url?: string }).url?.trim()) {
                          firstError ??= `MCP ${key} 缺少 url`;
                          continue;
                        }
                        if (
                          it.connectionType === "service" &&
                          (!(entry as { service?: string }).service?.trim() ||
                            !(entry as { serviceUrl?: string }).serviceUrl?.trim())
                        ) {
                          firstError ??= `MCP ${key} 缺少 service/serviceUrl`;
                          continue;
                        }
                        servers[key] = entry;
                      }
                    }
                    state.digitalEmployeeEditMcpItems = nextItems;
                    state.digitalEmployeeEditMcpJson = Object.keys(servers).length > 0 ? JSON.stringify(servers, null, 2) : "";
                    if (firstError) {
                      state.digitalEmployeeEditError = firstError;
                      return;
                    }
                  }
                  await updateDigitalEmployee(state);
                  if (!state.digitalEmployeeEditError) {
                    state.digitalEmployeeEditModalOpen = false;
                  }
                },
              })
            : nothing
        }

        ${
          state.tab === "envVars"
            ? renderEnvVars({
                vars:
                  (state.configForm?.env as { vars?: Record<string, string> } | undefined)?.vars ??
                  (state.configSnapshot?.config as { env?: { vars?: Record<string, string> } } | undefined)?.env?.vars ??
                  {},
                dirty: state.configFormDirty,
                loading: state.configLoading,
                saving: state.configSaving,
                connected: state.connected,
                onVarsChange: (next) => {
                  updateConfigFormValue(state, ["env", "vars"], next);
                },
                onSave: async () => {
                  const envForm = state.configForm?.env as { vars?: Record<string, string> } | undefined;
                  const raw = envForm?.vars ?? {};
                  const filtered: Record<string, string> = {};
                  for (const [k, v] of Object.entries(raw)) {
                    if (k.trim()) filtered[k.trim()] = v;
                  }
                  // 更新表单中的 env.vars
                  updateConfigFormValue(state, ["env", "vars"], filtered);

                  // 基于当前配置构造 env 对象，保留其它字段（例如 modelEnv、shellEnv 等）
                  const baseEnv =
                    (state.configForm?.env as Record<string, unknown> | undefined) ??
                    ((state.configSnapshot?.config as { env?: Record<string, unknown> } | undefined)?.env ?? {});
                  const nextEnv = { ...baseEnv, vars: filtered };

                  await saveConfigPatch(state, { env: nextEnv });
                },
                onReload: () => loadConfig(state),
              })
            : nothing
        }

        ${
          state.tab === "config"
            ? renderConfig({
                raw: state.configRaw,
                originalRaw: state.configRawOriginal,
                valid: state.configValid,
                issues: state.configIssues,
                loading: state.configLoading,
                saving: state.configSaving,
                applying: state.configApplying,
                updating: state.updateRunning,
                connected: state.connected,
                schema: state.configSchema,
                schemaLoading: state.configSchemaLoading,
                uiHints: state.configUiHints,
                formMode: state.configFormMode,
                formValue: state.configForm,
                originalValue: state.configFormOriginal,
                searchQuery: state.configSearchQuery,
                activeSection: state.configActiveSection,
                activeSubsection: state.configActiveSubsection,
                onRawChange: (next) => {
                  state.configRaw = next;
                },
                onFormModeChange: (mode) => (state.configFormMode = mode),
                onFormPatch: (path, value) => updateConfigFormValue(state, path, value),
                onSearchChange: (query) => (state.configSearchQuery = query),
                onSectionChange: (section) => {
                  state.configActiveSection = section;
                  state.configActiveSubsection = null;
                },
                onSubsectionChange: (section) => (state.configActiveSubsection = section),
                onReload: () => loadConfig(state),
                onSave: () => saveConfig(state),
                onApply: () => applyConfig(state),
                onUpdate: () => runUpdate(state),
              })
            : nothing
        }

        ${
          state.tab === "models"
            ? renderModels({
                providers:
                  (state.configForm?.models as { providers?: Record<string, import("./views/models.ts").ModelProvider> })
                    ?.providers ?? {},
                modelEnv:
                  (state.configForm?.env as { modelEnv?: Record<string, Record<string, string>> })?.modelEnv ?? {},
                defaultModelRef: resolveDefaultModelRef(state.configForm),
                loading: state.configLoading,
                saving: state.configSaving,
                selectedProvider: state.modelsSelectedProvider,
                viewMode: state.modelsViewMode,
                formDirty: state.modelsFormDirty,
                addProviderModalOpen: state.modelsAddProviderModalOpen,
                addProviderForm: state.modelsAddProviderForm,
                addModelModalOpen: state.modelsAddModelModalOpen,
                addModelForm: state.modelsAddModelForm,
                useModelModalOpen: state.modelsUseModelModalOpen,
                useModelModalProvider: state.modelsUseModelModalProvider,
                saveError: state.modelsSaveError,
                onRefresh: () => handleModelsRefresh(state),
                onAddProvider: () => handleModelsAddProvider(state),
                onAddProviderModalClose: () => handleModelsAddProviderModalClose(state),
                onAddProviderFormChange: (form) => handleModelsAddProviderFormChange(state, form),
                onAddProviderSubmit: () => handleModelsAddProviderSubmit(state),
                onSelect: (key) => handleModelsSelect(state, key),
                onViewModeChange: (mode) => (state.modelsViewMode = mode),
                onPatch: (key, patch) => handleModelsPatch(state, key, patch),
                onAddModel: (providerKey) => handleModelsAddModel(state, providerKey),
                onAddModelModalClose: () => handleModelsAddModelModalClose(state),
                onAddModelFormChange: (form) => handleModelsAddModelFormChange(state, form),
                onAddModelSubmit: (providerKey) => handleModelsAddModelSubmit(state, providerKey),
                onRemoveModel: (providerKey, modelId) => handleModelsRemoveModel(state, providerKey, modelId),
                onPatchModelEnv: (providerKey, modelId, envVars) =>
                  handleModelsPatchModelEnv(state, providerKey, modelId, envVars),
                onSave: () => handleModelsSave(state),
                onCancel: () => handleModelsCancel(state),
                onUseModelClick: (provider) => handleModelsUseModelClick(state, provider),
                onUseModelModalClose: () => handleModelsUseModelModalClose(state),
                onUseModel: (provider, modelId) => handleModelsUseModel(state, provider, modelId),
                onCancelUse: (provider) => handleModelsCancelUse(state, provider),
              })
            : nothing
        }

        ${
          state.tab === "debug"
            ? renderDebug({
                loading: state.debugLoading,
                status: state.debugStatus,
                health: state.debugHealth,
                models: state.debugModels,
                heartbeat: state.debugHeartbeat,
                eventLog: state.eventLog,
                callMethod: state.debugCallMethod,
                callParams: state.debugCallParams,
                callResult: state.debugCallResult,
                callError: state.debugCallError,
                onCallMethodChange: (next) => (state.debugCallMethod = next),
                onCallParamsChange: (next) => (state.debugCallParams = next),
                onRefresh: () => loadDebug(state),
                onCall: () => callDebugMethod(state),
              })
            : nothing
        }

        ${
          state.tab === "logs"
            ? renderLogs({
                loading: state.logsLoading,
                error: state.logsError,
                file: state.logsFile,
                entries: state.logsEntries,
                filterText: state.logsFilterText,
                levelFilters: state.logsLevelFilters,
                autoFollow: state.logsAutoFollow,
                truncated: state.logsTruncated,
                onFilterTextChange: (next) => (state.logsFilterText = next),
                onLevelToggle: (level, enabled) => {
                  state.logsLevelFilters = { ...state.logsLevelFilters, [level]: enabled };
                },
                onToggleAutoFollow: (next) => (state.logsAutoFollow = next),
                onRefresh: () => loadLogs(state, { reset: true }),
                onExport: (lines, label) => state.exportLogs(lines, label),
                onScroll: (event) => state.handleLogsScroll(event),
              })
            : nothing
        }
      </main>
      ${renderExecApprovalPrompt(state)}
      ${renderGatewayUrlConfirmation(state)}
      ${
        state.toolLibraryMcpEditModalOpen && state.toolLibraryMcpEditServerKey
          ? (() => {
              const sk = state.toolLibraryMcpEditServerKey;
              const cfg = state.configForm ?? (state.configSnapshot?.config as Record<string, unknown> | null);
              const mcp = cfg?.mcp as { servers?: Record<string, import("./views/mcp.ts").McpServerEntry> } | undefined;
              const entry = (mcp?.servers?.[sk] ?? {}) as import("./views/mcp.ts").McpServerEntry;
              return renderMcpEditModal({
                open: true,
                serverKey: sk,
                entry,
                editMode: state.mcpEditMode,
                editConnectionType: state.mcpEditConnectionType,
                formDirty: state.mcpFormDirty,
                rawJson: state.mcpRawJson,
                rawError: state.mcpRawError,
                saving: state.configSaving,
                onFormPatch: (key: string, patch: Partial<import("./views/mcp.ts").McpServerEntry>) => handleMcpFormPatch(state, key, patch),
                onRawChange: (key: string, json: string) => handleMcpRawChange(state, key, json),
                onEditModeChange: (mode: "form" | "raw") => (state.mcpEditMode = mode),
                onEditConnectionTypeChange: (type: "stdio" | "url" | "service") => handleMcpEditConnectionTypeChange(state, type),
                onSave: () => {
                  handleMcpSave(state);
                  state.toolLibraryMcpEditModalOpen = false;
                  state.toolLibraryMcpEditServerKey = "";
                  void loadConfig(state);
                },
                onCancel: () => {
                  handleMcpCancel(state);
                  state.toolLibraryMcpEditModalOpen = false;
                  state.toolLibraryMcpEditServerKey = "";
                },
              });
            })()
          : nothing
      }
      ${
        state.digitalEmployeeEditModalOpen
          ? renderDigitalEmployeeEditModal({
              editModalOpen: true,
              editId: state.digitalEmployeeEditId,
              editName: state.digitalEmployeeEditName,
              editDescription: state.digitalEmployeeEditDescription,
              editPrompt: state.digitalEmployeeEditPrompt,
              editMcpJson: state.digitalEmployeeEditMcpJson,
              editMcpMode: state.digitalEmployeeEditMcpMode,
              editMcpItems: state.digitalEmployeeEditMcpItems ?? [],
              onEditMcpModeChange: (mode) => {
                state.digitalEmployeeEditMcpMode = mode;
              },
              onEditMcpAddItem: () => {
                const next = state.digitalEmployeeEditMcpItems ?? [];
                state.digitalEmployeeEditMcpItems = [
                  ...next,
                  {
                    id: generateUUID(),
                    key: "",
                    editMode: "form",
                    connectionType: "stdio",
                    draft: { command: "npx", args: [], env: {} },
                    rawJson: "{}",
                    rawError: null,
                    collapsed: false,
                  },
                ];
              },
              onEditMcpRemoveItem: (id) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).filter((it) => it.id !== id);
              },
              onEditMcpCollapsedChange: (id, collapsed) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, collapsed } : it,
                );
              },
              onEditMcpKeyChange: (id, key) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, key } : it,
                );
              },
              onEditMcpEditModeChange: (id, mode) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, editMode: mode } : it,
                );
              },
              onEditMcpConnectionTypeChange: (id, type) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, connectionType: type } : it,
                );
              },
              onEditMcpFormPatch: (id, patch) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, draft: { ...(it.draft ?? {}), ...(patch ?? {}) } } : it,
                );
              },
              onEditMcpRawChange: (id, json) => {
                state.digitalEmployeeEditMcpItems = (state.digitalEmployeeEditMcpItems ?? []).map((it) =>
                  it.id === id ? { ...it, rawJson: json, rawError: null } : it,
                );
              },
              editSkillNames: state.digitalEmployeeEditSkillNames ?? [],
              editSkillFilesToUpload: state.digitalEmployeeEditSkillFilesToUpload ?? [],
              editSkillsToDelete: state.digitalEmployeeEditSkillsToDelete ?? [],
              editError: state.digitalEmployeeEditError,
              editBusy: state.digitalEmployeeEditBusy,
              onEditClose: () => {
                if (state.digitalEmployeeEditBusy) return;
                state.digitalEmployeeEditModalOpen = false;
                state.digitalEmployeeEditError = null;
                state.digitalEmployeeEditMcpMode = "raw";
                state.digitalEmployeeEditMcpItems = [];
              },
              onEditDescriptionChange: (v) => {
                state.digitalEmployeeEditDescription = v;
              },
              onEditPromptChange: (v) => {
                state.digitalEmployeeEditPrompt = v;
              },
              onEditMcpJsonChange: (v) => {
                state.digitalEmployeeEditMcpJson = v;
              },
              onEditSkillFilesChange: (files) => {
                state.digitalEmployeeEditSkillFilesToUpload = files ?? [];
              },
              onEditSkillDelete: (name) => {
                const list = state.digitalEmployeeEditSkillsToDelete ?? [];
                if (!list.includes(name)) {
                  state.digitalEmployeeEditSkillsToDelete = [...list, name];
                }
              },
              onEditSkillUndoDelete: (name) => {
                state.digitalEmployeeEditSkillsToDelete = (
                  state.digitalEmployeeEditSkillsToDelete ?? []
                ).filter((n) => n !== name);
              },
              onEditSubmit: async () => {
                if (state.digitalEmployeeEditMcpMode === "builder") {
                  const items = state.digitalEmployeeEditMcpItems ?? [];
                  const servers: Record<string, unknown> = {};
                  const seen = new Set<string>();
                  let firstError: string | null = null;
                  const nextItems = items.map((it) => ({ ...it, rawError: null as string | null }));
                  for (let i = 0; i < nextItems.length; i++) {
                    const it = nextItems[i];
                    const key = it.key?.trim() ?? "";
                    if (!key) continue;
                    if (seen.has(key)) {
                      firstError ??= `MCP key 重复：${key}`;
                      continue;
                    }
                    seen.add(key);
                    if (it.editMode === "raw") {
                      const raw = it.rawJson?.trim() ?? "";
                      if (!raw) continue;
                      try {
                        const parsed = JSON.parse(raw) as unknown;
                        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                          it.rawError = "JSON 必须是对象";
                          firstError ??= `MCP ${key} 的 JSON 无效`;
                          continue;
                        }
                        servers[key] = parsed;
                      } catch {
                        it.rawError = "JSON 格式无效";
                        firstError ??= `MCP ${key} 的 JSON 无效`;
                        continue;
                      }
                    } else {
                      const entry = it.draft ?? {};
                      if (it.connectionType === "stdio" && !(entry as { command?: string }).command?.trim()) {
                        firstError ??= `MCP ${key} 缺少 command`;
                        continue;
                      }
                      if (it.connectionType === "url" && !(entry as { url?: string }).url?.trim()) {
                        firstError ??= `MCP ${key} 缺少 url`;
                        continue;
                      }
                      if (
                        it.connectionType === "service" &&
                        (!(entry as { service?: string }).service?.trim() ||
                          !(entry as { serviceUrl?: string }).serviceUrl?.trim())
                      ) {
                        firstError ??= `MCP ${key} 缺少 service/serviceUrl`;
                        continue;
                      }
                      servers[key] = entry;
                    }
                  }
                  state.digitalEmployeeEditMcpItems = nextItems;
                  state.digitalEmployeeEditMcpJson = Object.keys(servers).length > 0 ? JSON.stringify(servers, null, 2) : "";
                  if (firstError) {
                    state.digitalEmployeeEditError = firstError;
                    return;
                  }
                }
                await updateDigitalEmployee(state);
                if (!state.digitalEmployeeEditError) {
                  state.digitalEmployeeEditModalOpen = false;
                  void loadDigitalEmployees(state);
                  if (state.tab === "employeeMarket") {
                    state.employeeMarketError = null;
                    const category =
                      state.employeeMarketCategory && state.employeeMarketCategory !== "__all__"
                        ? state.employeeMarketCategory
                        : undefined;
                    void fetchEmployees(
                      { q: state.employeeMarketQuery, category },
                      { gatewayHost: state.settings?.gatewayUrl?.trim(), token: state.settings?.token?.trim() },
                    ).then(
                      (items) => (state.employeeMarketItems = items),
                    );
                  }
                }
              },
            })
          : nothing
      }
    </div>
  `;
}
