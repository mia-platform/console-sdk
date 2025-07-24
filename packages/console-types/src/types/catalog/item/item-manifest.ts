/**
 * Copyright 2025 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../commons/json-schema'
import {
  catalogItemDescriptionSchema,
  catalogDocumentationSchema,
  catalogImageUrlSchema,
  catalogItemIdSchema,
  catalogItemNameSchema,
  catalogProviderIdSchema,
  catalogPublishOnMiaDocumentationSchema,
  catalogItemRepositoryUrlSchema,
  catalogResourcesSchema,
  catalogSupportedByImageUrlSchema,
  catalogSupportedBySchema,
  catalogTenantIdSchema,
  catalogTypeSchema,
  catalogSemverVersionSchema,
  catalogVisibilitySchema,
  catalogReleaseDateSchema,
  catalogLifecycleStatusSchema,
  catalogItemTypeDefinitionRefSchema,
  CatalogItemTypeDefinitionRef,
} from './commons'

export const catalogItemManifestSchema = {
  $id: 'catalog-item-manifest.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Catalog item manifest',
  description: 'Data model of a Catalog item to apply',
  type: 'object',
  properties: {
    categoryId: { description: 'Identifier of the item\'s category', type: 'string' },
    description: catalogItemDescriptionSchema,
    documentation: catalogDocumentationSchema,
    imageUrl: catalogImageUrlSchema,
    itemId: catalogItemIdSchema,
    lifecycleStatus: catalogLifecycleStatusSchema,
    name: catalogItemNameSchema,
    providerId: catalogProviderIdSchema,
    publishOnMiaDocumentation: catalogPublishOnMiaDocumentationSchema,
    releaseDate: catalogReleaseDateSchema,
    repositoryUrl: catalogItemRepositoryUrlSchema,
    resources: catalogResourcesSchema,
    supportedBy: catalogSupportedBySchema,
    supportedByImageUrl: catalogSupportedByImageUrlSchema,
    tenantId: catalogTenantIdSchema,
    type: catalogTypeSchema,
    itemTypeDefinitionRef: catalogItemTypeDefinitionRefSchema,
    version: catalogSemverVersionSchema,
    visibility: catalogVisibilitySchema,
  },
  additionalProperties: false,
  required: ['name', 'itemId', 'tenantId', 'resources', 'lifecycleStatus'],
} as const satisfies JSONSchema

type _CatalogItemManifest = FromSchema<typeof catalogItemManifestSchema>

export type CatalogItemManifest<
  Type extends string = string,
  Resources extends Record<string, unknown> = Record<string, unknown>
> = _CatalogItemManifest & {
  resources: Resources,
  type?: Type,
  itemTypeDefinitionRef?: CatalogItemTypeDefinitionRef<Type>
}

export type CatalogItemNoVersionManifest<
  Type extends string = string,
  Resources extends Record<string, unknown> = Record<string, unknown>
> = Omit<_CatalogItemManifest, 'version'> & {
  resources: Resources,
  type?: Type,
  itemTypeDefinitionRef?: CatalogItemTypeDefinitionRef<Type>
}
