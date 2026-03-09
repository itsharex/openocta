# Skill 安装流程

## 目标目录

OpenOcta 的 managed skills 目录：

- **Linux/macOS**: `~/.openocta/skills`
- **Windows**: `%APPDATA%\openocta\skills` 或 `%LOCALAPPDATA%\openocta\skills`
- **自定义**: 通过环境变量 `OPENOCTA_STATE_DIR` 覆盖 state 目录，skills 在其下的 `skills` 子目录

## 加载优先级（低 → 高）

1. 内嵌 skills（二进制 embed）
2. 配置 `skills.load.extraDirs`
3. Bundled skills（安装包自带）
4. **~/.openocta/skills**（managed）
5. `<workspace>/skills`（workspace）

同名 skill 以优先级高的为准。

## 安装步骤

### 前提

- 用户已确认 skill 内容满意
- 已通过 `quick_validate.py` 验证
- （可选）已通过 `package_skill.py` 打包

### 方式 1：直接复制目录

```bash
# 确保目标目录存在
mkdir -p ~/.openocta/skills

# 复制 skill 目录（skill 目录名 = skill name）
cp -r /path/to/my-skill ~/.openocta/skills/
```

### 方式 2：从 .skill 包安装

```bash
# .skill 是 zip 文件，解压到 skills 目录
cd ~/.openocta/skills
unzip /path/to/my-skill.skill

# 若解压后多一层目录，调整：
# unzip 可能得到 my-skill/my-skill/SKILL.md
# 应确保最终结构为 my-skill/SKILL.md
```

### 方式 3：使用 install_skill.py 脚本

```bash
python scripts/install_skill.py <skill-path> [--dry-run]
```

脚本会：
1. 验证 skill
2. 解析 `~/.openocta` 路径
3. 复制到 `~/.openocta/skills/<skill-name>/`
4. 输出安装路径

## 安装后

- 新会话或重启 Agent 后，skill 自动加载
- 用户可通过 `openocta` 相关命令验证 skill 是否可用

## 回滚

```bash
rm -rf ~/.openocta/skills/<skill-name>
```
