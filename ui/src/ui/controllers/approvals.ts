import type { GatewayBrowserClient } from "../gateway.ts";

export type ApprovalEntry = {
  id: string;
  sessionId: string;
  sessionKey?: string;
  command: string;
  createdAt: number;
  timeoutAt?: number;
  ttlSeconds?: number;
  status: "pending" | "approved" | "denied" | "expired";
};

export type ApprovalsListResult = {
  storePath: string;
  entries: ApprovalEntry[];
};

export type ApprovalsState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  approvalsLoading: boolean;
  approvalsResult: ApprovalsListResult | null;
  approvalsError: string | null;
};

export async function loadApprovalsList(state: ApprovalsState) {
  if (!state.client || !state.connected) return;
  state.approvalsLoading = true;
  state.approvalsError = null;
  try {
    const res = await state.client.request<ApprovalsListResult | undefined>("approvals.list", {});
    state.approvalsResult = res ?? { storePath: "", entries: [] };
  } catch (err) {
    state.approvalsError = String(err);
    state.approvalsResult = null;
  } finally {
    state.approvalsLoading = false;
  }
}

export async function approveApproval(
  state: ApprovalsState,
  requestId: string,
  approverId: string,
  ttlSeconds?: number,
) {
  if (!state.client || !state.connected) return;
  await state.client.request("approvals.approve", {
    requestId,
    approverId,
    ttlSeconds: ttlSeconds ?? 3600,
  });
  await loadApprovalsList(state);
}

export async function denyApproval(
  state: ApprovalsState,
  requestId: string,
  approverId: string,
  reason?: string,
) {
  if (!state.client || !state.connected) return;
  await state.client.request("approvals.deny", {
    requestId,
    approverId,
    reason: reason ?? "",
  });
  await loadApprovalsList(state);
}
