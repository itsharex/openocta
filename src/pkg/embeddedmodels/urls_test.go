package embeddedmodels

import "testing"

func TestRewriteHFMirror(t *testing.T) {
	in := "https://huggingface.co/Qwen/Qwen3-Embedding-0.6B-GGUF/resolve/main/Qwen3-Embedding-0.6B-Q8_0.gguf"
	want := "https://hf-mirror.com/Qwen/Qwen3-Embedding-0.6B-GGUF/resolve/main/Qwen3-Embedding-0.6B-Q8_0.gguf"
	if got := rewriteHFMirror(in, defaultHFMirror); got != want {
		t.Fatalf("rewriteHFMirror() = %q, want %q", got, want)
	}
}

func TestDownloadURLsMirrorFirst(t *testing.T) {
	in := "https://huggingface.co/lmstudio-community/Qwen3-0.6B-GGUF/resolve/main/Qwen3-0.6B-Q4_K_M.gguf"
	urls := DownloadURLs(in, nil)
	if len(urls) != 1 {
		t.Fatalf("expected 1 URL, got %d: %v", len(urls), urls)
	}
	if !stringsHasPrefix(urls[0], "https://hf-mirror.com/") {
		t.Fatalf("expected mirror URL, got %q", urls[0])
	}
}

func TestDownloadURLsMirrorOff(t *testing.T) {
	in := "https://huggingface.co/Qwen/Qwen3-0.6B-GGUF/resolve/main/Qwen3-0.6B-Q8_0.gguf"
	env := func(k string) string {
		if k == "OPENOCTA_HF_MIRROR" {
			return "off"
		}
		return ""
	}
	urls := DownloadURLs(in, env)
	if len(urls) != 1 || urls[0] != in {
		t.Fatalf("expected only catalog URL, got %v", urls)
	}
}

func stringsHasPrefix(s, prefix string) bool {
	return len(s) >= len(prefix) && s[:len(prefix)] == prefix
}
