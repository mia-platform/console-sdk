/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type ApiError, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface Activation400Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface Activation404Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface Activation500Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface ActivationPostRequestBody extends Parsable {
    /**
     * The contextId property
     */
    contextId?: string;
    /**
     * The contextType property
     */
    contextType?: ActivationPostRequestBody_contextType;
    /**
     * The overrides property
     */
    overrides?: ActivationPostRequestBody_overrides[];
}
export type ActivationPostRequestBody_contextType = (typeof ActivationPostRequestBody_contextTypeObject)[keyof typeof ActivationPostRequestBody_contextTypeObject];
export interface ActivationPostRequestBody_overrides extends Parsable {
    /**
     * The icon property
     */
    icon?: ActivationPostRequestBody_overrides_icon;
    /**
     * The labelIntl property
     */
    labelIntl?: ActivationPostRequestBody_overrides_labelIntl;
    /**
     * The order property
     */
    order?: number;
    /**
     * The routeId property
     */
    routeId?: string;
}
export interface ActivationPostRequestBody_overrides_icon extends Parsable {
    /**
     * The name property
     */
    name?: string;
}
export interface ActivationPostRequestBody_overrides_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface ActivationPostResponse extends Parsable {
    /**
     * The activationId property
     */
    activationId?: string;
}
/**
 * Builds and executes requests for operations under /api/extensibility/tenants/{tenantId}/extensions/{extensionId}/activation
 */
export interface ActivationRequestBuilder extends BaseRequestBuilder<ActivationRequestBuilder> {
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ActivationPostResponse>}
     * @throws {Activation400Error} error when the service returns a 400 status code
     * @throws {Activation404Error} error when the service returns a 404 status code
     * @throws {Activation500Error} error when the service returns a 500 status code
     */
     post(body: ActivationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ActivationPostResponse | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ActivationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Activation400Error}
 */
export function createActivation400ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivation400Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Activation404Error}
 */
export function createActivation404ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivation404Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Activation500Error}
 */
export function createActivation500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivation500Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ActivationPostRequestBody_overrides_icon}
 */
export function createActivationPostRequestBody_overrides_iconFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivationPostRequestBody_overrides_icon;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ActivationPostRequestBody_overrides_labelIntl}
 */
export function createActivationPostRequestBody_overrides_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivationPostRequestBody_overrides_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ActivationPostRequestBody_overrides}
 */
export function createActivationPostRequestBody_overridesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivationPostRequestBody_overrides;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ActivationPostRequestBody}
 */
export function createActivationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivationPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ActivationPostResponse}
 */
export function createActivationPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoActivationPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivation400Error(activation400Error: Partial<Activation400Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { activation400Error.errorEscaped = n.getStringValue(); },
        "message": n => { activation400Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { activation400Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivation404Error(activation404Error: Partial<Activation404Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { activation404Error.errorEscaped = n.getStringValue(); },
        "message": n => { activation404Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { activation404Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivation500Error(activation500Error: Partial<Activation500Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { activation500Error.errorEscaped = n.getStringValue(); },
        "message": n => { activation500Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { activation500Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivationPostRequestBody(activationPostRequestBody: Partial<ActivationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contextId": n => { activationPostRequestBody.contextId = n.getStringValue(); },
        "contextType": n => { activationPostRequestBody.contextType = n.getEnumValue<ActivationPostRequestBody_contextType>(ActivationPostRequestBody_contextTypeObject); },
        "overrides": n => { activationPostRequestBody.overrides = n.getCollectionOfObjectValues<ActivationPostRequestBody_overrides>(createActivationPostRequestBody_overridesFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivationPostRequestBody_overrides(activationPostRequestBody_overrides: Partial<ActivationPostRequestBody_overrides> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "icon": n => { activationPostRequestBody_overrides.icon = n.getObjectValue<ActivationPostRequestBody_overrides_icon>(createActivationPostRequestBody_overrides_iconFromDiscriminatorValue); },
        "labelIntl": n => { activationPostRequestBody_overrides.labelIntl = n.getObjectValue<ActivationPostRequestBody_overrides_labelIntl>(createActivationPostRequestBody_overrides_labelIntlFromDiscriminatorValue); },
        "order": n => { activationPostRequestBody_overrides.order = n.getNumberValue(); },
        "routeId": n => { activationPostRequestBody_overrides.routeId = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivationPostRequestBody_overrides_icon(activationPostRequestBody_overrides_icon: Partial<ActivationPostRequestBody_overrides_icon> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { activationPostRequestBody_overrides_icon.name = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivationPostRequestBody_overrides_labelIntl(activationPostRequestBody_overrides_labelIntl: Partial<ActivationPostRequestBody_overrides_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoActivationPostResponse(activationPostResponse: Partial<ActivationPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationId": n => { activationPostResponse.activationId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivation400Error(writer: SerializationWriter, activation400Error: Partial<Activation400Error> | undefined = {}) : void {
    writer.writeStringValue("error", activation400Error.errorEscaped);
    writer.writeStringValue("message", activation400Error.messageEscaped);
    writer.writeNumberValue("statusCode", activation400Error.statusCode);
    writer.writeAdditionalData(activation400Error.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivation404Error(writer: SerializationWriter, activation404Error: Partial<Activation404Error> | undefined = {}) : void {
    writer.writeStringValue("error", activation404Error.errorEscaped);
    writer.writeStringValue("message", activation404Error.messageEscaped);
    writer.writeNumberValue("statusCode", activation404Error.statusCode);
    writer.writeAdditionalData(activation404Error.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivation500Error(writer: SerializationWriter, activation500Error: Partial<Activation500Error> | undefined = {}) : void {
    writer.writeStringValue("error", activation500Error.errorEscaped);
    writer.writeStringValue("message", activation500Error.messageEscaped);
    writer.writeNumberValue("statusCode", activation500Error.statusCode);
    writer.writeAdditionalData(activation500Error.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivationPostRequestBody(writer: SerializationWriter, activationPostRequestBody: Partial<ActivationPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("contextId", activationPostRequestBody.contextId);
    writer.writeEnumValue<ActivationPostRequestBody_contextType>("contextType", activationPostRequestBody.contextType);
    writer.writeCollectionOfObjectValues<ActivationPostRequestBody_overrides>("overrides", activationPostRequestBody.overrides, serializeActivationPostRequestBody_overrides);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivationPostRequestBody_overrides(writer: SerializationWriter, activationPostRequestBody_overrides: Partial<ActivationPostRequestBody_overrides> | undefined = {}) : void {
    writer.writeObjectValue<ActivationPostRequestBody_overrides_icon>("icon", activationPostRequestBody_overrides.icon, serializeActivationPostRequestBody_overrides_icon);
    writer.writeObjectValue<ActivationPostRequestBody_overrides_labelIntl>("labelIntl", activationPostRequestBody_overrides.labelIntl, serializeActivationPostRequestBody_overrides_labelIntl);
    writer.writeNumberValue("order", activationPostRequestBody_overrides.order);
    writer.writeStringValue("routeId", activationPostRequestBody_overrides.routeId);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivationPostRequestBody_overrides_icon(writer: SerializationWriter, activationPostRequestBody_overrides_icon: Partial<ActivationPostRequestBody_overrides_icon> | undefined = {}) : void {
    writer.writeStringValue("name", activationPostRequestBody_overrides_icon.name);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivationPostRequestBody_overrides_labelIntl(writer: SerializationWriter, activationPostRequestBody_overrides_labelIntl: Partial<ActivationPostRequestBody_overrides_labelIntl> | undefined = {}) : void {
    writer.writeAdditionalData(activationPostRequestBody_overrides_labelIntl.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeActivationPostResponse(writer: SerializationWriter, activationPostResponse: Partial<ActivationPostResponse> | undefined = {}) : void {
    writer.writeStringValue("activationId", activationPostResponse.activationId);
}
/**
 * Uri template for the request builder.
 */
export const ActivationRequestBuilderUriTemplate = "{+baseurl}/api/extensibility/tenants/{tenantId}/extensions/{extensionId}/activation";
export const ActivationPostRequestBody_contextTypeObject = {
    Company: "company",
    Project: "project",
} as const;
/**
 * Metadata for all the requests in the request builder.
 */
export const ActivationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ActivationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            400: createActivation400ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            404: createActivation404ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            500: createActivation500ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createActivationPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeActivationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */