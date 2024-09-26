/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { ApiRequestBuilderNavigationMetadata, type ApiRequestBuilder } from './api/index.js';
// @ts-ignore
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
// @ts-ignore
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
// @ts-ignore
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
// @ts-ignore
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
// @ts-ignore
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ConsoleClient extends BaseRequestBuilder<ConsoleClient> {
    /**
     * The api property
     */
    get api(): ApiRequestBuilder;
}
/**
 * Instantiates a new {@link ConsoleClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
// @ts-ignore
export function createConsoleClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<ConsoleClient>(requestAdapter, pathParameters, ConsoleClientNavigationMetadata, undefined);
}
/**
 * Uri template for the request builder.
 */
export const ConsoleClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ConsoleClientNavigationMetadata: Record<Exclude<keyof ConsoleClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    api: {
        navigationMetadata: ApiRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
