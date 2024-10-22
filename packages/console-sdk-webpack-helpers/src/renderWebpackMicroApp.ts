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

import { ConsoleSDK, IConsoleProps, IMicrofrontendIntegrator } from '@mia-platform/console-sdk-microfrontend'
import { QiankunLifeCycle, QiankunProps, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export type ConsoleLifecycleFunction = (
  isConnectedToConsole: boolean,
  consoleSDK: IMicrofrontendIntegrator | undefined,
) => void

export type IViteParams = {
  mount: ConsoleLifecycleFunction
  unmount: ConsoleLifecycleFunction
  update?: ConsoleLifecycleFunction
  bootstrap?: () => void
}

type SDKParams = {
  consoleSDK: IMicrofrontendIntegrator | undefined
  isConnectedToConsole: boolean
}

export function getSDK(props: IConsoleProps): SDKParams {
  const consoleSDK = new ConsoleSDK(props)
  const isConnectedToConsole = Boolean(qiankunWindow.__POWERED_BY_QIANKUN__)

  return {
    consoleSDK,
    isConnectedToConsole,
  }
}

export const decorateLifecycleFunction = (lifecycleFunction: IViteParams[keyof IViteParams]) => {
  return (props?: QiankunProps): void => {
    const defaultValues: SDKParams = { isConnectedToConsole: false, consoleSDK: undefined }
    const { isConnectedToConsole, consoleSDK } = props && Object.keys(props).length > 0
      ? getSDK(props as IConsoleProps)
      : defaultValues

    if (lifecycleFunction) {
      lifecycleFunction(isConnectedToConsole, consoleSDK)
    }
  }
}

export default function renderWebpackMicroApp({ mount, unmount, bootstrap, update }: IViteParams): QiankunLifeCycle {
  return {
    mount: decorateLifecycleFunction(mount),
    unmount: decorateLifecycleFunction(unmount),
    update: decorateLifecycleFunction(update),
    ...bootstrap ? { bootstrap } : { bootstrap: () => ({}) },
  }
}
