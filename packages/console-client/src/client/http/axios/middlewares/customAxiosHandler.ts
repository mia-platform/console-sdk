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
