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

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable lines-around-comment */
import { AxiosClientRequestConfig, AxiosClientResponse } from '..'
import { InvalidArgumentError } from '../errors'
import type { Middleware } from './middleware'

/**
 * @class
 * @implements Middleware
 * Class for FetchHandler
 */

export class CustomAxiosHandler implements Middleware {
  /**
   * @private
   * The next middleware in the middleware chain
   */
  next: Middleware | undefined
  private customAxios: (url: string, requestConfig: AxiosClientRequestConfig) => Promise<AxiosClientResponse>

  constructor(
    customAxios: (url: string, requestConfig: AxiosClientRequestConfig) => Promise<AxiosClientResponse>
  ) {
    InvalidArgumentError.AssertNotFalsy('customAxios', customAxios)

    this.customAxios = customAxios
  }

  /**
   * @public
   * @async
   * To execute the current middleware
   * @param {string} url - The request url
   * @param {AxiosRequestConfig} requestConfig - The request configuration
   * @returns {Promise<AxiosClientResponse>} A promise that resolves to nothing
   */
  public async execute(url: string, requestConfig: AxiosClientRequestConfig): Promise<AxiosClientResponse> {
    return this.customAxios(url, requestConfig)
  }
}
