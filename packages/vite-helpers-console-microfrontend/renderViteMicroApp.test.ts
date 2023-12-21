import { JSDOM } from 'jsdom'
import { ConsoleSDK } from '@mia-platform/microfrontend-sdk'
import { QiankunProps, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import renderViteMicroApp, { decorateLifecycleFunction, IViteParams, getSDK } from './renderViteMicroApp'

const dom = new JSDOM()
const document = dom.window.document

const quiankunContainer = document.createElement('div')
quiankunContainer.id = '__qiankun_microapp_wrapper_for_microfrontend__'

const qiankunPropsMock: QiankunProps = {
  name: 'testMicrofrontend',
  container: quiankunContainer,
  // some console injected props
  eventListener: () => {},
  resourceAPI: { writeConfig: () => {} }
}

const viteParamsMock: IViteParams = {
  mount: jest.fn(),
  unmount: jest.fn(),
  bootstrap: jest.fn(),
  update: jest.fn()
}

describe('Vite Micro App Rendering', () => {
  it('should get lifecycle function params', () => {
    const { isConnectedToConsole, consoleSDK } = getSDK(qiankunPropsMock)
    expect(isConnectedToConsole).toBe(Boolean(qiankunWindow.__POWERED_BY_QIANKUN__))
    expect(consoleSDK).toBeInstanceOf(ConsoleSDK)
  })

  it('should mount the micro app', () => {
    decorateLifecycleFunction(viteParamsMock.mount)(qiankunPropsMock)
    expect(viteParamsMock.mount).toHaveBeenCalledWith(true, expect.any(ConsoleSDK))
  })

  it('should unmount the micro app', () => {
    decorateLifecycleFunction(viteParamsMock.unmount)(qiankunPropsMock)
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(true, expect.any(ConsoleSDK))
  })

  it('should render the Vite micro app', () => {
    renderViteMicroApp(viteParamsMock)

    expect(viteParamsMock.bootstrap).toHaveBeenCalled()
    expect(viteParamsMock.mount).toHaveBeenCalled()
    expect(viteParamsMock.update).not.toHaveBeenCalled()

    viteParamsMock.update && viteParamsMock.update()
    expect(viteParamsMock.update).toHaveBeenCalled()
    expect(viteParamsMock.unmount).not.toHaveBeenCalled()
  })
})
