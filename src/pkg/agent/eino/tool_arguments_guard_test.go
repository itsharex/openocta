package eino

import (
	"strings"
	"testing"
)

func TestValidateToolCallArgumentsJSON_truncatedExecute(t *testing.T) {
	t.Parallel()
	// Truncated execute arguments (same pattern as docs/chat_output.json finish_reason=length).
	const truncated = `{"command":"powershell.exe -NoProfile -NonInteractive -Command \"\\$interval=3; Get-Process | ForEach-Object { Write-Output`
	err := ValidateToolCallArgumentsJSON("execute", truncated)
	if err == nil {
		t.Fatal("expected error for truncated JSON")
	}
	msg := err.Error()
	if !strings.Contains(msg, "不完整") && !strings.Contains(msg, "截断") {
		t.Fatalf("expected truncation hint, got: %s", msg)
	}
	if !strings.Contains(msg, "write_file") {
		t.Fatalf("expected write_file guidance, got: %s", msg)
	}
}

func TestValidateToolCallArgumentsJSON_validExecute(t *testing.T) {
	t.Parallel()
	err := ValidateToolCallArgumentsJSON("execute", `{"command":"echo hello"}`)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
}

func TestValidateToolCallArgumentsJSON_emptyCommand(t *testing.T) {
	t.Parallel()
	err := ValidateToolCallArgumentsJSON("execute", `{"command":"   "}`)
	if err == nil || !strings.Contains(err.Error(), "不能为空") {
		t.Fatalf("expected empty command error, got: %v", err)
	}
}

func TestIsLikelyTruncatedToolArguments(t *testing.T) {
	t.Parallel()
	if !isLikelyTruncatedToolArguments(`{"command":"abc`, "unexpected end of JSON input") {
		t.Fatal("expected truncated detection")
	}
	if isLikelyTruncatedToolArguments(`{"command":"abc"}`, "") {
		t.Fatal("expected valid JSON not truncated")
	}
}
