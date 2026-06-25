import { describe, expect, it } from "vitest";
import {
  a2uiMessageSurfaceId,
  dedupeA2UIMessages,
  extractA2UIDisplayText,
  isTextOnlyA2UIDisplay,
  normalizeA2UIMessages,
  BASIC_CATALOG_ID,
} from "./a2ui-bridge.ts";

describe("normalizeA2UIMessages", () => {
  it("maps shorthand catalog ids to the basic catalog", () => {
    const [msg] = normalizeA2UIMessages([
      {
        version: "v0.9",
        createSurface: { surfaceId: "main", catalogId: "basic" },
      },
    ]);
    expect(msg.createSurface?.catalogId).toBe(BASIC_CATALOG_ID);
  });
});

describe("a2uiMessageSurfaceId", () => {
  it("reads surface id from updateDataModel messages", () => {
    expect(
      a2uiMessageSurfaceId({
        version: "v0.9",
        updateDataModel: { surfaceId: "main", path: "/content", value: "hello" },
      }),
    ).toBe("main");
  });
});

describe("dedupeA2UIMessages", () => {
  it("keeps the latest updateDataModel for the same surface/path", () => {
    const first = {
      version: "v0.9",
      updateDataModel: { surfaceId: "main", path: "/content", value: "a" },
    };
    const second = {
      version: "v0.9",
      updateDataModel: {
        surfaceId: "main",
        path: "/content",
        value: "line1\n\n- CHANGELOG.md\n- UPLOAD_FORMAT.md",
      },
    };
    expect(dedupeA2UIMessages([first, second])).toEqual([second]);
  });
});

describe("extractA2UIDisplayText", () => {
  it("reads the latest updateDataModel string value from assistant history", () => {
    const message = {
      role: "assistant",
      content: [
        {
          type: "a2ui",
          a2ui: {
            version: "v0.9",
            updateDataModel: {
              surfaceId: "main",
              path: "/content",
              value: "first draft",
            },
          },
        },
        {
          type: "a2ui",
          a2ui: {
            version: "v0.9",
            updateDataModel: {
              surfaceId: "main",
              path: "/content",
              value: "芬达，目录内容如下",
            },
          },
        },
      ],
    };
    expect(extractA2UIDisplayText(message)).toBe("芬达，目录内容如下");
  });
});

describe("isTextOnlyA2UIDisplay", () => {
  it("detects Column + Text history surfaces as text-only", () => {
    const blocks = [
      {
        version: "v0.9",
        createSurface: {
          catalogId: BASIC_CATALOG_ID,
          surfaceId: "main",
        },
      },
      {
        version: "v0.9",
        updateComponents: {
          surfaceId: "main",
          components: [
            { children: ["body"], component: "Column", id: "root" },
            { component: "Text", id: "body", text: { path: "/content" } },
          ],
        },
      },
      {
        version: "v0.9",
        updateDataModel: {
          path: "/content",
          surfaceId: "main",
          value: "line one\nline two",
        },
      },
    ];
    expect(isTextOnlyA2UIDisplay(blocks)).toBe(true);
  });

  it("returns false when interactive components are present", () => {
    const blocks = [
      {
        version: "v0.9",
        updateComponents: {
          surfaceId: "main",
          components: [{ component: "Button", id: "ok", text: "OK" }],
        },
      },
      {
        version: "v0.9",
        updateDataModel: {
          path: "/content",
          surfaceId: "main",
          value: "hello",
        },
      },
    ];
    expect(isTextOnlyA2UIDisplay(blocks)).toBe(false);
  });
});
