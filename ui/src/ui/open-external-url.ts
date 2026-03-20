import { gatewayHttpBase } from "./gateway-url.ts";

function normalizeExternalHref(url: string): string | null {
  const raw = (url ?? "").trim();
  if (!raw) return null;
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.href;
  } catch {
    return null;
  }
}

/**
 * Open an http(s) URL: new browser tab when possible.
 * - Wails：优先 window.runtime.BrowserOpenURL（Wails 注入脚本时）。
 * - 桌面 WebView 加载的是网关 http://127.0.0.1:18900 时通常 **没有** runtime，若先走 window.open，
 *   WebView2 会再开一个内嵌弹出窗（用户感知为「弹框」），同时系统浏览器也可能被打开。
 *   因此在有 Gateway + token 时 **先于 window.open** 调用 POST /api/desktop/open-url，由网关调系统浏览器。
 * - 纯浏览器环境：window.open，失败再 navigation。
 */
export async function openExternalUrl(
  url: string,
  opts?: { gatewayHost?: string; gatewayToken?: string },
): Promise<void> {
  const href = normalizeExternalHref(url);
  if (!href) return;

  const runtime = (globalThis as unknown as { runtime?: { BrowserOpenURL?: (u: string) => void } })
    .runtime;
  if (typeof runtime?.BrowserOpenURL === "function") {
    try {
      runtime.BrowserOpenURL(href);
      return;
    } catch {
      /* fall through */
    }
  }

  const base = gatewayHttpBase((opts?.gatewayHost ?? "").trim());
  const token = (opts?.gatewayToken ?? "").trim();
  if (base && token) {
    try {
      const res = await fetch(`${base.replace(/\/$/, "")}/api/desktop/open-url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "X-Gateway-Token": token,
        },
        body: JSON.stringify({ url: href }),
      });
      if (res.ok) {
        const data = (await res.json()) as { ok?: boolean };
        if (data.ok === true) {
          return;
        }
      }
    } catch {
      /* fall through */
    }
  }

  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (opened) {
    try {
      opened.opener = null;
    } catch {
      /* ignore */
    }
    return;
  }

  window.location.assign(href);
}
