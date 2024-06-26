/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationProvider, BackingStoreFactory, ErrorMappings, Parsable, ParsableFactory, ParseNodeFactory, ParseNodeFactoryRegistry, PrimitiveTypesForDeserialization, PrimitiveTypesForDeserializationType, RequestAdapter, RequestInformation, SerializationWriterFactory, SerializationWriterFactoryRegistry } from '@microsoft/kiota-abstractions'

import { AxiosClientRequestConfig, AxiosClientResponse } from './customAxios'
import { AxiosHttpClient } from './axiosHttpClient'
import { InvaidArgumentError } from './errors'

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
    InvaidArgumentError.AssertNotFalsy('authenticationProvider', authenticationProvider)
    InvaidArgumentError.AssertNotFalsy('parseNodeFactory', parseNodeFactory)
    InvaidArgumentError.AssertNotFalsy('serializationWriterFactory', serializationWriterFactory)
    InvaidArgumentError.AssertNotFalsy('httpClient', httpClient)
  }

  public getSerializationWriterFactory(): SerializationWriterFactory {
    return this.serializationWriterFactory
  }

  public send<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    deserialization: ParsableFactory<ModelType>,
    errorMappings: ErrorMappings | undefined
  ): Promise<ModelType | undefined> {
    throw new Error('Method not implemented.')
  }

  public async sendCollection<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    deserialization: ParsableFactory<ModelType>,
    errorMappings: ErrorMappings | undefined
  ): Promise<ModelType[] | undefined> {
    const response = await this.getHttpResponseMessage<ModelType[]>(requestInfo)
    return response.data
  }

  public sendCollectionOfPrimitive<ResponseType extends Exclude<PrimitiveTypesForDeserializationType, ArrayBuffer>>(
    requestInfo: RequestInformation,
    responseType: Exclude<PrimitiveTypesForDeserialization, 'ArrayBuffer'>,
    errorMappings: ErrorMappings | undefined
  ): Promise<ResponseType[] | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendPrimitive<ResponseType extends PrimitiveTypesForDeserializationType>(
    requestInfo: RequestInformation,
    responseType: PrimitiveTypesForDeserialization,
    errorMappings: ErrorMappings | undefined
  ): Promise<ResponseType | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendNoResponseContent(
    requestInfo: RequestInformation,
    errorMappings: ErrorMappings | undefined
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public sendEnum<EnumObject extends Record<string, unknown>>(
    requestInfo: RequestInformation,
    enumObject: EnumObject,
    errorMappings: ErrorMappings | undefined
  ): Promise<EnumObject[keyof EnumObject] | undefined> {
    throw new Error('Method not implemented.')
  }

  public sendCollectionOfEnum<EnumObject extends Record<string, unknown>>(
    requestInfo: RequestInformation,
    enumObject: EnumObject,
    errorMappings: ErrorMappings | undefined
  ): Promise<EnumObject[keyof EnumObject][] | undefined> {
    throw new Error('Method not implemented.')
  }

  public enableBackingStore(
    backingStoreFactory?: BackingStoreFactory | undefined
  ): void {
    throw new Error('Method not implemented.')
  }

  public convertToNativeRequest<T>(
    requestInfo: RequestInformation): Promise<T> {
    throw new Error('Method not implemented.')
  }

  private async getHttpResponseMessage<T>(requestInfo: RequestInformation, claims?: string): Promise<AxiosClientResponse<T>> {
    InvaidArgumentError.AssertNotFalsy('requestInfo', requestInfo)

    this.setBaseUrlForRequestInformation(requestInfo)
    const requestConfig = await this.getRequestConfigFromRequestInformation(requestInfo)
    const response = await this.httpClient.executeAxios<T>(requestInfo.URL, requestConfig, requestInfo.getRequestOptions())

    return response
  }

  private setBaseUrlForRequestInformation = (requestInfo: RequestInformation): void => {
    InvaidArgumentError.AssertNotFalsy('baseUrl', this.baseUrl)

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
