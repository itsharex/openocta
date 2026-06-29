//go:build !windows

package localbackend

import (
	"context"

	"github.com/cloudwego/eino/adk/filesystem"
	"github.com/cloudwego/eino/schema"
)

func (b *Backend) Execute(ctx context.Context, input *filesystem.ExecuteRequest) (*filesystem.ExecuteResponse, error) {
	return b.Local.Execute(ctx, input)
}

func (b *Backend) ExecuteStreaming(ctx context.Context, input *filesystem.ExecuteRequest) (*schema.StreamReader[*filesystem.ExecuteResponse], error) {
	return b.Local.ExecuteStreaming(ctx, input)
}
