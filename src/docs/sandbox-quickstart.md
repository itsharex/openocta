# Sandbox 沙箱快速上手

适合快速配置与微信/推文分享的简明介绍。

---

## 一、为什么要有 Sandbox？

Agent 会执行命令、读写文件、访问网络。如果不加约束，一次「帮我清理磁盘」就可能误删重要数据，一次「帮我测试 API」就可能访问不该访问的地址。

**Sandbox 沙箱** 就是给 Agent 划定的「安全边界」：

- **文件**：只能访问你允许的路径，其他一律拦截
- **网络**：只能访问白名单里的地址/域名，其余禁止
- **命令**：可禁止危险命令（如 `rm -rf`、`sudo`、`dd`）和危险参数
- **审批**：敏感操作可先进入审批队列，你批准后再执行

一句话：**让 Agent 既能干活，又不会越界。**

---

## 二、一分钟快速开启

1. **打开配置**  
   控制台 → **Agent** → **沙箱**。

2. **开启沙箱**  
   右上角点击 **开启**，保存到 `~/.openocta/openocta.json` 的 `sandbox.enabled`。

3. **允许路径**（一行一个）：
   ```
   /tmp
   ./workspace
   ```
   未填时默认使用工作区下的 `workspace`、`shared`。

4. **网络白名单**（一行一个）：
   ```
   localhost
   127.0.0.1
   *.anthropic.com
   ```

5. **保存**  
   点击 **保存**，下次对话即按新规则生效。

---

## 三、效果展示

### 3.1 文件与网络被拦截时

当 Agent 尝试访问未允许的路径或域名时，沙箱会拦截并返回错误，例如：

```
❌ 访问 /etc/passwd 被拒绝（不在允许路径内）
❌ 请求 https://unknown-api.com 被拒绝（不在网络白名单）
```

你只需把需要放行的路径和域名加入配置即可。

### 3.2 危险命令被拦截时

若配置了命令校验（如禁止 `rm -rf`、`sudo`），Agent 输出或工具调用中的危险片段会被拦截：

```
❌ 命令包含禁止片段: rm -rf
```

### 3.3 审批队列生效时

当安全钩子（如 BeforeTool）开启且触发审批时：

1. 请求会进入 **审批队列**（控制台 → Agent → 审批队列）
2. 列表展示：Session Key、命令、超时时间、TTL
3. 你可选择 **批准**（可选 TTL 免审时长）或 **拒绝**（可填原因）
4. 批准后该会话在 TTL 内可免审继续执行

---

## 四、进阶配置（可选）

### 安全钩子

在沙箱页勾选 6 个 checkpoint：

| 钩子 | 作用 |
|------|------|
| BeforeAgent | 请求前校验（限流、IP） |
| BeforeModel | 发往模型前（注入检测、敏感词） |
| AfterModel | 模型输出后（危险命令检测） |
| BeforeTool | 调工具前（权限、参数） |
| AfterTool | 工具返回后（结果审查） |
| AfterAgent | 请求结束后（审计） |

### 命令校验

- **禁止命令**：`dd`、`mkfs`、`sudo`
- **禁止参数**：`--no-preserve-root`、`/dev/`
- **禁止片段**：`rm -rf`、`rm -r`

---

## 五、配置示例（复制即用）

```json
{
  "sandbox": {
    "enabled": true,
    "allowedPaths": ["/tmp", "./workspace"],
    "networkAllow": ["localhost", "127.0.0.1"],
    "hooks": {
      "beforeTool": true,
      "afterTool": true
    },
    "validator": {
      "banCommands": ["dd", "mkfs", "sudo"],
      "banFragments": ["rm -rf"]
    }
  }
}
```

保存到 `~/.openocta/openocta.json` 或通过控制台 **沙箱** 页编辑并保存。

---

## 六、常见问题

- **不生效？** 确认 `sandbox.enabled` 为 true，且保存后已刷新或重新发起对话。
- **路径/网络被拦？** 把需要放行的路径或域名加入「允许路径」「网络白名单」。
- **审批队列为空？** 当前仅展示已有审批请求；由 Agent 执行时触发的审批会出现在列表中。

更多细节见 [sandbox.md](sandbox.md)。
