package runtime

import (
	"time"

	"github.com/openocta/openocta/pkg/config"
	"github.com/stellarlinkco/agentsdk-go/pkg/middleware"
)

func llmTraceMiddlewareOptions(cfg *config.GatewayLlmTraceConfig) []middleware.TraceOption {
	if cfg == nil {
		return nil
	}
	var opts []middleware.TraceOption
	if cfg.HTMLRender != nil && !*cfg.HTMLRender {
		opts = append(opts, middleware.WithHTMLRender(false))
	}
	if cfg.HTMLDebounceMs != nil {
		opts = append(opts, middleware.WithHTMLDebounce(time.Duration(*cfg.HTMLDebounceMs)*time.Millisecond))
	}
	return opts
}
