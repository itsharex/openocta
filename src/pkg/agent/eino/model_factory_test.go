package eino

import (
	"os"
	"testing"

	"github.com/openocta/openocta/pkg/config"
)

func TestCreateModelFactoryFromConfig_MiniMax(t *testing.T) {
	t.Setenv("MINIMAX_API_KEY", "test-key")
	cfg := &config.OpenOctaConfig{
		Models: &config.ModelsConfig{
			Providers: map[string]config.ModelProvider{
				"minimax": {
					Models: []config.ModelDefinition{{ID: "MiniMax-M2.7"}},
				},
			},
		},
	}
	factory, err := CreateModelFactoryFromConfig(cfg, "minimax/MiniMax-M2.7")
	if err != nil {
		t.Fatalf("CreateModelFactoryFromConfig: %v", err)
	}
	if factory == nil {
		t.Fatal("expected non-nil factory")
	}
}

func TestCreateModelFactoryFromConfig_NearAI(t *testing.T) {
	t.Setenv("NEARAI_API_KEY", "test-key")
	cfg := &config.OpenOctaConfig{
		Models: &config.ModelsConfig{
			Providers: map[string]config.ModelProvider{
				"nearai": {
					Models: []config.ModelDefinition{{ID: "zai-org/GLM-5.1-FP8"}},
				},
			},
		},
	}
	factory, err := CreateModelFactoryFromConfig(cfg, "nearai/zai-org/GLM-5.1-FP8")
	if err != nil {
		t.Fatalf("CreateModelFactoryFromConfig: %v", err)
	}
	if factory == nil {
		t.Fatal("expected non-nil factory")
	}
	_, err = factory.ChatModel(t.Context())
	if err != nil {
		// API key is fake; model construction should still succeed.
		if os.Getenv("CI") != "" {
			t.Fatalf("ChatModel: %v", err)
		}
	}
}
