import {ConsoleSDK, IConsoleSDK, IMountingProps} from '@mia-platform/microfrontend-sdk'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'

type ConsoleLifecycleFunction = (
  isConnectedToConsole: boolean,
  consoleSDK: IConsoleSDK,
  consoleProps: IMountingProps
) => void

interface ViteParams {
  mount: ConsoleLifecycleFunction,
  unmount: ConsoleLifecycleFunction,
  bootstrap: () => void,
  update: () => void,
}

function getConsoleProps(qiankunProps: QiankunProps): IMountingProps {
  const {container, eventListener} = qiankunProps
  return {
    container,
    console: {
      eventBus: eventListener
    }
  }
}

function getLifecycleFunctionParams(props: QiankunProps): {
  consoleProps: IMountingProps
  consoleSDK: IConsoleSDK,
  isConnectedToConsole: boolean
} {
  const consoleProps = getConsoleProps(props)
  const consoleSDK = new ConsoleSDK(consoleProps)
  const isConnectedToConsole = Boolean(qiankunWindow.__POWERED_BY_QIANKUN__)

  return {
    consoleProps,
    consoleSDK,
    isConnectedToConsole
  }
}

export default function renderViteMicroApp (viteParams: ViteParams) {
  renderWithQiankun({
    mount: (props: QiankunProps): void => {
      const {consoleProps, consoleSDK, isConnectedToConsole} = getLifecycleFunctionParams(props)
      viteParams.mount(isConnectedToConsole, consoleSDK, consoleProps)
    },
    unmount: (props: QiankunProps): void => {
      const {consoleProps, consoleSDK, isConnectedToConsole} = getLifecycleFunctionParams(props)
      viteParams.unmount(isConnectedToConsole, consoleSDK, consoleProps)
    },
    bootstrap: viteParams?.bootstrap || Promise.resolve(),
    update: viteParams?.update || Promise.resolve()
  })
}