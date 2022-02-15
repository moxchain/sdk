import { RegistryHandler, KNOWN_CHAIN_PROPERTIES } from '@/domain/protocols/registry'
import {
  getRegistryBase,
  getSpecTypes,
  TypeRegistry
} from '@substrate/txwrapper-core'

/**
 * Get a type registry for networks that txwrapper-foo supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */

export class Registry implements RegistryHandler {
  getRegistry ({
    specName,
    chainName,
    specVersion,
    metadataRpc,
    properties
  }) {
    const registry = new TypeRegistry()

    return getRegistryBase({
      chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
      specTypes: getSpecTypes(registry as any, chainName, specName, specVersion) as any,
      metadataRpc
    })
  }
}
