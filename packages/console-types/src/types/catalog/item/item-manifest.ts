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
import { catalogAnnotationsSchema, catalogLabelsSchema, catalogLinksSchema, catalogMaintainersSchema, catalogTagsSchema } from '../commons'
import {
  catalogItemDescriptionSchema,
  catalogDocumentationSchema,
  catalogImageUrlSchema,
  catalogItemIdSchema,
  catalogItemNameSchema,
  catalogProviderIdSchema,
  catalogItemRepositoryUrlSchema,
  catalogResourcesSchema,
  catalogSupportedByImageUrlSchema,
  catalogSupportedBySchema,
  catalogTenantIdSchema,
  catalogSemverVersionSchema,
  catalogVisibilitySchema,
  catalogReleaseDateSchema,
  catalogLifecycleStatusSchema,
  catalogItemTypeDefinitionRefSchema,
  CatalogItemTypeDefinitionRef,
  catalogRelationshipsSchema,
  CatalogItemDocumentationType,
  catalogItemLifecycleStatusEnum,
} from './commons'

const _catalogItemManifestSchema = {
  $id: 'catalog-item-manifest.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Catalog item manifest',
  description: 'the data needed to apply a single version of a Software Catalog item.',
  type: 'object',
  properties: {
    annotations: catalogAnnotationsSchema,
    categoryId: {
      description: 'The unique identifier of this item\'s version\'s category.',
      type: 'string',
    },
    description: catalogItemDescriptionSchema,
    documentation: catalogDocumentationSchema,
    imageUrl: catalogImageUrlSchema,
    itemId: catalogItemIdSchema,
    itemTypeDefinitionRef: catalogItemTypeDefinitionRefSchema,
    labels: catalogLabelsSchema,
    lifecycleStatus: catalogLifecycleStatusSchema,
    links: catalogLinksSchema,
    maintainers: catalogMaintainersSchema,
    name: catalogItemNameSchema,
    providerId: catalogProviderIdSchema,
    relationships: catalogRelationshipsSchema,
    releaseDate: catalogReleaseDateSchema,
    repositoryUrl: catalogItemRepositoryUrlSchema,
    resources: catalogResourcesSchema,
    supportedBy: catalogSupportedBySchema,
    supportedByImageUrl: catalogSupportedByImageUrlSchema,
    tags: catalogTagsSchema,
    tenantId: catalogTenantIdSchema,
    type: {
      description: 'The type of this item\'s version. Deprecated in favour of `.itemTypeDefinitionRef`. Must be set if `.itemTypeDefinitionRef` is not set, otherwise it will be ignored. Read-only.',
      type: 'string',
      deprecated: true,
    },
    version: catalogSemverVersionSchema,
    visibility: catalogVisibilitySchema,
  },
  additionalProperties: false,
  required: ['name', 'itemId', 'tenantId', 'resources', 'lifecycleStatus'],
} as const satisfies JSONSchema

type _CatalogItemManifest = FromSchema<typeof _catalogItemManifestSchema>

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

const example: CatalogItemManifest = {
  annotations: { 'mia-platform.eu/version': '14.0.0' },
  categoryId: 'e-commerce',
  description: 'A standardized service to handle orders from an e-commerce website.',
  documentation: { type: CatalogItemDocumentationType.EXTERNAL_LINK, url: 'https://docs.mia-platform.eu/' },
  imageUrl: 'https://mia-platform.eu/wp-content/uploads/mia.svg',
  itemId: 'order-service',
  itemTypeDefinitionRef: { name: 'plugin', namespace: 'mia-platform' },
  labels: { environment: 'prod' },
  lifecycleStatus: catalogItemLifecycleStatusEnum.PUBLISHED,
  links: [{ displayName: 'E-Commerce', url: 'https://example.com/' }],
  maintainers: [{ name: 'E-Commerce Team', email: 'e-commerce@mail.eu' }],
  name: 'Order Service',
  relationships: [{ type: 'depends-on', target: 'MongoDB v8' }],
  releaseDate: '2025-09-17T10:30:45Z',
  repositoryUrl: 'https://github.com/mia-platform-marketplace/public-catalog',
  resources: {
    services: {
      'order-service': {
        type: 'plugin',
        name: 'order-service',
        dockerImage: 'order-service:1.0.0',
        'defaultEnvironmentVariables': [{ 'name': 'LOG_LEVEL', 'value': 'info', 'valueType': 'plain' }],
      },
    },
  },
  supportedBy: 'My Company',
  supportedByImageUrl: 'https://mia-platform.eu/wp-content/uploads/mia.svg',
  tags: ['e-commerce'],
  tenantId: 'my-company',
  version: {
    name: '1.0.0',
    releaseNote: '# About this version\n\nThe first release of the service 🎉\n',
  },
  visibility: { public: false, allTenants: false },
}

export const catalogItemManifestSchema = { ..._catalogItemManifestSchema, examples: [example] }
