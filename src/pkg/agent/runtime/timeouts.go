package runtime

import (
	"context"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/openocta/openocta/pkg/config"
	"github.com/stellarlinkco/agentsdk-go/pkg/api"
)

// 以下环境变量在 config.env.vars 通过 Options.Env 注入时同样生效。
const (
	// EnvAgentRunTimeout：单次 Run/RunStream 在传入的 context 尚未带 deadline 时追加的上限。
	// Go duration 语法（如 10m、600s、1h）或非负整数秒。未设置时默认 DefaultAgentRunTimeout。
	// 设为 0 表示不追加 deadline（可能无限等待，仅当 ctx 本身无超时）。
	EnvAgentRunTimeout = "OPENOCTA_AGENT_RUN_TIMEOUT"
	// EnvMiddlewareTimeout：agentsdk 每条 middleware 阶段的超时（api.Options.MiddlewareTimeout）。
	// 未设置或为 0 表示不限制（与 SDK 默认一致）。
	EnvMiddlewareTimeout = "OPENOCTA_MIDDLEWARE_TIMEOUT"
	// EnvHookTimeout：shell hook 执行默认超时（api.Options.HookTimeout）。
	// 未设置时传 0，由 agentsdk 内部使用其默认（约 600s）。
	EnvHookTimeout = "OPENOCTA_HOOK_TIMEOUT"
	// EnvBashToolTimeout：bash/windows_exec_cmd 单次命令硬超时（秒或 Go duration）。
	// 未设置时默认 DefaultBashToolTimeout；同时作为模型传入 timeout 的上限。
	EnvBashToolTimeout = "OPENOCTA_BASH_TIMEOUT"
)

// DefaultAgentRunTimeout 与 gateway chat 默认 timeoutMs=600000 对齐。
const DefaultAgentRunTimeout = 10 * time.Minute

// DefaultBashToolTimeout 为 bash 默认/最大执行时间（交互对话需快速反馈，默认约 10 秒）。
const DefaultBashToolTimeout = 10 * time.Second

// lookupEnvMerged prefers config.env.vars[key] when it is present and non-empty (after trim),
// so UI 保存的 openocta.json 无需重启即可生效，且可覆盖仅启动时注入的旧 os 环境。
func lookupEnvMerged(cfg *config.OpenOctaConfig, base func(string) string, key string) string {
	if base == nil {
		base = os.Getenv
	}
	if cfg != nil && cfg.Env != nil && cfg.Env.Vars != nil {
		if v, ok := cfg.Env.Vars[key]; ok {
			v = strings.TrimSpace(v)
			if v != "" {
				return v
			}
		}
	}
	return strings.TrimSpace(base(key))
}

func getenv(opts Options, key string) string {
	base := os.Getenv
	if opts.Env != nil {
		base = opts.Env
	}
	return lookupEnvMerged(opts.Config, base, key)
}

// parseDurationOrSeconds 支持 time.ParseDuration；若为纯数字则按秒解析。
func parseDurationOrSeconds(s string) (time.Duration, bool) {
	s = strings.TrimSpace(s)
	if s == "" {
		return 0, false
	}
	if d, err := time.ParseDuration(s); err == nil {
		return d, true
	}
	if n, err := strconv.Atoi(s); err == nil && n >= 0 {
		return time.Duration(n) * time.Second, true
	}
	return 0, false
}

func resolveAgentRunTimeout(opts Options) time.Duration {
	if opts.AgentRunTimeout > 0 {
		return opts.AgentRunTimeout
	}
	v := getenv(opts, EnvAgentRunTimeout)
	if v != "" {
		d, ok := parseDurationOrSeconds(v)
		if !ok {
			return DefaultAgentRunTimeout
		}
		return d
	}
	return DefaultAgentRunTimeout
}

func resolveMiddlewareTimeout(opts Options) time.Duration {
	if opts.MiddlewareTimeout > 0 {
		return opts.MiddlewareTimeout
	}
	v := getenv(opts, EnvMiddlewareTimeout)
	if v == "" {
		return 0
	}
	d, ok := parseDurationOrSeconds(v)
	if !ok {
		return 0
	}
	return d
}

func resolveHookTimeout(opts Options) time.Duration {
	if opts.HookTimeout > 0 {
		return opts.HookTimeout
	}
	v := getenv(opts, EnvHookTimeout)
	if v == "" {
		return 0
	}
	d, ok := parseDurationOrSeconds(v)
	if !ok {
		return 0
	}
	return d
}

func applyAPITimeouts(apiOpts *api.Options, opts Options) {
	if apiOpts == nil {
		return
	}
	if mt := resolveMiddlewareTimeout(opts); mt > 0 {
		apiOpts.MiddlewareTimeout = mt
	}
	if ht := resolveHookTimeout(opts); ht > 0 {
		apiOpts.HookTimeout = ht
	}
	if d := resolveAgentRunTimeout(opts); d > 0 {
		apiOpts.Timeout = d
	}
}

// DefaultAgentRunDuration 返回单次运行预算（与 Run / gateway 默认超时同源）。
// cfg 非 nil 时先读 config.env.vars 再读 env；env 可为 nil（将使用 os.Getenv）。
func DefaultAgentRunDuration(env func(string) string, cfg *config.OpenOctaConfig) time.Duration {
	if env == nil {
		env = os.Getenv
	}
	return resolveAgentRunTimeout(Options{Env: env, Config: cfg})
}

func wrapRunContext(ctx context.Context, agentRunBudget time.Duration) (context.Context, context.CancelFunc) {
	if agentRunBudget <= 0 {
		return ctx, func() {}
	}
	if _, hasDeadline := ctx.Deadline(); hasDeadline {
		return ctx, func() {}
	}
	return context.WithTimeout(ctx, agentRunBudget)
}

// resolveBashToolTimeout 返回 bash 工具默认超时，兼作模型显式 timeout 参数的上限。
// 优先级：Options.BashToolTimeout > config.tools.exec.timeoutSec > OPENOCTA_BASH_TIMEOUT > DefaultBashToolTimeout。
func resolveBashToolTimeout(opts Options) time.Duration {
	if opts.BashToolTimeout > 0 {
		return opts.BashToolTimeout
	}
	if opts.Config != nil && opts.Config.Tools != nil && opts.Config.Tools.Exec != nil {
		if sec := opts.Config.Tools.Exec.TimeoutSec; sec != nil && *sec > 0 {
			return time.Duration(*sec) * time.Second
		}
	}
	v := getenv(opts, EnvBashToolTimeout)
	if v != "" {
		if d, ok := parseDurationOrSeconds(v); ok && d > 0 {
			return d
		}
	}
	return DefaultBashToolTimeout
}

// resolveParallelToolCalls 是否允许同一轮模型输出并行执行多个 tool。
// 默认 false（串行），避免一个慢 bash 与其他 tool 并行时整轮被拖住且 trace 计时误导。
func resolveParallelToolCalls(opts Options) bool {
	if opts.ParallelToolCalls != nil {
		return *opts.ParallelToolCalls
	}
	if opts.Config != nil && opts.Config.Tools != nil && opts.Config.Tools.Exec != nil {
		if p := opts.Config.Tools.Exec.Parallel; p != nil {
			return *p
		}
	}
	return false
}
