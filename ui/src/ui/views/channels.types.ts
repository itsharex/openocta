import type {
  ChannelAccountSnapshot,
  ChannelsStatusSnapshot,
  ConfigUiHints,
  NostrProfile,
  WeWorkStatus,
} from "../types.ts";
import type { NostrProfileFormState } from "./channels.nostr-profile-form.ts";

export type ChannelKey = string;

export type ChannelsProps = {
  connected: boolean;
  loading: boolean;
  snapshot: ChannelsStatusSnapshot | null;
  lastError: string | null;
  lastSuccessAt: number | null;
  whatsappMessage: string | null;
  whatsappQrDataUrl: string | null;
  whatsappConnected: boolean | null;
  whatsappBusy: boolean;
  weworkQrModalOpen: boolean;
  weworkQrModalLoading: boolean;
  weworkQrModalPolling: boolean;
  weworkQrModalSuccess: boolean;
  weworkQrModalError: string | null;
  weworkQrModalReplaceWarn: boolean;
  weworkQrModalAuthUrl: string | null;
  weworkQrModalGenPageUrl: string | null;
  configSchema: unknown;
  configSchemaLoading: boolean;
  configForm: Record<string, unknown> | null;
  configUiHints: ConfigUiHints;
  configSaving: boolean;
  configFormDirty: boolean;
  /** Channel key being edited in the slide-out panel (e.g. "discord", "feishu") */
  selectedChannelId: string | null;
  nostrProfileFormState: NostrProfileFormState | null;
  nostrProfileAccountId: string | null;
  onRefresh: (probe: boolean) => void;
  onChannelSelect: (channelId: string | null) => void;
  onWhatsAppStart: (force: boolean) => void;
  onWhatsAppWait: () => void;
  onWhatsAppLogout: () => void;
  onWeWorkQrStart: () => void;
  onWeWorkQrModalClose: () => void;
  onConfigPatch: (path: Array<string | number>, value: unknown) => void;
  onConfigSave: () => void;
  onConfigReload: () => void;
  onNostrProfileEdit: (accountId: string, profile: NostrProfile | null) => void;
  onNostrProfileCancel: () => void;
  onNostrProfileFieldChange: (field: keyof NostrProfile, value: string) => void;
  onNostrProfileSave: () => void;
  onNostrProfileImport: () => void;
  onNostrProfileToggleAdvanced: () => void;
};

export type ChannelsChannelData = {
  wework?: WeWorkStatus;
  channelAccounts?: Record<string, ChannelAccountSnapshot[]> | null;
};
