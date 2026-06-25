// Package types defines agent runtime request/response types.
package types

import (
	"github.com/openocta/openocta/pkg/agent/model"
	"github.com/openocta/openocta/pkg/agent/stream"
)

type Request struct {
	Prompt        string
	ContentBlocks []model.ContentBlock
	SessionID     string
	RequestID     string
}

type Result struct {
	Output     string
	StopReason string
	Usage      model.Usage
	ToolCalls  []model.ToolCall
}

type Response struct {
	RequestID string
	Result    *Result
}

// StreamEvent is an alias for gateway compatibility.
type StreamEvent = stream.StreamEvent
