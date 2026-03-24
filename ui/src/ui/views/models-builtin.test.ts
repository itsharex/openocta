import { describe, expect, it } from "vitest";
import { BUILTIN_PROVIDERS, parseModelRef, formatModelRef } from "./models-builtin.ts";

describe("BUILTIN_PROVIDERS MiniMax", () => {
  const minimax = BUILTIN_PROVIDERS.find((p) => p.id === "minimax");

  it("has minimax provider in the list", () => {
    expect(minimax).toBeDefined();
  });

  it("uses MiniMax-M2.7 as default model", () => {
    expect(minimax!.defaultModel).toBe("MiniMax-M2.7");
  });

  it("uses Anthropic Messages API endpoint", () => {
    expect(minimax!.baseUrl).toBe("https://api.minimax.io/anthropic");
  });

  it("uses anthropic-messages API type", () => {
    expect(minimax!.defaultApi).toBe("anthropic-messages");
  });

  it("uses MINIMAX_API_KEY env key", () => {
    expect(minimax!.envKey).toBe("MINIMAX_API_KEY");
  });

  it("has MiniMax label", () => {
    expect(minimax!.label).toBe("MiniMax");
  });
});

describe("parseModelRef with MiniMax", () => {
  it("parses minimax/MiniMax-M2.7", () => {
    const result = parseModelRef("minimax/MiniMax-M2.7");
    expect(result).toEqual({ provider: "minimax", modelId: "MiniMax-M2.7" });
  });

  it("parses minimax/MiniMax-M2.7-highspeed", () => {
    const result = parseModelRef("minimax/MiniMax-M2.7-highspeed");
    expect(result).toEqual({ provider: "minimax", modelId: "MiniMax-M2.7-highspeed" });
  });

  it("returns null for null input", () => {
    expect(parseModelRef(null)).toBeNull();
  });

  it("returns null for undefined", () => {
    expect(parseModelRef(undefined)).toBeNull();
  });
});

describe("formatModelRef with MiniMax", () => {
  it("formats minimax model ref correctly", () => {
    expect(formatModelRef("minimax", "MiniMax-M2.7")).toBe("minimax/MiniMax-M2.7");
  });

  it("formats minimax highspeed model ref", () => {
    expect(formatModelRef("minimax", "MiniMax-M2.7-highspeed")).toBe("minimax/MiniMax-M2.7-highspeed");
  });
});
