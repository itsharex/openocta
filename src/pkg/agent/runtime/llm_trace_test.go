package runtime

import (
	"testing"

	"github.com/openocta/openocta/pkg/config"
	"github.com/stellarlinkco/agentsdk-go/pkg/middleware"
)

func TestLlmTraceMiddlewareOptionsHTMLDisabled(t *testing.T) {
	off := false
	opts := llmTraceMiddlewareOptions(&config.GatewayLlmTraceConfig{HTMLRender: &off})
	if len(opts) != 1 {
		t.Fatalf("expected 1 option, got %d", len(opts))
	}
	mw := middleware.NewTraceMiddleware(t.TempDir(), opts...)
	t.Cleanup(mw.Close)
}

func TestLlmTraceMiddlewareOptionsDebounce(t *testing.T) {
	ms := 500
	opts := llmTraceMiddlewareOptions(&config.GatewayLlmTraceConfig{HTMLDebounceMs: &ms})
	if len(opts) != 1 {
		t.Fatalf("expected 1 option, got %d", len(opts))
	}
}
