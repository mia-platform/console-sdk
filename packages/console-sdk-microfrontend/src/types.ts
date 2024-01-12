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

export enum EventsTypes {
  SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT',
  HIDE_ENVIRONMENT_SELECTION = 'HIDE_ENVIRONMENT_SELECTION',
  SHOW_ENVIRONMENT_SELECTION = 'SHOW_ENVIRONMENT_SELECTION',
  CHANGE_ENVIRONMENT_SELECTION = 'CHANGE_ENVIRONMENT_SELECTION',
  CHANGE_CONFIG_MAP_FILE = 'CHANGE_CONFIG_MAP_FILE',
  OVERWRITE_CONFIG_MAPS = 'OVERWRITE_CONFIG_MAPS',
  CREATE_SERVICE_ENVIRONMENT_VARIABLES = 'CREATE_SERVICE_ENVIRONMENT_VARIABLES',
  CHANGE_SERVICE_ENVIRONMENT_VARIABLES = 'CHANGE_SERVICE_ENVIRONMENT_VARIABLES',
  DELETE_ENDPOINT = 'DELETE_ENDPOINT',
  UPDATE_PROJECT_LINKS = 'UPDATE_PROJECT_LINKS',
  INVALIDATE_PROJECTS_CACHE = 'INVALIDATE_PROJECTS_CACHE',
  SEND_CONFIGURATION = 'SEND_CONFIGURATION',
  SET_DYNAMIC_ROUTES = 'SET_DYNAMIC_ROUTES'
}

export type Events = {
  action: EventsTypes,
  publisherId: string,
  payload: unknown,
}

export enum ContextsType {
  FEATURE_TOGGLE_CONTEXT = 'featureTogglesProxyContext',
  HOTKEYS_CONTEXT = 'hotkeysContext'
}

export type IContexts = {
  featureTogglesProxyContext: Record<string, unknown>
  hotkeysContext: Record<string, unknown>
}

export type ISDKConsoleObservable = {
  endpoints: Endpoints
  collections: Collections
  configMaps: ServiceConfigMap
  services: Services
  unsecretedVariables: PublicVariable[]

  forceConfigUpdateChecksum: string
  microfrontendPluginConfig: Record<string, unknown>

  selectedEnvironment: IEnvironment
  selectedProject: IProject

  _version: string
}

export type ISDKProps = {
  name: string
  console: {
    writeConfig: (payload: unknown) => void
    _signals: {mount: () => void}
    eventBus: (event: Events) => void
    configObservables: ISDKConsoleObservable
    contexts: IContexts
  }
}

export type IConsoleProps<T = unknown> = T & IContexts & {
  name: string
  eventListener: (event: Events) => void
  resourceAPI: ISDKConsoleObservable & {
    writeConfig: (payload: unknown) => void
    _signals: {mount: () => void}
  }
}

