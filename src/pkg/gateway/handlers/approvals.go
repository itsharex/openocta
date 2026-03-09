package handlers

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/openocta/openocta/pkg/config"
	"github.com/openocta/openocta/pkg/gateway/protocol"
	"github.com/openocta/openocta/pkg/paths"
)

const approvalQueueFilename = "queue.json"

// approvalEntry is the stored shape of one approval request.
type approvalEntry struct {
	ID         string `json:"id"`
	SessionID  string `json:"sessionId"`
	SessionKey string `json:"sessionKey,omitempty"`
	Command    string `json:"command"`
	CreatedAt  int64  `json:"createdAt"`
	TimeoutAt  *int64 `json:"timeoutAt,omitempty"`
	TTLSeconds *int   `json:"ttlSeconds,omitempty"`
	Status     string `json:"status"` // "pending" | "approved" | "denied" | "expired"
	ApproverID string `json:"approverId,omitempty"`
	DenyReason string `json:"denyReason,omitempty"`
	ResolvedAt *int64 `json:"resolvedAt,omitempty"`
}

func resolveApprovalStorePath(cfg *config.OpenOctaConfig, env func(string) string) string {
	if cfg != nil && cfg.Sandbox != nil && cfg.Sandbox.ApprovalStore != nil && strings.TrimSpace(*cfg.Sandbox.ApprovalStore) != "" {
		return strings.TrimSpace(*cfg.Sandbox.ApprovalStore)
	}
	stateDir := paths.ResolveStateDir(env)
	return filepath.Join(stateDir, "agents", "approvals")
}

func loadApprovalQueue(storePath string) ([]approvalEntry, error) {
	path := filepath.Join(storePath, approvalQueueFilename)
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, nil
		}
		return nil, err
	}
	var entries []approvalEntry
	if err := json.Unmarshal(data, &entries); err != nil {
		return nil, err
	}
	return entries, nil
}

func saveApprovalQueue(storePath string, entries []approvalEntry) error {
	if err := os.MkdirAll(storePath, 0755); err != nil {
		return err
	}
	path := filepath.Join(storePath, approvalQueueFilename)
	data, err := json.MarshalIndent(entries, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

func toListEntry(e approvalEntry, now int64) map[string]interface{} {
	out := map[string]interface{}{
		"id":        e.ID,
		"sessionId": e.SessionID,
		"command":   e.Command,
		"createdAt": e.CreatedAt,
		"status":    e.Status,
	}
	if e.SessionKey != "" {
		out["sessionKey"] = e.SessionKey
	}
	if e.TimeoutAt != nil {
		out["timeoutAt"] = *e.TimeoutAt
		if *e.TimeoutAt < now && e.Status == "pending" {
			out["status"] = "expired"
		}
	}
	if e.TTLSeconds != nil {
		out["ttlSeconds"] = *e.TTLSeconds
	}
	return out
}

// ApprovalsListHandler handles "approvals.list".
func ApprovalsListHandler(opts HandlerOpts) error {
	cfg := loadConfigFromContext(opts.Context)
	env := func(k string) string {
		// Prefer OS env for path resolution
		return os.Getenv(k)
	}
	storePath := resolveApprovalStorePath(cfg, env)

	entries, err := loadApprovalQueue(storePath)
	if err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}

	now := time.Now().UnixMilli()
	list := make([]map[string]interface{}, 0, len(entries))
	for _, e := range entries {
		list = append(list, toListEntry(e, now))
	}

	opts.Respond(true, map[string]interface{}{
		"storePath": storePath,
		"entries":   list,
	}, nil, nil)
	return nil
}

// ApprovalsApproveHandler handles "approvals.approve".
func ApprovalsApproveHandler(opts HandlerOpts) error {
	requestID, _ := opts.Params["requestId"].(string)
	approverID, _ := opts.Params["approverId"].(string)
	ttlSeconds, _ := opts.Params["ttlSeconds"].(float64)
	if requestID == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInvalidRequest,
			Message: "requestId required",
		}, nil)
		return nil
	}

	cfg := loadConfigFromContext(opts.Context)
	env := func(k string) string { return os.Getenv(k) }
	storePath := resolveApprovalStorePath(cfg, env)

	entries, err := loadApprovalQueue(storePath)
	if err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}

	found := false
	now := time.Now().Unix()
	for i := range entries {
		if entries[i].ID == requestID && entries[i].Status == "pending" {
			entries[i].Status = "approved"
			entries[i].ApproverID = approverID
			t := now
			entries[i].ResolvedAt = &t
			if ttlSeconds > 0 {
				ttl := int(ttlSeconds)
				entries[i].TTLSeconds = &ttl
			}
			found = true
			break
		}
	}

	if !found {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeNotFound,
			Message: "approval request not found or already resolved",
		}, nil)
		return nil
	}

	if err := saveApprovalQueue(storePath, entries); err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}

	opts.Respond(true, map[string]interface{}{"requestId": requestID, "status": "approved"}, nil, nil)
	return nil
}

// ApprovalsDenyHandler handles "approvals.deny".
func ApprovalsDenyHandler(opts HandlerOpts) error {
	requestID, _ := opts.Params["requestId"].(string)
	approverID, _ := opts.Params["approverId"].(string)
	reason, _ := opts.Params["reason"].(string)
	if requestID == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInvalidRequest,
			Message: "requestId required",
		}, nil)
		return nil
	}

	cfg := loadConfigFromContext(opts.Context)
	env := func(k string) string { return os.Getenv(k) }
	storePath := resolveApprovalStorePath(cfg, env)

	entries, err := loadApprovalQueue(storePath)
	if err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}

	found := false
	now := time.Now().Unix()
	for i := range entries {
		if entries[i].ID == requestID && entries[i].Status == "pending" {
			entries[i].Status = "denied"
			entries[i].ApproverID = approverID
			entries[i].DenyReason = reason
			t := now
			entries[i].ResolvedAt = &t
			found = true
			break
		}
	}

	if !found {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeNotFound,
			Message: "approval request not found or already resolved",
		}, nil)
		return nil
	}

	if err := saveApprovalQueue(storePath, entries); err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}

	opts.Respond(true, map[string]interface{}{"requestId": requestID, "status": "denied"}, nil, nil)
	return nil
}
