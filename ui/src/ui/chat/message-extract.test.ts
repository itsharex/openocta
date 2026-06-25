import { describe, expect, it } from "vitest";
import {
  extractText,
  extractTextCached,
  extractThinking,
  extractThinkingCached,
} from "./message-extract.ts";

describe("extractTextCached", () => {
  it("matches extractText output", () => {
    const message = {
      role: "assistant",
      content: [{ type: "text", text: "Hello there" }],
    };
    expect(extractTextCached(message)).toBe(extractText(message));
  });

  it("hides placeholder text when tool calls are present", () => {
    const message = {
      role: "assistant",
      content: [
        { type: "text", text: "." },
        { type: "toolCall", id: "bash:1", name: "bash", arguments: { command: "ls" } },
      ],
    };
    expect(extractText(message)).toBeNull();
  });

  it("hides leaked empty-response API payloads", () => {
    const leaked =
      "(Empty response: {'content':[{'type':'thinking','thinking':'hi'}],'stop_reason':'end_turn'})";
    const message = {
      role: "assistant",
      content: [{ type: "text", text: leaked }],
    };
    expect(extractText(message)).toBeNull();
  });

  it("returns consistent output for repeated calls", () => {
    const message = {
      role: "user",
      content: "plain text",
    };
    expect(extractTextCached(message)).toBe("plain text");
    expect(extractTextCached(message)).toBe("plain text");
  });
});

describe("extractThinkingCached", () => {
  it("extracts reasoning_content from message root", () => {
    const message = {
      role: "assistant",
      reasoning_content: "Step one\nStep two",
      content: [{ type: "text", text: "Answer" }],
    };
    expect(extractThinking(message)).toBe("Step one\nStep two");
  });

  it("matches extractThinking output", () => {
    const message = {
      role: "assistant",
      content: [{ type: "thinking", thinking: "Plan A" }],
    };
    expect(extractThinkingCached(message)).toBe(extractThinking(message));
  });

  it("returns consistent output for repeated calls", () => {
    const message = {
      role: "assistant",
      content: [{ type: "thinking", thinking: "Plan A" }],
    };
    expect(extractThinkingCached(message)).toBe("Plan A");
    expect(extractThinkingCached(message)).toBe("Plan A");
  });
});
