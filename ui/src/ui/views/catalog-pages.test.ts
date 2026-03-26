import { render } from "lit";
import { describe, expect, it, vi } from "vitest";
import type {
  EduCategory,
  EmployeeDetail,
  EmployeeListItem,
  McpDetail,
  McpListItem,
  SkillListItem,
} from "../controllers/remote-market.ts";
import {
  computeEmployeeMarketCategories,
  renderEmployeeMarket,
  type EmployeeMarketProps,
} from "./employee-market.ts";
import {
  computeSkillLibraryCategories,
  renderSkillLibrary,
  type SkillLibraryProps,
} from "./skill-library.ts";
import {
  computeToolLibraryCategories,
  renderToolLibrary,
  type ToolLibraryProps,
} from "./tool-library.ts";
import { renderTutorials, type TutorialsProps } from "./tutorials.ts";

function renderIntoContainer(result: unknown, container: HTMLElement) {
  render(result as never, container);
}

function employeeItems(): EmployeeListItem[] {
  return [
    { id: 1, name: "Prometheus专家", description: "监控专家", category: "安全合规", tags: "monitor,ops" },
    { id: 2, name: "Zabbix专家", description: "告警分析", category: "运维自动化", tags: "alert,ops" },
  ];
}

function employeeProps(overrides: Partial<EmployeeMarketProps> = {}): EmployeeMarketProps {
  return {
    loading: false,
    error: null,
    query: "",
    category: "__all__",
    items: employeeItems(),
    selectedId: null,
    selectedDetail: null,
    installedIds: new Set<string>(),
    installedRemoteIds: new Set<string>(),
    onQueryChange: () => undefined,
    onCategoryChange: () => undefined,
    onRefresh: () => undefined,
    onSelect: () => undefined,
    onDetailClose: () => undefined,
    onInstall: async () => undefined,
    ...overrides,
  };
}

function skillItems(): SkillListItem[] {
  return [
    { folder: "alicloud-ops", name: "alicloud-ops", description: "阿里云巡检", categoryCn: "运维自动化", tags: "eligible,ecs", os: "linux", status: "open" },
    { folder: "elastic-ops", name: "ElasticSearchOps", description: "ES 运维", categoryCn: "安全合规", tags: "eligible,es", os: "linux" },
  ];
}

function skillProps(overrides: Partial<SkillLibraryProps> = {}): SkillLibraryProps {
  return {
    loading: false,
    error: null,
    installSuccess: null,
    query: "",
    items: skillItems(),
    selectedFolder: null,
    selectedDetail: null,
    selectedCategory: "__all__",
    selectedStatus: "__all__",
    installedKeys: new Set<string>(),
    disabledKeys: new Set<string>(),
    onQueryChange: () => undefined,
    onCategoryChange: () => undefined,
    onStatusChange: () => undefined,
    onRefresh: () => undefined,
    onSelect: () => undefined,
    addModalOpen: false,
    uploadName: "",
    uploadFiles: [],
    uploadError: null,
    uploadTemplate: null,
    uploadBusy: false,
    onAddClick: () => undefined,
    onAddClose: () => undefined,
    onUploadNameChange: () => undefined,
    onUploadFilesChange: () => undefined,
    onUploadSubmit: () => undefined,
    onInstall: async () => undefined,
    onDelete: async () => undefined,
    onToggleEnabled: async () => undefined,
    ...overrides,
  };
}

function toolItems(): McpListItem[] {
  return [
    { id: 1, name: "Alicloud-mcp", description: "阿里云工具", category: "架构与开发", tags: "cloud,deploy,ops", status: "open" },
    { id: 2, name: "Prometheus-mcp", description: "监控工具", category: "运维自动化", tags: "monitor,ops", status: "open" },
  ];
}

function toolProps(overrides: Partial<ToolLibraryProps> = {}): ToolLibraryProps {
  return {
    loading: false,
    error: null,
    query: "",
    category: "__all__",
    items: toolItems(),
    selectedId: null,
    selectedDetail: null,
    onQueryChange: () => undefined,
    onRefresh: () => undefined,
    onSelect: () => undefined,
    installedRemoteIds: new Set<string>(),
    disabledMcpKeys: new Set<string>(),
    onInstall: async () => undefined,
    onDelete: async () => undefined,
    onToggleEnabled: async () => undefined,
    onEdit: () => undefined,
    installedMcpMap: new Map<number, string>(),
    ...overrides,
  };
}

function tutorialCategories(): EduCategory[] {
  return [
    {
      id: 1,
      name: "极速体验",
      courses: [
        {
          id: 10,
          title: "Windows 极速体验",
          lessons: [
            { id: 101, title: "Windows 快速安装", duration: "03:28", link: "https://www.bilibili.com/video/BV1xx411c7mD" },
          ],
        },
      ],
    },
  ];
}

function tutorialProps(overrides: Partial<TutorialsProps> = {}): TutorialsProps {
  return {
    loading: false,
    error: null,
    categories: tutorialCategories(),
    query: "",
    selectedCategoryId: 1,
    playingLink: null,
    onQueryChange: () => undefined,
    onSelectCategory: () => undefined,
    onLessonClick: () => undefined,
    onPlayingClose: () => undefined,
    onRefresh: () => undefined,
    ...overrides,
  };
}

describe("catalog pages", () => {
  it("filters employee cards and category counts by search", () => {
    const counts = computeEmployeeMarketCategories(employeeItems(), "zabbix");
    expect(counts.counts.get("__all__")).toBe(1);
    expect(counts.counts.get("运维自动化")).toBe(1);

    const container = document.createElement("div");
    renderIntoContainer(renderEmployeeMarket(employeeProps({ query: "zabbix" })), container);

    expect(container.textContent).toContain("运维自动化");
    expect(container.textContent).toContain("Zabbix专家");
    expect(container.textContent).not.toContain("Prometheus专家");
    expect(container.textContent).toContain("安装");
  });

  it("places page actions at the top-right and searches installed employee items", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderEmployeeMarket(
        employeeProps({
          query: "prometheus",
          items: [
            { id: "local:test", name: "Prometheus专家", description: "监控专家", category: "安全合规" },
            { id: 2, name: "Zabbix专家", description: "运维自动化", category: "运维自动化" },
          ],
          installedRemoteIds: new Set(["local:test"]),
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).not.toBeNull();
    expect(container.textContent).toContain("已安装 (1)");
    expect(container.textContent).toContain("Prometheus专家");
    expect(container.textContent).not.toContain("Zabbix专家");
  });

  it("hides employee market toolbar actions when load fails without data", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderEmployeeMarket(
        employeeProps({
          items: [],
          error: "加载失败",
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).toBeNull();
    expect(container.textContent).toContain("加载失败");
  });

  it("renders installed employee card actions", () => {
    const container = document.createElement("div");
    const onOpenEmployee = vi.fn();
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    renderIntoContainer(
      renderEmployeeMarket(
        employeeProps({
          items: [{ id: "local:test", name: "Prometheus专家", description: "监控专家", category: "安全合规" }],
          installedRemoteIds: new Set(["local:test"]),
          onOpenEmployee,
          onEdit,
          onDelete: async (id) => {
            onDelete(id);
          },
        }),
      ),
      container,
    );

    const firstCardActions = container.querySelector(".emp-card-wrap .emp-card__actions");
    const cardButtons = Array.from(firstCardActions?.querySelectorAll("button") ?? []);
    const labels = cardButtons.map((button) => button.textContent?.trim());
    expect(labels).toEqual(["删除", "会话", "编辑"]);
    expect(cardButtons.find((button) => button.textContent?.trim() === "会话")?.className).toBe("btn small");
    expect(cardButtons.find((button) => button.textContent?.trim() === "编辑")?.className).toBe("btn primary small");
    expect(cardButtons.find((button) => button.textContent?.trim() === "删除")?.className).toBe("btn small");

    const talkButton = cardButtons.find((button) => button.textContent?.trim() === "会话");
    talkButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onOpenEmployee).toHaveBeenCalledWith("test");
  });

  it("renders installed skill actions and grouped title", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderSkillLibrary(
        skillProps({
          selectedCategory: "运维自动化",
          installedKeys: new Set(["alicloud-ops"]),
          disabledKeys: new Set(["alicloud-ops"]),
        }),
      ),
      container,
    );

    expect(container.textContent).toContain("运维自动化");
    expect(container.textContent).toContain("删除");
    expect(container.textContent).toContain("启用");
    expect(container.textContent).toContain("开放");
    expect(container.textContent).toContain("OS: linux");
    expect(container.textContent).toContain("eligible");
    expect(container.textContent).not.toContain("已禁用");
    expect(container.querySelector(".market-card-status")).toBeNull();
    const actionButtons = Array.from(container.querySelectorAll(".emp-card__actions button"));
    expect(actionButtons.find((button) => button.textContent?.trim() === "删除")?.className).toBe("btn small");
    expect(actionButtons.find((button) => button.textContent?.trim() === "启用")?.className).toBe("btn small");

    const counts = computeSkillLibraryCategories(skillItems(), "ali", "__all__");
    expect(counts.counts.get("__all__")).toBe(1);
  });

  it("searches installed skills as well", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderSkillLibrary(
        skillProps({
          query: "阿里云巡检",
          installedKeys: new Set(["alicloud-ops"]),
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).not.toBeNull();
    expect(container.textContent).toContain("已安装 (1)");
    expect(container.textContent).toContain("阿里云巡检");
  });

  it("hides skill library toolbar actions when load fails without data", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderSkillLibrary(
        skillProps({
          items: [],
          error: "加载失败",
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).toBeNull();
    expect(container.textContent).toContain("加载失败");
  });

  it("renders skill meta with main-compatible fallback tags", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderSkillLibrary(
        skillProps({
          items: [
            { folder: "no-status-skill", name: "NoStatusSkill", description: "无状态技能", categoryCn: "安全合规", tags: "tag1,tag2,tag3,tag4", os: "linux" },
          ],
        }),
      ),
      container,
    );

    const meta = container.querySelector(".market-card-meta");
    expect(meta?.textContent).toContain("未标注");
    expect(meta?.textContent).toContain("tag1");
    expect(meta?.textContent).toContain("tag2");
    expect(meta?.textContent).toContain("tag3");
    expect(meta?.textContent).not.toContain("tag4");
    expect(meta?.textContent).toContain("OS: linux");
  });

  it("renders installed tool actions and detail modal", () => {
    const detail: McpDetail = {
      id: 1,
      name: "Alicloud-mcp",
      description: "阿里云工具",
      category: "架构与开发",
      tags: "cloud,deploy",
      status: "open",
      readme: "# Tool",
    };
    const container = document.createElement("div");
    renderIntoContainer(
      renderToolLibrary(
        toolProps({
          installedRemoteIds: new Set(["1"]),
          installedMcpMap: new Map([[1, "alicloud-mcp"]]),
          selectedId: 1,
          selectedDetail: detail,
        }),
      ),
      container,
    );

    expect(container.textContent).toContain("编辑");
    expect(container.textContent).toContain("删除");
    expect(container.textContent).toContain("禁用");
    expect(container.textContent).toContain("架构与开发");
    expect(container.textContent).toContain("开放");
    expect(container.textContent).toContain("cloud");
    expect(container.textContent).toContain("deploy");
    expect(container.textContent).toContain("ops");
    expect(container.textContent).not.toContain("已启用");
    expect(container.textContent).not.toContain("stdio");
    expect(container.querySelector(".market-card-status")).toBeNull();
    const actionButtons = Array.from(container.querySelectorAll(".emp-card__actions button"));
    expect(actionButtons.find((button) => button.textContent?.trim() === "删除")?.className).toBe("btn small");
    expect(actionButtons.find((button) => button.textContent?.trim() === "禁用")?.className).toBe("btn small");
    expect(actionButtons.find((button) => button.textContent?.trim() === "编辑")?.className).toBe("btn primary small");
    expect(container.querySelector(".emp-detail-modal")).not.toBeNull();

    const counts = computeToolLibraryCategories(toolItems(), "prom");
    expect(counts.counts.get("__all__")).toBe(1);
  });

  it("searches installed tools as well", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderToolLibrary(
        toolProps({
          query: "阿里云工具",
          installedRemoteIds: new Set(["1"]),
          installedMcpMap: new Map([[1, "alicloud-mcp"]]),
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).not.toBeNull();
    expect(container.textContent).toContain("已安装 (1)");
    expect(container.textContent).toContain("Alicloud-mcp");
  });

  it("hides tool library toolbar actions when load fails without data", () => {
    const container = document.createElement("div");
    renderIntoContainer(
      renderToolLibrary(
        toolProps({
          items: [],
          error: "加载失败",
        }),
      ),
      container,
    );

    expect(container.querySelector(".emp-main > .emp-main__body > .emp-toolbar__actions")).toBeNull();
    expect(container.textContent).toContain("加载失败");
  });

  it("renders employee detail actions inside modal", () => {
    const detail: EmployeeDetail = {
      id: "local:test",
      name: "Prometheus专家",
      description: "监控专家",
      category: "安全合规",
      tags: "monitor,ops",
      readme: "# Employee",
    };
    const container = document.createElement("div");
    const onOpenEmployee = vi.fn();
    renderIntoContainer(
      renderEmployeeMarket(
        employeeProps({
          selectedDetail: detail,
          installedRemoteIds: new Set(["local:test"]),
          onOpenEmployee,
          onEdit: () => undefined,
          onDelete: async () => undefined,
        }),
      ),
      container,
    );

    const talkButton = Array.from(container.querySelectorAll("button")).find(
      (button) => button.textContent?.trim() === "会话",
    );
    expect(talkButton).not.toBeUndefined();
    talkButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onOpenEmployee).toHaveBeenCalledWith("test");
  });

  it("renders tutorials list and player states", () => {
    const container = document.createElement("div");
    const onLessonClick = vi.fn();
    renderIntoContainer(renderTutorials(tutorialProps({ onLessonClick })), container);

    expect(container.textContent).toContain("OpenOcta 教程");
    expect(container.textContent).toContain("Windows 极速体验");

    const lesson = container.querySelector(".tutorials-lesson--clickable");
    expect(lesson).not.toBeNull();
    lesson?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onLessonClick).toHaveBeenCalledTimes(1);

    renderIntoContainer(
      renderTutorials(
        tutorialProps({ playingLink: "https://www.bilibili.com/video/BV1xx411c7mD" }),
      ),
      container,
    );
    expect(container.querySelector(".emp-detail-modal")).not.toBeNull();
    expect(container.querySelector("iframe")).not.toBeNull();
    expect(container.textContent).toContain("在哔哩哔哩打开");
  });
});
