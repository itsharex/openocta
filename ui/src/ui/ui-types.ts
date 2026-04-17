export type ChatAttachment = {
  id: string;
  dataUrl: string;
  mimeType: string;
  filename?: string;
  sizeBytes?: number;
  kind?: "image" | "file";
};

export type ChatQueueItem = {
  id: string;
  /** 所属会话，用于多会话并行时隔离队列展示与发送 */
  sessionKey: string;
  text: string;
  createdAt: number;
  attachments?: ChatAttachment[];
  refreshSessions?: boolean;
};

export const CRON_CHANNEL_LAST = "last";

export type CronFormState = {
  name: string;
  description: string;
  agentId: string;
  digitalEmployeeId: string;
  enabled: boolean;
  scheduleKind: "at" | "every" | "cron";
  scheduleAt: string;
  everyAmount: string;
  everyUnit: "minutes" | "hours" | "days";
  cronExpr: string;
  cronTz: string;
  sessionTarget: "main" | "isolated";
  wakeMode: "next-heartbeat" | "now";
  payloadKind: "systemEvent" | "agentTurn";
  payloadText: string;
  deliveryMode: "none" | "announce";
  deliveryChannel: string;
  deliveryTo: string;
  timeoutSeconds: string;
};
