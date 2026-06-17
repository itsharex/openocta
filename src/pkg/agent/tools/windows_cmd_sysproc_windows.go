//go:build windows

package tools

import (
	"os/exec"
	"syscall"
)

func applyExecNoWindow(cmd *exec.Cmd) {
	if cmd == nil {
		return
	}

	// Windows 下静默无窗口执行：
	// CREATE_NO_WINDOW (0x08000000) — 不为子进程创建新的控制台窗口
	//
	// 注意：曾经叠加 CREATE_UNICODE_ENVIRONMENT | DETACHED_PROCESS，但 HideWindow +
	// CREATE_NO_WINDOW + DETACHED_PROCESS 的组合是 Windows 上后门/挖矿程序隐藏 cmd
	// 调用的经典指纹，会触发 360/火绒/Defender ASR 等启发式规则，导致
	// `fork/exec ...: Windows cannot verify the digital signature`。仅保留
	// CREATE_NO_WINDOW 即可静默执行，无需其他 flag。
	cmd.SysProcAttr = &syscall.SysProcAttr{
		HideWindow:    true,
		CreationFlags: 0x08000000,
	}
}
