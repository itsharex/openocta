package localbackend

import (
	"context"

	localbk "github.com/cloudwego/eino-ext/adk/backend/local"
	"github.com/cloudwego/eino/adk/filesystem"
)

// Backend wraps eino-ext local filesystem backend and provides cross-platform
// Shell / StreamingShell execution (Windows uses cmd.exe without a console window).
type Backend struct {
	*localbk.Local
	validateCommand func(string) error
}

// NewBackend creates a filesystem backend with platform-appropriate shell execution.
func NewBackend(ctx context.Context, cfg *localbk.Config) (*Backend, error) {
	inner, err := localbk.NewBackend(ctx, cfg)
	if err != nil {
		return nil, err
	}
	validate := func(string) error { return nil }
	if cfg != nil && cfg.ValidateCommand != nil {
		validate = cfg.ValidateCommand
	}
	return &Backend{
		Local:           inner,
		validateCommand: validate,
	}, nil
}

// Ensure Backend satisfies filesystem interfaces used by DeepAgent.
var (
	_ filesystem.Backend        = (*Backend)(nil)
	_ filesystem.Shell          = (*Backend)(nil)
	_ filesystem.StreamingShell = (*Backend)(nil)
)
