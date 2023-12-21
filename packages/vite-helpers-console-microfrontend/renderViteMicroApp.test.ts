import { JSDOM } from 'jsdom'
import { ConsoleSDK } from '@mia-platform/microfrontend-sdk'
import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import { decorateLifecycleFunction, IViteParams, getSDK } from './renderViteMicroApp'

const dom = new JSDOM()
const document = dom.window.document

const quiankunContainer = document.createElement('div')
quiankunContainer.id = '__qiankun_microapp_wrapper_for_microfrontend__'

const qiankunPropsMock: QiankunProps = {
  name: 'testMicrofrontend',
  container: quiankunContainer,
  // some console injected props
  console: {},
  eventListener: () => {},
  resourceAPI: { writeConfig: () => {} }
}

const viteParamsMock: IViteParams = {
  mount: jest.fn(),
  unmount: jest.fn()
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

  it('should unmount the micro app', () => {
    decorateLifecycleFunction(viteParamsMock.unmount)(qiankunPropsMock)
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })
})
