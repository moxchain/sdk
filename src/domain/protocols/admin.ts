export interface AdminHandler {
  save: () => Promise<string>
  enableId: (id: string) => void
  setWebhook: (url: string) => Promise<boolean>
}
