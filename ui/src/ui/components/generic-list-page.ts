import { html, type TemplateResult } from "lit";
import { AsyncDirective } from "lit/async-directive.js";
import { directive, type PartInfo, PartType } from "lit/directive.js";
import { repeat } from "lit/directives/repeat.js";

let genericListPageId = 0;

export type GenericListPageOptions<T> = {
  items: T[];
  renderItem: (item: T, index: number) => TemplateResult;
  keyFn?: (item: T, index: number) => unknown;
  initialCount?: number;
  batchSize?: number;
  containerClass?: string;
  sentinelLabel?: string;
  disabled?: boolean;
};

class GenericListPageDirective<T> extends AsyncDirective {
  private readonly sentinelId = `generic-list-sentinel-${++genericListPageId}`;
  private visibleCount = 0;
  private observer?: IntersectionObserver;
  private keys = "";
  private options?: GenericListPageOptions<T>;

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error("genericListPage can only be used in child expressions");
    }
  }

  disconnected() {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  reconnected() {
    this.scheduleObserve();
  }

  render(options: GenericListPageOptions<T>) {
    this.options = options;
    const items = options.items ?? [];
    const keyFn = options.keyFn ?? ((_item: T, index: number) => index);
    const initialCount = options.initialCount ?? 24;
    const nextKeys = items.map((item, index) => String(keyFn(item, index))).join("");

    if (nextKeys !== this.keys) {
      this.keys = nextKeys;
      this.visibleCount = initialCount;
    } else if (this.visibleCount === 0) {
      this.visibleCount = initialCount;
    }

    const visibleItems = options.disabled ? items : items.slice(0, this.visibleCount);
    const hasMore = !options.disabled && this.visibleCount < items.length;

    this.scheduleObserve();

    return html`
      <div class=${options.containerClass ?? ""}>
        ${repeat(
          visibleItems,
          (item, index) => keyFn(item, index),
          (item, index) => options.renderItem(item, index),
        )}
      </div>
      ${hasMore
        ? html`
            <div
              id=${this.sentinelId}
              class="generic-list-sentinel"
              role="status"
              aria-label=${`${options.sentinelLabel ?? "继续加载"}，已显示 ${visibleItems.length} / ${items.length}`}
            >
              <span>${options.sentinelLabel ?? "继续加载"}</span>
            </div>
          `
        : ""}
    `;
  }

  update(_part: unknown, [options]: [GenericListPageOptions<T>]) {
    return this.render(options);
  }

  private scheduleObserve() {
    queueMicrotask(() => this.observeSentinel());
  }

  private observeSentinel() {
    const sentinel = document.getElementById(this.sentinelId);

    if (!sentinel || !this.options || this.visibleCount >= (this.options.items?.length ?? 0)) {
      this.observer?.disconnect();
      this.observer = undefined;
      return;
    }

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || !this.options) return;
        this.visibleCount = Math.min(
          this.options.items.length,
          this.visibleCount + (this.options.batchSize ?? 24),
        );
        this.setValue(this.render(this.options));
      },
      { root: null, rootMargin: "600px 0px", threshold: 0.01 },
    );
    this.observer.observe(sentinel);
  }
}

const genericListPageDirective = directive(GenericListPageDirective);

export function genericListPage<T>(options: GenericListPageOptions<T>) {
  return genericListPageDirective(options as GenericListPageOptions<unknown>);
}
