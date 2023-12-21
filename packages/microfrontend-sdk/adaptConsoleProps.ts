import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { ISDKProps } from '@mia-platform/microfrontend-sdk'
import { omit } from 'ramda'

import pkg from './package.json'

export function getConsoleProps (props: QiankunProps): ISDKProps {
  const {
    eventListener,
    resourceAPI,
    featureTogglesProxyContext,
    hotkeysContext
  } = props

  const {
    writeConfig,
    collections,
    configMaps,
    endpoints,
    fastDataConfig,
    services,
    unsecretedVariables,
    forceConfigUpdateChecksum,
    microfrontendPluginConfig,
    selectedEnvironments,
    selectedProject
  } = resourceAPI

  return {
    ...omit(['resourceAPI', 'eventListener', 'featureTogglesProxyContext', 'hotkeysContext'], props),
    console: {
      _signals: resourceAPI._signals,
      writeConfig,
      eventBus: eventListener,
      contexts: {
        featureTogglesProxyContext,
        hotkeysContext
      },
      configObservables: {
        collections,
        configMaps,
        endpoints,
        fastDataConfig,
        services,
        unsecretedVariables,

        forceConfigUpdateChecksum,
        microfrontendPluginConfig,

        selectedEnvironments,
        selectedProject,

        _version: pkg.version
      }
    }
  }
}
