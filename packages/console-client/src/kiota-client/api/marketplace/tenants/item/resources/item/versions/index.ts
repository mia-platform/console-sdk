/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMarketplaceItemVersionFromDiscriminatorValue, type MarketplaceItemVersion } from '../../../../../../../models/index.js';
// @ts-ignore
import { type WithVersionItemRequestBuilder, WithVersionItemRequestBuilderNavigationMetadata, WithVersionItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/marketplace/tenants/{tenantId}/resources/{itemId}/versions
 */
export interface VersionsRequestBuilder extends BaseRequestBuilder<VersionsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.api.marketplace.tenants.item.resources.item.versions.item collection
     * @param version Unique identifier of the item
     * @returns {WithVersionItemRequestBuilder}
     */
     byVersion(version: string) : WithVersionItemRequestBuilder;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MarketplaceItemVersion[]>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MarketplaceItemVersion[] | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VersionsRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/tenants/{tenantId}/resources/{itemId}/versions";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VersionsRequestBuilderNavigationMetadata: Record<Exclude<keyof VersionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byVersion: {
        requestsMetadata: WithVersionItemRequestBuilderRequestsMetadata,
        navigationMetadata: WithVersionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["version"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VersionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: VersionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createMarketplaceItemVersionFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
