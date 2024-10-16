/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { FilesRequestBuilderRequestsMetadata, type FilesRequestBuilder } from './files/index.js';
// @ts-ignore
import { ResourcesRequestBuilderNavigationMetadata, ResourcesRequestBuilderRequestsMetadata, type ResourcesRequestBuilder } from './resources/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/marketplace/tenants/{tenantId}
 */
export interface WithTenantItemRequestBuilder extends BaseRequestBuilder<WithTenantItemRequestBuilder> {
    /**
     * The files property
     */
    get files(): FilesRequestBuilder;
    /**
     * The resources property
     */
    get resources(): ResourcesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WithTenantItemRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/tenants/{tenantId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithTenantItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithTenantItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    files: {
        requestsMetadata: FilesRequestBuilderRequestsMetadata,
    },
    resources: {
        requestsMetadata: ResourcesRequestBuilderRequestsMetadata,
        navigationMetadata: ResourcesRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
