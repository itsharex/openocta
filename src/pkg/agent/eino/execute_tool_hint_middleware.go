package eino

import (
	"context"
	"strings"

	"github.com/cloudwego/eino/adk"
)

const executeToolSingleLineHint = `
## execute tool (command parameter)
- The "command" argument MUST be a single line with no newline characters.
- Chain multiple steps with ";" or "&&" on the same line (e.g. "mkdir dir && cd dir && npm test").
- On Windows, cmd.exe truncates at newlines; use one-line PowerShell via powershell.exe -NoProfile -NonInteractive -Command "..." when needed.
- Do not split one logical command across multiple lines in the JSON argument.
`

type executeToolHintMiddleware struct {
	*adk.BaseChatModelAgentMiddleware
}

func newExecuteToolHintMiddleware() adk.ChatModelAgentMiddleware {
	return &executeToolHintMiddleware{
		BaseChatModelAgentMiddleware: &adk.BaseChatModelAgentMiddleware{},
	}
}

func (m *executeToolHintMiddleware) BeforeAgent(ctx context.Context, runCtx *adk.ChatModelAgentContext) (context.Context, *adk.ChatModelAgentContext, error) {
	if runCtx == nil {
		return ctx, runCtx, nil
	}
	if strings.Contains(runCtx.Instruction, "execute tool (command parameter)") {
		return ctx, runCtx, nil
	}
	nRunCtx := *runCtx
	if nRunCtx.Instruction != "" {
		nRunCtx.Instruction = strings.TrimSpace(nRunCtx.Instruction) + "\n" + executeToolSingleLineHint
	} else {
		nRunCtx.Instruction = strings.TrimSpace(executeToolSingleLineHint)
	}
	return ctx, &nRunCtx, nil
}
