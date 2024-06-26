/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { ActivationRequestBuilderRequestsMetadata, type ActivationRequestBuilder } from './activation/';
// @ts-ignore
import { type WithContextTypeItemRequestBuilder, WithContextTypeItemRequestBuilderNavigationMetadata } from './item/';
// @ts-ignore
import { type AdditionalDataHolder, type ApiError, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtension500Error}
 */
export function createWithExtension500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtension500Error;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoWithExtension500Error(withExtension500Error: Partial<WithExtension500Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { withExtension500Error.errorEscaped = n.getStringValue(); },
        "message": n => { withExtension500Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { withExtension500Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeWithExtension500Error(writer: SerializationWriter, withExtension500Error: Partial<WithExtension500Error> | undefined = {}) : void {
    writer.writeStringValue("error", withExtension500Error.errorEscaped);
    writer.writeStringValue("message", withExtension500Error.messageEscaped);
    writer.writeNumberValue("statusCode", withExtension500Error.statusCode);
    writer.writeAdditionalData(withExtension500Error.additionalData);
}
export interface WithExtension500Error extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error property
     */
    errorEscaped?: string;
    /**
     * The message property
     */
    messageEscaped?: string;
    /**
     * The statusCode property
     */
    statusCode?: number;
}
/**
 * Builds and executes requests for operations under /api/extensibility/tenants/{tenantId}/extensions/{extensionId}
 */
export interface WithExtensionItemRequestBuilder extends BaseRequestBuilder<WithExtensionItemRequestBuilder> {
    /**
     * The activation property
     */
    get activation(): ActivationRequestBuilder;
    /**
     * Gets an item from the ApiSdk.api.extensibility.tenants.item.extensions.item.item collection
     * @param contextType Unique identifier of the item
     * @returns {WithContextTypeItemRequestBuilder}
     */
     byContextType(contextType: string) : WithContextTypeItemRequestBuilder;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {WithExtension500Error} error when the service returns a 500 status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WithExtensionItemRequestBuilderUriTemplate = "{+baseurl}/api/extensibility/tenants/{tenantId}/extensions/{extensionId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithExtensionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithExtensionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byContextType: {
        navigationMetadata: WithContextTypeItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["contextType"],
    },
    activation: {
        requestsMetadata: ActivationRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WithExtensionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WithExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            500: createWithExtension500ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */
