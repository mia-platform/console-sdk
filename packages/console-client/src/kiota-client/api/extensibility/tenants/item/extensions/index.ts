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
// @ts-ignore
export function createExtensions_category_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_category_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_category}
 */
// @ts-ignore
export function createExtensions_categoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_category;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_destination}
 */
// @ts-ignore
export function createExtensions_destinationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_destination;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_menu_labelIntl}
 */
// @ts-ignore
export function createExtensions_menu_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_menu_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_menu}
 */
// @ts-ignore
export function createExtensions_menuFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_menu;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions_visibilities}
 */
// @ts-ignore
export function createExtensions_visibilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions_visibilities;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions400Error}
 */
// @ts-ignore
export function createExtensions400ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions400Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions500Error}
 */
// @ts-ignore
export function createExtensions500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions500Error;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Extensions}
 */
// @ts-ignore
export function createExtensionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensions;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_category_labelIntl}
 */
// @ts-ignore
export function createExtensionsPutRequestBody_category_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_category_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_category}
 */
// @ts-ignore
export function createExtensionsPutRequestBody_categoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_category;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_destination}
 */
// @ts-ignore
export function createExtensionsPutRequestBody_destinationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_destination;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_menu_labelIntl}
 */
// @ts-ignore
export function createExtensionsPutRequestBody_menu_labelIntlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_menu_labelIntl;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody_menu}
 */
// @ts-ignore
export function createExtensionsPutRequestBody_menuFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody_menu;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutRequestBody}
 */
// @ts-ignore
export function createExtensionsPutRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ExtensionsPutResponse}
 */
// @ts-ignore
export function createExtensionsPutResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExtensionsPutResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoExtensions(extensions: Partial<Extensions> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationContexts": n => { extensions.activationContexts = n.getCollectionOfPrimitiveValues<string>(); },
        "category": n => { extensions.category = n.getObjectValue<Extensions_category>(createExtensions_categoryFromDiscriminatorValue); },
        "configuration": n => { extensions.configuration = n.getStringValue(); },
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
// @ts-ignore
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
// @ts-ignore
export function deserializeIntoExtensions_category_labelIntl(extensions_category_labelIntl: Partial<Extensions_category_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoExtensions_destination(extensions_destination: Partial<Extensions_destination> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { extensions_destination.id = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
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
// @ts-ignore
export function deserializeIntoExtensions_menu_labelIntl(extensions_menu_labelIntl: Partial<Extensions_menu_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
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
// @ts-ignore
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
// @ts-ignore
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
// @ts-ignore
export function deserializeIntoExtensionsPutRequestBody(extensionsPutRequestBody: Partial<ExtensionsPutRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activationContexts": n => { extensionsPutRequestBody.activationContexts = n.getCollectionOfPrimitiveValues<string>(); },
        "category": n => { extensionsPutRequestBody.category = n.getObjectValue<ExtensionsPutRequestBody_category>(createExtensionsPutRequestBody_categoryFromDiscriminatorValue); },
        "configuration": n => { extensionsPutRequestBody.configuration = n.getStringValue(); },
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
// @ts-ignore
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
// @ts-ignore
export function deserializeIntoExtensionsPutRequestBody_category_labelIntl(extensionsPutRequestBody_category_labelIntl: Partial<ExtensionsPutRequestBody_category_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
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
// @ts-ignore
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
// @ts-ignore
export function deserializeIntoExtensionsPutRequestBody_menu_labelIntl(extensionsPutRequestBody_menu_labelIntl: Partial<ExtensionsPutRequestBody_menu_labelIntl> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoExtensionsPutResponse(extensionsPutResponse: Partial<ExtensionsPutResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "extensionId": n => { extensionsPutResponse.extensionId = n.getStringValue(); },
    }
}
export interface Extensions extends Parsable {
    /**
     * The activationContexts property
     */
    activationContexts?: string[] | null;
    /**
     * The category property
     */
    category?: Extensions_category | null;
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
    destination?: Extensions_destination | null;
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
    menu?: Extensions_menu | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The permissions property
     */
    permissions?: string[] | null;
    /**
     * The type property
     */
    type?: string | null;
    /**
     * The visibilities property
     */
    visibilities?: Extensions_visibilities[] | null;
}
export interface Extensions_category extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: Extensions_category_labelIntl | null;
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
    id?: string | null;
}
export interface Extensions_menu extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: Extensions_menu_labelIntl | null;
    /**
     * The order property
     */
    order?: number | null;
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
    contextId?: string | null;
    /**
     * The contextType property
     */
    contextType?: string | null;
}
export interface Extensions400Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface Extensions500Error extends AdditionalDataHolder, ApiError, Parsable {
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
export interface ExtensionsPutRequestBody extends Parsable {
    /**
     * The activationContexts property
     */
    activationContexts?: string[] | null;
    /**
     * The category property
     */
    category?: ExtensionsPutRequestBody_category | null;
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
    destination?: ExtensionsPutRequestBody_destination | null;
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
    menu?: ExtensionsPutRequestBody_menu | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The permissions property
     */
    permissions?: string[] | null;
    /**
     * The type property
     */
    type?: string | null;
}
export interface ExtensionsPutRequestBody_category extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: ExtensionsPutRequestBody_category_labelIntl | null;
    /**
     * The order property
     */
    order?: number | null;
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
    id?: string | null;
    /**
     * The path property
     */
    path?: string | null;
}
export interface ExtensionsPutRequestBody_menu extends Parsable {
    /**
     * The id property
     */
    id?: string | null;
    /**
     * The labelIntl property
     */
    labelIntl?: ExtensionsPutRequestBody_menu_labelIntl | null;
    /**
     * The order property
     */
    order?: number | null;
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
    extensionId?: string | null;
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
// @ts-ignore
export function serializeExtensions(writer: SerializationWriter, extensions: Partial<Extensions> | undefined | null = {}) : void {
    if (extensions) {
        writer.writeCollectionOfPrimitiveValues<string>("activationContexts", extensions.activationContexts);
        writer.writeObjectValue<Extensions_category>("category", extensions.category, serializeExtensions_category);
        writer.writeStringValue("configuration", extensions.configuration);
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
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_category(writer: SerializationWriter, extensions_category: Partial<Extensions_category> | undefined | null = {}) : void {
    if (extensions_category) {
        writer.writeStringValue("id", extensions_category.id);
        writer.writeObjectValue<Extensions_category_labelIntl>("labelIntl", extensions_category.labelIntl, serializeExtensions_category_labelIntl);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_category_labelIntl(writer: SerializationWriter, extensions_category_labelIntl: Partial<Extensions_category_labelIntl> | undefined | null = {}) : void {
    if (extensions_category_labelIntl) {
        writer.writeAdditionalData(extensions_category_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_destination(writer: SerializationWriter, extensions_destination: Partial<Extensions_destination> | undefined | null = {}) : void {
    if (extensions_destination) {
        writer.writeStringValue("id", extensions_destination.id);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_menu(writer: SerializationWriter, extensions_menu: Partial<Extensions_menu> | undefined | null = {}) : void {
    if (extensions_menu) {
        writer.writeStringValue("id", extensions_menu.id);
        writer.writeObjectValue<Extensions_menu_labelIntl>("labelIntl", extensions_menu.labelIntl, serializeExtensions_menu_labelIntl);
        writer.writeNumberValue("order", extensions_menu.order);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_menu_labelIntl(writer: SerializationWriter, extensions_menu_labelIntl: Partial<Extensions_menu_labelIntl> | undefined | null = {}) : void {
    if (extensions_menu_labelIntl) {
        writer.writeAdditionalData(extensions_menu_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions_visibilities(writer: SerializationWriter, extensions_visibilities: Partial<Extensions_visibilities> | undefined | null = {}) : void {
    if (extensions_visibilities) {
        writer.writeStringValue("contextId", extensions_visibilities.contextId);
        writer.writeStringValue("contextType", extensions_visibilities.contextType);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions400Error(writer: SerializationWriter, extensions400Error: Partial<Extensions400Error> | undefined | null = {}) : void {
    if (extensions400Error) {
        writer.writeStringValue("error", extensions400Error.errorEscaped);
        writer.writeStringValue("message", extensions400Error.messageEscaped);
        writer.writeNumberValue("statusCode", extensions400Error.statusCode);
        writer.writeAdditionalData(extensions400Error.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensions500Error(writer: SerializationWriter, extensions500Error: Partial<Extensions500Error> | undefined | null = {}) : void {
    if (extensions500Error) {
        writer.writeStringValue("error", extensions500Error.errorEscaped);
        writer.writeStringValue("message", extensions500Error.messageEscaped);
        writer.writeNumberValue("statusCode", extensions500Error.statusCode);
        writer.writeAdditionalData(extensions500Error.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody(writer: SerializationWriter, extensionsPutRequestBody: Partial<ExtensionsPutRequestBody> | undefined | null = {}) : void {
    if (extensionsPutRequestBody) {
        writer.writeCollectionOfPrimitiveValues<string>("activationContexts", extensionsPutRequestBody.activationContexts);
        writer.writeObjectValue<ExtensionsPutRequestBody_category>("category", extensionsPutRequestBody.category, serializeExtensionsPutRequestBody_category);
        writer.writeStringValue("configuration", extensionsPutRequestBody.configuration);
        writer.writeStringValue("description", extensionsPutRequestBody.description);
        writer.writeObjectValue<ExtensionsPutRequestBody_destination>("destination", extensionsPutRequestBody.destination, serializeExtensionsPutRequestBody_destination);
        writer.writeStringValue("entry", extensionsPutRequestBody.entry);
        writer.writeStringValue("extensionId", extensionsPutRequestBody.extensionId);
        writer.writeStringValue("iconName", extensionsPutRequestBody.iconName);
        writer.writeObjectValue<ExtensionsPutRequestBody_menu>("menu", extensionsPutRequestBody.menu, serializeExtensionsPutRequestBody_menu);
        writer.writeStringValue("name", extensionsPutRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("permissions", extensionsPutRequestBody.permissions);
        writer.writeStringValue("type", extensionsPutRequestBody.type);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody_category(writer: SerializationWriter, extensionsPutRequestBody_category: Partial<ExtensionsPutRequestBody_category> | undefined | null = {}) : void {
    if (extensionsPutRequestBody_category) {
        writer.writeStringValue("id", extensionsPutRequestBody_category.id);
        writer.writeObjectValue<ExtensionsPutRequestBody_category_labelIntl>("labelIntl", extensionsPutRequestBody_category.labelIntl, serializeExtensionsPutRequestBody_category_labelIntl);
        writer.writeNumberValue("order", extensionsPutRequestBody_category.order);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody_category_labelIntl(writer: SerializationWriter, extensionsPutRequestBody_category_labelIntl: Partial<ExtensionsPutRequestBody_category_labelIntl> | undefined | null = {}) : void {
    if (extensionsPutRequestBody_category_labelIntl) {
        writer.writeAdditionalData(extensionsPutRequestBody_category_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody_destination(writer: SerializationWriter, extensionsPutRequestBody_destination: Partial<ExtensionsPutRequestBody_destination> | undefined | null = {}) : void {
    if (extensionsPutRequestBody_destination) {
        writer.writeStringValue("id", extensionsPutRequestBody_destination.id);
        writer.writeStringValue("path", extensionsPutRequestBody_destination.path);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody_menu(writer: SerializationWriter, extensionsPutRequestBody_menu: Partial<ExtensionsPutRequestBody_menu> | undefined | null = {}) : void {
    if (extensionsPutRequestBody_menu) {
        writer.writeStringValue("id", extensionsPutRequestBody_menu.id);
        writer.writeObjectValue<ExtensionsPutRequestBody_menu_labelIntl>("labelIntl", extensionsPutRequestBody_menu.labelIntl, serializeExtensionsPutRequestBody_menu_labelIntl);
        writer.writeNumberValue("order", extensionsPutRequestBody_menu.order);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutRequestBody_menu_labelIntl(writer: SerializationWriter, extensionsPutRequestBody_menu_labelIntl: Partial<ExtensionsPutRequestBody_menu_labelIntl> | undefined | null = {}) : void {
    if (extensionsPutRequestBody_menu_labelIntl) {
        writer.writeAdditionalData(extensionsPutRequestBody_menu_labelIntl.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeExtensionsPutResponse(writer: SerializationWriter, extensionsPutResponse: Partial<ExtensionsPutResponse> | undefined | null = {}) : void {
    if (extensionsPutResponse) {
        writer.writeStringValue("extensionId", extensionsPutResponse.extensionId);
    }
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
