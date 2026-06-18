package runtime

import (
	"context"
	"fmt"
	"math"
	"strings"
	"time"

	"github.com/stellarlinkco/agentsdk-go/pkg/tool"
)

const bashEmptyOutputOK = "(command completed successfully with no output)"

// bashCompatTool wraps bash-like tools so silent success (mkdir, touch, etc.)
// still returns a non-empty tool result for the model and UI.
type bashCompatTool struct {
	tool.Tool
	maxTimeout time.Duration
}

func wrapBashCompat(inner tool.Tool, maxTimeout time.Duration) tool.Tool {
	if inner == nil {
		return nil
	}
	name := strings.ToLower(strings.TrimSpace(inner.Name()))
	switch name {
	case "bash", "windows_exec_cmd":
		if maxTimeout <= 0 {
			maxTimeout = DefaultBashToolTimeout
		}
		if existing, ok := inner.(bashCompatTool); ok {
			return bashCompatTool{Tool: existing.Tool, maxTimeout: maxTimeout}
		}
		return bashCompatTool{Tool: inner, maxTimeout: maxTimeout}
	default:
		return inner
	}
}

func (b bashCompatTool) Execute(ctx context.Context, params map[string]interface{}) (*tool.ToolResult, error) {
	if params == nil {
		params = map[string]interface{}{}
	}
	applyBashTimeoutParams(params, b.maxTimeout)
	result, err := b.Tool.Execute(ctx, params)
	if err != nil || result == nil || !result.Success {
		return result, err
	}
	if strings.TrimSpace(result.Output) != "" {
		return result, err
	}
	result.Output = formatBashEmptySuccessOutput(params, result)
	return result, err
}

func formatBashEmptySuccessOutput(params map[string]interface{}, result *tool.ToolResult) string {
	cmd := strings.TrimSpace(extractBashCommand(params))
	durationMs := bashDurationMs(result)
	if cmd == "" {
		return bashEmptyOutputOK
	}
	if durationMs > 0 {
		return fmt.Sprintf("%s\n$ %s\nexit_code=0 duration_ms=%d", bashEmptyOutputOK, cmd, durationMs)
	}
	return fmt.Sprintf("%s\n$ %s\nexit_code=0", bashEmptyOutputOK, cmd)
}

func extractBashCommand(params map[string]interface{}) string {
	if params == nil {
		return ""
	}
	if cmd, ok := params["command"].(string); ok {
		return cmd
	}
	return ""
}

func applyBashTimeoutParams(params map[string]interface{}, maxTimeout time.Duration) {
	if params == nil || maxTimeout <= 0 {
		return
	}
	requested := durationFromToolParam(params["timeout"])
	effective := maxTimeout
	if requested > 0 && requested < effective {
		effective = requested
	}
	sec := effective.Seconds()
	if sec <= 0 {
		sec = 1
	}
	if sec > math.MaxInt32 {
		sec = math.MaxInt32
	}
	params["timeout"] = sec
}

func durationFromToolParam(raw interface{}) time.Duration {
	switch v := raw.(type) {
	case time.Duration:
		if v > 0 {
			return v
		}
	case float64:
		if v > 0 {
			return time.Duration(v * float64(time.Second))
		}
	case float32:
		if v > 0 {
			return time.Duration(float64(v) * float64(time.Second))
		}
	case int:
		if v > 0 {
			return time.Duration(v) * time.Second
		}
	case int64:
		if v > 0 {
			return time.Duration(v) * time.Second
		}
	case string:
		if d, ok := parseDurationOrSeconds(v); ok && d > 0 {
			return d
		}
	}
	return 0
}

func bashDurationMs(result *tool.ToolResult) int64 {
	if result == nil || result.Data == nil {
		return 0
	}
	data, ok := result.Data.(map[string]interface{})
	if !ok {
		return 0
	}
	switch v := data["duration_ms"].(type) {
	case int64:
		return v
	case int:
		return int64(v)
	case float64:
		return int64(v)
	default:
		return 0
	}
}
