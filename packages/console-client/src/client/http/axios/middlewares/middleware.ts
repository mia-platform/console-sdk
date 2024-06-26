/* eslint-disable max-len */
import type { RequestOption } from '@microsoft/kiota-abstractions'

import { AxiosClientRequestConfig, AxiosClientResponse } from '../customAxios'

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
