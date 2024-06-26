/* eslint-disable lines-around-comment */
/* eslint-disable valid-jsdoc */
import axiosClient, { AxiosClientRequestConfig, AxiosClientResponse } from '../customAxios'
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
