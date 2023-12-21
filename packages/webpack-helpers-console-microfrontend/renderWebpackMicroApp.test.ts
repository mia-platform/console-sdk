import { JSDOM } from 'jsdom'
import { ConsoleSDK } from '@mia-platform/microfrontend-sdk'
import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import renderWebpackMicroApp, { IViteParams, decorateLifecycleFunction, getSDK } from './renderWebpackMicroApp'

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
  unmount: jest.fn(),
  bootstrap: jest.fn()
}

describe('Webpack Micro App Rendering', () => {
  it('should create a ConsoleSDK instance', () => {
    const { consoleSDK, isConnectedToConsole } = getSDK(qiankunPropsMock)
    expect(consoleSDK).toBeInstanceOf(ConsoleSDK)
    expect(isConnectedToConsole).toBe(false) // Potrebbe essere false in questo esempio
  })

  it('should decorate a lifecycle function', () => {
    const decoratedMount = decorateLifecycleFunction(viteParamsMock.mount)
    const decoratedUnmount = decorateLifecycleFunction(viteParamsMock.unmount)
    const decoratedBootstrap = decorateLifecycleFunction(viteParamsMock.bootstrap)

    // Chiamare le funzioni decorate non dovrebbe generare errori
    decoratedMount(qiankunPropsMock)
    decoratedUnmount(qiankunPropsMock)
    decoratedBootstrap(qiankunPropsMock)

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.bootstrap).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })

  it('should render the Webpack micro app', () => {
    const { mount, unmount, bootstrap } = renderWebpackMicroApp(viteParamsMock)

    mount(qiankunPropsMock)
    unmount(qiankunPropsMock)
    bootstrap && bootstrap()

    expect(viteParamsMock.mount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.unmount).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
    expect(viteParamsMock.bootstrap).toHaveBeenCalledWith(false, expect.any(ConsoleSDK))
  })
})
