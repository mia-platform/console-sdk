import { ConsoleSDK, IConsoleSDK } from '@mia-platform/microfrontend-sdk'
import { qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

export type ConsoleLifecycleFunction = (
  isConnectedToConsole: boolean,
  consoleSDK: IConsoleSDK,
) => void

export interface IViteParams {
  mount: ConsoleLifecycleFunction
  unmount: ConsoleLifecycleFunction
  bootstrap?: () => void
  update?: () => void
}

export function getSDK (props: QiankunProps): {
  consoleSDK: IConsoleSDK
  isConnectedToConsole: boolean
} {
  const consoleSDK = new ConsoleSDK(props)
  const isConnectedToConsole = Boolean(qiankunWindow.__POWERED_BY_QIANKUN__)

  return {
    consoleSDK,
    isConnectedToConsole
  }
}

export const decorateLifecycleFunction = (lifecycleFunction: IViteParams[keyof IViteParams]) => {
  return (props: QiankunProps): void => {
    const { isConnectedToConsole, consoleSDK } = getSDK(props)
    lifecycleFunction && lifecycleFunction(isConnectedToConsole, consoleSDK)
  }
}

export default function renderWebpackMicroApp ({ mount, unmount, bootstrap }: IViteParams) {
  return {
    mount: decorateLifecycleFunction(mount),
    unmount: decorateLifecycleFunction(unmount),
    bootstrap
  }
}
