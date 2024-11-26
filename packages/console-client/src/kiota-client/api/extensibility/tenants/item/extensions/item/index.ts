/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { ActivationRequestBuilderNavigationMetadata, ActivationRequestBuilderRequestsMetadata, type ActivationRequestBuilder } from './activation/index.js';
// @ts-ignore
import { type WithContextTypeItemRequestBuilder, WithContextTypeItemRequestBuilderNavigationMetadata } from './item/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type ApiError, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtension500Error}
 */
// @ts-ignore
export function createWithExtension500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtension500Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_category_labelIntl}
 */
// @ts-ignore
export function createWithExtensionGetResponse_category_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_category_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_category}
 */
// @ts-ignore
export function createWithExtensionGetResponse_categoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_category;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_destination}
 */
// @ts-ignore
export function createWithExtensionGetResponse_destinationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_destination;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_menu_labelIntl}
 */
// @ts-ignore
export function createWithExtensionGetResponse_menu_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_menu_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_menu}
 */
// @ts-ignore
export function createWithExtensionGetResponse_menuFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_menu;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_proxy}
 */
// @ts-ignore
export function createWithExtensionGetResponse_proxyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_proxy;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse_visibilities}
 */
// @ts-ignore
export function createWithExtensionGetResponse_visibilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse_visibilities;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {WithExtensionGetResponse}
 */
// @ts-ignore
export function createWithExtensionGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWithExtensionGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtension500Error(withExtension500Error: Partial<WithExtension500Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { withExtension500Error.errorEscaped = n.getStringValue(); },
        "message": n => { withExtension500Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { withExtension500Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse(withExtensionGetResponse: Partial<WithExtensionGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationContexts": n => { withExtensionGetResponse.activationContexts = n.getCollectionOfPrimitiveValues<string>(); },
        "category": n => { withExtensionGetResponse.category = n.getObjectValue<WithExtensionGetResponse_category>(createWithExtensionGetResponse_categoryFromDiscriminatorValue); },
        "configuration": n => { withExtensionGetResponse.configuration = n.getStringValue(); },
        "description": n => { withExtensionGetResponse.description = n.getStringValue(); },
        "destination": n => { withExtensionGetResponse.destination = n.getObjectValue<WithExtensionGetResponse_destination>(createWithExtensionGetResponse_destinationFromDiscriminatorValue); },
        "entry": n => { withExtensionGetResponse.entry = n.getStringValue(); },
        "extensionId": n => { withExtensionGetResponse.extensionId = n.getStringValue(); },
        "iconName": n => { withExtensionGetResponse.iconName = n.getStringValue(); },
        "menu": n => { withExtensionGetResponse.menu = n.getObjectValue<WithExtensionGetResponse_menu>(createWithExtensionGetResponse_menuFromDiscriminatorValue); },
        "name": n => { withExtensionGetResponse.name = n.getStringValue(); },
        "permissions": n => { withExtensionGetResponse.permissions = n.getCollectionOfPrimitiveValues<string>(); },
        "proxy": n => { withExtensionGetResponse.proxy = n.getObjectValue<WithExtensionGetResponse_proxy>(createWithExtensionGetResponse_proxyFromDiscriminatorValue); },
        "roleIds": n => { withExtensionGetResponse.roleIds = n.getCollectionOfPrimitiveValues<string>(); },
        "type": n => { withExtensionGetResponse.type = n.getStringValue(); },
        "visibilities": n => { withExtensionGetResponse.visibilities = n.getCollectionOfObjectValues<WithExtensionGetResponse_visibilities>(createWithExtensionGetResponse_visibilitiesFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_category(withExtensionGetResponse_category: Partial<WithExtensionGetResponse_category> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { withExtensionGetResponse_category.id = n.getStringValue(); },
        "labelIntl": n => { withExtensionGetResponse_category.labelIntl = n.getObjectValue<WithExtensionGetResponse_category_labelIntl>(createWithExtensionGetResponse_category_labelIntlFromDiscriminatorValue); },
        "order": n => { withExtensionGetResponse_category.order = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_category_labelIntl(withExtensionGetResponse_category_labelIntl: Partial<WithExtensionGetResponse_category_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_destination(withExtensionGetResponse_destination: Partial<WithExtensionGetResponse_destination> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { withExtensionGetResponse_destination.id = n.getStringValue(); },
        "path": n => { withExtensionGetResponse_destination.path = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_menu(withExtensionGetResponse_menu: Partial<WithExtensionGetResponse_menu> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { withExtensionGetResponse_menu.id = n.getStringValue(); },
        "labelIntl": n => { withExtensionGetResponse_menu.labelIntl = n.getObjectValue<WithExtensionGetResponse_menu_labelIntl>(createWithExtensionGetResponse_menu_labelIntlFromDiscriminatorValue); },
        "order": n => { withExtensionGetResponse_menu.order = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_menu_labelIntl(withExtensionGetResponse_menu_labelIntl: Partial<WithExtensionGetResponse_menu_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_proxy(withExtensionGetResponse_proxy: Partial<WithExtensionGetResponse_proxy> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "authentication": n => { withExtensionGetResponse_proxy.authentication = n.getStringValue(); },
        "authType": n => { withExtensionGetResponse_proxy.authType = n.getStringValue(); },
        "basePath": n => { withExtensionGetResponse_proxy.basePath = n.getStringValue(); },
        "clientId": n => { withExtensionGetResponse_proxy.clientId = n.getStringValue(); },
        "grantType": n => { withExtensionGetResponse_proxy.grantType = n.getStringValue(); },
        "headersToProxy": n => { withExtensionGetResponse_proxy.headersToProxy = n.getCollectionOfPrimitiveValues<string>(); },
        "targetBaseUrl": n => { withExtensionGetResponse_proxy.targetBaseUrl = n.getStringValue(); },
        "username": n => { withExtensionGetResponse_proxy.username = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWithExtensionGetResponse_visibilities(withExtensionGetResponse_visibilities: Partial<WithExtensionGetResponse_visibilities> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contextId": n => { withExtensionGetResponse_visibilities.contextId = n.getStringValue(); },
        "contextType": n => { withExtensionGetResponse_visibilities.contextType = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtension500Error(writer: SerializationWriter, withExtension500Error: Partial<WithExtension500Error> | undefined | null = {}) : void {
    if (withExtension500Error) {
        writer.writeStringValue("error", withExtension500Error.errorEscaped);
        writer.writeStringValue("message", withExtension500Error.messageEscaped);
        writer.writeNumberValue("statusCode", withExtension500Error.statusCode);
        writer.writeAdditionalData(withExtension500Error.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse(writer: SerializationWriter, withExtensionGetResponse: Partial<WithExtensionGetResponse> | undefined | null = {}) : void {
    if (withExtensionGetResponse) {
        writer.writeCollectionOfPrimitiveValues<string>("activationContexts", withExtensionGetResponse.activationContexts);
        writer.writeObjectValue<WithExtensionGetResponse_category>("category", withExtensionGetResponse.category, serializeWithExtensionGetResponse_category);
        writer.writeStringValue("configuration", withExtensionGetResponse.configuration);
        writer.writeStringValue("description", withExtensionGetResponse.description);
        writer.writeObjectValue<WithExtensionGetResponse_destination>("destination", withExtensionGetResponse.destination, serializeWithExtensionGetResponse_destination);
        writer.writeStringValue("entry", withExtensionGetResponse.entry);
        writer.writeStringValue("extensionId", withExtensionGetResponse.extensionId);
        writer.writeStringValue("iconName", withExtensionGetResponse.iconName);
        writer.writeObjectValue<WithExtensionGetResponse_menu>("menu", withExtensionGetResponse.menu, serializeWithExtensionGetResponse_menu);
        writer.writeStringValue("name", withExtensionGetResponse.name);
        writer.writeCollectionOfPrimitiveValues<string>("permissions", withExtensionGetResponse.permissions);
        writer.writeObjectValue<WithExtensionGetResponse_proxy>("proxy", withExtensionGetResponse.proxy, serializeWithExtensionGetResponse_proxy);
        writer.writeCollectionOfPrimitiveValues<string>("roleIds", withExtensionGetResponse.roleIds);
        writer.writeStringValue("type", withExtensionGetResponse.type);
        writer.writeCollectionOfObjectValues<WithExtensionGetResponse_visibilities>("visibilities", withExtensionGetResponse.visibilities, serializeWithExtensionGetResponse_visibilities);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_category(writer: SerializationWriter, withExtensionGetResponse_category: Partial<WithExtensionGetResponse_category> | undefined | null = {}) : void {
    if (withExtensionGetResponse_category) {
        writer.writeStringValue("id", withExtensionGetResponse_category.id);
        writer.writeObjectValue<WithExtensionGetResponse_category_labelIntl>("labelIntl", withExtensionGetResponse_category.labelIntl, serializeWithExtensionGetResponse_category_labelIntl);
        writer.writeNumberValue("order", withExtensionGetResponse_category.order);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_category_labelIntl(writer: SerializationWriter, withExtensionGetResponse_category_labelIntl: Partial<WithExtensionGetResponse_category_labelIntl> | undefined | null = {}) : void {
    if (withExtensionGetResponse_category_labelIntl) {
        writer.writeAdditionalData(withExtensionGetResponse_category_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_destination(writer: SerializationWriter, withExtensionGetResponse_destination: Partial<WithExtensionGetResponse_destination> | undefined | null = {}) : void {
    if (withExtensionGetResponse_destination) {
        writer.writeStringValue("id", withExtensionGetResponse_destination.id);
        writer.writeStringValue("path", withExtensionGetResponse_destination.path);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_menu(writer: SerializationWriter, withExtensionGetResponse_menu: Partial<WithExtensionGetResponse_menu> | undefined | null = {}) : void {
    if (withExtensionGetResponse_menu) {
        writer.writeStringValue("id", withExtensionGetResponse_menu.id);
        writer.writeObjectValue<WithExtensionGetResponse_menu_labelIntl>("labelIntl", withExtensionGetResponse_menu.labelIntl, serializeWithExtensionGetResponse_menu_labelIntl);
        writer.writeNumberValue("order", withExtensionGetResponse_menu.order);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_menu_labelIntl(writer: SerializationWriter, withExtensionGetResponse_menu_labelIntl: Partial<WithExtensionGetResponse_menu_labelIntl> | undefined | null = {}) : void {
    if (withExtensionGetResponse_menu_labelIntl) {
        writer.writeAdditionalData(withExtensionGetResponse_menu_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_proxy(writer: SerializationWriter, withExtensionGetResponse_proxy: Partial<WithExtensionGetResponse_proxy> | undefined | null = {}) : void {
    if (withExtensionGetResponse_proxy) {
        writer.writeStringValue("authentication", withExtensionGetResponse_proxy.authentication);
        writer.writeStringValue("authType", withExtensionGetResponse_proxy.authType);
        writer.writeStringValue("basePath", withExtensionGetResponse_proxy.basePath);
        writer.writeStringValue("clientId", withExtensionGetResponse_proxy.clientId);
        writer.writeStringValue("grantType", withExtensionGetResponse_proxy.grantType);
        writer.writeCollectionOfPrimitiveValues<string>("headersToProxy", withExtensionGetResponse_proxy.headersToProxy);
        writer.writeStringValue("targetBaseUrl", withExtensionGetResponse_proxy.targetBaseUrl);
        writer.writeStringValue("username", withExtensionGetResponse_proxy.username);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWithExtensionGetResponse_visibilities(writer: SerializationWriter, withExtensionGetResponse_visibilities: Partial<WithExtensionGetResponse_visibilities> | undefined | null = {}) : void {
    if (withExtensionGetResponse_visibilities) {
        writer.writeStringValue("contextId", withExtensionGetResponse_visibilities.contextId);
        writer.writeStringValue("contextType", withExtensionGetResponse_visibilities.contextType);
    }
}
export interface WithExtension500Error extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error property
     */
    errorEscaped?: string | null;
    /**
     * The message property
     */
    messageEscaped?: string | null;
    /**
     * The statusCode property
     */
    statusCode?: number | null;
}
export interface WithExtensionGetResponse extends Parsable {
    /**
     * The activationContexts property
     */
    activationContexts?: string[] | null;
    /**
     * The category property
     */
    category?: WithExtensionGetResponse_category | null;
    /**
     * The configuration property
     */
    configuration?: string | null;
    /**
     * The description property
     */
    description?: string | null;
    /**
     * The destination property
     */
    destination?: WithExtensionGetResponse_destination | null;
    /**
     * The entry property
     */
    entry?: string | null;
    /**
     * The extensionId property
     */
    extensionId?: string | null;
    /**
     * The iconName property
     */
    iconName?: string | null;
    /**
     * The menu property
     */
    menu?: WithExtensionGetResponse_menu | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The permissions property
     */
    permissions?: string[] | null;
    /**
     * The proxy property
     */
    proxy?: WithExtensionGetResponse_proxy | null;
    /**
     * The roleIds property
     */
    roleIds?: string[] | null;
    /**
     * The type property
     */
    type?: string | null;
    /**
     * The visibilities property
     */
    visibilities?: WithExtensionGetResponse_visibilities[] | null;
}
export interface WithExtensionGetResponse_category extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: WithExtensionGetResponse_category_labelIntl | null;
    /**
     * The order property
     */
    order?: number | null;
}
export interface WithExtensionGetResponse_category_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface WithExtensionGetResponse_destination extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The path property
     */
    path?: string | null;
}
export interface WithExtensionGetResponse_menu extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: WithExtensionGetResponse_menu_labelIntl | null;
    /**
     * The order property
     */
    order?: number | null;
}
export interface WithExtensionGetResponse_menu_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface WithExtensionGetResponse_proxy extends Parsable {
    /**
     * The authentication property
     */
    authentication?: string | null;
    /**
     * The authType property
     */
    authType?: string | null;
    /**
     * The basePath property
     */
    basePath?: string | null;
    /**
     * The clientId property
     */
    clientId?: string | null;
    /**
     * The grantType property
     */
    grantType?: string | null;
    /**
     * The headersToProxy property
     */
    headersToProxy?: string[] | null;
    /**
     * The targetBaseUrl property
     */
    targetBaseUrl?: string | null;
    /**
     * The username property
     */
    username?: string | null;
}
export interface WithExtensionGetResponse_visibilities extends Parsable {
    /**
     * The contextId property
     */
    contextId?: string | null;
    /**
     * The contextType property
     */
    contextType?: string | null;
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
     * @returns {Promise<WithExtensionGetResponse>}
     * @throws {WithExtension500Error} error when the service returns a 500 status code
     */
     get(requestConfiguration?: RequestConfiguration<WithExtensionItemRequestBuilderGetQueryParameters> | undefined) : Promise<WithExtensionGetResponse | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WithExtensionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
export interface WithExtensionItemRequestBuilderGetQueryParameters {
    /**
     * `true`: include visibilities and proxies in the response. `false` only extension data is returned. default value is `false`.
     */
    resolveDetails?: boolean;
}
/**
 * Uri template for the request builder.
 */
export const WithExtensionItemRequestBuilderUriTemplate = "{+baseurl}/api/extensibility/tenants/{tenantId}/extensions/{extensionId}{?resolveDetails*}";
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
        navigationMetadata: ActivationRequestBuilderNavigationMetadata,
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
    get: {
        uriTemplate: WithExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            500: createWithExtension500ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWithExtensionGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
