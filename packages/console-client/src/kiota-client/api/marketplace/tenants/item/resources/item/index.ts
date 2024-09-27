/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type VersionsRequestBuilder, VersionsRequestBuilderNavigationMetadata, VersionsRequestBuilderRequestsMetadata } from './versions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/marketplace/tenants/{tenantId}/resources/{itemId}
 */
export interface WithItemItemRequestBuilder extends BaseRequestBuilder<WithItemItemRequestBuilder> {
    /**
     * The versions property
     */
    get versions(): VersionsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WithItemItemRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/tenants/{tenantId}/resources/{itemId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithItemItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithItemItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    versions: {
        requestsMetadata: VersionsRequestBuilderRequestsMetadata,
        navigationMetadata: VersionsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
