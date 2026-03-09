# Sandbox 沙箱功能技术文档

本文档描述 OpenOcta 的 Sandbox 沙箱功能，包括配置、运行时行为、审批队列与安全钩子。

## 1. 概述

Sandbox 用于在 Agent 执行时根据用户配置约束文件系统、网络访问与命令执行，并支持审批队列与安全钩子（Hook）开关。

**特性：**

- **根级配置**：在 `openocta.json` 根下使用 `sandbox` 字段，与 gateway/agents 等平级
- **文件与网络**：允许路径（allowedPaths）、网络白名单（networkAllow）
- **安全钩子**：6 个 checkpoint 开关（BeforeAgent、BeforeModel、AfterModel、BeforeTool、AfterTool、AfterAgent）
- **命令校验**：禁止命令/参数/片段（validator）
- **审批队列**：默认存储于 `~/.openocta/agents/approvals`，可配置

## 2. 配置

### 2.1 配置项

在 `openocta.json` 根级增加 `sandbox`：

```json
{
  "sandbox": {
    "enabled": true,
    "allowedPaths": ["/tmp", "./workspace", "/var/lib/agent/data"],
    "networkAllow": ["localhost", "127.0.0.1", "*.anthropic.com"],
    "root": "./workspace",
    "approvalStore": "~/.openocta/agents/approvals",
    "hooks": {
      "beforeAgent": true,
      "beforeModel": true,
      "afterModel": true,
      "beforeTool": true,
      "afterTool": true,
      "afterAgent": true
    },
    "validator": {
      "banCommands": ["dd", "mkfs", "sudo"],
      "banArguments": ["--no-preserve-root", "/dev/"],
      "banFragments": ["rm -rf", "rm -r"],
      "maxLength": 4096
    }
  }
}
```

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enabled` | boolean | `true` | 是否启用沙箱；为 false 时 Runtime 不应用沙箱 |
| `allowedPaths` | string[] | 见下 | 允许访问的路径前缀 |
| `networkAllow` | string[] | `["localhost","127.0.0.1"]` | 允许访问的网络地址/域名模式 |
| `root` | string | ProjectRoot | 沙箱根目录 |
| `resourceLimit` | object | - | 可选：maxCpuPercent、maxMemoryBytes、maxDiskBytes |
| `approvalStore` | string | stateDir/agents/approvals | 审批队列存储路径 |
| `hooks` | object | - | 6 个 checkpoint 开关 |
| `validator` | object | - | 命令校验：banCommands、banArguments、banFragments、maxLength |

默认允许路径（当未配置 `allowedPaths` 时）：`<ProjectRoot>/workspace`、`<ProjectRoot>/shared`。

### 2.2 六类安全钩子（Hook）

与 [agentsdk-go security.md](https://github.com/stellarlinkco/agentsdk-go/blob/main/docs/security.md) 的 Hook Overview 对应：

| Hook | 用途 |
|------|------|
| BeforeAgent | 请求校验、限流、IP 黑名单 |
| BeforeModel | 注入检测、敏感词过滤 |
| AfterModel | 输出审查、危险命令检测 |
| BeforeTool | 工具权限、参数与路径校验 |
| AfterTool | 结果审查、敏感数据泄露检测；校验问题可在此阶段返回用户 |
| AfterAgent | 审计日志、合规检查 |

当前实现中，沙箱的**文件/网络/资源**由 Runtime 的 `buildSandboxOptions` 从 `sandbox` 配置构建；各 Hook 的**具体逻辑**可在 SDK 暴露对应中间件 API 后按配置开关注入。

### 2.3 Windows 路径

- 配置路径：默认 `%APPDATA%\openocta\openocta.json`
- 审批存储：默认 `%APPDATA%\openocta\agents\approvals`
- 使用 `paths.ResolveStateDir(env)` 解析状态目录，避免硬编码 `~`

## 3. 运行时行为

### 3.1 构建逻辑

**文件**：`pkg/agent/runtime/runtime.go`

- **EnableSandbox**：由 `opts.Config.Sandbox.Enabled` 决定；未配置时视为 true
- **SandboxOpts**：由 `opts.Config.Sandbox` 生成 `buildSandboxOptsFromConfig`，再与 `opts.Sandbox` 合并（config 优先，opts 覆盖）
- **apiOpts.Sandbox**：`buildSandboxOptions(projectRoot, sandboxOpts)` 得到 agentsdk-go 的 SandboxOptions

### 3.2 审批队列存储

- **默认路径**：`~/.openocta/agents/approvals`（Windows：`%APPDATA%\openocta\agents\approvals`）
- **文件**：`queue.json`，内容为审批条目数组
- **条目字段**：id、sessionId、sessionKey、command、createdAt、timeoutAt、ttlSeconds、status（pending/approved/denied/expired）等

## 4. Gateway API

### 4.1 Sandbox 配置

使用现有 `config.get` / `config.patch` 读写根级 `sandbox`，无需单独接口。

### 4.2 审批队列

| 方法 | 说明 |
|------|------|
| `approvals.list` | 列出审批列表（含过期）；返回 storePath、entries |
| `approvals.approve` | 批准：requestId、approverId、ttlSeconds（可选） |
| `approvals.deny` | 拒绝：requestId、approverId、reason（可选） |

## 5. 前端

- **Agent 分组**：新增「沙箱」「审批队列」两个 Tab
- **沙箱页**：启用/关闭按钮、允许路径、网络白名单、6 个 Hook 开关、Validator 规则；保存写入 `sandbox` 根级
- **审批队列页**：列表（ID、SessionKey、SessionID、命令、超时、TTL、状态）、批准/拒绝、跳转会话；过期仍展示但不可审批

## 6. 参考

- [agentsdk-go Security Guide](https://github.com/stellarlinkco/agentsdk-go/blob/main/docs/security.md)
- 配置结构：`pkg/config/schema.go`（SandboxConfig、SandboxHooksConfig、SandboxValidatorConfig）
- 审批逻辑：`pkg/gateway/handlers/approvals.go`
