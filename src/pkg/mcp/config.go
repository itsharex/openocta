// Package mcp 提供 MCP（Model Context Protocol）配置的公共解析与规格构建。
// 与 src/docs/mcp-configuration.md 文档一致，供 agent/runtime、acp/mcp、gateway 等模块复用。
package mcp

import (
	"strings"

	"github.com/openocta/openocta/pkg/config"
)

// BuildServerSpecs 将 config.Mcp.Servers 转为 MCP 规格字符串列表，供 API Options 使用。
func BuildServerSpecs(cfg *config.OpenOctaConfig) []string {
	if cfg == nil || cfg.Mcp == nil {
		return nil
	}
	return BuildServerSpecsFromMcpConfig(cfg.Mcp)
}

// BuildServerSpecsFromMcpConfig 从 McpConfig 构建规格列表，供全局配置或数字员工级 MCP 合并后使用。
// 每个条目解析为以下三种之一：
// - stdio://command arg1 arg2 ...（Command + Args）
// - url（URL 字段）
// - stdio spec（Service + ServiceURL，如 prometheus）
// 已禁用的条目会被跳过，重复规格会去重。
func BuildServerSpecsFromMcpConfig(mcp *config.McpConfig) []string {
	if mcp == nil || len(mcp.Servers) == 0 {
		return nil
	}
	var specs []string
	seen := make(map[string]struct{})
	for name, entry := range mcp.Servers {
		if entry.Enabled != nil && !*entry.Enabled {
			continue
		}
		spec := entryToSpec(name, &entry)
		spec = strings.TrimSpace(spec)
		if spec == "" {
			continue
		}
		if _, ok := seen[spec]; ok {
			continue
		}
		seen[spec] = struct{}{}
		specs = append(specs, spec)
	}
	return specs
}

func entryToSpec(name string, e *config.McpServerEntry) string {
	// 1) Command (stdio)
	if strings.TrimSpace(e.Command) != "" {
		cmd := strings.TrimSpace(e.Command)
		args := strings.TrimSpace(strings.Join(e.Args, " "))
		base := cmd
		if args != "" {
			base = cmd + " " + args
		}
		// 根据文档约定，这里仅生成 stdio://<command> <args...>，不在 spec 中拼接 env。
		// env 由 acp/mcp.Manager 在启动进程时负责注入；agentsdk-go 的 MCPServers 目前
		// 也不原生支持从 spec 里拆分 env，因此避免构造诸如
		//   stdio://env VAR=val npx ...
		// 这种容易出错的 command。
		return "stdio://" + base
	}
	// 2) URL (SSE/HTTP)
	if strings.TrimSpace(e.URL) != "" {
		return strings.TrimSpace(e.URL)
	}
	// 3) Service + ServiceURL -> known stdio spec
	if strings.TrimSpace(e.Service) != "" && strings.TrimSpace(e.ServiceURL) != "" {
		return serviceToStdioSpec(
			strings.ToLower(strings.TrimSpace(e.Service)),
			strings.TrimSpace(e.ServiceURL),
		)
	}
	return ""
}

func serviceToStdioSpec(service, backendURL string) string {
	switch service {
	case "prometheus":
		// 根据文档约定，Service 模式仅在 spec 中声明 stdio 命令：
		//   stdio://npx -y prometheus-mcp-server
		// 实际连接 Prometheus 时所需的 PROMETHEUS_URL 等环境变量，
		// 由 acp/mcp.Manager.resolveServiceServer 在启动进程时注入，
		// 避免把 env 拼进 spec 造成命令解析错误。
		_ = backendURL // 当前 spec 构建阶段不在字符串中使用该 URL。
		return "stdio://npx -y prometheus-mcp-server"
	default:
		return ""
	}
}
