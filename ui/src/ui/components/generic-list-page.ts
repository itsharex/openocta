import { LitElement, html, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, type Ref } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("generic-list-page")
export class GenericListPage<T> extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ attribute: false }) items: T[] = [];
  @property({ attribute: false }) renderItem: (item: T, index: number) => TemplateResult = () => html``;
  @property({ attribute: false }) keyFn: (item: T, index: number) => unknown = (_item, index) => index;
  @property({ type: Number }) initialCount = 24;
  @property({ type: Number }) batchSize = 24;
  @property({ type: String }) containerClass = "";
  @property({ type: String }) sentinelLabel = "继续加载";
  @property({ type: Boolean }) disabled = false;

  @state() private visibleCount = this.initialCount;

  private observer?: IntersectionObserver;
  private sentinelRef: Ref<HTMLDivElement> = createRef();
  private observedSentinel?: HTMLDivElement;
  private previousKeys = "";

  protected willUpdate() {
    const keys = this.items.map((item, index) => String(this.keyFn(item, index))).join("");
    if (keys !== this.previousKeys) {
      this.previousKeys = keys;
      this.visibleCount = this.initialCount;
    }
  }

  protected updated() {
    this.observeSentinel();
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    super.disconnectedCallback();
  }

  private observeSentinel() {
    const sentinel = this.sentinelRef.value;
    if (this.disabled || !sentinel || this.visibleCount >= this.items.length) {
      this.observer?.disconnect();
      this.observer = undefined;
      this.observedSentinel = undefined;
      return;
    }

    if (this.observer && this.observedSentinel === sentinel) return;

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        this.visibleCount = Math.min(this.items.length, this.visibleCount + this.batchSize);
      },
      { root: null, rootMargin: "600px 0px", threshold: 0.01 },
    );
    this.observedSentinel = sentinel;
    this.observer.observe(sentinel);
  }

  render() {
    const visibleItems = this.disabled ? this.items : this.items.slice(0, this.visibleCount);
    const hasMore = !this.disabled && this.visibleCount < this.items.length;

    return html`
      <div class=${this.containerClass}>
        ${repeat(
          visibleItems,
          (item, index) => this.keyFn(item, index),
          (item, index) => this.renderItem(item, index),
        )}
      </div>
      ${hasMore
        ? html`
            <div
              ${ref(this.sentinelRef)}
              class="generic-list-sentinel"
              role="status"
              aria-label=${`${this.sentinelLabel}，已显示 ${visibleItems.length} / ${this.items.length}`}
            >
              <span>${this.sentinelLabel}</span>
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "generic-list-page": GenericListPage<unknown>;
  }
}
