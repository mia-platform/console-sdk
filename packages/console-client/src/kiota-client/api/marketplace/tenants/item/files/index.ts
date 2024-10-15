/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FilesPostRequestBody}
 */
// @ts-ignore
export function createFilesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFilesPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FilesPostResponse}
 */
// @ts-ignore
export function createFilesPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFilesPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFilesPostRequestBody(filesPostRequestBody: Partial<FilesPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assetType": n => { filesPostRequestBody.assetType = n.getEnumValue<FilesPostRequestBody_assetType>(FilesPostRequestBody_assetTypeObject); },
        "file": n => { filesPostRequestBody.file = n.getStringValue(); },
        "itemId": n => { filesPostRequestBody.itemId = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFilesPostResponse(filesPostResponse: Partial<FilesPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "file": n => { filesPostResponse.file = n.getStringValue(); },
        "_id": n => { filesPostResponse.id = n.getStringValue(); },
        "location": n => { filesPostResponse.location = n.getStringValue(); },
        "name": n => { filesPostResponse.name = n.getStringValue(); },
        "size": n => { filesPostResponse.size = n.getNumberValue(); },
    }
}
export interface FilesPostRequestBody extends Parsable {
    /**
     * The assetType property
     */
    assetType?: FilesPostRequestBody_assetType | null;
    /**
     * The file property
     */
    file?: string | null;
    /**
     * The itemId property
     */
    itemId?: string | null;
}
export type FilesPostRequestBody_assetType = (typeof FilesPostRequestBody_assetTypeObject)[keyof typeof FilesPostRequestBody_assetTypeObject];
export interface FilesPostResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The file property
     */
    file?: string | null;
    /**
     * The _id property
     */
    id?: string | null;
    /**
     * The location property
     */
    location?: string | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The size property
     */
    size?: number | null;
}
/**
 * Builds and executes requests for operations under /api/marketplace/tenants/{tenantId}/files
 */
export interface FilesRequestBuilder extends BaseRequestBuilder<FilesRequestBuilder> {
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FilesPostResponse>}
     */
     post(body: FilesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FilesPostResponse | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FilesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFilesPostRequestBody(writer: SerializationWriter, filesPostRequestBody: Partial<FilesPostRequestBody> | undefined | null = {}) : void {
    if (filesPostRequestBody) {
        writer.writeEnumValue<FilesPostRequestBody_assetType>("assetType", filesPostRequestBody.assetType);
        writer.writeStringValue("file", filesPostRequestBody.file);
        writer.writeStringValue("itemId", filesPostRequestBody.itemId);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFilesPostResponse(writer: SerializationWriter, filesPostResponse: Partial<FilesPostResponse> | undefined | null = {}) : void {
    if (filesPostResponse) {
        writer.writeStringValue("file", filesPostResponse.file);
        writer.writeStringValue("_id", filesPostResponse.id);
        writer.writeStringValue("location", filesPostResponse.location);
        writer.writeStringValue("name", filesPostResponse.name);
        writer.writeNumberValue("size", filesPostResponse.size);
        writer.writeAdditionalData(filesPostResponse.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const FilesRequestBuilderUriTemplate = "{+baseurl}/api/marketplace/tenants/{tenantId}/files";
export const FilesPostRequestBody_assetTypeObject = {
    ImageAssetType: "imageAssetType",
    SupportedByImageAssetType: "supportedByImageAssetType",
} as const;
/**
 * Metadata for all the requests in the request builder.
 */
export const FilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: FilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createFilesPostResponseFromDiscriminatorValue,
        requestBodyContentType: "multipart/form-data",
        requestBodySerializer: serializeFilesPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
