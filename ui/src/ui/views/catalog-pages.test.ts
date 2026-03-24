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
    { folder: "elastic-ops", name: "ElasticSearchOps", description: "ES 运维", categoryCn: "安全合规", tags: "eligible,es", os: "linux", status: "open" },
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
    { id: 1, name: "Alicloud-mcp", description: "阿里云工具", category: "架构与开发", tags: "cloud,deploy", status: "open" },
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
    expect(container.textContent).toContain("已禁用");

    const counts = computeSkillLibraryCategories(skillItems(), "ali", "__all__");
    expect(counts.counts.get("__all__")).toBe(1);
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
    expect(container.textContent).toContain("已启用");
    expect(container.querySelector(".emp-detail-modal")).not.toBeNull();

    const counts = computeToolLibraryCategories(toolItems(), "prom");
    expect(counts.counts.get("__all__")).toBe(1);
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
    expect(container.textContent).toContain("打开原链接");
  });
});
