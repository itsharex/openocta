import { html, type TemplateResult } from "lit";
import { icons } from "../icons.js";

function showPlazaHint(e: Event) {
  const hint = (e.currentTarget as HTMLElement).closest(".plaza-help-hint");
  if (!hint) {
    return;
  }
  const tooltip = hint.querySelector(".plaza-help-hint__tooltip") as HTMLElement | null;
  if (!tooltip) {
    return;
  }
  const rect = hint.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top = `${rect.bottom + 6}px`;
  tooltip.classList.add("is-visible");
}

function hidePlazaHint(e: Event) {
  const hint = (e.currentTarget as HTMLElement).closest(".plaza-help-hint");
  if (!hint) {
    return;
  }
  const tooltip = hint.querySelector(".plaza-help-hint__tooltip") as HTMLElement | null;
  if (!tooltip) {
    return;
  }
  window.setTimeout(() => {
    if (!hint.matches(":hover") && !tooltip.matches(":hover")) {
      tooltip.classList.remove("is-visible");
    }
  }, 100);
}

/** 带悬浮说明的问号图标，tooltip 使用 fixed 定位以跳出 modal 裁剪 */
export function renderPlazaHelpHint(text: string, label?: string): TemplateResult {
  return html`
    <span
      class="plaza-help-hint"
      aria-label=${label ?? "说明"}
      @mouseenter=${showPlazaHint}
      @mouseleave=${hidePlazaHint}
    >
      ${icons.helpCircle}
      <span
        class="plaza-help-hint__tooltip"
        @mouseenter=${showPlazaHint}
        @mouseleave=${hidePlazaHint}
      >${text}</span>
    </span>
  `;
}
