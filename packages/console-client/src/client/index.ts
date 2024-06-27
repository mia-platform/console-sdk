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

import { AuthenticationProvider, RequestInformation } from '@microsoft/kiota-abstractions'

import { axios as axiosHttpClient } from './http'
import {
  createConsoleClient,
  ConsoleClient as KiotaConsoleClient,
} from '../kiota-client/consoleClient'
import { ExtensibilityRequestBuilder } from '../kiota-client/api/extensibility'

const { AxiosRequestAdapter } = axiosHttpClient

export type IConsoleClient = {
  get extensibility(): ExtensibilityRequestBuilder
}

export class NullAccessTokenProvider implements AuthenticationProvider {
  public authenticateRequest = async(
    _request: RequestInformation, _additionalAuthenticationContext?: Record<string, unknown>
  ): Promise<void> => {
    // Do nothing
  }
}

export class ConsoleClient implements IConsoleClient {
  private baseUrl: string
  private client: KiotaConsoleClient

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl

    const requestAdapter = new AxiosRequestAdapter(new NullAccessTokenProvider())
    requestAdapter.baseUrl = this.baseUrl

    this.client = createConsoleClient(requestAdapter)
  }

  get extensibility(): ExtensibilityRequestBuilder {
    return this.client.api.extensibility
  }
}
