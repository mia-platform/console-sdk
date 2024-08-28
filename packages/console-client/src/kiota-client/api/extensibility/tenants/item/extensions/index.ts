/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type WithExtensionItemRequestBuilder, WithExtensionItemRequestBuilderNavigationMetadata, WithExtensionItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type ApiError, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_category_labelIntl}
 */
export function createExtensions_category_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_category_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_category}
 */
export function createExtensions_categoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_category;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_destination}
 */
export function createExtensions_destinationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_destination;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_menu_labelIntl}
 */
export function createExtensions_menu_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_menu_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_menu}
 */
export function createExtensions_menuFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_menu;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_visibilities}
 */
export function createExtensions_visibilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_visibilities;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions400Error}
 */
export function createExtensions400ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions400Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions500Error}
 */
export function createExtensions500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions500Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions}
 */
export function createExtensionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_category_labelIntl}
 */
export function createExtensionsPutRequestBody_category_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_category_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_category}
 */
export function createExtensionsPutRequestBody_categoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_category;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_destination}
 */
export function createExtensionsPutRequestBody_destinationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_destination;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_menu_labelIntl}
 */
export function createExtensionsPutRequestBody_menu_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_menu_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_menu}
 */
export function createExtensionsPutRequestBody_menuFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_menu;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody}
 */
export function createExtensionsPutRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutResponse}
 */
export function createExtensionsPutResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions(extensions: Partial<Extensions> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationContexts": n => { extensions.activationContexts = n.getCollectionOfPrimitiveValues<string>(); },
        "category": n => { extensions.category = n.getObjectValue<Extensions_category>(createExtensions_categoryFromDiscriminatorValue); },
        "description": n => { extensions.description = n.getStringValue(); },
        "destination": n => { extensions.destination = n.getObjectValue<Extensions_destination>(createExtensions_destinationFromDiscriminatorValue); },
        "entry": n => { extensions.entry = n.getStringValue(); },
        "extensionId": n => { extensions.extensionId = n.getStringValue(); },
        "iconName": n => { extensions.iconName = n.getStringValue(); },
        "menu": n => { extensions.menu = n.getObjectValue<Extensions_menu>(createExtensions_menuFromDiscriminatorValue); },
        "name": n => { extensions.name = n.getStringValue(); },
        "permissions": n => { extensions.permissions = n.getCollectionOfPrimitiveValues<string>(); },
        "type": n => { extensions.type = n.getStringValue(); },
        "visibilities": n => { extensions.visibilities = n.getCollectionOfObjectValues<Extensions_visibilities>(createExtensions_visibilitiesFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_category(extensions_category: Partial<Extensions_category> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensions_category.id = n.getStringValue(); },
        "labelIntl": n => { extensions_category.labelIntl = n.getObjectValue<Extensions_category_labelIntl>(createExtensions_category_labelIntlFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_category_labelIntl(extensions_category_labelIntl: Partial<Extensions_category_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_destination(extensions_destination: Partial<Extensions_destination> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensions_destination.id = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_menu(extensions_menu: Partial<Extensions_menu> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensions_menu.id = n.getStringValue(); },
        "labelIntl": n => { extensions_menu.labelIntl = n.getObjectValue<Extensions_menu_labelIntl>(createExtensions_menu_labelIntlFromDiscriminatorValue); },
        "order": n => { extensions_menu.order = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_menu_labelIntl(extensions_menu_labelIntl: Partial<Extensions_menu_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions_visibilities(extensions_visibilities: Partial<Extensions_visibilities> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contextId": n => { extensions_visibilities.contextId = n.getStringValue(); },
        "contextType": n => { extensions_visibilities.contextType = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions400Error(extensions400Error: Partial<Extensions400Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { extensions400Error.errorEscaped = n.getStringValue(); },
        "message": n => { extensions400Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { extensions400Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensions500Error(extensions500Error: Partial<Extensions500Error> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { extensions500Error.errorEscaped = n.getStringValue(); },
        "message": n => { extensions500Error.messageEscaped = n.getStringValue(); },
        "statusCode": n => { extensions500Error.statusCode = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody(extensionsPutRequestBody: Partial<ExtensionsPutRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationContexts": n => { extensionsPutRequestBody.activationContexts = n.getCollectionOfPrimitiveValues<string>(); },
        "category": n => { extensionsPutRequestBody.category = n.getObjectValue<ExtensionsPutRequestBody_category>(createExtensionsPutRequestBody_categoryFromDiscriminatorValue); },
        "description": n => { extensionsPutRequestBody.description = n.getStringValue(); },
        "destination": n => { extensionsPutRequestBody.destination = n.getObjectValue<ExtensionsPutRequestBody_destination>(createExtensionsPutRequestBody_destinationFromDiscriminatorValue); },
        "entry": n => { extensionsPutRequestBody.entry = n.getStringValue(); },
        "extensionId": n => { extensionsPutRequestBody.extensionId = n.getStringValue(); },
        "iconName": n => { extensionsPutRequestBody.iconName = n.getStringValue(); },
        "menu": n => { extensionsPutRequestBody.menu = n.getObjectValue<ExtensionsPutRequestBody_menu>(createExtensionsPutRequestBody_menuFromDiscriminatorValue); },
        "name": n => { extensionsPutRequestBody.name = n.getStringValue(); },
        "permissions": n => { extensionsPutRequestBody.permissions = n.getCollectionOfPrimitiveValues<string>(); },
        "type": n => { extensionsPutRequestBody.type = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody_category(extensionsPutRequestBody_category: Partial<ExtensionsPutRequestBody_category> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensionsPutRequestBody_category.id = n.getStringValue(); },
        "labelIntl": n => { extensionsPutRequestBody_category.labelIntl = n.getObjectValue<ExtensionsPutRequestBody_category_labelIntl>(createExtensionsPutRequestBody_category_labelIntlFromDiscriminatorValue); },
        "order": n => { extensionsPutRequestBody_category.order = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody_category_labelIntl(extensionsPutRequestBody_category_labelIntl: Partial<ExtensionsPutRequestBody_category_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody_destination(extensionsPutRequestBody_destination: Partial<ExtensionsPutRequestBody_destination> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensionsPutRequestBody_destination.id = n.getStringValue(); },
        "path": n => { extensionsPutRequestBody_destination.path = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody_menu(extensionsPutRequestBody_menu: Partial<ExtensionsPutRequestBody_menu> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensionsPutRequestBody_menu.id = n.getStringValue(); },
        "labelIntl": n => { extensionsPutRequestBody_menu.labelIntl = n.getObjectValue<ExtensionsPutRequestBody_menu_labelIntl>(createExtensionsPutRequestBody_menu_labelIntlFromDiscriminatorValue); },
        "order": n => { extensionsPutRequestBody_menu.order = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutRequestBody_menu_labelIntl(extensionsPutRequestBody_menu_labelIntl: Partial<ExtensionsPutRequestBody_menu_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoExtensionsPutResponse(extensionsPutResponse: Partial<ExtensionsPutResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "extensionId": n => { extensionsPutResponse.extensionId = n.getStringValue(); },
    }
}
export interface Extensions extends Parsable {
    /**
     * The activationContexts property
     */
    activationContexts?: string[];
    /**
     * The category property
     */
    category?: Extensions_category;
    /**
     * The description property
     */
    description?: string;
    /**
     * The destination property
     */
    destination?: Extensions_destination;
    /**
     * The entry property
     */
    entry?: string;
    /**
     * The extensionId property
     */
    extensionId?: string;
    /**
     * The iconName property
     */
    iconName?: string;
    /**
     * The menu property
     */
    menu?: Extensions_menu;
    /**
     * The name property
     */
    name?: string;
    /**
     * The permissions property
     */
    permissions?: string[];
    /**
     * The type property
     */
    type?: string;
    /**
     * The visibilities property
     */
    visibilities?: Extensions_visibilities[];
}
export interface Extensions_category extends Parsable {
    /**
     * The id property
     */
    id?: string;
    /**
     * The labelIntl property
     */
    labelIntl?: Extensions_category_labelIntl;
}
export interface Extensions_category_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface Extensions_destination extends Parsable {
    /**
     * The id property
     */
    id?: string;
}
export interface Extensions_menu extends Parsable {
    /**
     * The id property
     */
    id?: string;
    /**
     * The labelIntl property
     */
    labelIntl?: Extensions_menu_labelIntl;
    /**
     * The order property
     */
    order?: number;
}
export interface Extensions_menu_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface Extensions_visibilities extends Parsable {
    /**
     * The contextId property
     */
    contextId?: string;
    /**
     * The contextType property
     */
    contextType?: string;
}
export interface Extensions400Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface Extensions500Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface ExtensionsPutRequestBody extends Parsable {
    /**
     * The activationContexts property
     */
    activationContexts?: string[];
    /**
     * The category property
     */
    category?: ExtensionsPutRequestBody_category;
    /**
     * The description property
     */
    description?: string;
    /**
     * The destination property
     */
    destination?: ExtensionsPutRequestBody_destination;
    /**
     * The entry property
     */
    entry?: string;
    /**
     * The extensionId property
     */
    extensionId?: string;
    /**
     * The iconName property
     */
    iconName?: string;
    /**
     * The menu property
     */
    menu?: ExtensionsPutRequestBody_menu;
    /**
     * The name property
     */
    name?: string;
    /**
     * The permissions property
     */
    permissions?: string[];
    /**
     * The type property
     */
    type?: string;
}
export interface ExtensionsPutRequestBody_category extends Parsable {
    /**
     * The id property
     */
    id?: string;
    /**
     * The labelIntl property
     */
    labelIntl?: ExtensionsPutRequestBody_category_labelIntl;
    /**
     * The order property
     */
    order?: number;
}
export interface ExtensionsPutRequestBody_category_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface ExtensionsPutRequestBody_destination extends Parsable {
    /**
     * The id property
     */
    id?: string;
    /**
     * The path property
     */
    path?: string;
}
export interface ExtensionsPutRequestBody_menu extends Parsable {
    /**
     * The id property
     */
    id?: string;
    /**
     * The labelIntl property
     */
    labelIntl?: ExtensionsPutRequestBody_menu_labelIntl;
    /**
     * The order property
     */
    order?: number;
}
export interface ExtensionsPutRequestBody_menu_labelIntl extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export interface ExtensionsPutResponse extends Parsable {
    /**
     * The extensionId property
     */
    extensionId?: string;
}
/**
 * Builds and executes requests for operations under /api/extensibility/tenants/{tenantId}/extensions
 */
export interface ExtensionsRequestBuilder extends BaseRequestBuilder<ExtensionsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.api.extensibility.tenants.item.extensions.item collection
     * @param extensionId Unique identifier of the item
     * @returns {WithExtensionItemRequestBuilder}
     */
     byExtensionId(extensionId: string) : WithExtensionItemRequestBuilder;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Extensions[]>}
     * @throws {Extensions500Error} error when the service returns a 500 status code
     */
     get(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : Promise<Extensions[] | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExtensionsPutResponse>}
     * @throws {Extensions400Error} error when the service returns a 400 status code
     * @throws {Extensions500Error} error when the service returns a 500 status code
     */
     put(body: ExtensionsPutRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ExtensionsPutResponse | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: ExtensionsPutRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
export interface ExtensionsRequestBuilderGetQueryParameters {
    resolveDetails?: boolean;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions(writer: SerializationWriter, extensions_params: Partial<Extensions> | null | undefined = {}) : void {
    const extensions = extensions_params || {};
    writer.writeCollectionOfPrimitiveValues<string>("activationContexts", extensions.activationContexts);
    writer.writeObjectValue<Extensions_category>("category", extensions.category, serializeExtensions_category);
    writer.writeStringValue("description", extensions.description);
    writer.writeObjectValue<Extensions_destination>("destination", extensions.destination, serializeExtensions_destination);
    writer.writeStringValue("entry", extensions.entry);
    writer.writeStringValue("extensionId", extensions.extensionId);
    writer.writeStringValue("iconName", extensions.iconName);
    writer.writeObjectValue<Extensions_menu>("menu", extensions.menu, serializeExtensions_menu);
    writer.writeStringValue("name", extensions.name);
    writer.writeCollectionOfPrimitiveValues<string>("permissions", extensions.permissions);
    writer.writeStringValue("type", extensions.type);
    writer.writeCollectionOfObjectValues<Extensions_visibilities>("visibilities", extensions.visibilities, serializeExtensions_visibilities);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_category(writer: SerializationWriter, extensions_category: Partial<Extensions_category> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensions_category?.id);
    writer.writeObjectValue<Extensions_category_labelIntl>("labelIntl", extensions_category?.labelIntl, serializeExtensions_category_labelIntl);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_category_labelIntl(writer: SerializationWriter, extensions_category_labelIntl: Partial<Extensions_category_labelIntl> | null | undefined = {}) : void {
    writer.writeAdditionalData(extensions_category_labelIntl?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_destination(writer: SerializationWriter, extensions_destination: Partial<Extensions_destination> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensions_destination?.id);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_menu(writer: SerializationWriter, extensions_menu: Partial<Extensions_menu> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensions_menu?.id);
    writer.writeObjectValue<Extensions_menu_labelIntl>("labelIntl", extensions_menu?.labelIntl, serializeExtensions_menu_labelIntl);
    writer.writeNumberValue("order", extensions_menu?.order);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_menu_labelIntl(writer: SerializationWriter, extensions_menu_labelIntl: Partial<Extensions_menu_labelIntl> | null | undefined = {}) : void {
    writer.writeAdditionalData(extensions_menu_labelIntl?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions_visibilities(writer: SerializationWriter, extensions_visibilities: Partial<Extensions_visibilities> | null | undefined = {}) : void {
    writer.writeStringValue("contextId", extensions_visibilities?.contextId);
    writer.writeStringValue("contextType", extensions_visibilities?.contextType);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions400Error(writer: SerializationWriter, extensions400Error: Partial<Extensions400Error> | null | undefined = {}) : void {
    writer.writeStringValue("error", extensions400Error?.errorEscaped);
    writer.writeStringValue("message", extensions400Error?.messageEscaped);
    writer.writeNumberValue("statusCode", extensions400Error?.statusCode);
    writer.writeAdditionalData(extensions400Error?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensions500Error(writer: SerializationWriter, extensions500Error: Partial<Extensions500Error> | null | undefined = {}) : void {
    writer.writeStringValue("error", extensions500Error?.errorEscaped);
    writer.writeStringValue("message", extensions500Error?.messageEscaped);
    writer.writeNumberValue("statusCode", extensions500Error?.statusCode);
    writer.writeAdditionalData(extensions500Error?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody(writer: SerializationWriter, extensionsPutRequestBody: Partial<ExtensionsPutRequestBody> | null | undefined = {}) : void {
    const requestBody = extensionsPutRequestBody || {};
    writer.writeCollectionOfPrimitiveValues<string>("activationContexts", requestBody.activationContexts);
    writer.writeObjectValue<ExtensionsPutRequestBody_category>("category", requestBody.category, serializeExtensionsPutRequestBody_category);
    writer.writeStringValue("description", requestBody.description);
    writer.writeObjectValue<ExtensionsPutRequestBody_destination>("destination", requestBody.destination, serializeExtensionsPutRequestBody_destination);
    writer.writeStringValue("entry", requestBody.entry);
    writer.writeStringValue("extensionId", requestBody.extensionId);
    writer.writeStringValue("iconName", requestBody.iconName);
    writer.writeObjectValue<ExtensionsPutRequestBody_menu>("menu", requestBody.menu, serializeExtensionsPutRequestBody_menu);
    writer.writeStringValue("name", requestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("permissions", requestBody.permissions);
    writer.writeStringValue("type", requestBody.type);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody_category(writer: SerializationWriter, extensionsPutRequestBody_category: Partial<ExtensionsPutRequestBody_category> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensionsPutRequestBody_category?.id);
    writer.writeObjectValue<ExtensionsPutRequestBody_category_labelIntl>("labelIntl", extensionsPutRequestBody_category?.labelIntl, serializeExtensionsPutRequestBody_category_labelIntl);
    writer.writeNumberValue("order", extensionsPutRequestBody_category?.order);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody_category_labelIntl(writer: SerializationWriter, extensionsPutRequestBody_category_labelIntl: Partial<ExtensionsPutRequestBody_category_labelIntl> | null | undefined = {}) : void {
    writer.writeAdditionalData(extensionsPutRequestBody_category_labelIntl?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody_destination(writer: SerializationWriter, extensionsPutRequestBody_destination: Partial<ExtensionsPutRequestBody_destination> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensionsPutRequestBody_destination?.id);
    writer.writeStringValue("path", extensionsPutRequestBody_destination?.path);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody_menu(writer: SerializationWriter, extensionsPutRequestBody_menu: Partial<ExtensionsPutRequestBody_menu> | null | undefined = {}) : void {
    writer.writeStringValue("id", extensionsPutRequestBody_menu?.id);
    writer.writeObjectValue<ExtensionsPutRequestBody_menu_labelIntl>("labelIntl", extensionsPutRequestBody_menu?.labelIntl, serializeExtensionsPutRequestBody_menu_labelIntl);
    writer.writeNumberValue("order", extensionsPutRequestBody_menu?.order);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutRequestBody_menu_labelIntl(writer: SerializationWriter, extensionsPutRequestBody_menu_labelIntl: Partial<ExtensionsPutRequestBody_menu_labelIntl> | null | undefined = {}) : void {
    writer.writeAdditionalData(extensionsPutRequestBody_menu_labelIntl?.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExtensionsPutResponse(writer: SerializationWriter, extensionsPutResponse: Partial<ExtensionsPutResponse> | null | undefined = {}) : void {
    writer.writeStringValue("extensionId", extensionsPutResponse?.extensionId);
}
/**
 * Uri template for the request builder.
 */
export const ExtensionsRequestBuilderUriTemplate = "{+baseurl}/api/extensibility/tenants/{tenantId}/extensions{?resolveDetails*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ExtensionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ExtensionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byExtensionId: {
        requestsMetadata: WithExtensionItemRequestBuilderRequestsMetadata,
        navigationMetadata: WithExtensionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["extensionId"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExtensionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            500: createExtensions500ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createExtensionsFromDiscriminatorValue,
    },
    put: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            400: createExtensions400ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            500: createExtensions500ErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExtensionsPutResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExtensionsPutRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
