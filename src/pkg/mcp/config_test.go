package mcp

import (
	"strings"
	"testing"

	"github.com/openocta/openocta/pkg/config"
)

func TestBuildServerSpecsFromMcpConfig_EnvInjection(t *testing.T) {
	cfg := &config.McpConfig{
		Servers: map[string]config.McpServerEntry{
			"prometheus_test": {
				Enabled: ptr(true),
				Command: "npx",
				Args:    []string{"prometheus-mcp@latest", "stdio"},
				Env:     map[string]string{"PROMETHEUS_URL": "http://192.168.50.59:9090"},
			},
		},
	}
	specs := BuildServerSpecsFromMcpConfig(cfg)
	if len(specs) != 1 {
		t.Fatalf("expected 1 spec, got %d", len(specs))
	}
	spec := specs[0]
	if !strings.HasPrefix(spec, "stdio://") {
		t.Errorf("spec should start with stdio://, got %q", spec)
	}
	// 新逻辑：stdio spec 中不再拼接 env，而是仅携带 command 与 args。
	if strings.Contains(spec, "PROMETHEUS_URL=") || strings.Contains(spec, "env ") {
		t.Errorf("spec should not inline env into command, got %q", spec)
	}
	if !strings.Contains(spec, "npx prometheus-mcp@latest stdio") {
		t.Errorf("spec should contain npx command and args, got %q", spec)
	}
}

func TestBuildServerSpecsFromMcpConfig_ServicePrometheus(t *testing.T) {
	cfg := &config.McpConfig{
		Servers: map[string]config.McpServerEntry{
			"prometheus": {
				Service:    "prometheus",
				ServiceURL: "http://192.168.50.59:9090",
			},
		},
	}
	specs := BuildServerSpecsFromMcpConfig(cfg)
	if len(specs) != 1 {
		t.Fatalf("expected 1 spec, got %d", len(specs))
	}
	spec := specs[0]
	// Service 模式下，spec 只声明 stdio 命令，env 由 acp/mcp.Manager 注入。
	if !strings.HasPrefix(spec, "stdio://") {
		t.Errorf("service spec should start with stdio://, got %q", spec)
	}
	if strings.Contains(spec, "PROMETHEUS_URL=") || strings.Contains(spec, "env ") {
		t.Errorf("service spec should not inline env, got %q", spec)
	}
	if !strings.Contains(spec, "prometheus-mcp-server") {
		t.Errorf("spec should contain prometheus-mcp-server, got %q", spec)
	}
}

func ptr(b bool) *bool { return &b }
