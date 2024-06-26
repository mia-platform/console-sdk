/* eslint-disable max-len */
import { RequestOption } from '@microsoft/kiota-abstractions'

import { AxiosClientRequestConfig, AxiosClientResponse } from '.'
import { Middleware } from './middlewares/middleware'
import { MiddlewareFactory } from './middlewares/middlewareFactory'
import { CustomAxiosHandler } from './middlewares/customAxiosHandler'

/* eslint-disable valid-jsdoc */
export class AxiosHttpClient {
  private middleware: Middleware | undefined

  /**
   * @public
   * @constructor
   * Creates an instance of a HttpClient which contains the middlewares and fetch implementation for request execution.
   * @param {...Middleware} middlewares - The first middleware of the middleware chain or a sequence of all the Middleware handlers
   * If middlewares param is undefined, the httpClient instance will use the default array of middlewares.
   * Set middlewares to `null` if you do not wish to use middlewares.
   * If custom fetch is undefined, the httpClient instance uses the `DefaultFetchHandler`
   * @param {(request: string, init?: AxiosRequestConfig) => Promise < AxiosResponse >} custom fetch function - a Fetch API implementation
   *
   */
  public constructor(
    private customAxios?: (url: string, requestConfig: AxiosClientRequestConfig) => Promise<AxiosClientResponse>,
    ...middlewares: Middleware[]
  ) {
    // If no middlewares are provided, use the default ones
    const requestMiddlewares = middlewares?.length && middlewares[0] ? middlewares : MiddlewareFactory.getDefaultMiddlewares(customAxios)

    // If a custom fetch function is provided, add a CustomFetchHandler to the end of the middleware chain
    if (customAxios) {
      requestMiddlewares.push(new CustomAxiosHandler(customAxios))
    }

    // Set the middleware chain
    this.setMiddleware(...requestMiddlewares)
  }

  /**
   * @private
   * Processes the middleware parameter passed to set this.middleware property
   * The calling function should validate if middleware is not undefined or not empty.
   * @param {...Middleware} middleware - The middleware passed
   * @returns {void} Nothing
   */
  private setMiddleware(...middleware: Middleware[]): void {
    for (let i = 0; i < middleware.length - 1; i++) {
      middleware[i].next = middleware[i + 1]
    }

    this.middleware = middleware.at(0)
  }

  /**
   * Executes a request and returns a promise resolving the response.
   * @param url the request url.
   * @param options request options.
   * @returns the promise resolving the response.
   */
  public async executeAxios<T>(url: string, requestConfig: AxiosClientRequestConfig, requestOptions?: Record<string, RequestOption>): Promise<AxiosClientResponse<T>> {
    if (this.middleware) {
      return this.middleware.execute(url, requestConfig, requestOptions)
    } else if (this.customAxios) {
      return this.customAxios(url, requestConfig)
    }

    throw new Error('Please provide middlewares or a custom fetch function to execute the request')
  }
}
