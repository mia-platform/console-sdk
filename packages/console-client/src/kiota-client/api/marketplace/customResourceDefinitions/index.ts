/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCatalogCrdFromDiscriminatorValue, createHttpErrorFromDiscriminatorValue, type CatalogCrd, type HttpError } from '../../../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/marketplace/custom-resource-definitions
 */
export interface CustomResourceDefinitionsRequestBuilder extends BaseRequestBuilder<CustomResourceDefinitionsRequestBuilder> {
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CatalogCrd[]>}
     * @throws {HttpError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CustomResourceDefinitionsRequestBuilderGetQueryParameters> | undefined) : Promise<CatalogCrd[] | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomResourceDefinitionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
export interface CustomResourceDefinitionsRequestBuilderGetQueryParameters {
    /**
     * Page number to be retrieved
     */
    page?: number;
    /**
     * Number of items per page. **Deprecated in favor of `perPage`**
     */
    per_page?: number;
    /**
     * Number of items per page
     */
    perPage?: number;
}
/**
 * Uri template for the request builder.
 */
export const CustomResourceDefinitionsRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/custom-resource-definitions{?page*,perPage*,per_page*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomResourceDefinitionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CustomResourceDefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createHttpErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createCatalogCrdFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
