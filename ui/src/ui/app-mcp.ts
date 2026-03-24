import type { AppViewState } from "./app-view-state.ts";
import { loadConfig } from "./controllers/config.ts";
import { saveConfigPatch } from "./controllers/config.ts";
import { cloneConfigObject } from "./controllers/config/form-utils.ts";
import type { McpServerEntry } from "./views/mcp.ts";

export function handleMcpRefresh(host: AppViewState) {
  loadConfig(host);
}

export function handleMcpViewModeChange(host: AppViewState, mode: "list" | "card") {
  host.mcpViewMode = mode;
}

export function handleMcpAddServer(host: AppViewState) {
  host.mcpAddModalOpen = true;
  host.mcpAddName = "";
  host.mcpAddDraft = { enabled: true, command: "npx" };
  host.mcpAddConnectionType = "stdio";
  host.mcpAddEditMode = "form";
  host.mcpAddRawJson = JSON.stringify({ enabled: true }, null, 2);
  host.mcpAddRawError = null;
}

export function handleMcpAddClose(host: AppViewState) {
  host.mcpAddModalOpen = false;
  host.mcpAddName = "";
  host.mcpAddRawError = null;
}

export function handleMcpAddNameChange(host: AppViewState, name: string) {
  host.mcpAddName = name;
}

export function handleMcpAddFormPatch(host: AppViewState, patch: Partial<McpServerEntry>) {
  host.mcpAddDraft = { ...host.mcpAddDraft, ...patch };
}

export function handleMcpAddConnectionTypeChange(host: AppViewState, type: "stdio" | "url" | "service") {
  host.mcpAddConnectionType = type;
}

export function handleMcpAddRawChange(host: AppViewState, json: string) {
  host.mcpAddRawJson = json;
  try {
    const parsed = JSON.parse(json) as McpServerEntry;
    host.mcpAddDraft = parsed;
    host.mcpAddRawError = null;
  } catch {
    host.mcpAddRawError = "Invalid JSON";
  }
}

export function handleMcpAddEditModeChange(host: AppViewState, mode: "form" | "raw") {
  host.mcpAddEditMode = mode;
  if (mode === "raw") {
    host.mcpAddRawJson = JSON.stringify(host.mcpAddDraft, null, 2);
  }
}

export async function handleMcpAddSubmit(host: AppViewState) {
  const name = host.mcpAddName?.trim();
  if (!name) {
    return;
  }
  const key = name.toLowerCase().replace(/\s+/g, "-");
  if (host.mcpAddEditMode === "raw") {
    try {
      host.mcpAddDraft = JSON.parse(host.mcpAddRawJson) as McpServerEntry;
    } catch {
      host.mcpAddRawError = "Invalid JSON";
      return;
    }
  } else {
    const type = host.mcpAddConnectionType;
    const d = host.mcpAddDraft as McpServerEntry;
    if (type === "stdio" && !d.command?.trim()) return;
    if (type === "url" && !d.url?.trim()) return;
    if (type === "service" && (!d.service?.trim() || !d.serviceUrl?.trim())) return;
  }
  if (!host.configForm && host.configSnapshot?.config) {
    host.configForm = cloneConfigObject(host.configSnapshot.config as Record<string, unknown>);
  }
  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {});
  if (!base.mcp) {
    base.mcp = { servers: {} };
  }
  const mcp = base.mcp as { servers?: Record<string, McpServerEntry> };
  if (!mcp.servers) {
    mcp.servers = {};
  }
  const draftEnabled = (host.mcpAddDraft as { enabled?: unknown }).enabled;
  const enabled = typeof draftEnabled === "boolean" ? draftEnabled : true;
  mcp.servers[key] = { ...(host.mcpAddDraft as McpServerEntry), enabled };
  host.configForm = base;
  host.configFormDirty = true;
  await saveConfigPatch(host, { mcp: base.mcp });
  host.mcpAddModalOpen = false;
  host.mcpAddName = "";
}

function inferConnectionType(entry: McpServerEntry | undefined): "stdio" | "url" | "service" {
  if (!entry) return "stdio";
  if (entry.command) return "stdio";
  if (entry.url) return "url";
  if (entry.service && entry.serviceUrl) return "service";
  return "stdio";
}

export function handleMcpSelect(host: AppViewState, key: string | null) {
  host.mcpSelectedKey = key;
  host.mcpRawError = null;
  if (key) {
    const servers = (host.configForm?.mcp as { servers?: Record<string, McpServerEntry> })?.servers ?? {};
    const entry = servers[key];
    host.mcpRawJson = entry ? JSON.stringify(entry, null, 2) : "{}";
    host.mcpEditConnectionType = inferConnectionType(entry);
  }
}

export function handleMcpEditConnectionTypeChange(host: AppViewState, type: "stdio" | "url" | "service") {
  host.mcpEditConnectionType = type;
}

export function handleMcpToggle(host: AppViewState, key: string, enabled: boolean) {
  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {});
  if (!base.mcp) {
    base.mcp = { servers: {} };
  }
  const mcp = base.mcp as { servers?: Record<string, McpServerEntry> };
  if (!mcp.servers) {
    mcp.servers = {};
  }
  if (!mcp.servers[key]) {
    mcp.servers[key] = {};
  }
  mcp.servers[key] = { ...mcp.servers[key], enabled };
  host.configForm = base;
  host.configFormDirty = true;
  saveConfigPatch(host, { mcp: base.mcp });
}

export function handleMcpFormPatch(host: AppViewState, key: string, patch: Partial<McpServerEntry>) {
  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {});
  if (!base.mcp) {
    base.mcp = { servers: {} };
  }
  const mcp = base.mcp as { servers?: Record<string, McpServerEntry> };
  if (!mcp.servers) {
    mcp.servers = {};
  }
  const current = mcp.servers[key] ?? {};
  mcp.servers[key] = { ...current, ...patch };
  host.configForm = base;
  host.configFormDirty = true;
  host.mcpFormDirty = true;
}

export function handleMcpRawChange(host: AppViewState, key: string, json: string) {
  host.mcpRawJson = json;
  try {
    const parsed = JSON.parse(json) as McpServerEntry;
    const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {});
    if (!base.mcp) {
      base.mcp = { servers: {} };
    }
    const mcp = base.mcp as { servers?: Record<string, McpServerEntry> };
    if (!mcp.servers) {
      mcp.servers = {};
    }
    mcp.servers[key] = parsed;
    host.configForm = base;
    host.configFormDirty = true;
    host.mcpRawError = null;
  } catch {
    host.mcpRawError = "Invalid JSON";
  }
}

export function handleMcpSave(host: AppViewState) {
  if (!host.mcpSelectedKey) {
    return;
  }
  if (host.mcpEditMode === "raw") {
    try {
      JSON.parse(host.mcpRawJson);
    } catch {
      host.mcpRawError = "Invalid JSON";
      return;
    }
  }
  const patch = { mcp: { servers: host.configForm?.mcp ? (host.configForm.mcp as { servers?: Record<string, McpServerEntry> }).servers : {} } };
  saveConfigPatch(host, patch);
  host.mcpFormDirty = false;
  host.mcpSelectedKey = null;
}

export function handleMcpCancel(host: AppViewState) {
  host.mcpSelectedKey = null;
  host.mcpRawError = null;
  if (host.mcpFormDirty) {
    loadConfig(host);
  }
}

export async function handleMcpDelete(host: AppViewState, key: string) {
  const trimmed = (key ?? "").trim();
  if (!trimmed) {
    return;
  }

  if (host.client && host.connected) {
    let baseHash = host.configSnapshot?.hash;
    if (!baseHash) {
      await loadConfig(host);
      baseHash = host.configSnapshot?.hash;
    }
    if (!baseHash) {
      host.lastError = "Config hash missing; reload and retry.";
      return;
    }
    host.configSaving = true;
    host.lastError = null;
    try {
      await host.client.request("mcp.servers.delete", { serverKey: trimmed, baseHash });
      host.configFormDirty = false;
      await loadConfig(host);
    } catch (err) {
      host.lastError = String(err);
    } finally {
      host.configSaving = false;
    }
  } else {
    const base = host.configForm ?? host.configSnapshot?.config;
    const mcp = base?.mcp as { servers?: Record<string, McpServerEntry> } | undefined;
    if (mcp?.servers && trimmed in mcp.servers) {
      await saveConfigPatch(host, { mcp: { servers: { [trimmed]: null } } });
    }
  }

  if (host.mcpSelectedKey === trimmed || host.mcpSelectedKey === key) {
    host.mcpSelectedKey = null;
  }
}
