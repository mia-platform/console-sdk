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

import { ConsoleSDK, IConsoleSDK } from '@mia-platform/microfrontend-sdk'
import { QiankunProps, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

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

export function getSDK(props: QiankunProps): {
  consoleSDK: IConsoleSDK
  isConnectedToConsole: boolean
} {
  const consoleSDK = new ConsoleSDK(props)
  const isConnectedToConsole = Boolean(qiankunWindow.__POWERED_BY_QIANKUN__)

  return {
    consoleSDK,
    isConnectedToConsole,
  }
}

export const decorateLifecycleFunction = (lifecycleFunction: IViteParams[keyof IViteParams]) => {
  return (props: QiankunProps): void => {
    const { isConnectedToConsole, consoleSDK } = getSDK(props)
    if (lifecycleFunction) {
      lifecycleFunction(isConnectedToConsole, consoleSDK)
    }
  }
}

export default function renderWebpackMicroApp({ mount, unmount, bootstrap }: IViteParams) {
  return {
    mount: decorateLifecycleFunction(mount),
    unmount: decorateLifecycleFunction(unmount),
    bootstrap,
  }
}