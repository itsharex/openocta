# Changelog

OpenOcta 版本更新记录。格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

## [0.3.0] - 2026-06-22

上一版本：[v0.2.8](https://github.com/openocta/openocta/releases/tag/v0.2.8)

### 亮点

v0.3.0 是一次体验与能力并重的版本更新，核心围绕四件事：

1. **首次安装引导** — 新用户可按步骤完成环境、模型、技能/MCP/员工、场景初始化
2. **内置浏览器** — 无需额外 MCP，Agent 可直接操控 Chromium 完成网页自动化
3. **知识库（Knowledge Vault）** — Obsidian 兼容笔记 + 全文/向量检索，可视化拓扑浏览
4. **对话与交付体验升级** — A2UI 交互、文件/交付物预览、会话运行状态、从对话提取 Skill

### Added

#### 安装引导向导（Setup Wizard）

- 首次启动或新版本首次打开时，弹出多步骤安装引导
- 引导步骤：环境检查 → 模型配置 → 资源安装（技能 / 数字员工 / MCP）→ 场景初始化 → 完成摘要
- 支持在引导中安装内置 Chromium 浏览器
- 内置场景模板机制，当前提供「主机巡检」等场景（`deploy/scenarios/host-inspection`）
- 支持在引导流程中配置 IM 渠道（企业微信、微信等）

#### 内置浏览器

- 新增 `browser` 内置工具，支持 `navigate`、`snapshot`、`screenshot`、`act` 等操作，无需配置浏览器 MCP
- 内置 Chromium 下载与安装管理（引导页 / 控制台均可触发）
- 对话窗口新增浏览器预览面板，可实时查看 Agent 打开的页面
- 新增浏览器相关 HTTP API 与 Gateway 处理器

#### 知识库（Knowledge Vault）

- 全新知识库能力，基于 Obsidian 兼容 Vault + Bleve 全文索引；配置 Embedding API Key 后可启用向量语义检索
- Agent 新增检索工具：`memory_search`（Vault 笔记）、`session_search`（当前会话历史）
- 控制台新增知识库页面，支持笔记浏览与知识拓扑图可视化
- 支持手动「同步索引」，更新笔记后即时生效
- 详见 [knowledge-vault.md](./knowledge-vault.md)

#### 自主进化（Evolution）

- Agent 运行时支持 L4 自主进化：维护 curated MEMORY / USER / SOUL / PROMPT，配合 memory 工具实现长期偏好与行为沉淀

#### Agent 工具与 Skill 能力

- `web_tools` — Web 相关辅助工具集
- `deliverable_files` / `deliverable_read` — 交付物文件生成与读取，对话中可预览 HTML 等交付物
- 从对话提取 Skill — 基于当前会话一键生成 Skill 草稿并下载
- Skill 创意中心 & AI 分析 — 上传 ZIP 后 AI 自动分析元信息；支持多轮对话从零生成 `SKILL.md`
- Skill 组合 API — 新增 `skill_analyze`、`skill_compose` 等 Gateway 接口
- 详见 [skill-create-guide.md](./skill-create-guide.md)

#### A2UI 交互

- 新增 A2UI Bridge / Repair 机制，修复 Markdown 中 A2UI 组件的渲染与文本损坏问题
- 对话中支持 A2UI 交互面板，可响应 Agent 生成的结构化 UI
- 优化文件块（file blocks）展示，支持附件缓存与本地图片预览

#### 配置与文档

- 内置完整配置参考模板 `openocta.json.example` 与 `CONFIG.md` 配置指南（`src/prompt/prompt-zh/`）
- 新增 [knowledge-vault.md](./knowledge-vault.md)、[skill-create-guide.md](./skill-create-guide.md)
- 内置 AMC 企业版对比 Skill，便于在社区版与企业版能力之间做准确引导
- 控制台顶部新增企业版入口链接

### Changed

#### 对话体验

- 重构对话分组渲染，工具调用内联展示，层级更清晰
- 新增会话运行状态指示，长任务执行过程更可感知
- 支持交付物附件、文件预览、聊天资源侧边展示
- 优化对话布局、滚动行为与工具输出面板稳定性（含 Windows 适配）

#### 资源库界面

- 工具库、技能库、员工库统一列表组件，交互与视觉一致
- 概览页 Usage 统计组件重构，信息展示更紧凑

#### Agent 运行时

- 优化 Agent 连接池（pool）与超时策略
- 增强 bash 兼容层与命令策略
- 优化 LLM 调用追踪（llm trace）能力
- 定时任务超时配置增加诊断日志

#### 打包与依赖

- 修正 Goreleaser 文档路径（`src/docs` → `docs`）
- 补全 `agentsdk-go` 依赖条目

### Fixed

- **钉钉渠道**：修复定时任务发送失败（统一 `chatID` 大小写处理）
- **Windows**：修复命令行工具后台执行与窗口闪烁问题
- **A2UI**：修复部分场景下组件渲染异常
- **对话**：修复会话侧边栏与对话内容展示问题
- **文件**：修复交付物 / 附件在对话中的展示问题
- 修复部分运行时 bug 与 UI 细节问题
- 修复 Goreleaser 打包失败问题

### Removed

- **旧版 Memory 模块**：原 SQLite 嵌入式记忆索引（`pkg/memory`）已删除，请迁移至 Knowledge Vault
- **CustomBashTool**：Windows 本地 bash 命令工具已移除，命令执行统一走兼容层与 `WindowsCmdTool`
- **部分场景模板**：内置场景保留 `host-inspection`；`database-ops`、`k8s-incident`、`browser-office` 等模板已移除，可按 [deploy/scenarios/SPEC.md](../deploy/scenarios/SPEC.md) 自行扩展
- **独立 Usage 页面**：已合并至概览页组件

### 升级建议

1. 若曾依赖旧版 Memory，请在 `<workspace>/vault/` 或配置的 Vault 路径中维护 Markdown 笔记，并在知识库页点击「同步索引」
2. 首次打开 v0.3.0 建议完成安装引导，一次性配置模型、浏览器与常用资源
3. 配置文件可参考新版 `openocta.json.example` 与 `CONFIG.md` 补充 `agents.defaults.knowledge` 等字段

### 获取方式

```bash
git clone https://github.com/openocta/openocta.git
cd openocta
git checkout v0.3.0
make build
./openocta gateway run
```

- GitHub Release：[v0.3.0](https://github.com/openocta/openocta/releases/tag/v0.3.0)
- 文档：[README](../README.md) · [知识库说明](./knowledge-vault.md) · [Skill 创建指南](./skill-create-guide.md)
