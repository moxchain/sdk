import { Registry } from './registry'
import { Account } from './account'

interface InitializeParams {
  serviceUrl: string
}

export const initialize = (params: InitializeParams) => {
  const module = {
    registry: new Registry(),
    account: new Account()
  }

  return module
}
