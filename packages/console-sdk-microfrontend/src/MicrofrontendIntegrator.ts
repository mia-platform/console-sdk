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

import { ContextsType, Events, IConsoleProps, IContexts, ISDKConsoleObservable } from './types'
import { getConsoleProps } from './adaptConsoleProps'

export type IMicrofronendIntegrator = {
  getContext(contextType: ContextsType): IContexts[keyof IContexts] | undefined
  getContainerId(): string
  getConsoleConfigObservable(): ISDKConsoleObservable
  sendEvent(event: Events): void
}
export default class MicrofronendIntegrator implements IMicrofronendIntegrator {
  private events: Subject<Events>

  name: string
  contexts: IContexts
  configObservable: ISDKConsoleObservable

  constructor(mountingProps: IConsoleProps) {
    const { name, console } = getConsoleProps(mountingProps)
    const { eventBus, contexts } = console

    this.name = name
    this.contexts = contexts
    this.configObservable = console.configObservables

    this.events = new Subject()
    this.events.subscribe(eventBus)
  }

  getContext(contextType: ContextsType): IContexts[keyof IContexts] | undefined {
    switch (contextType) {
    case ContextsType.FEATURE_TOGGLE_CONTEXT: {
      const ctx: IContexts['featureTogglesProxyContext'] = {}
      return ctx
    }
    case ContextsType.HOTKEYS_CONTEXT: {
      const ctx: IContexts['hotkeysContext'] = {}
      return ctx
    }
    default:
      return undefined
    }
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
}
