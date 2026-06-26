package eino

import (
	"testing"

	"github.com/cloudwego/eino/schema"

	"github.com/openocta/openocta/pkg/session"
)

func TestSchemaMessagesFromTranscriptMultiTurn(t *testing.T) {
	msgs := []session.TranscriptMessage{
		{Role: "user", Content: []session.ContentBlock{{Type: "text", Text: "你好"}}},
		{Role: "assistant", Content: []session.ContentBlock{{Type: "text", Text: "你好，有什么可以帮你？"}}},
		{Role: "user", Content: []session.ContentBlock{{Type: "text", Text: "继续"}}},
	}
	out := SchemaMessagesFromTranscript(msgs, TranscriptLoadOptions{})
	if len(out) != 3 {
		t.Fatalf("expected 3 messages, got %d", len(out))
	}
	if out[0].Role != schema.User || out[0].Content != "你好" {
		t.Fatalf("first message: %#v", out[0])
	}
	if out[1].Role != schema.Assistant || out[1].Content != "你好，有什么可以帮你？" {
		t.Fatalf("second message: %#v", out[1])
	}
	if out[2].Role != schema.User || out[2].Content != "继续" {
		t.Fatalf("third message: %#v", out[2])
	}
}

func TestSchemaMessagesFromTranscriptToolTurn(t *testing.T) {
	msgs := []session.TranscriptMessage{
		{
			Role: "assistant",
			Content: []session.ContentBlock{
				{Type: "toolCall", ID: "call_1", Name: "read_file", Arguments: []byte(`{"path":"a.txt"}`)},
			},
		},
		{
			Role:       "toolResult",
			ToolCallID: "call_1",
			ToolName:   "read_file",
			Content:    []session.ContentBlock{{Type: "text", Text: "file contents"}},
		},
	}
	out := SchemaMessagesFromTranscript(msgs, TranscriptLoadOptions{})
	if len(out) != 2 {
		t.Fatalf("expected 2 messages, got %d", len(out))
	}
	if len(out[0].ToolCalls) != 1 || out[0].ToolCalls[0].ID != "call_1" {
		t.Fatalf("assistant tool call: %#v", out[0].ToolCalls)
	}
	if out[1].Role != schema.Tool || out[1].ToolCallID != "call_1" {
		t.Fatalf("tool message: %#v", out[1])
	}
}

func TestSchemaMessagesFromTranscriptMaxMessages(t *testing.T) {
	msgs := []session.TranscriptMessage{
		{Role: "user", Content: []session.ContentBlock{{Type: "text", Text: "1"}}},
		{Role: "assistant", Content: []session.ContentBlock{{Type: "text", Text: "2"}}},
		{Role: "user", Content: []session.ContentBlock{{Type: "text", Text: "3"}}},
	}
	out := SchemaMessagesFromTranscript(msgs, TranscriptLoadOptions{MaxMessages: 2})
	if len(out) != 2 {
		t.Fatalf("expected 2 messages, got %d", len(out))
	}
	if out[0].Content != "2" || out[1].Content != "3" {
		t.Fatalf("unexpected trim: %#v", out)
	}
}
