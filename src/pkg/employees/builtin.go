// Package employees: 从 embed/employees/*.yaml 加载内置数字员工配置。
package employees

import (
	"io/fs"
	"path"
	"strings"
	"sync"

	"github.com/openocta/openocta/embed"
	"github.com/openocta/openocta/pkg/config"
	"gopkg.in/yaml.v3"
)

var (
	embeddedOnce sync.Once
	embeddedList []Manifest
	embeddedByID map[string]*Manifest
)

// embeddedEmployeeYAML 与 embed/employees/*.yaml 的格式对应。
type embeddedEmployeeYAML struct {
	ID          string                           `yaml:"id"`
	Name        string                           `yaml:"name"`
	Description string                           `yaml:"description"`
	Prompt      string                           `yaml:"prompt"`
	Enabled     *bool                            `yaml:"enabled"`
	SkillIDs    []string                         `yaml:"skillIds"`
	McpServers  map[string]config.McpServerEntry `yaml:"mcpServers"`
}

// LoadEmbeddedEmployees 从嵌入的 employees 目录读取所有 .yaml 文件，解析为 Manifest 列表（Builtin=true）。
// 项目启动时调用，用于初始化内置数字员工。
func LoadEmbeddedEmployees() ([]Manifest, error) {
	efs, err := embed.EmployeesFS()
	if err != nil {
		return nil, err
	}
	entries, err := fs.ReadDir(efs, ".")
	if err != nil {
		return nil, err
	}
	var list []Manifest
	for _, e := range entries {
		if e.IsDir() {
			continue
		}
		name := e.Name()
		if !strings.HasSuffix(strings.ToLower(name), ".yaml") && !strings.HasSuffix(strings.ToLower(name), ".yml") {
			continue
		}
		data, err := fs.ReadFile(efs, name)
		if err != nil {
			continue
		}
		var raw embeddedEmployeeYAML
		if err := yaml.Unmarshal(data, &raw); err != nil {
			continue
		}
		id := strings.TrimSpace(raw.ID)
		if id == "" {
			id = strings.TrimSuffix(name, path.Ext(name))
		}
		if id == "" {
			continue
		}
		enabled := true
		if raw.Enabled != nil {
			enabled = *raw.Enabled
		}
		m := Manifest{
			ID:          id,
			Name:        coalesce(strings.TrimSpace(raw.Name), id),
			Description: strings.TrimSpace(raw.Description),
			Prompt:      strings.TrimSpace(raw.Prompt),
			Enabled:     enabled,
			Builtin:     true,
			SkillIDs:    raw.SkillIDs,
			McpServers:  raw.McpServers,
		}
		if m.McpServers == nil {
			m.McpServers = make(map[string]config.McpServerEntry)
		}
		list = append(list, m)
	}
	return list, nil
}
