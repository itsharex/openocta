package eino

import (
	"encoding/json"
	"testing"

	"github.com/cloudwego/eino/schema"

	"github.com/openocta/openocta/pkg/agent/types"
	"github.com/openocta/openocta/pkg/session"
)

func TestNormalizeToolCallArgumentsJSON(t *testing.T) {
	t.Parallel()
	cases := []struct {
		name string
		in   string
		want string
	}{
		{"empty", "", "{}"},
		{"whitespace", "  ", "{}"},
		{"json empty string", `""`, "{}"},
		{"json null", "null", "{}"},
		{"object", `{"command":"ipconfig"}`, `{"command":"ipconfig"}`},
		{"double encoded object", `"{\"command\":\"ipconfig\"}"`, `{"command":"ipconfig"}`},
		{"invalid", "not-json", "{}"},
	}
	for _, tc := range cases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			got := NormalizeToolCallArgumentsJSON(tc.in)
			if got != tc.want {
				t.Fatalf("NormalizeToolCallArgumentsJSON(%q) = %q, want %q", tc.in, got, tc.want)
			}
			if !json.Valid([]byte(got)) || got[0] != '{' {
				t.Fatalf("expected JSON object, got %q", got)
			}
		})
	}
}

func TestSchemaMessagesFromTranscriptEmptyToolArguments(t *testing.T) {
	t.Parallel()
	msgs := []session.TranscriptMessage{
		{
			Role: "assistant",
			Content: []session.ContentBlock{
				{Type: "text", Text: "running"},
				{Type: "toolCall", ID: "execute_0", Name: "execute", Arguments: json.RawMessage(`""`)},
			},
		},
	}
	out := SchemaMessagesFromTranscript(msgs, TranscriptLoadOptions{})
	if len(out) != 1 || len(out[0].ToolCalls) != 1 {
		t.Fatalf("unexpected messages: %#v", out)
	}
	if out[0].ToolCalls[0].Function.Arguments != "{}" {
		t.Fatalf("expected {}, got %q", out[0].ToolCalls[0].Function.Arguments)
	}
}

func TestBuildAgentMessagesSanitizesToolCallArguments(t *testing.T) {
	t.Parallel()
	msgs, err := BuildAgentMessages(types.Request{
		Prompt: "继续",
		SessionMessages: []*schema.Message{
			schema.AssistantMessage("ok", []schema.ToolCall{{
				ID:   "call_1",
				Type: "function",
				Function: schema.FunctionCall{
					Name:      "execute",
					Arguments: `""`,
				},
			}}),
		},
	})
	if err != nil {
		t.Fatalf("BuildAgentMessages: %v", err)
	}
	if len(msgs) != 1 || len(msgs[0].ToolCalls) != 1 {
		t.Fatalf("unexpected messages: %#v", msgs)
	}
	if msgs[0].ToolCalls[0].Function.Arguments != "{}" {
		t.Fatalf("expected {}, got %q", msgs[0].ToolCalls[0].Function.Arguments)
	}
}
