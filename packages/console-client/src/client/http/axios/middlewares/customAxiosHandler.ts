/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable lines-around-comment */
import { AxiosClientRequestConfig, AxiosClientResponse } from '../customAxios'
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

  constructor(
    private customAxios: (url: string, requestConfig: AxiosClientRequestConfig) => Promise<AxiosClientResponse>
  ) {}

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
