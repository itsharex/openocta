package eino

import (
	"encoding/json"
	"strings"

	"github.com/cloudwego/eino/schema"
)

// NormalizeToolCallArgumentsJSON ensures function.arguments is a JSON object string.
// Some providers reject empty strings, bare JSON strings, null, or double-encoded JSON.
func NormalizeToolCallArgumentsJSON(raw string) string {
	raw = strings.TrimSpace(raw)
	if raw == "" {
		return "{}"
	}
	if !json.Valid([]byte(raw)) {
		return "{}"
	}
	if strings.HasPrefix(raw, "{") {
		return raw
	}
	var inner string
	if err := json.Unmarshal([]byte(raw), &inner); err == nil {
		inner = strings.TrimSpace(inner)
		if inner != "" && json.Valid([]byte(inner)) && strings.HasPrefix(inner, "{") {
			return inner
		}
	}
	return "{}"
}

// NormalizeToolCallArgumentsRaw normalizes raw transcript/stream tool argument bytes.
func NormalizeToolCallArgumentsRaw(raw json.RawMessage) json.RawMessage {
	return json.RawMessage(NormalizeToolCallArgumentsJSON(string(raw)))
}

func sanitizeSchemaMessagesToolCalls(msgs []*schema.Message) {
	for _, msg := range msgs {
		if msg == nil || msg.Role != schema.Assistant || len(msg.ToolCalls) == 0 {
			continue
		}
		for i := range msg.ToolCalls {
			msg.ToolCalls[i].Function.Arguments = NormalizeToolCallArgumentsJSON(msg.ToolCalls[i].Function.Arguments)
		}
	}
}
