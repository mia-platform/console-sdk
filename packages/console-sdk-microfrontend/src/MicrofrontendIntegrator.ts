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

import { Subject } from 'rxjs'

import { ContextsType, Events, IConsoleProps, IContexts, ISDKConsoleObservable, IWriteConfig } from './types'
import { getConsoleProps } from './adaptConsoleProps'

export type IMicrofrontendIntegrator = {
  getContext(contextType: ContextsType): IContexts[keyof IContexts] | undefined
  getContainerId(): string
  getMicrofrontendNode(): HTMLElement
  getConsoleConfigObservable(): ISDKConsoleObservable
  sendEvent(event: Events): void
  writeConfig: IWriteConfig
}
export default class MicrofrontendIntegrator implements IMicrofrontendIntegrator {
  private events: Subject<Events>

  private name: string
  private container: HTMLElement
  private contexts: IContexts
  private configObservable: ISDKConsoleObservable
  private consoleWriteConfig: IWriteConfig

  constructor(mountingProps: IConsoleProps) {
    const { name, console, container } = getConsoleProps(mountingProps)
    const { eventBus, contexts } = console

    this.name = name
    this.container = container
    this.contexts = contexts
    this.configObservable = console.configObservables
    this.consoleWriteConfig = console.writeConfig

    this.events = new Subject()
    this.events.subscribe(eventBus)
  }

  getContext(contextType: ContextsType): IContexts[keyof IContexts] | undefined {
    switch (contextType) {
    case ContextsType.FEATURE_TOGGLE_CONTEXT: {
      const ctx: IContexts['featureTogglesProxyContext'] = this.contexts.featureTogglesProxyContext
      return ctx
    }
    case ContextsType.HOTKEYS_CONTEXT: {
      const ctx: IContexts['hotkeysContext'] = this.contexts.hotkeysContext
      return ctx
    }
    default:
      return undefined
    }
  }

  getMicrofrontendNode(): HTMLElement {
    return this.container
  }

  getContainerId(): string {
    return this.name
  }

  getConsoleConfigObservable(): ISDKConsoleObservable {
    return this.configObservable
  }

  sendEvent(event: Events): void {
    this.events.next(event)
  }

  writeConfig(payload: unknown): void {
    this.consoleWriteConfig(payload)
  }
}
