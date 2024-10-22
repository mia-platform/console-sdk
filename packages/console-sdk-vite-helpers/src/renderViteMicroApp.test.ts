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

import { ConsoleSDK } from '@mia-platform/console-sdk-microfrontend'
import { JSDOM } from 'jsdom'
import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import { IViteParams, decorateLifecycleFunction, getSDK } from './renderViteMicroApp'

const dom = new JSDOM()
const { document } = dom.window

const quiankunContainer = document.createElement('div')
quiankunContainer.id = '__qiankun_microapp_wrapper_for_microfrontend__'

const qiankunPropsMock: QiankunProps = {
  name: 'testMicrofrontend',
  container: quiankunContainer,
  // some console injected props
  console: {},
  eventListener: jest.fn(),
  resourceAPI: { writeConfig: jest.fn() },
}

const viteParamsMock: IViteParams = {
  mount: jest.fn(),
  unmount: jest.fn(),
}

describe('Vite Micro App Rendering', () => {
  it('should get lifecycle function params', () => {
    const { isConnectedToConsole, consoleSDK } = getSDK(qiankunPropsMock)
    expect(isConnectedToConsole).toBe(false)
    expect(consoleSDK).toBeInstanceOf(ConsoleSDK)
  })

  it('should mount the micro app', () => {
    decorateLifecycleFunction(viteParamsMock.mount)(qiankunPropsMock)
    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })

  it('should mount the micro app on the missing props', () => {
    decorateLifecycleFunction(viteParamsMock.mount)()
    decorateLifecycleFunction(viteParamsMock.unmount)()

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, undefined)
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, undefined)
  })

  it('should mount the micro app on empty props', () => {
    decorateLifecycleFunction(viteParamsMock.mount)({})
    decorateLifecycleFunction(viteParamsMock.unmount)({})

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, undefined)
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, undefined)
  })

  it('should unmount the micro app', () => {
    decorateLifecycleFunction(viteParamsMock.unmount)(qiankunPropsMock)
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })
})
