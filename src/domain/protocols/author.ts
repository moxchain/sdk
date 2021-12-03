export interface AuthorHandler {
  submitTx: (tx: string) => Promise<string>
}
