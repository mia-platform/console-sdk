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

/* eslint-disable lines-around-comment */
/* eslint-disable valid-jsdoc */
import axiosClient, { AxiosClientRequestConfig, AxiosClientResponse } from '..'
import { CustomAxiosHandler } from './customAxiosHandler'
import { Middleware } from './middleware'

/**
 * @class
 * Class containing function(s) related to the middleware pipelines.
 */
export class MiddlewareFactory {
  /**
   * @public
   * @static
   * Returns the default middleware chain an array with the  middleware handlers
   * @returns {Middleware[]} an array of the middleware handlers of the default middleware chain
   */
  public static getDefaultMiddlewares(
    customAxiosAction: (
      request: string,
      init: AxiosClientRequestConfig
    ) => Promise<AxiosClientResponse> = (...args) => axiosClient.axiosFn(...args)
  ): Middleware[] {
    return [
      new CustomAxiosHandler(customAxiosAction),
    ]
  }
}
