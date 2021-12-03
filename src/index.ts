import { Registry } from './registry'

interface InitializeParams {
  serviceUrl: string
}

export const initialize = (params: InitializeParams) => {
  const module = {
    registry: new Registry()
  }

  return module
}
