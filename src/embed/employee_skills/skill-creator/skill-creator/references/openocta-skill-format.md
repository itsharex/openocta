# OpenOcta Skill 格式

## 基本结构

```
skill-name/
├── SKILL.md          # 必需
├── _meta.json        # 可选，clawhub 发布用
├── scripts/          # 可选
├── references/       # 可选
└── assets/           # 可选
```

## SKILL.md Frontmatter

### 必需字段

| 字段 | 说明 | 示例 |
|------|------|------|
| name | skill 标识符，小写+连字符，1-64 字符 | `kube-medic` |
| description | 触发机制：做什么 + 何时用，要具体 | 见下 |

### 可选字段（OpenOcta 扩展）

| 字段 | 说明 |
|------|------|
| version | 版本号 |
| slug | 发布用 slug |
| homepage | 主页 URL |
| changelog | 更新说明 |
| author | 作者 |
| license | 许可证 |
| tags | 标签列表 |
| metadata | 扩展元数据（如 emoji、requires） |
| tools | 工具定义（kube-medic 等复杂 skill） |
| dependencies | 依赖（如 kubectl、jq） |

### description 编写要点

- **Agent 仅根据 name + description 决定是否调用**，正文在触发后才加载
- 必须包含：做什么、在什么情况下用
- 避免 undertrigger：宁可略「推」一点，覆盖相关场景
- 示例（docx skill）：
  > "Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation. Use when working with .docx files for: creating documents, modifying content, tracked changes, adding comments, or any document tasks."

## 正文

- 使用祈使句
- 保持精简，详细内容放 references
- 明确何时读 references、何时执行 scripts

## 与 agentsdk-go 的对应

- `name` → `Definition.Name`（会 sanitize 为小写字母数字连字符）
- `description` → `Definition.Description`
- 其他 frontmatter → `Definition.Metadata`
- `KeywordMatcher` 由 name + description 自动生成
