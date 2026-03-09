---
name: skill-creator
description: "Create new skills from user-described scenarios. Use when users want to create a skill from scratch based on a scenario, automate a workflow into a reusable skill, or generate a skill and install it to ~/.openocta/skills. Triggers on phrases like: 帮我写个 skill, 根据这个场景生成 skill, 把这个流程做成 skill, create a skill for, skill 创建, 生成 skill."
---

# Skill Creator

根据用户描述的场景生成对应的 OpenOcta/Codex Skills。用户确认满意后，可将 skill 安装到 `~/.openocta/skills` 目录，供 Agent 自动加载使用。

## 核心流程

1. **理解场景** — 从用户描述中提取：要解决什么问题、何时触发、期望输出
2. **规划内容** — 确定需要 scripts、references、assets 中的哪些
3. **初始化** — 运行 `init_skill.py` 创建 skill 骨架
4. **编写实现** — 填充 SKILL.md 和资源文件
5. **验证与打包** — 运行 `quick_validate.py` 和 `package_skill.py`
6. **安装** — 用户确认后，复制到 `~/.openocta/skills`

详见 `references/install-workflow.md`。

## 场景驱动的 Skill 生成

### Step 1: 捕获用户意图

从对话中提取或向用户确认：

1. **这个 skill 要让 Agent 做什么？**（能力描述）
2. **什么时候应该触发？**（用户会怎么说、什么上下文）
3. **期望的输出形式？**（文件、命令、报告、代码等）
4. **需要哪些可复用资源？**
   - 重复执行的脚本 → `scripts/`
   - 需要查阅的文档/规范 → `references/`
   - 输出中要用的模板/素材 → `assets/`

若用户只说「帮我写个 skill」，主动追问具体场景和示例用法。

### Step 2: 规划 Skill 结构

根据场景分析每个用例：

- **重复代码/操作** → 考虑 `scripts/` 中的脚本
- **需要查阅的 schema、API、规范** → 考虑 `references/`
- **输出需要模板、图标、字体** → 考虑 `assets/`

### Step 3: 初始化 Skill

```bash
scripts/init_skill.py <skill-name> --path <output-dir> [--resources scripts,references,assets] [--examples]
```

示例：

```bash
# 临时目录生成，确认后再安装
scripts/init_skill.py my-scenario-skill --path /tmp/skills-draft
scripts/init_skill.py pdf-helper --path /tmp/skills-draft --resources scripts,references --examples
```

### Step 4: 编写 SKILL.md

#### Frontmatter（必填）

```yaml
---
name: skill-name          # 小写、连字符，1-64 字符
description: "..."        # 触发机制：做什么 + 何时用，要具体
---
```

- **name**：skill 标识符，仅小写字母、数字、连字符
- **description**：Agent 用此决定是否调用。必须包含：做什么、在什么情况下用。所有「何时使用」信息放这里，不要放在正文

#### 正文

- 使用祈使句
- 保持 SKILL.md 精简（<500 行），详细内容放到 `references/`
- 明确说明何时读取 references、何时执行 scripts

### Step 5: 验证与打包

```bash
# 验证
python scripts/quick_validate.py <skill-path>

# 打包（会先自动验证）
python scripts/package_skill.py <skill-path> [output-dir]
```

### Step 6: 安装到 ~/.openocta/skills

**仅在用户明确确认满意后执行。**

OpenOcta 会从以下位置加载 skills（优先级从低到高）：

1. 内嵌 skills（二进制内置）
2. 配置中的 extraDirs
3. Bundled skills
4. **~/.openocta/skills**（managed）
5. `<workspace>/skills`（workspace）

安装到 `~/.openocta/skills` 后，该 skill 对所有 workspace 可用。

**安装方式：**

```bash
# 方式 A：使用 install_skill.py（推荐）
python scripts/install_skill.py <skill-path>
# 可选 --dry-run 预览

# 方式 B：直接复制 skill 目录
cp -r <skill-path> ~/.openocta/skills/<skill-name>

# 方式 C：从 .skill 包解压
unzip -d ~/.openocta/skills <skill-name>.skill
# 注意：.skill 是 zip，解压后可能多一层目录，需确保 SKILL.md 在 ~/.openocta/skills/<skill-name>/SKILL.md
```

安装后告知用户：

> Skill `<skill-name>` 已安装到 `~/.openocta/skills`。重启 Agent 或新会话后即可使用。

## Skill 命名规范

- 仅小写字母、数字、连字符
- 长度 ≤ 64 字符
- 动词导向、简洁：`pdf-rotate`、`k8s-diagnose`、`memory-organize`
- 目录名与 skill name 一致

## Skill 结构

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter: name, description (required)
│   └── Markdown 正文
└── 可选资源
    ├── scripts/     - 可执行代码
    ├── references/  - 文档、规范、API
    └── assets/      - 模板、图标、字体
```

## 渐进式披露

1. **Metadata**（name + description）— 始终在上下文中
2. **SKILL.md 正文** — skill 触发时加载
3. **Bundled 资源** — 按需加载，scripts 可执行而不必读入上下文

## 参考文件

- `references/install-workflow.md` — 安装流程与路径说明
- `references/openocta-skill-format.md` — OpenOcta skill 格式详解

## 原则

- **简洁**：只加 Agent 没有的上下文
- **具体**：description 要能准确触发，避免 undertrigger
- **用户确认**：安装前必须得到用户明确同意
