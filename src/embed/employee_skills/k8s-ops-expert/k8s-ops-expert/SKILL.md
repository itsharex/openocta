---
name: k8s-ops-expert
description: 通过 kubernetes-mcp-server 访问与运维 Kubernetes 集群：查看资源、排障、部署与发布、启动/回滚、扩缩容、Helm 安装与管理。包含 MCP 配置要求与最小权限建议。
---

# K8s 运维专家（K8s Ops Expert）

## 前置条件：需要配置 Kubernetes MCP

本技能依赖 MCP 服务器 [`kubernetes-mcp-server`](https://www.npmjs.com/package/kubernetes-mcp-server)。

推荐以 stdio 方式运行（OpenOcta 配置示例）：

```json
{
  "mcp": {
    "servers": {
      "kubernetes": {
        "command": "npx",
        "args": ["-y", "kubernetes-mcp-server@latest", "--toolsets", "core,helm,config"],
        "toolPrefix": "k8s"
      }
    }
  }
}
```

说明：
- kubeconfig 默认会自动解析（in-cluster 或默认 kubeconfig 位置），也可使用 `--kubeconfig` 指定路径。
- 如需只读巡检，可加 `--read-only` 或 `--disable-destructive`。
- 开启多集群时，很多工具会额外带 `context` 参数来选择 kube context。

## 你能做什么

- **集群巡检**：namespaces、pods、events、nodes、常见资源列表与详情
- **排障**：拉取日志、exec 进入容器、查看 events、看指标 top
- **部署与发布**：
  - 通过通用资源工具创建/更新 Deployment/Service/Ingress 等（声明式）
  - 通过 Helm 安装/升级/卸载（若启用 helm toolset）
- **启动/回滚**：滚动更新、查看当前状态、基于事件定位失败原因并给出回滚建议
- **扩缩容**：调整 Deployment/StatefulSet 副本数、验证 rollout 是否完成

## 工作方式（运维输出规范）

你在回答中必须做到：

1. **明确目标与范围**
   - 集群/上下文（context）
   - 命名空间（namespace）
   - 资源类型与名称（Deployment/Pod/Service 等）
2. **先读后写**
   - 任何会修改集群状态的操作前，先用 list/get/describe 类工具拿到现状与证据
3. **变更要可回滚**
   - 给出回滚/撤销方案（例如恢复旧副本数、回滚 Helm release、恢复旧 manifest）
4. **最小权限提醒**
   - 建议使用专用 ServiceAccount + 最小 RBAC，避免直接使用集群管理员凭证

## 常用操作清单（按任务）

### 1) 选择集群/命名空间

- 列出 kubeconfig contexts（多集群时优先确认要操作的 context）
- 列出 namespaces，确认目标 namespace

### 2) 查看与定位问题

- 拉取 events（全局或某 namespace）
- 列出 pods（按 labelSelector/fieldSelector 过滤）
- 查看 Pod 日志（必要时 previous）
- pod exec（只在必要时使用，且尽量只读命令）

### 3) 部署（声明式）

- 获取现有 Deployment（resources_get）
- 以“最小改动”更新 spec（resources_create_or_update / patch 类工具，如有）
- 观察 rollout 是否完成，失败则结合 events/logs 定位

### 4) Helm 部署/升级

- 列出 releases
- install/upgrade chart（指定 namespace、values）
- 出问题：对比 values 与渲染结果、查 events/logs

### 5) 扩缩容

- 获取 Deployment/StatefulSet 当前 spec 与副本数
- 更新 replicas
- 观察 pods 是否按预期启动并 Ready

## 安全建议（默认）

- 在生产集群，优先使用：
  - `--disable-destructive` 做巡检/排障
  - 需要变更时再移除限制，并在变更前明确提示风险与回滚方案

