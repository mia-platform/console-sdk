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
import { AuthenticationProvider, BackingStoreFactory, ErrorMappings, Parsable, ParsableFactory, ParseNodeFactory, ParseNodeFactoryRegistry, PrimitiveTypesForDeserialization, PrimitiveTypesForDeserializationType, RequestAdapter, RequestInformation, SerializationWriterFactory, SerializationWriterFactoryRegistry } from '@microsoft/kiota-abstractions'

import { AxiosClientRequestConfig, AxiosClientResponse } from '.'
import { AxiosHttpClient } from './axiosHttpClient'
import { InvalidArgumentError } from './errors'

export class AxiosRequestAdapter implements RequestAdapter {
  public baseUrl = ''

  private defaultRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'console-client',
    },
  }

  public constructor(
    public readonly authenticationProvider: AuthenticationProvider,
    private parseNodeFactory: ParseNodeFactory = ParseNodeFactoryRegistry.defaultInstance,
    private serializationWriterFactory: SerializationWriterFactory = SerializationWriterFactoryRegistry.defaultInstance,
    private readonly httpClient: AxiosHttpClient = new AxiosHttpClient(),
  ) {
    InvalidArgumentError.AssertNotFalsy('authenticationProvider', authenticationProvider)
    InvalidArgumentError.AssertNotFalsy('parseNodeFactory', parseNodeFactory)
    InvalidArgumentError.AssertNotFalsy('serializationWriterFactory', serializationWriterFactory)
    InvalidArgumentError.AssertNotFalsy('httpClient', httpClient)
  }

  public getSerializationWriterFactory(): SerializationWriterFactory {
    return this.serializationWriterFactory
  }

  public send<ModelType extends Parsable>(
    _requestInfo: RequestInformation,
    _deserialization: ParsableFactory<ModelType>,
    _errorMappings: ErrorMappings | undefined
  ): Promise<ModelType | undefined> {
    throw new Error('Method not implemented.')
  }

  public async sendCollection<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    _deserialization: ParsableFactory<ModelType>,
    _errorMappings: ErrorMappings | undefined
  ): Promise<ModelType[] | undefined> {
    const response = await this.getHttpResponseMessage<ModelType[]>(requestInfo)
    return response.data
  }

  public sendCollectionOfPrimitive<ResponseType extends Exclude<PrimitiveTypesForDeserializationType, ArrayBuffer>>(
    _requestInfo: RequestInformation,
    _responseType: Exclude<PrimitiveTypesForDeserialization, 'ArrayBuffer'>,
    _errorMappings: ErrorMappings | undefined
  ): Promise<ResponseType[] | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendPrimitive<ResponseType extends PrimitiveTypesForDeserializationType>(
    _requestInfo: RequestInformation,
    _responseType: PrimitiveTypesForDeserialization,
    _errorMappings: ErrorMappings | undefined
  ): Promise<ResponseType | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendNoResponseContent(
    _requestInfo: RequestInformation,
    _errorMappings: ErrorMappings | undefined
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public sendEnum<EnumObject extends Record<string, unknown>>(
    _requestInfo: RequestInformation,
    _enumObject: EnumObject,
    _errorMappings: ErrorMappings | undefined
  ): Promise<EnumObject[keyof EnumObject] | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendCollectionOfEnum<EnumObject extends Record<string, unknown>>(
    _requestInfo: RequestInformation,
    _enumObject: EnumObject,
    _errorMappings: ErrorMappings | undefined
  ): Promise<EnumObject[keyof EnumObject][] | undefined> {
    throw new Error('Method not implemented.')
  }

  public enableBackingStore(
    _backingStoreFactory?: BackingStoreFactory | undefined
  ): void {
    throw new Error('Method not implemented.')
  }

  public convertToNativeRequest<T>(
    _requestInfo: RequestInformation): Promise<T> {
    throw new Error('Method not implemented.')
  }

  private async getHttpResponseMessage<T>(requestInfo: RequestInformation, _claims?: string): Promise<AxiosClientResponse<T>> {
    InvalidArgumentError.AssertNotFalsy('requestInfo', requestInfo)

    this.setBaseUrlForRequestInformation(requestInfo)
    const requestConfig = await this.getRequestConfigFromRequestInformation(requestInfo)
    const response = await this.httpClient.executeAxios<T>(requestInfo.URL, requestConfig, requestInfo.getRequestOptions())

    return response
  }

  private setBaseUrlForRequestInformation = (requestInfo: RequestInformation): void => {
    InvalidArgumentError.AssertNotFalsy('baseUrl', this.baseUrl)

    requestInfo.pathParameters.baseurl = this.baseUrl
  }

  private getRequestConfigFromRequestInformation = async(requestInfo: RequestInformation): Promise<AxiosClientRequestConfig> => {
    this.setRequestInformationDefaultHeaders(requestInfo)

    const method = requestInfo.httpMethod?.toString()
    const headers: [string, string][] | undefined = requestInfo.headers
      ? Array
        .from(requestInfo.headers.keys())
        .map((key) => [
          key.toString().toLocaleLowerCase(),
          this.foldHeaderValue(requestInfo.headers.tryGetValue(key)),
        ])
      : undefined

    const requestConfig = {
      method,
      headers,
      data: requestInfo.content,
    } as AxiosClientRequestConfig

    return requestConfig
  }

  private setRequestInformationDefaultHeaders = (requestInfo: RequestInformation): void => {
    Object.entries(this.defaultRequestConfig.headers).forEach((header) => {
      const [headerName, headerValue] = header
      requestInfo.headers.set(headerName, new Set<string>([headerValue]))
    })
  }

  private foldHeaderValue = (value: string[] | null): string => {
    if (!value || value.length < 1) {
      return ''
    } else if (value.length === 1) {
      return value[0]
    }
    return value.reduce((acc, val) => acc + val, ',')
  }
}