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

import {
  Collections,
  Endpoints,
  IEnvironment,
  IProject,
  PublicVariable,
  ServiceConfigMap,
  Services,
} from '@mia-platform-internal/console-types'
import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { Subject } from 'rxjs'

import { Events } from './types'

type IConfigObservable = {
  endpoints: Endpoints
  collections: Collections
  configMaps: ServiceConfigMap
  services: Services
  unsecretedVariables: PublicVariable[]

  // TOFIX: add correct fast data type
  fastDataConfig: Record<string, unknown>

  forceConfigUpdateChecksum: string
  microfrontendPluginConfig: Record<string, unknown>

  selectedEnvironment: IEnvironment
  selectedProject: IProject

  _version: string
}

export enum ContextsType {
  FEATURE_TOGGLE_CONTEXT = 'featureTogglesProxyContext',
  HOTKEYS_CONTEXT = 'hotkeysContext'
}

type IContexts = {
  featureTogglesProxyContext: Record<string, unknown>
  hotkeysContext: Record<string, unknown>
}

export type IConsole = {
  writeConfig: (payload: unknown) => void
  eventBus: (event: Events) => void
  configObservables: IConfigObservable
  contexts: IContexts
  _signals: {mount: () => void}
}

export type ISDKProps = QiankunProps & {
  console: IConsole
}

export type IConsoleSDK = {
  sendEvent(event: Events): void
}

export default class MicrofronendIntegrator implements IConsoleSDK {
  private events: Subject<Events>

  name: string
  contexts: IContexts
  configObservable: IConfigObservable

  constructor(mountingProps: QiankunProps) {
    const { console, name } = mountingProps
    const { eventBus, contexts } = console

    this.name = name
    this.contexts = contexts
    this.configObservable = console.configObservables

    this.events = new Subject()
    this.events.subscribe(eventBus)
  }

  getContext(contextType: ContextsType): IContexts[keyof IContexts] | undefined {
    switch (contextType) {
    case ContextsType.FEATURE_TOGGLE_CONTEXT:
      return {} as IContexts['featureTogglesProxyContext']
    case ContextsType.HOTKEYS_CONTEXT:
      return {} as IContexts['hotkeysContext']
    default:
      return undefined
    }
  }

  getContainerId(): string {
    return this.name
  }

  getConsoleConfigObservable(): IConfigObservable {
    return this.configObservable
  }

  sendEvent(event: Events): void {
    this.events.next(event)
  }
}
