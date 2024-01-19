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

import { ConsoleSDK, IConsoleProps } from '@mia-platform/console-sdk-microfrontend'
import { JSDOM } from 'jsdom'

import renderWebpackMicroApp, { IViteParams, decorateLifecycleFunction, getSDK } from './renderWebpackMicroApp'

const dom = new JSDOM()
const { document } = dom.window

const quiankunContainer = document.createElement('div')
quiankunContainer.id = '__qiankun_microapp_wrapper_for_microfrontend__'

const consoleProps: IConsoleProps = {
  name: 'testMicrofrontend',
  container: quiankunContainer,
  // some console injected props
  eventListener: jest.fn(),
  featureTogglesProxyContext: {},
  hotkeysContext: {},
  resourceAPI: {
    endpoints: {},
    collections: {},
    configMaps: {},
    services: {},
    unsecretedVariables: [],

    forceConfigUpdateChecksum: '',
    microfrontendPluginConfig: {},

    selectedEnvironment: {},
    selectedProject: {},

    writeConfig: jest.fn(),

    _version: '0.0.0',
    _signals: { mount: jest.fn() },
  },
}

const viteParamsMock: IViteParams = {
  mount: jest.fn(),
  unmount: jest.fn(),
  bootstrap: jest.fn(),
}

describe('Webpack Micro App Rendering', () => {
  it('should create a ConsoleSDK instance', () => {
    const { consoleSDK, isConnectedToConsole } = getSDK(consoleProps)
    expect(consoleSDK).toBeInstanceOf(ConsoleSDK)
    expect(isConnectedToConsole).toBe(false)
  })

  it('should decorate a lifecycle function', () => {
    const decoratedMount = decorateLifecycleFunction(viteParamsMock.mount)
    const decoratedUnmount = decorateLifecycleFunction(viteParamsMock.unmount)
    const decoratedBootstrap = decorateLifecycleFunction(viteParamsMock.bootstrap)

    decoratedMount(consoleProps)
    decoratedUnmount(consoleProps)
    decoratedBootstrap(consoleProps)

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.bootstrap).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })

  it('should render the Webpack micro app', () => {
    const { mount, unmount, bootstrap } = renderWebpackMicroApp(viteParamsMock)

    mount(consoleProps)
    unmount(consoleProps)

    if (bootstrap) {
      bootstrap()
    }

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.bootstrap).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })
})
