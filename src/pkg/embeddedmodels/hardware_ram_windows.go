//go:build windows

package embeddedmodels

import (
	"unsafe"

	"golang.org/x/sys/windows"
)

func detectPlatformRAMGb() float64 {
	var memStatus windows.MemoryStatusEx
	memStatus.Length = uint32(unsafe.Sizeof(memStatus))
	if err := windows.GlobalMemoryStatusEx(&memStatus); err != nil {
		return 0
	}
	return float64(memStatus.TotalPhys) / (1024 * 1024 * 1024)
}
