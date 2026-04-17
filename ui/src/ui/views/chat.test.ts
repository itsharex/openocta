import { render } from "lit";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { SessionsListResult } from "../types.ts";
const nativeConfirmMock = vi.hoisted(() => vi.fn());
vi.mock("../native-dialog-bridge.ts", () => ({
  nativeConfirm: nativeConfirmMock,
}));
import { renderChat, type ChatProps } from "./chat.ts";

function createSessions(): SessionsListResult {
  return {
    ts: 0,
    path: "",
    count: 0,
    defaults: { model: null, contextTokens: null },
    sessions: [],
  };
}

function createProps(overrides: Partial<ChatProps> = {}): ChatProps {
  return {
    sessionKey: "main",
    onSessionKeyChange: () => undefined,
    thinkingLevel: null,
    showThinking: false,
    loading: false,
    sending: false,
    canAbort: false,
    compactionStatus: null,
    messages: [],
    toolMessages: [],
    stream: null,
    streamStartedAt: null,
    assistantAvatarUrl: null,
    draft: "",
    queue: [],
    connected: true,
    canSend: true,
    disabledReason: null,
    error: null,
    sessions: createSessions(),
    focusMode: false,
    assistantName: "OpenClaw",
    assistantAvatar: null,
    onRefresh: () => undefined,
    onToggleFocusMode: () => undefined,
    onDraftChange: () => undefined,
    onSend: () => undefined,
    onQueueRemove: () => undefined,
    confirmQueueRemove: false,
    onNewSession: () => undefined,
    ...overrides,
  };
}

describe("chat view", () => {
  beforeEach(() => {
    nativeConfirmMock.mockReset();
    document.documentElement.lang = "en";
  });

  it("confirms queued message removal on the message page", async () => {
    nativeConfirmMock.mockResolvedValueOnce(true);
    const container = document.createElement("div");
    const onQueueRemove = vi.fn();
    render(
      renderChat(
        createProps({
          queue: [{ id: "q-1", sessionKey: "main", text: "queued", attachments: [] }],
          onQueueRemove,
          confirmQueueRemove: true,
        }),
      ),
      container,
    );

    const removeButton = container.querySelector<HTMLButtonElement>(".chat-queue__remove");
    removeButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await Promise.resolve();

    expect(nativeConfirmMock).toHaveBeenCalledWith("Remove this queued message?");
    expect(onQueueRemove).toHaveBeenCalledWith("q-1");
  });

  it("keeps attachment removal direct without a confirmation prompt", () => {
    const container = document.createElement("div");
    const onAttachmentsChange = vi.fn();
    render(
      renderChat(
        createProps({
          attachments: [
            {
              id: "att-1",
              dataUrl: "data:image/png;base64,abc",
              mimeType: "image/png",
              filename: "demo.png",
              sizeBytes: 12,
              kind: "image",
            },
          ],
          onAttachmentsChange,
        }),
      ),
      container,
    );

    const removeButton = container.querySelector<HTMLButtonElement>(".chat-attachment__remove");
    removeButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(nativeConfirmMock).not.toHaveBeenCalled();
    expect(onAttachmentsChange).toHaveBeenCalledWith([]);
  });

  it("uses chat-empty on the section when the thread is empty", () => {
    const container = document.createElement("div");
    render(renderChat(createProps()), container);

    expect(container.querySelector("section.chat.chat-empty")).not.toBeNull();
    expect(container.querySelector("div.chat-empty")).toBeNull();
    expect(container.textContent).toContain("选一个试试");
  });

  it("disables send when there is no draft content", () => {
    const container = document.createElement("div");
    render(
      renderChat(
        createProps({
          draft: "   ",
          attachments: [],
        }),
      ),
      container,
    );

    const sendButton = container.querySelector<HTMLButtonElement>(".chat-compose__send");
    expect(sendButton?.disabled).toBe(true);
  });

  it("keeps send enabled when attachments exist without draft text", () => {
    const container = document.createElement("div");
    render(
      renderChat(
        createProps({
          draft: "   ",
          attachments: [
            {
              id: "att-1",
              dataUrl: "data:image/png;base64,abc",
              mimeType: "image/png",
              filename: "demo.png",
              sizeBytes: 12,
              kind: "image",
            },
          ],
        }),
      ),
      container,
    );

    const sendButton = container.querySelector<HTMLButtonElement>(".chat-compose__send");
    expect(sendButton?.disabled).toBe(false);
  });

  it("shows a stop button when aborting is available", () => {
    const container = document.createElement("div");
    const onAbort = vi.fn();
    render(
      renderChat(
        createProps({
          canAbort: true,
          onAbort,
        }),
      ),
      container,
    );

    const stopButton = Array.from(container.querySelectorAll("button")).find(
      (btn) => btn.textContent?.trim() === "停止",
    );
    expect(stopButton).not.toBeUndefined();
    stopButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onAbort).toHaveBeenCalledTimes(1);
    expect(container.textContent).not.toContain("新会话");
  });

  it("shows a new session button when aborting is unavailable", () => {
    const container = document.createElement("div");
    const onNewSession = vi.fn();
    render(
      renderChat(
        createProps({
          canAbort: false,
          onNewSession,
        }),
      ),
      container,
    );

    const newSessionButton = Array.from(container.querySelectorAll("button")).find(
      (btn) => btn.textContent?.trim() === "新会话",
    );
    expect(newSessionButton).not.toBeUndefined();
    newSessionButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onNewSession).toHaveBeenCalledTimes(1);
    expect(container.textContent).not.toContain("停止");
  });
});
