// Integration tests for MiniMax model factory.
// These tests require MINIMAX_API_KEY to be set and verify actual API connectivity.
// Run with: go test ./pkg/agent/ -run TestIntegration -tags integration -v
//
//go:build integration

package agent

import (
	"os"
	"testing"

	"github.com/openocta/openocta/pkg/config"
)

func requireMiniMaxAPIKey(t *testing.T) string {
	t.Helper()
	key := os.Getenv("MINIMAX_API_KEY")
	if key == "" {
		t.Skip("MINIMAX_API_KEY not set, skipping integration test")
	}
	return key
}

func TestIntegration_MiniMax_CreateFactory_M27(t *testing.T) {
	_ = requireMiniMaxAPIKey(t)

	cfg := &config.OpenOctaConfig{}
	factory, err := createModelFactoryForProviderModel(cfg, "minimax", "MiniMax-M2.7")
	if err != nil {
		t.Fatalf("failed to create factory for MiniMax-M2.7: %v", err)
	}
	if factory == nil {
		t.Fatal("factory is nil")
	}
}

func TestIntegration_MiniMax_CreateFactory_M27Highspeed(t *testing.T) {
	_ = requireMiniMaxAPIKey(t)

	cfg := &config.OpenOctaConfig{}
	factory, err := createModelFactoryForProviderModel(cfg, "minimax", "MiniMax-M2.7-highspeed")
	if err != nil {
		t.Fatalf("failed to create factory for MiniMax-M2.7-highspeed: %v", err)
	}
	if factory == nil {
		t.Fatal("factory is nil")
	}
}

func TestIntegration_MiniMax_CreateModelFactory_FromAgentConfig(t *testing.T) {
	_ = requireMiniMaxAPIKey(t)

	boolTrue := true
	cfg := &config.OpenOctaConfig{
		Agents: &config.AgentsConfig{
			List: []config.AgentConfig{
				{
					ID:      "minimax-agent",
					Default: &boolTrue,
					Model:   "minimax/MiniMax-M2.7",
				},
			},
		},
	}

	factory, err := CreateModelFactoryFromConfig(cfg, "minimax-agent")
	if err != nil {
		t.Fatalf("failed to create model factory from config: %v", err)
	}
	if factory == nil {
		t.Fatal("factory is nil")
	}
}
