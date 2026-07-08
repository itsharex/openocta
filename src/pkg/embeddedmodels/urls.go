package embeddedmodels

import (
	"net/url"
	"strings"
)

const defaultHFMirror = "https://hf-mirror.com"

// DownloadURLs returns the download URL for a catalog file.
// By default rewrites huggingface.co links to hf-mirror.com (faster in China).
// Set OPENOCTA_HF_MIRROR=off to use the catalog URL as-is; HF_ENDPOINT overrides the mirror host.
func DownloadURLs(catalogURL string, env func(string) string) []string {
	if catalogURL == "" {
		return nil
	}
	mirror := resolveHFMirror(env)
	if mirror != "" {
		if mirrored := rewriteHFMirror(catalogURL, mirror); mirrored != "" {
			return []string{mirrored}
		}
	}
	return []string{catalogURL}
}

func resolveHFMirror(env func(string) string) string {
	if env != nil {
		if v := strings.TrimSpace(env("OPENOCTA_HF_MIRROR")); v != "" {
			if strings.EqualFold(v, "off") || strings.EqualFold(v, "false") || v == "0" {
				return ""
			}
			return strings.TrimRight(v, "/")
		}
		if v := strings.TrimSpace(env("HF_ENDPOINT")); v != "" {
			return strings.TrimRight(v, "/")
		}
	}
	return defaultHFMirror
}

func rewriteHFMirror(raw, mirror string) string {
	raw = strings.TrimSpace(raw)
	mirror = strings.TrimRight(strings.TrimSpace(mirror), "/")
	if raw == "" || mirror == "" {
		return raw
	}
	u, err := url.Parse(raw)
	if err != nil {
		return raw
	}
	host := strings.ToLower(u.Host)
	if host != "huggingface.co" && host != "www.huggingface.co" && !strings.HasSuffix(host, ".huggingface.co") {
		return raw
	}
	path := strings.TrimPrefix(u.Path, "/")
	parts := strings.Split(path, "/")
	if len(parts) < 5 || parts[2] != "resolve" {
		return mirror + "/" + path
	}
	org, repo, rev := parts[0], parts[1], parts[3]
	filePath := strings.Join(parts[4:], "/")
	if filePath == "" {
		return mirror + "/" + path
	}
	return mirror + "/" + org + "/" + repo + "/resolve/" + rev + "/" + filePath
}
