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
import { AxiosRequestHeaders } from 'axios'

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
    InvalidArgumentError.Assert('authenticationProvider', authenticationProvider)
    InvalidArgumentError.Assert('parseNodeFactory', parseNodeFactory)
    InvalidArgumentError.Assert('serializationWriterFactory', serializationWriterFactory)
    InvalidArgumentError.Assert('httpClient', httpClient)
  }

  public getSerializationWriterFactory(): SerializationWriterFactory {
    return this.serializationWriterFactory
  }

  public async send<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    _deserialization: ParsableFactory<ModelType>,
    _errorMappings: ErrorMappings | undefined
  ): Promise<ModelType | undefined> {
    InvalidArgumentError.Assert('requestInfo', requestInfo)

    this.setBaseUrlForRequestInformation(requestInfo)
    const requestConfig = await this.getRequestConfigFromRequestInformation(requestInfo)
    const response = await this.httpClient.executeAxios<ModelType | undefined>(requestInfo.URL, requestConfig, requestInfo.getRequestOptions())
    return response.data
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

  public async sendNoResponseContent(
    requestInfo: RequestInformation,
    _errorMappings: ErrorMappings | undefined
  ): Promise<void> {
    InvalidArgumentError.Assert('requestInfo', requestInfo)

    this.setBaseUrlForRequestInformation(requestInfo)
    const requestConfig = await this.getRequestConfigFromRequestInformation(requestInfo)
    await this.httpClient.executeAxios<void>(requestInfo.URL, requestConfig, requestInfo.getRequestOptions())
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
    InvalidArgumentError.Assert('requestInfo', requestInfo)

    this.setBaseUrlForRequestInformation(requestInfo)
    const requestConfig = await this.getRequestConfigFromRequestInformation(requestInfo)
    const response = await this.httpClient.executeAxios<T>(requestInfo.URL, requestConfig, requestInfo.getRequestOptions())

    return response
  }

  private setBaseUrlForRequestInformation = (requestInfo: RequestInformation): void => {
    requestInfo.pathParameters.baseurl = this.baseUrl
  }

  private getRequestConfigFromRequestInformation = async(requestInfo: RequestInformation): Promise<AxiosClientRequestConfig> => {
    this.setRequestInformationDefaultHeaders(requestInfo)

    const method = requestInfo.httpMethod?.toString()
    const headers: AxiosRequestHeaders = Array.from(requestInfo.headers.keys()).reduce((acc, key) => {
      acc[key.toString().toLocaleLowerCase()] = this.foldHeaderValue(requestInfo.headers.tryGetValue(key))
      return acc
    }, {} as AxiosRequestHeaders)

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
