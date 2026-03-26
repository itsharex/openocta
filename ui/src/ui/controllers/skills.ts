import { gatewayHttpBase } from "../gateway-url.ts";
import type { GatewayBrowserClient } from "../gateway.ts";
import type { SkillStatusReport } from "../types.ts";

export type SkillsState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  skillsLoading: boolean;
  skillsReport: SkillStatusReport | null;
  skillsError: string | null;
  skillsBusyKey: string | null;
  skillEdits: Record<string, string>;
  skillMessages: SkillMessageMap;
  gatewayUrl?: string;
  token?: string;
  // Skill detail doc (SKILL.md content)
  skillsSkillDocContent?: string | null;
  skillsSkillDocLoading?: boolean;
  skillsSkillDocError?: string | null;
};

export type SkillMessage = {
  kind: "success" | "error";
  message: string;
};

export type SkillMessageMap = Record<string, SkillMessage>;

type LoadSkillsOptions = {
  clearMessages?: boolean;
};

function setSkillMessage(state: SkillsState, key: string, message?: SkillMessage) {
  if (!key.trim()) {
    return;
  }
  const next = { ...state.skillMessages };
  if (message) {
    next[key] = message;
  } else {
    delete next[key];
  }
  state.skillMessages = next;
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

/**
 * Keys that identify disabled skills in the UI. Uses skillKey plus aliases (name, on-disk folder)
 * so cards keyed by market `folder` stay in sync when they differ from canonical skillKey.
 */
export function disabledSkillKeysFromReport(report: SkillStatusReport | null | undefined): Set<string> {
  const set = new Set<string>();
  const add = (s: string | undefined) => {
    const t = (s ?? "").trim();
    if (t) set.add(t);
  };
  for (const e of report?.skills ?? []) {
    if (!e.disabled) continue;
    add(e.skillKey);
    add(e.name);
    const base = (e.baseDir ?? "").replace(/[/\\]+$/, "");
    if (base) {
      const seg = base.split(/[/\\]/).pop();
      add(seg);
    }
  }
  return set;
}

export async function loadSkills(state: SkillsState, options?: LoadSkillsOptions) {
  if (options?.clearMessages && Object.keys(state.skillMessages).length > 0) {
    state.skillMessages = {};
  }
  if (!state.client || !state.connected) {
    return;
  }
  if (state.skillsLoading) {
    return;
  }
  state.skillsLoading = true;
  state.skillsError = null;
  try {
    const res = await state.client.request<SkillStatusReport | undefined>("skills.status", {});
    if (res) {
      state.skillsReport = res;
    }
  } catch (err) {
    state.skillsError = getErrorMessage(err);
  } finally {
    state.skillsLoading = false;
  }
}

export function updateSkillEdit(state: SkillsState, skillKey: string, value: string) {
  state.skillEdits = { ...state.skillEdits, [skillKey]: value };
}

export async function updateSkillEnabled(state: SkillsState, skillKey: string, enabled: boolean) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    await state.client.request("skills.update", { skillKey, enabled });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: enabled ? "Skill enabled" : "Skill disabled",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function saveSkillApiKey(state: SkillsState, skillKey: string) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const apiKey = state.skillEdits[skillKey] ?? "";
    await state.client.request("skills.update", { skillKey, apiKey });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: "API key saved",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function installSkill(
  state: SkillsState,
  skillKey: string,
  name: string,
  installId: string,
) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const result = await state.client.request<{ message?: string }>("skills.install", {
      name,
      installId,
      timeoutMs: 120000,
    });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: result?.message ?? "Installed",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export type SkillsUploadResult = {
  ok: boolean;
  error?: string;
  template?: string;
};

export async function uploadSkill(
  state: SkillsState,
  name: string,
  file: File,
): Promise<SkillsUploadResult> {
  const url = state.gatewayUrl ? gatewayHttpBase(state.gatewayUrl as string) : "";
  if (!url) {
    return { ok: false, error: "Gateway URL not configured" };
  }
  const form = new FormData();
  form.append("name", name.trim());
  form.append("file", file);
  const headers: Record<string, string> = {};
  if (state.token?.trim()) {
    headers["Authorization"] = `Bearer ${state.token.trim()}`;
  }
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/api/skills/upload`, {
      method: "POST",
      headers,
      body: form,
    });
    const data = (await res.json()) as { ok?: boolean; error?: string; template?: string };
    if (!res.ok) {
      const errMsg =
        res.status === 401
          ? "认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token"
          : (data.error ?? `Upload failed (${res.status})`);
      return { ok: false, error: errMsg, template: data.template };
    }
    return { ok: true };
  } catch (err) {
    const raw = err instanceof Error ? err.message : String(err);
    const msg = raw === "Failed to fetch" ? "网络请求失败，请检查网络连接" : raw;
    return { ok: false, error: msg };
  }
}

export async function deleteSkill(state: SkillsState, skillKey: string): Promise<void> {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    await state.client.request("skills.delete", { skillKey });
    await loadSkills(state, { clearMessages: true });
  } catch (err) {
    state.skillsError = getErrorMessage(err);
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function loadSkillDoc(
  state: SkillsState,
  skillKey: string,
): Promise<void> {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsSkillDocLoading = true;
  state.skillsSkillDocError = null;
  state.skillsSkillDocContent = null;
  try {
    const res = await state.client.request<{ content?: string }>("skills.getDoc", {
      skillKey,
    });
    state.skillsSkillDocContent = res?.content ?? null;
  } catch (err) {
    state.skillsSkillDocError = getErrorMessage(err);
  } finally {
    state.skillsSkillDocLoading = false;
  }
}
