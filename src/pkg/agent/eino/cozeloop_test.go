package eino

import (
	"testing"

	"github.com/openocta/openocta/pkg/config"
)

func TestCozeLoopConfigIsEnabled(t *testing.T) {
	t.Parallel()

	trueVal := true
	falseVal := false

	tests := []struct {
		name string
		cfg  *config.CozeLoopConfig
		want bool
	}{
		{"nil", nil, false},
		{"enable true", &config.CozeLoopConfig{Enable: &trueVal}, true},
		{"enable false", &config.CozeLoopConfig{Enable: &falseVal}, false},
		{"enabled true", &config.CozeLoopConfig{Enabled: &trueVal}, true},
		{"enable wins over enabled", &config.CozeLoopConfig{Enable: &falseVal, Enabled: &trueVal}, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			if got := tt.cfg.IsEnabled(); got != tt.want {
				t.Fatalf("IsEnabled() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestResolveCozeLoopSettingsFromConfig(t *testing.T) {
	t.Parallel()

	trueVal := true
	apiToken := "token"
	workspaceID := "ws"
	apiBaseURL := "http://example.test"

	enabled, token, ws, base := resolveCozeLoopSettings(&config.OpenOctaConfig{
		CozeLoop: &config.CozeLoopConfig{
			Enable:      &trueVal,
			APIToken:    &apiToken,
			WorkspaceID: &workspaceID,
			APIBaseURL:  &apiBaseURL,
		},
	})

	if !enabled || token != apiToken || ws != workspaceID || base != apiBaseURL {
		t.Fatalf("resolveCozeLoopSettings() = (%v, %q, %q, %q)", enabled, token, ws, base)
	}
}
