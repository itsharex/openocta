import { html } from "lit";
import type { McpListItem, SkillListItem } from "../controllers/remote-market.ts";
import type { ModelProvider } from "./models.ts";
import { computeModelLibraryCategories, type ModelLibraryCategory } from "./model-library.ts";

export function renderSkillCategoryAside(props: {
  items: SkillListItem[];
  selectedCategory: string;
  keyword: string;
  gatewayHost?: string;
  token?: string;
  reloadVersion: number;
  disabled: boolean;
  onSelect: (name: string, descendantNames: string[]) => void;
}) {
  return html`
    <aside class="emp-sidebar" aria-label="技能分类">
      <category-tree-sidebar
        scope="skill"
        .items=${props.items}
        .selectedCategory=${props.selectedCategory || "__all__"}
        .keyword=${props.keyword}
        .gatewayHost=${props.gatewayHost ?? ""}
        .token=${props.token ?? ""}
        .reloadVersion=${props.reloadVersion}
        ?disabled=${props.disabled}
        @category-select=${(e: CustomEvent<{ name: string; descendantNames?: string[] }>) => {
          props.onSelect(e.detail.name, e.detail.descendantNames ?? []);
        }}
      ></category-tree-sidebar>
    </aside>
  `;
}

export function renderToolCategoryAside(props: {
  items: McpListItem[];
  selectedCategory: string;
  keyword: string;
  gatewayHost?: string;
  token?: string;
  reloadVersion: number;
  disabled: boolean;
  onSelect: (name: string, descendantNames: string[]) => void;
}) {
  return html`
    <aside class="emp-sidebar" aria-label="工具分类">
      <category-tree-sidebar
        scope="tool"
        .items=${props.items}
        .selectedCategory=${props.selectedCategory || "__all__"}
        .keyword=${props.keyword}
        .gatewayHost=${props.gatewayHost ?? ""}
        .token=${props.token ?? ""}
        .reloadVersion=${props.reloadVersion}
        ?disabled=${props.disabled}
        @category-select=${(e: CustomEvent<{ name: string; descendantNames?: string[] }>) => {
          props.onSelect(e.detail.name, e.detail.descendantNames ?? []);
        }}
      ></category-tree-sidebar>
    </aside>
  `;
}

export function renderModelCategoryAside(props: {
  providers: Record<string, ModelProvider>;
  providerSearchQuery: string;
  selectedCategory: ModelLibraryCategory;
  disabled: boolean;
  onCategoryChange: (category: ModelLibraryCategory) => void;
}) {
  const { orderedCategories, counts } = computeModelLibraryCategories(
    props.providers,
    props.providerSearchQuery,
  );
  const effectiveCategory = props.selectedCategory ?? "__all__";

  return html`
    <aside class="emp-sidebar" aria-label="模型分类">
      <div class="emp-categories">
        ${orderedCategories.map((catKey) => {
          const label =
            catKey === "__all__" ? "全部" : catKey === "public" ? "公有模型" : "本地模型";
          const active = effectiveCategory === catKey;
          const count = counts.get(catKey) ?? 0;
          return html`
            <button
              class="emp-cat ${active ? "active" : ""}"
              type="button"
              ?disabled=${props.disabled}
              @click=${() => props.onCategoryChange(catKey)}
            >
              <span class="emp-cat__name">${label}</span>
              <span class="emp-cat__count">${count}</span>
            </button>
          `;
        })}
      </div>
    </aside>
  `;
}
