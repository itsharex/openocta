// Package runtime wraps agentsdk-go api.New for OPENOCTA agent execution.
package runtime

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/tencent-connect/botgo/log"
	"os"
	"path/filepath"
	"strings"

	"github.com/stellarlinkco/agentsdk-go/pkg/middleware"

	"github.com/openocta/openocta/pkg/agent"
	"github.com/openocta/openocta/pkg/config"
	"github.com/openocta/openocta/pkg/paths"
	octasecurity "github.com/openocta/openocta/pkg/security"
	"github.com/stellarlinkco/agentsdk-go/pkg/api"
	agentsdkConfg "github.com/stellarlinkco/agentsdk-go/pkg/config"
	"github.com/stellarlinkco/agentsdk-go/pkg/model"
	"github.com/stellarlinkco/agentsdk-go/pkg/sandbox"
	"github.com/stellarlinkco/agentsdk-go/pkg/tool"
)

// Runtime wraps agentsdk-go Runtime for OPENOCTA.
type Runtime struct {
	rt *api.Runtime
}

// New creates a new Runtime with the given options.
// When EnableSkills is true, skills are loaded from three locations (in order of precedence):
// 1. Built-in skills (shipped with install: OPENOCTA_BUNDLED_SKILLS_DIR or executable-relative)
// 2. Managed/local skills (~/.openocta/skills)
// 3. Workspace skills (<workspace>/skills, i.e. ProjectRoot/skills)
func New(ctx context.Context, opts Options) (*Runtime, error) {
	if opts.ModelFactory == nil {
		opts.ModelFactory = DefaultModelFactory()
	}
	projectRoot := opts.ProjectRoot
	if projectRoot == "" {
		projectRoot = "."
	}

	// Resolve enableSandbox early so BuiltinTools can use disabled sandbox when config says so.
	enableSandbox := opts.EnableSandbox
	if opts.Config != nil && opts.Config.Security != nil && opts.Config.Security.Sandbox != nil &&
		opts.Config.Security.Sandbox.Enabled != nil {
		enableSandbox = *opts.Config.Security.Sandbox.Enabled
	} else {
		enableSandbox = false
	}

	// Built-in tools (bash, file_read, file_write, grep, glob, etc.) plus any caller-provided tools.
	// When sandbox disabled, use NewDisabledSandbox so tools skip path/permission validation.
	tools := BuiltinTools(projectRoot, !enableSandbox)
	if len(opts.Tools) > 0 {
		tools = append(tools, opts.Tools...)
	}
	apiOpts := api.Options{
		ModelFactory: opts.ModelFactory,
		Tools:        tools,
		ProjectRoot:  projectRoot,
	}
	if apiOpts.SettingsOverrides == nil {
		apiOpts.SettingsOverrides = &agentsdkConfg.Settings{}
	}
	// 添加环境变量：1) 写入 SettingsOverrides.Env 供 hooks/settings 使用；2) 写入进程环境供 bash 等工具继承
	if opts.Config.Env != nil && len(opts.Config.Env.Vars) > 0 {
		apiOpts.SettingsOverrides.Env = opts.Config.Env.Vars
		for k, v := range opts.Config.Env.Vars {
			if k != "" {
				_ = os.Setenv(k, v)
			}
		}
	}
	//if len(opts.MCPServers) > 0 {
	//	apiOpts.MCPServers = opts.MCPServers
	//	if opts.Config != nil && opts.Config.Mcp != nil {
	//		if mcpOverrides := buildMCPConfigOverrides(opts.Config.Mcp); mcpOverrides != nil {
	//			apiOpts.SettingsOverrides.MCP = mcpOverrides
	//		}
	//	}
	//}
	var skillSandboxDirs []string
	if opts.EnableSkills {
		regs, dirs := LoadSkillRegistrationsWithBaseDirs(projectRoot, opts.Config)
		if len(regs) > 0 {
			apiOpts.Skills = regs
		}
		skillSandboxDirs = dirs
	}
	if opts.EnableSubagents && len(opts.Subagents) > 0 {
		apiOpts.Subagents = opts.Subagents
	}

	if apiOpts.SettingsOverrides == nil {
		apiOpts.SettingsOverrides = &agentsdkConfg.Settings{}
	}

	// Security policy from root-level security config (OpenOctaConfig.Security).
	var (
		sandboxRoot       *config.SandboxConfig
		approvalQueueCfg  *config.SandboxApprovalQueue
		approvalStorePath string
		commandPolicy     *ResolvedCommandPolicy
	)
	if opts.Config != nil && opts.Config.Security != nil {
		sec := opts.Config.Security
		sandboxRoot = sec.Sandbox
		commandPolicy = ResolveCommandPolicy(sec)
		if sec.ApprovalQueue != nil {
			approvalQueueCfg = sec.ApprovalQueue
			approvalStorePath = resolveApprovalQueueStorePath(sandboxRoot, opts.Env)
		}
	}

	// Wrap Bash tool with command validation (from commandPolicy or legacy validator).
	var validatorCfg *config.SandboxValidatorConfig
	if commandPolicy != nil && commandPolicy.Enabled {
		validatorCfg = commandPolicy.ToLegacyValidator()
	}
	if validatorCfg != nil {
		for i := range tools {
			if tools[i] == nil {
				continue
			}
			if shouldValidateCommandTool(tools[i].Name()) {
				tools[i] = WrapToolWithCommandValidation(tools[i], validatorCfg)
			}
		}
		apiOpts.Tools = tools
	}
	sandboxOpts := opts.Sandbox
	if sandboxRoot != nil {
		fromConfig := buildSandboxOptsFromConfig(sandboxRoot, projectRoot)
		if fromConfig != nil {
			sandboxOpts = mergeSandboxOpts(fromConfig, sandboxOpts)
		}
	}
	if len(skillSandboxDirs) > 0 {
		sandboxOpts = mergeSandboxOpts(sandboxOpts, &SandboxOpts{ExtraAllowedPaths: skillSandboxDirs})
	}
	// enableSandbox already resolved above from config
	if enableSandbox {
		apiOpts.Sandbox = buildSandboxOptions(projectRoot, sandboxOpts)
		apiOpts.SettingsOverrides.Sandbox = &agentsdkConfg.SandboxConfig{
			Enabled:                  &enableSandbox,
			AutoAllowBashIfSandboxed: &enableSandbox, // enableSandbox 为true之后，默认允许命令在沙箱内运行且符合沙箱规则，直接执行，无需用户确认
			AllowUnsandboxedCommands: &enableSandbox,
			ExcludedCommands:         []string{},
		}
	} else {
		apiOpts.SettingsOverrides.Sandbox = &agentsdkConfg.SandboxConfig{
			Enabled: &enableSandbox,
		}
	}

	var (
		approvalQ         *octasecurity.ApprovalQueue
		approvalBlockWait bool
	)

	// Approval Queue: when enabled, set Permissions.ask for Bash and attach OpenOcta middleware (SDK v2 无内置队列).
	if opts.EnableApprovalQueue && approvalQueueCfg != nil && approvalQueueCfg.Enabled != nil && *approvalQueueCfg.Enabled {
		if apiOpts.SettingsOverrides.Permissions == nil {
			apiOpts.SettingsOverrides.Permissions = &agentsdkConfg.PermissionsConfig{}
		}
		// Ask for Bash tool calls by default; approvals are persisted and can whitelist sessions via TTL.
		if !containsRule(apiOpts.SettingsOverrides.Permissions.Ask, "bash") {
			apiOpts.SettingsOverrides.Permissions.Ask = append(apiOpts.SettingsOverrides.Permissions.Ask, "bash")
		}

		// Write approval queue config to ~/.openocta/workspace/.claude/settings.json.
		// When commandPolicy is present, use its allow/ask/deny; else use approvalQueue.
		var permsOverride *ApprovalQueuePermsOverride
		if commandPolicy != nil && commandPolicy.Enabled {
			allow, ask, deny := commandPolicy.ToApprovalQueuePerms()
			permsOverride = &ApprovalQueuePermsOverride{Allow: allow, Ask: ask, Deny: deny}
		}
		if err := writeApprovalQueueSettings(opts.Env, approvalQueueCfg, permsOverride); err != nil {
			log.Errorf("Warning: failed to write approval queue settings: %v", err)
		}

		if strings.TrimSpace(approvalStorePath) != "" {
			q, err := octasecurity.GetApprovalQueue(approvalStorePath)
			if err == nil {
				approvalQ = q
				approvalBlockWait = approvalQueueCfg.BlockOnApproval == nil || *approvalQueueCfg.BlockOnApproval
			} else {
				log.Errorf("Warning: failed to create approval queue: %v", err)
			}
		}
	} else {
		// Approval queue is disabled, remove settings.json if it exists
		if err := removeApprovalQueueSettings(opts.Env); err != nil {
			log.Errorf("Warning: failed to remove approval queue settings: %v", err)
		}
	}

	var mw []middleware.Middleware

	if opts.Config != nil && opts.Config.Gateway != nil && opts.Config.Gateway.LlmTrace != nil &&
		opts.Config.Gateway.LlmTrace.Enabled != nil && *opts.Config.Gateway.LlmTrace.Enabled {
		mw = append(mw, middleware.NewTraceMiddleware(filepath.Join(projectRoot, ".trace")))
	}

	// Command validation middleware (BeforeTool): emits early errors for audit/logging.
	if validatorCfg != nil && (validatorCfg.Enabled == nil || *validatorCfg.Enabled) {
		mw = append(mw, middleware.Funcs{
			Identifier: "openocta-command-validator",
			OnBeforeTool: func(_ context.Context, st *middleware.State) error {
				call, ok := st.ToolCall.(model.ToolCall)
				if !ok {
					return nil
				}
				if strings.EqualFold(strings.TrimSpace(call.Name), "bash") {
					if cmd, _ := call.Arguments["command"].(string); strings.TrimSpace(cmd) != "" {
						return ValidateCommandWithConfig(cmd, validatorCfg)
					}
				}
				return nil
			},
		})
	}

	if approvalQ != nil {
		mw = append(mw, approvalQueueMiddleware(approvalQ, approvalBlockWait))
	}

	if opts.TokenTracking {
		env := opts.Env
		if env == nil {
			env = func(string) string { return "" }
		}
		agentID := opts.AgentID
		if strings.TrimSpace(agentID) == "" {
			agentID = "main"
		}
		mw = append(mw, NewTokenUsageMiddleware(agentID, env))
	}

	apiOpts.Middleware = mw
	apiOpts.Skylark = mergeSkylarkOptions(opts)
	if opts.EnableSystemPrompt {
		if opts.SystemPromptOverrides != "" {
			apiOpts.SystemPrompt = opts.SystemPromptOverrides
		} else {
			env := opts.Env
			if env == nil {
				env = func(string) string { return "" }
			}
			workspaceDir := agent.ResolveAgentWorkspaceDir(opts.Config, "main", env)
			prompt, err := BuildSystemPrompt(SystemPromptOptions{
				WorkspaceDir: workspaceDir,
				ProjectRoot:  projectRoot,
			})
			if err == nil {
				apiOpts.SystemPrompt = prompt
			}
		}
	}

	// todo: 生产环境建议去掉，仅用于开发环境
	//apiOpts.OTEL = api.OTELConfig{
	//	Enabled:     true,
	//	ServiceName: "openclaw",
	//	Endpoint:    "http://192.168.50.254:14318",
	//}
	rt, err := api.New(ctx, apiOpts)
	if err != nil {
		return nil, err
	}
	return &Runtime{rt: rt}, nil
}

// Options configures the Runtime.
type Options struct {
	ModelFactory api.ModelFactory
	Tools        []tool.Tool
	// ProjectRoot is the workspace/project root (used as api.Options.ProjectRoot and for loading workspace skills).
	ProjectRoot string
	// Config is optional; when set, used for skill load config (e.g. extraDirs) and eligibility.
	Config *config.OpenOctaConfig
	// EnableSkills loads skills from built-in, ~/.openocta/skills, and <workspace>/skills and registers them with the runtime.
	EnableSkills bool
	// EnableSubagents enables subagent dispatch when Subagents is non-empty.
	EnableSubagents bool
	// EnableSandbox attaches sandbox manager for tool execution (filesystem/network/resource limits).
	EnableSandbox bool
	// EnableApprovalQueue enables approval queue + permission ask wiring when config.security.approvalQueue.enabled is true.
	// When false, config may still be present but no approval wiring is installed.
	EnableApprovalQueue bool
	// Subagents is the list of subagent registrations (used when EnableSubagents is true).
	Subagents []api.SubagentRegistration
	// Sandbox overrides default sandbox options when EnableSandbox is true (optional).
	Sandbox *SandboxOpts
	// MCPServers is the list of MCP server specs (e.g. stdio://cmd args or URL). Load from config via BuildMCPServersFromConfig.
	MCPServers []string
	// TokenTracking enables token usage recording; default true when creating runtime for chat.
	TokenTracking bool
	// AgentID is used to resolve session transcript path for token usage logging (e.g. "main").
	AgentID string
	// Env is used to resolve state dir (e.g. os.Getenv).
	Env func(string) string
	// EnableSystemPrompt builds system prompt from ~/.openocta/workspace and ProjectRoot/prompt (deduped by filename) and sets api.Options.SystemPrompt.
	EnableSystemPrompt bool
	// SystemPromptOverrides if non-empty replaces the auto-built system prompt when EnableSystemPrompt is true.
	SystemPromptOverrides string
	// Skylark sets api.Options.Skylark directly; when nil, mergeSkylarkOptions uses config agents.defaults.skylark and OPENOCTA_SKYLARK (default on).
	Skylark *api.SkylarkOptions
}

// mergeSkylarkOptions resolves api.SkylarkOptions: explicit opts.Skylark wins; then OPENOCTA_SKYLARK; then agents.defaults.skylark; default enabled (see agentsdk-go docs/skylark.md).
func mergeSkylarkOptions(opts Options) *api.SkylarkOptions {
	if opts.Skylark != nil {
		return opts.Skylark
	}
	env := opts.Env
	if env == nil {
		env = func(string) string { return "" }
	}
	v := strings.TrimSpace(strings.ToLower(env("OPENOCTA_SKYLARK")))
	if v == "0" || v == "false" || v == "off" || v == "no" {
		return &api.SkylarkOptions{Enabled: false}
	}
	if v == "1" || v == "true" || v == "yes" || v == "on" {
		return &api.SkylarkOptions{Enabled: true}
	}
	if o := skylarkFromAgentDefaults(opts.Config); o != nil {
		return o
	}
	return &api.SkylarkOptions{Enabled: true}
}

func skylarkFromAgentDefaults(cfg *config.OpenOctaConfig) *api.SkylarkOptions {
	if cfg == nil || cfg.Agents == nil || cfg.Agents.Defaults == nil || cfg.Agents.Defaults.Skylark == nil {
		return nil
	}
	sk := cfg.Agents.Defaults.Skylark
	if sk.Enabled == nil && sk.DataDir == "" && sk.DisableEmbedding == nil && sk.KeepAutoSkills == nil {
		return nil
	}
	o := &api.SkylarkOptions{
		DataDir: strings.TrimSpace(sk.DataDir),
	}
	if sk.Enabled != nil {
		o.Enabled = *sk.Enabled
	} else {
		o.Enabled = true
	}
	if sk.DisableEmbedding != nil {
		o.DisableEmbedding = *sk.DisableEmbedding
	}
	if sk.KeepAutoSkills != nil {
		o.KeepAutoSkills = *sk.KeepAutoSkills
	}
	return o
}

func resolveApprovalQueueStorePath(s *config.SandboxConfig, env func(string) string) string {
	// Precedence:
	// 1) sandbox.approvalStore (legacy) or sandbox.approvalQueue.* (future)
	// For now, use approvalStore if provided; otherwise default stateDir/agents/approvals/approvals.json.
	if s != nil && s.ApprovalStore != nil && strings.TrimSpace(*s.ApprovalStore) != "" {
		p := strings.TrimSpace(*s.ApprovalStore)
		// If a directory is supplied, store approvals in a stable filename under it.
		if !strings.HasSuffix(strings.ToLower(p), ".json") {
			return filepath.Join(p, "approvals.json")
		}
		return p
	}
	if env == nil {
		env = func(string) string { return "" }
	}
	stateDir := paths.ResolveStateDir(env)
	return filepath.Join(stateDir, "agents", "approvals", "approvals.json")
}

func containsRule(rules []string, want string) bool {
	want = strings.ToLower(strings.TrimSpace(want))
	for _, r := range rules {
		if strings.ToLower(strings.TrimSpace(r)) == want {
			return true
		}
	}
	return false
}

// SandboxOpts holds optional sandbox overrides for the runtime.
type SandboxOpts struct {
	Root              string
	AllowedPaths      []string
	ExtraAllowedPaths []string
	NetworkAllow      []string
	ResourceLimit     sandbox.ResourceLimits
}

// buildSandboxOptsFromConfig builds SandboxOpts from root-level sandbox config.
func buildSandboxOptsFromConfig(c *config.SandboxConfig, projectRoot string) *SandboxOpts {
	if c == nil {
		return nil
	}
	o := &SandboxOpts{}
	if c.Root != nil && strings.TrimSpace(*c.Root) != "" {
		o.Root = *c.Root
	}
	if len(c.AllowedPaths) > 0 {
		o.AllowedPaths = append([]string{}, c.AllowedPaths...)
	}
	if len(c.NetworkAllow) > 0 {
		o.NetworkAllow = append([]string{}, c.NetworkAllow...)
	}
	if c.ResourceLimit != nil {
		if c.ResourceLimit.MaxCPUPercent != nil {
			o.ResourceLimit.MaxCPUPercent = *c.ResourceLimit.MaxCPUPercent
		}
		if c.ResourceLimit.MaxMemoryBytes != nil {
			o.ResourceLimit.MaxMemoryBytes = *c.ResourceLimit.MaxMemoryBytes
		}
		if c.ResourceLimit.MaxDiskBytes != nil {
			o.ResourceLimit.MaxDiskBytes = *c.ResourceLimit.MaxDiskBytes
		}
	}
	return o
}

// mergeSandboxOpts merges override into base; base may be nil (then override is returned).
func mergeSandboxOpts(base, override *SandboxOpts) *SandboxOpts {
	if base == nil {
		return override
	}
	if override == nil {
		return base
	}
	out := *base
	if override.Root != "" {
		out.Root = override.Root
	}
	if len(override.AllowedPaths) > 0 {
		out.AllowedPaths = override.AllowedPaths
	}
	if len(override.ExtraAllowedPaths) > 0 {
		out.ExtraAllowedPaths = append(append([]string{}, out.ExtraAllowedPaths...), override.ExtraAllowedPaths...)
	}
	if len(override.NetworkAllow) > 0 {
		out.NetworkAllow = override.NetworkAllow
	}
	if override.ResourceLimit.MaxCPUPercent > 0 || override.ResourceLimit.MaxMemoryBytes > 0 || override.ResourceLimit.MaxDiskBytes > 0 {
		out.ResourceLimit = override.ResourceLimit
	}
	return &out
}

func appendDedupePaths(base []string, extra []string) []string {
	seen := make(map[string]struct{})
	var out []string
	add := func(p string) {
		p = strings.TrimSpace(p)
		if p == "" {
			return
		}
		abs, err := filepath.Abs(filepath.Clean(p))
		if err != nil || abs == "" {
			return
		}
		if _, ok := seen[abs]; ok {
			return
		}
		seen[abs] = struct{}{}
		out = append(out, abs)
	}
	for _, p := range base {
		add(p)
	}
	for _, p := range extra {
		add(p)
	}
	return out
}

func buildSandboxOptions(projectRoot string, overrides *SandboxOpts) api.SandboxOptions {
	root := projectRoot
	allowedPaths := []string{filepath.Join(projectRoot, "workspace"), filepath.Join(projectRoot, "shared")}
	networkAllow := []string{}
	var resourceLimit sandbox.ResourceLimits
	if overrides != nil {
		if overrides.Root != "" {
			root = overrides.Root
		}
		if len(overrides.AllowedPaths) > 0 {
			allowedPaths = overrides.AllowedPaths
		}
		if len(overrides.ExtraAllowedPaths) > 0 {
			allowedPaths = appendDedupePaths(allowedPaths, overrides.ExtraAllowedPaths)
		}
		if len(overrides.NetworkAllow) > 0 {
			networkAllow = overrides.NetworkAllow
		}
		if overrides.ResourceLimit.MaxCPUPercent > 0 || overrides.ResourceLimit.MaxMemoryBytes > 0 || overrides.ResourceLimit.MaxDiskBytes > 0 {
			resourceLimit = overrides.ResourceLimit
		}
	}
	return api.SandboxOptions{
		Root:          root,
		AllowedPaths:  allowedPaths,
		NetworkAllow:  networkAllow,
		ResourceLimit: resourceLimit,
	}
}

// DefaultModelFactory returns an Anthropic provider (reads ANTHROPIC_API_KEY from env).
func DefaultModelFactory() api.ModelFactory {
	return &model.AnthropicProvider{ModelName: "claude-sonnet-4-5-20250929"}
}

// Run executes a single request.
func (r *Runtime) Run(ctx context.Context, req api.Request) (*api.Response, error) {
	return r.rt.Run(ctx, req)
}

// RunStream executes with streaming events.
func (r *Runtime) RunStream(ctx context.Context, req api.Request) (<-chan api.StreamEvent, error) {
	return r.rt.RunStream(ctx, req)
}

// Close shuts down the runtime.
func (r *Runtime) Close() error {
	return r.rt.Close()
}

// ClearSessionHistory removes the agentsdk-go persisted history for the given session ID.
// History is stored under projectRoot/.claude/history/<sessionID>.json (sessionID is path-sanitized).
// Call this when creating a new session (/new) so the old session's history is not reused.
func ClearSessionHistory(projectRoot, sessionID string) {
	projectRoot = strings.TrimSpace(projectRoot)
	sessionID = strings.TrimSpace(sessionID)
	if projectRoot == "" || sessionID == "" {
		return
	}
	name := historySessionFileName(sessionID)
	if name == "" {
		return
	}
	path := filepath.Join(projectRoot, ".claude", "history", name+".json")
	_ = os.Remove(path)
}

// historySessionFileName sanitizes sessionID for use as a filename, matching agentsdk-go's logic.
func historySessionFileName(sessionID string) string {
	const fallback = "default"
	trimmed := strings.TrimSpace(sessionID)
	if trimmed == "" {
		return fallback
	}
	var b strings.Builder
	b.Grow(len(trimmed))
	for _, r := range trimmed {
		switch {
		case r >= 'a' && r <= 'z',
			r >= 'A' && r <= 'Z',
			r >= '0' && r <= '9',
			r == '-', r == '_':
			b.WriteRune(r)
		default:
			b.WriteByte('-')
		}
	}
	sanitized := strings.Trim(b.String(), "-")
	if sanitized == "" {
		return fallback
	}
	return sanitized
}

// buildMCPConfigOverrides builds agentsdk-go MCPConfig overrides from OpenOcta MCP config.
// NOTE: 当前引入的 agentsdk-go 版本的 MCPConfig 暂未暴露超时等可覆盖字段，
// 这里预留扩展点，后续 SDK 增加字段后可以在此处进行映射。
func buildMCPConfigOverrides(c *config.McpConfig) *agentsdkConfg.MCPConfig {
	if c == nil {
		return nil
	}
	// 目前先不返回覆盖配置，以避免与 SDK 内部默认行为产生不兼容。
	// 将来如果 MCPConfig 新增可配置字段（例如 TimeoutSeconds、ToolTimeoutSeconds），
	// 可以在这里从 c 中读取并写入到返回值中。
	_ = c
	return nil
}

// getSettingsPath returns the path to ~/.openocta/workspace/.claude/settings.json
func getSettingsPath(env func(string) string) string {
	if env == nil {
		env = func(string) string { return "" }
	}
	stateDir := paths.ResolveStateDir(env)
	return filepath.Join(stateDir, "workspace", ".claude", "settings.json")
}

// ApprovalQueuePermsOverride provides allow/ask/deny from commandPolicy when present.
type ApprovalQueuePermsOverride struct {
	Allow, Ask, Deny []string
}

// writeApprovalQueueSettings writes approval queue configuration to settings.json
// Format follows the .claude/settings.json specification from settings-configuration.md.
// When permsOverride is set (from commandPolicy), it takes precedence over cfg.Allow/Ask/Deny.
func writeApprovalQueueSettings(env func(string) string, cfg *config.SandboxApprovalQueue, permsOverride *ApprovalQueuePermsOverride) error {
	settingsPath := getSettingsPath(env)

	// Build permissions config
	perms := &agentsdkConfg.PermissionsConfig{
		DefaultMode:                  "bypassPermissions",
		DisableBypassPermissionsMode: "enable",
	}

	var allow, ask, deny []string
	if permsOverride != nil {
		allow, ask, deny = permsOverride.Allow, permsOverride.Ask, permsOverride.Deny
	} else if cfg != nil {
		allow, ask, deny = cfg.Allow, cfg.Ask, cfg.Deny
	}

	// Add allow rules
	for _, cmd := range allow {
		if cmd != "" {
			perms.Allow = append(perms.Allow, fmt.Sprintf("Bash(%s:*)", cmd))
		}
	}

	// Add ask rules (commands requiring approval)
	for _, cmd := range ask {
		if cmd != "" {
			perms.Ask = append(perms.Ask, fmt.Sprintf("Bash(%s:*)", cmd))
		}
	}

	// Add deny rules
	for _, cmd := range deny {
		if cmd != "" {
			perms.Deny = append(perms.Deny, fmt.Sprintf("Bash(%s:*)", cmd))
		}
	}

	// Build settings structure
	settings := struct {
		Permissions *agentsdkConfg.PermissionsConfig `json:"permissions,omitempty"`
	}{
		Permissions: perms,
	}

	// Create directory if needed
	dir := filepath.Dir(settingsPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return fmt.Errorf("failed to create settings directory: %w", err)
	}

	// Marshal to JSON
	data, err := json.MarshalIndent(settings, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal settings: %w", err)
	}

	// Write file
	if err := os.WriteFile(settingsPath, data, 0644); err != nil {
		return fmt.Errorf("failed to write settings file: %w", err)
	}

	return nil
}

// removeApprovalQueueSettings removes the settings.json file when approval queue is disabled
func removeApprovalQueueSettings(env func(string) string) error {
	settingsPath := getSettingsPath(env)

	// Check if file exists
	if _, err := os.Stat(settingsPath); err != nil {
		if os.IsNotExist(err) {
			// File doesn't exist, nothing to do
			return nil
		}
		return fmt.Errorf("failed to check settings file: %w", err)
	}

	// Remove the file
	if err := os.Remove(settingsPath); err != nil {
		return fmt.Errorf("failed to remove settings file: %w", err)
	}

	return nil
}
