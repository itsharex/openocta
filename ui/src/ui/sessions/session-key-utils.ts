export type ParsedAgentSessionKey = {
  agentId: string;
  rest: string;
};

/** 与网关 chat.send 一致：TrimSpace + ToLower，避免 WebSocket 事件与 UI 会话 key 大小写不一致时丢弃 final。 */
export function canonicalGatewaySessionKey(sessionKey: string | undefined | null): string {
  return (sessionKey ?? "").trim().toLowerCase();
}

export function gatewaySessionKeysEqual(
  a: string | undefined | null,
  b: string | undefined | null,
): boolean {
  return canonicalGatewaySessionKey(a) === canonicalGatewaySessionKey(b);
}

export function parseAgentSessionKey(
  sessionKey: string | undefined | null,
): ParsedAgentSessionKey | null {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return null;
  }
  const parts = raw.split(":").filter(Boolean);
  if (parts.length < 3) {
    return null;
  }
  if (parts[0] !== "agent") {
    return null;
  }
  const agentId = parts[1]?.trim();
  const rest = parts.slice(2).join(":");
  if (!agentId || !rest) {
    return null;
  }
  return { agentId, rest };
}

export function isSubagentSessionKey(sessionKey: string | undefined | null): boolean {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return false;
  }
  if (raw.toLowerCase().startsWith("subagent:")) {
    return true;
  }
  const parsed = parseAgentSessionKey(raw);
  return Boolean((parsed?.rest ?? "").toLowerCase().startsWith("subagent:"));
}

export function isAcpSessionKey(sessionKey: string | undefined | null): boolean {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return false;
  }
  const normalized = raw.toLowerCase();
  if (normalized.startsWith("acp:")) {
    return true;
  }
  const parsed = parseAgentSessionKey(raw);
  return Boolean((parsed?.rest ?? "").toLowerCase().startsWith("acp:"));
}

/** UI 为数字员工新开线程时生成的 key：首条消息写入前可能尚不在 sessions.list 中。 */
export function isEmployeeRunSessionKey(sessionKey: string | undefined | null): boolean {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return false;
  }
  return /^agent:[^:]+:employee:[^:]+:run:.+/i.test(raw);
}

/** 稳定态数字员工 Web 会话 agent:*:employee:*（恰好四段，无 :run:）。sessions.ensure 写入前可能不在 list。 */
export function isStableEmployeeWebchatSessionKey(sessionKey: string | undefined | null): boolean {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return false;
  }
  return /^agent:[^:]+:employee:[^:]+$/i.test(raw);
}

const THREAD_SESSION_MARKERS = [":thread:", ":topic:"];

export function resolveThreadParentSessionKey(
  sessionKey: string | undefined | null,
): string | null {
  const raw = (sessionKey ?? "").trim();
  if (!raw) {
    return null;
  }
  const normalized = raw.toLowerCase();
  let idx = -1;
  for (const marker of THREAD_SESSION_MARKERS) {
    const candidate = normalized.lastIndexOf(marker);
    if (candidate > idx) {
      idx = candidate;
    }
  }
  if (idx <= 0) {
    return null;
  }
  const parent = raw.slice(0, idx).trim();
  return parent ? parent : null;
}
