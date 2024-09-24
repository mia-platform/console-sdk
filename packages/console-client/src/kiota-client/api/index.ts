/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { ExtensibilityRequestBuilderNavigationMetadata, type ExtensibilityRequestBuilder } from './extensibility/index.js';
// @ts-ignore
import { type UserinfoRequestBuilder, UserinfoRequestBuilderRequestsMetadata } from './userinfo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api
 */
export interface ApiRequestBuilder extends BaseRequestBuilder<ApiRequestBuilder> {
    /**
     * The extensibility property
     */
    get extensibility(): ExtensibilityRequestBuilder;
    /**
     * The userinfo property
     */
    get userinfo(): UserinfoRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const ApiRequestBuilderUriTemplate = "{+baseurl}/api";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApiRequestBuilderNavigationMetadata: Record<Exclude<keyof ApiRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    extensibility: {
        navigationMetadata: ExtensibilityRequestBuilderNavigationMetadata,
    },
    userinfo: {
        requestsMetadata: UserinfoRequestBuilderRequestsMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
