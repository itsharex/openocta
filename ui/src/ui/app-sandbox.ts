import type { AppViewState } from "./app-view-state.ts";
import { getSandboxFromConfig, saveSandboxConfig } from "./controllers/sandbox.ts";
import type { SandboxConfigForm } from "./controllers/sandbox.ts";
import { loadConfig } from "./controllers/config.ts";
import { saveConfigPatch } from "./controllers/config.ts";
import { cloneConfigObject } from "./controllers/config/form-utils.ts";
import { setPathValue } from "./controllers/config/form-utils.ts";

/** Sync sandbox form from config when entering tab or after config load. */
export function syncSandboxFromConfig(host: AppViewState): SandboxConfigForm | null {
  const current = getSandboxFromConfig(host);
  if (current == null) return null;
  return cloneConfigObject(current) as SandboxConfigForm;
}

export function handleSandboxToggleEnabled(host: AppViewState) {
  if (!host.client || !host.connected) return;
  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {}) as Record<
    string,
    unknown
  >;
  if (!base.sandbox || typeof base.sandbox !== "object") {
    base.sandbox = {};
  }
  const sb = base.sandbox as Record<string, unknown>;
  sb.enabled = !(sb.enabled === true);
  // 更新本地表单状态，确保按钮状态立即刷新
  host.sandboxForm = cloneConfigObject(base.sandbox) as SandboxConfigForm;
  host.configSaving = true;
  host.lastError = null;
  saveConfigPatch(host, { sandbox: base.sandbox })
    .then(() => loadConfig(host))
    .finally(() => {
      host.configSaving = false;
    });
}

export function handleSandboxPatch(
  host: AppViewState,
  sandboxForm: Record<string, unknown>,
  path: string[],
  value: unknown,
) {
  setPathValue(sandboxForm, path, value);
}

export async function handleSandboxSave(
  host: AppViewState,
  sandboxForm: SandboxConfigForm | Record<string, unknown>,
) {
  const current = (sandboxForm as SandboxConfigForm) ?? {};
  const normalized = cloneConfigObject(current) as SandboxConfigForm;
  // 默认安全钩子：若未显式配置，则在保存时写入为 true
  const hooks = (normalized.hooks ?? {}) as NonNullable<SandboxConfigForm["hooks"]>;
  if (hooks.beforeAgent == null) hooks.beforeAgent = true;
  if (hooks.beforeModel == null) hooks.beforeModel = true;
  if (hooks.afterModel == null) hooks.afterModel = true;
  if (hooks.beforeTool == null) hooks.beforeTool = true;
  if (hooks.afterTool == null) hooks.afterTool = true;
  if (hooks.afterAgent == null) hooks.afterAgent = true;
  normalized.hooks = hooks;

  // 解析资源限制中的内存字符串（支持 1G、512M、1024 等，统一存为字节数）
  const rl = (normalized.resourceLimit ?? {}) as NonNullable<SandboxConfigForm["resourceLimit"]> & {
    maxMemoryBytes?: number | string;
    maxDiskBytes?: number | string;
  };
  let errorMsg: string | null = null;
  if (typeof rl.maxMemoryBytes === "string") {
    const parsed = parseByteSize(rl.maxMemoryBytes);
    if (parsed == null && rl.maxMemoryBytes.trim() !== "") {
      errorMsg = "Invalid max memory format, use e.g. 1G, 512M, 1024";
    } else {
      rl.maxMemoryBytes = parsed ?? undefined;
    }
  }
  if (!errorMsg && typeof rl.maxDiskBytes === "string") {
    const parsed = parseByteSize(rl.maxDiskBytes);
    if (parsed == null && rl.maxDiskBytes.trim() !== "") {
      errorMsg = "Invalid max disk format, use e.g. 10G, 100G, 10240";
    } else {
      rl.maxDiskBytes = parsed ?? undefined;
    }
  }
  if (errorMsg) {
    host.lastError = errorMsg;
    return;
  }
  normalized.resourceLimit = rl;

  await saveSandboxConfig(host, normalized);
  host.sandboxForm = syncSandboxFromConfig(host);
}

// parseByteSize 将诸如 "1G"、"512M"、"1024" 等字符串解析为字节数。
function parseByteSize(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/^(\d+(?:\.\d+)?)(\s*)([kKmMgGtT]?[bB]?)?$/);
  if (!match) return null;
  const value = Number.parseFloat(match[1]);
  if (!Number.isFinite(value)) return null;
  const unitRaw = (match[3] ?? "").toUpperCase();
  let multiplier = 1;
  switch (unitRaw) {
    case "K":
    case "KB":
      multiplier = 1024;
      break;
    case "M":
    case "MB":
      multiplier = 1024 ** 2;
      break;
    case "G":
    case "GB":
      multiplier = 1024 ** 3;
      break;
    case "T":
    case "TB":
      multiplier = 1024 ** 4;
      break;
    default:
      multiplier = 1;
      break;
  }
  return Math.round(value * multiplier);
}
