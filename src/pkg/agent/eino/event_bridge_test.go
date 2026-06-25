package eino

import (
	"testing"

	"github.com/cloudwego/eino/schema"

	"github.com/openocta/openocta/pkg/agent/model"
	"github.com/openocta/openocta/pkg/agent/stream"
	"github.com/openocta/openocta/pkg/agent/types"
)

func TestBuildUserMessagesVideoBlock(t *testing.T) {
	t.Parallel()

	msgs, err := BuildUserMessages(types.Request{
		Prompt: "describe this clip",
		ContentBlocks: []model.ContentBlock{
			{
				Type:      model.ContentBlockVideo,
				MediaType: "video/mp4",
				Data:      "dGVzdA==",
			},
		},
	})
	if err != nil {
		t.Fatalf("BuildUserMessages: %v", err)
	}
	if len(msgs) != 1 || len(msgs[0].MultiContent) != 2 {
		t.Fatalf("unexpected message parts: %+v", msgs)
	}
	videoPart := msgs[0].MultiContent[1]
	if videoPart.Type != schema.ChatMessagePartTypeVideoURL {
		t.Fatalf("expected video_url part, got %q", videoPart.Type)
	}
	if videoPart.VideoURL == nil || videoPart.VideoURL.URL != "data:video/mp4;base64,dGVzdA==" {
		t.Fatalf("unexpected video url: %+v", videoPart.VideoURL)
	}
}

func TestMapFinishReasonToStopReason(t *testing.T) {
	t.Parallel()

	cases := []struct {
		in   string
		want string
	}{
		{"stop", "end_turn"},
		{"STOP", "end_turn"},
		{"tool_calls", "tool_use"},
		{"length", "end_turn"},
		{"content_filter", "end_turn"},
		{"", ""},
		{"null", ""},
		{"unknown", ""},
	}
	for _, tc := range cases {
		if got := mapFinishReasonToStopReason(tc.in); got != tc.want {
			t.Fatalf("mapFinishReasonToStopReason(%q) = %q, want %q", tc.in, got, tc.want)
		}
	}
}

func TestEmitTurnStopFromResponseMeta(t *testing.T) {
	t.Parallel()

	out := make(chan stream.StreamEvent, 4)
	meta := &schema.ResponseMeta{FinishReason: "tool_calls"}
	if !emitTurnStopFromResponseMeta(out, "sess-1", meta) {
		t.Fatal("expected turn stop to be emitted for tool_calls")
	}
	close(out)

	var stops int
	for evt := range out {
		if evt.Type != stream.EventMessageStop {
			continue
		}
		stops++
		if evt.Delta == nil || evt.Delta.StopReason != "tool_use" {
			t.Fatalf("unexpected message stop: %+v", evt.Delta)
		}
	}
	if stops != 1 {
		t.Fatalf("got %d message stops, want 1", stops)
	}

	out2 := make(chan stream.StreamEvent, 1)
	if emitTurnStopFromResponseMeta(out2, "sess-1", &schema.ResponseMeta{FinishReason: ""}) {
		t.Fatal("expected no turn stop for empty finish reason")
	}
	if len(out2) != 0 {
		t.Fatalf("expected no events, got %d", len(out2))
	}
}
