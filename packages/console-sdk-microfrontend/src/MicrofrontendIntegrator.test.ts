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

import { JSDOM } from 'jsdom'

import { ContextsType, Events, EventsTypes, IConsoleProps } from './types'
import ConsoleSDK from './MicrofrontendIntegrator'

const { window } = new JSDOM(`<body></body>`)
const htmlElement: HTMLElement = window.document.createElement('div')
htmlElement.id = '__quiankun__'

const eventBus = jest.fn()
const quiankunProps = { name: 'testMicrofrontend', container: htmlElement }
const consoleProps: IConsoleProps = {
  ...quiankunProps,
  eventListener: eventBus,
  featureTogglesProxyContext: { updateLocalCache: jest.fn() },
  hotkeysContext: { anyProp: 'anyValue' },
  resourceAPI: {
    endpoints: {},
    collections: {},
    configMaps: {},
    services: {},
    unsecretedVariables: [],

    forceConfigUpdateChecksum: '',
    microfrontendPluginConfig: {},

    selectedEnvironment: {
      envId: 'testEnvId',
    },
    selectedProject: {
      projectId: 'testProjectId',
      name: 'testProjectName',
      _id: 'projectOid',
      environments: [],
      configurationGitPath: '',
      repository: {},
    },

    writeConfig: jest.fn(),

    _version: '0.0.0',
    _signals: { mount: jest.fn() },
  },
}

describe('ConsoleSDK', () => {
  it('should get the contai', () => {
    const microfrontendIntegrator = new ConsoleSDK(consoleProps)
    expect(microfrontendIntegrator.getMicrofrontendNode()).toMatchSnapshot()
  })

  it('should get the container id', () => {
    const microfrontendIntegrator = new ConsoleSDK(consoleProps)
    expect(microfrontendIntegrator.getContainerId()).toBe('testMicrofrontend')
  })

  it('should send an event through the event bus', () => {
    const microfrontendIntegrator = new ConsoleSDK(consoleProps)
    const event: Events = {
      payload: { test: 'case' },
      publisherId: 'microfrontend-test',
      action: EventsTypes.SET_DYNAMIC_ROUTES,
    }

    microfrontendIntegrator.sendEvent(event)
    expect(consoleProps.eventListener).toHaveBeenCalledWith(event)
  })

  it('should get a context', () => {
    const microfrontendIntegrator = new ConsoleSDK(consoleProps)

    const featureToggleContext = microfrontendIntegrator.getContext(ContextsType.FEATURE_TOGGLE_CONTEXT)
    const hotkeysContext = microfrontendIntegrator.getContext(ContextsType.HOTKEYS_CONTEXT)
    const invalidContext = microfrontendIntegrator.getContext('INVALID_CONTEXT' as ContextsType)

    expect(featureToggleContext).toEqual({ updateLocalCache: expect.any(Function) })
    expect(hotkeysContext).toEqual({ anyProp: 'anyValue' })
    expect(invalidContext).toBeUndefined()
  })

  it('should get the console config observable', () => {
    const microfrontendIntegrator = new ConsoleSDK(consoleProps)
    const configObservable = microfrontendIntegrator.getConsoleConfigObservable()

    expect(configObservable).toHaveProperty('endpoints')
    expect(configObservable).toHaveProperty('collections')
    expect(configObservable).toHaveProperty('configMaps')
    expect(configObservable).toHaveProperty('services')
    expect(configObservable).toHaveProperty('unsecretedVariables')
    expect(configObservable).toHaveProperty('selectedProject')
    expect(configObservable).toHaveProperty('selectedEnvironment')
    expect(configObservable).toHaveProperty('_version')
    expect(configObservable).toHaveProperty('forceConfigUpdateChecksum')
    expect(configObservable).toHaveProperty('microfrontendPluginConfig')
  })
})
