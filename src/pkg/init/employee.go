package init

import (
	"log/slog"
	"os"
	"path/filepath"

	"github.com/openocta/openocta/pkg/config"
	"github.com/openocta/openocta/pkg/employees"
)

// InitEmployee 在项目启动时初始化内置数字员工：
// 若 ~/.openocta/employees/<id>/manifest.json 不存在，则将 embed/employees/*.yaml 中对应的 manifest 写入该路径；
// 已存在则跳过。
func InitEmployee(_ *config.OpenOctaConfig) error {
	env := func(k string) string { return os.Getenv(k) }
	root := employees.ResolveEmployeesDir(env)
	if err := os.MkdirAll(root, 0o755); err != nil {
		return err
	}

	list, err := employees.LoadEmbeddedEmployees()
	if err != nil {
		slog.Warn("init employees: load embedded failed", "error", err)
		return err
	}
	if len(list) == 0 {
		slog.Debug("init employees: no embedded employees to init")
		return nil
	}

	for i := range list {
		m := &list[i]
		manifestPath := filepath.Join(root, m.ID, "manifest.json")
		if _, err := os.Stat(manifestPath); err == nil {
			slog.Debug("init employees: already exists, skip", "id", m.ID, "path", manifestPath)
			continue
		} else if !os.IsNotExist(err) {
			slog.Warn("init employees: stat failed", "id", m.ID, "path", manifestPath, "error", err)
			continue
		}

		if err := employees.SaveManifest(m, env); err != nil {
			slog.Error("init employees: save manifest failed", "id", m.ID, "error", err)
			return err
		}
		slog.Info("init employees: initialized built-in employee", "id", m.ID, "name", m.Name, "path", manifestPath)
	}

	return nil
}
