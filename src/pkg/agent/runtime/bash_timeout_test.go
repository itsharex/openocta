package runtime

import (
	"testing"
	"time"

	"github.com/openocta/openocta/pkg/config"
	"github.com/stellarlinkco/agentsdk-go/pkg/api"
)

func TestApplyBashTimeoutParamsInjectsDefault(t *testing.T) {
	params := map[string]interface{}{"command": "echo hi"}
	applyBashTimeoutParams(params, 10*time.Second)
	if got, ok := params["timeout"].(float64); !ok || got != 10 {
		t.Fatalf("timeout = %v, want 10", params["timeout"])
	}
}

func TestApplyBashTimeoutParamsCapsHighRequest(t *testing.T) {
	params := map[string]interface{}{"command": "sleep 5", "timeout": 600.0}
	applyBashTimeoutParams(params, 60*time.Second)
	if got, ok := params["timeout"].(float64); !ok || got != 60 {
		t.Fatalf("timeout = %v, want capped 60", params["timeout"])
	}
}

func TestApplyBashTimeoutParamsAllowsShorterRequest(t *testing.T) {
	params := map[string]interface{}{"command": "echo", "timeout": 10.0}
	applyBashTimeoutParams(params, 60*time.Second)
	if got, ok := params["timeout"].(float64); !ok || got != 10 {
		t.Fatalf("timeout = %v, want 10", params["timeout"])
	}
}

func TestResolveBashToolTimeoutDefault(t *testing.T) {
	if got := resolveBashToolTimeout(Options{}); got != DefaultBashToolTimeout {
		t.Fatalf("got %v, want %v", got, DefaultBashToolTimeout)
	}
}

func TestResolveBashToolTimeoutFromConfig(t *testing.T) {
	sec := 45
	opts := Options{
		Config: &config.OpenOctaConfig{
			Tools: &config.ToolsConfig{
				Exec: &config.ToolsExecConfig{TimeoutSec: &sec},
			},
		},
	}
	if got := resolveBashToolTimeout(opts); got != 45*time.Second {
		t.Fatalf("got %v, want 45s", got)
	}
}

func TestResolveParallelToolCallsDefaultFalse(t *testing.T) {
	if resolveParallelToolCalls(Options{}) {
		t.Fatal("expected parallel tool calls disabled by default")
	}
}

func TestResolveParallelToolCallsFromConfig(t *testing.T) {
	on := true
	opts := Options{
		Config: &config.OpenOctaConfig{
			Tools: &config.ToolsConfig{
				Exec: &config.ToolsExecConfig{Parallel: &on},
			},
		},
	}
	if !resolveParallelToolCalls(opts) {
		t.Fatal("expected parallel enabled from config")
	}
}

func TestApplyToolExecutionPolicySerialByDefault(t *testing.T) {
	apiOpts := api.Options{}
	applyToolExecutionPolicy(&apiOpts, Options{})
	if !apiOpts.DisableParallelToolCalls {
		t.Fatal("expected DisableParallelToolCalls=true by default")
	}
}
