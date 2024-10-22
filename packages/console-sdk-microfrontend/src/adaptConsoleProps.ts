/**
 * Copyright 2024 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { omit } from 'ramda'

import { IConsoleProps, ISDKProps } from './types'
import pkg from '../package.json'

export function getConsoleProps(props: IConsoleProps = {} as IConsoleProps): ISDKProps {
  const {
    eventListener,
    resourceAPI = {} as IConsoleProps['resourceAPI'],
    featureTogglesProxyContext,
    hotkeysContext,
    container,
  } = props

  const {
    writeConfig,
    collections,
    configMaps,
    endpoints,
    services,
    unsecretedVariables,
    forceConfigUpdateChecksum,
    microfrontendPluginConfig,
    selectedEnvironment,
    selectedProject,
  } = resourceAPI

  return {
    ...omit(['resourceAPI', 'eventListener', 'featureTogglesProxyContext', 'hotkeysContext'], props),
    container,
    console: {
      _signals: resourceAPI._signals,
      writeConfig,
      eventBus: eventListener,
      contexts: {
        featureTogglesProxyContext,
        hotkeysContext,
      },
      configObservables: {
        collections,
        configMaps,
        endpoints,
        services,
        unsecretedVariables,

        forceConfigUpdateChecksum,
        microfrontendPluginConfig,

        selectedEnvironment,
        selectedProject,

        _version: pkg.version,
      },
    },
  }
}
