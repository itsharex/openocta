package tools

import (
	"context"
	"strings"

	"github.com/stellarlinkco/agentsdk-go/pkg/tool"
)

type deliverableReadTool struct {
	inner       tool.Tool
	projectRoot string
}

func WrapReadToolWithDeliverables(inner tool.Tool, projectRoot string) tool.Tool {
	if inner == nil {
		return nil
	}
	root := strings.TrimSpace(projectRoot)
	if root == "" {
		root = "."
	}
	return deliverableReadTool{inner: inner, projectRoot: root}
}

func (d deliverableReadTool) Name() string        { return d.inner.Name() }
func (d deliverableReadTool) Description() string { return d.inner.Description() }
func (d deliverableReadTool) Schema() *tool.JSONSchema {
	return d.inner.Schema()
}

func (d deliverableReadTool) Execute(ctx context.Context, params map[string]interface{}) (*tool.ToolResult, error) {
	result, err := d.inner.Execute(ctx, params)
	if err != nil || result == nil || !result.Success {
		return result, err
	}
	rawPath := firstNonEmptyPathParam(params)
	if rawPath == "" {
		return result, err
	}
	if blocks := attachmentBlocksFromLocalHTMLFile(d.projectRoot, rawPath); len(blocks) > 0 {
		return attachReadResult(result, blocks[0], "Read local HTML file.")
	}
	if blocks := attachmentBlocksFromLocalImageFile(d.projectRoot, rawPath); len(blocks) > 0 {
		return attachReadResult(result, blocks[0], "Read local image file.")
	}
	if blocks := attachmentBlocksFromLocalPreviewableFile(d.projectRoot, rawPath); len(blocks) > 0 {
		return attachReadResult(result, blocks[0], "Read local file.")
	}
	return result, err
}

func attachReadResult(result *tool.ToolResult, src map[string]interface{}, fallbackSummary string) (*tool.ToolResult, error) {
	filename, _ := src["filename"].(string)
	mimeType, _ := src["mimeType"].(string)
	data := ""
	if source, ok := src["source"].(map[string]interface{}); ok {
		data, _ = source["data"].(string)
	}
	if data == "" {
		return result, nil
	}
	blockType, _ := src["type"].(string)
	if strings.TrimSpace(blockType) == "" {
		blockType = "file"
	}
	summary := strings.TrimSpace(result.Output)
	if summary == "" {
		summary = fallbackSummary
	}
	result.Output = formatAttachmentOutput(summary, []openOctaAttachment{{
		Type:     blockType,
		Filename: filename,
		MimeType: mimeType,
		Data:     data,
	}})
	return result, nil
}

func firstNonEmptyPathParam(params map[string]interface{}) string {
	if params == nil {
		return ""
	}
	for _, key := range []string{"file_path", "path", "filepath", "filePath", "filename"} {
		if v, ok := params[key]; ok {
			if s, ok := v.(string); ok && strings.TrimSpace(s) != "" {
				return strings.TrimSpace(s)
			}
		}
	}
	return ""
}
