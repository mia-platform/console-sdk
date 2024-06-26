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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: RequestInformation, additionalAuthenticationContext?: Record<string, unknown>
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
