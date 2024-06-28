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

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import type { RequestOption } from '@microsoft/kiota-abstractions'

import { AxiosClientRequestConfig, AxiosClientResponse } from '..'

/**
 * Defines the contract for a middleware in the request execution pipeline.
 */
export interface Middleware {

  /** Next middleware to be executed. The current middleware must execute it in its implementation. */
  next: Middleware | undefined;

  /**
   * Main method of the middleware.
   * @param requestInit The Fetch RequestInit object.
   * @param url The URL of the request.
   * @return A promise that resolves to the response object.
   */
  execute<T>(url: string, requestConfig: AxiosClientRequestConfig, requestOptions?: Record<string, RequestOption>): Promise<AxiosClientResponse<T>>
}
