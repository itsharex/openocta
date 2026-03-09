import type { ConfigState } from "./config.ts";
import { loadConfig, saveConfigPatch } from "./config.ts";

export type SandboxConfigForm = {
  enabled?: boolean;
  allowedPaths?: string[];
  networkAllow?: string[];
  root?: string;
  resourceLimit?: { maxCpuPercent?: number; maxMemoryBytes?: number | string; maxDiskBytes?: number | string };
  hooks?: {
    beforeAgent?: boolean;
    beforeModel?: boolean;
    afterModel?: boolean;
    beforeTool?: boolean;
    afterTool?: boolean;
    afterAgent?: boolean;
  };
  validator?: {
    banCommands?: string[];
    banArguments?: string[];
    banFragments?: string[];
    maxLength?: number;
    secretPatterns?: string[];
  };
  approvalStore?: string;
};

/** Read sandbox config from current config form or snapshot. */
export function getSandboxFromConfig(state: ConfigState): SandboxConfigForm | null {
  const cfg = state.configForm ?? (state.configSnapshot?.config as Record<string, unknown> | undefined);
  if (!cfg || typeof cfg !== "object") return null;
  const s = cfg.sandbox;
  if (!s || typeof s !== "object") return null;
  return s as SandboxConfigForm;
}

/** Save sandbox config via config.patch and reload config. */
export async function saveSandboxConfig(state: ConfigState, sandbox: SandboxConfigForm) {
  if (!state.client || !state.connected) return;
  state.configSaving = true;
  (state as { lastError?: string | null }).lastError = null;
  try {
    await saveConfigPatch(state, { sandbox });
    await loadConfig(state);
  } finally {
    state.configSaving = false;
  }
}
