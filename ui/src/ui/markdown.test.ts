import { describe, expect, it } from "vitest";
import { toSanitizedMarkdownHtml } from "./markdown";

describe("toSanitizedMarkdownHtml", () => {
  it("renders basic markdown", () => {
    const html = toSanitizedMarkdownHtml("Hello **world**");
    expect(html).toContain("<strong>world</strong>");
  });

  it("strips scripts and unsafe links", () => {
    const html = toSanitizedMarkdownHtml(
      [
        "<script>alert(1)</script>",
        "",
        "[x](javascript:alert(1))",
        "",
        "[ok](https://example.com)",
      ].join("\n"),
    );
    expect(html).not.toContain("<script");
    expect(html).not.toContain("javascript:");
    expect(html).toContain("https://example.com");
  });

  it("renders fenced code blocks", () => {
    const html = toSanitizedMarkdownHtml(["```ts", "console.log(1)", "```"].join("\n"));
    expect(html).toContain("<pre>");
    expect(html).toContain("<code");
    expect(html).toContain("console.log(1)");
  });

  it("preserves markdown list line breaks", () => {
    const html = toSanitizedMarkdownHtml("files:\n\n- CHANGELOG.md\n- UPLOAD_FORMAT.md");
    expect(html).toContain("<li>");
    expect(html).toContain("CHANGELOG.md");
  });

  it("preserves single newlines as line breaks", () => {
    const html = toSanitizedMarkdownHtml("line one\nline two\ndrwxr-xr-x");
    expect(html).toContain("<br>");
    expect(html).toContain("line one");
    expect(html).toContain("line two");
  });
});
