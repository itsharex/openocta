import { describe, expect, it } from "vitest";
import { extractFileBlocks, extractFileBlocksFromA2UIBlocks } from "./file-blocks.ts";

describe("extractFileBlocksFromA2UIBlocks", () => {
  it("parses @@OPENOCTA_ATTACHMENTS@@ from A2UI Text components", () => {
    const blocks = [
      {
        version: "v0.9",
        createSurface: { surfaceId: "main", catalogId: "basic" },
      },
      {
        version: "v0.9",
        updateComponents: {
          surfaceId: "main",
          components: [
            {
              id: "root",
              component: "Text",
              text: '已生成报告\n@@OPENOCTA_ATTACHMENTS@@\n[{"type":"file","filename":"report.html","mimeType":"text/html","data":"PGgxPm9rPC9oMT4="}]',
            },
          ],
        },
      },
    ];
    const files = extractFileBlocksFromA2UIBlocks(blocks);
    expect(files).toHaveLength(1);
    expect(files[0]?.filename).toBe("report.html");
    expect(files[0]?.mimeType).toBe("text/html");
    expect(files[0]?.isPreviewable).toBe(true);
  });

  it("extracts Image component URLs as previewable files", () => {
    const blocks = [
      {
        version: "v0.9",
        createSurface: { surfaceId: "main", catalogId: "basic" },
      },
      {
        version: "v0.9",
        updateComponents: {
          surfaceId: "main",
          components: [
            {
              id: "img",
              component: "Image",
              url: "data:image/png;base64,abcd",
              description: "chart",
            },
          ],
        },
      },
    ];
    const files = extractFileBlocksFromA2UIBlocks(blocks);
    expect(files).toHaveLength(1);
    expect(files[0]?.mimeType).toBe("image/png");
    expect(files[0]?.isPreviewable).toBe(true);
  });

  it("includes a2ui blocks when extracting from assistant messages", () => {
    const message = {
      role: "assistant",
      content: [
        {
          type: "a2ui",
          a2ui: {
            version: "v0.9",
            updateComponents: {
              surfaceId: "main",
              components: [
                {
                  id: "root",
                  component: "Text",
                  text: '@@OPENOCTA_ATTACHMENTS@@\n[{"type":"file","filename":"notes.txt","mimeType":"text/plain","data":"aGk="}]',
                },
              ],
            },
          },
        },
      ],
    };
    const files = extractFileBlocks(message);
    expect(files).toHaveLength(1);
    expect(files[0]?.filename).toBe("notes.txt");
  });
});
