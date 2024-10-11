/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMarketplaceItemFromDiscriminatorValue, type MarketplaceItem } from '../../../../../../../../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/marketplace/tenants/{tenantId}/resources/{itemId}/versions/{version}
 */
export interface WithVersionItemRequestBuilder extends BaseRequestBuilder<WithVersionItemRequestBuilder> {
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MarketplaceItem>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MarketplaceItem | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WithVersionItemRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/tenants/{tenantId}/resources/{itemId}/versions/{version}";
/**
 * Metadata for all the requests in the request builder.
 */
export const WithVersionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WithVersionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createMarketplaceItemFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */