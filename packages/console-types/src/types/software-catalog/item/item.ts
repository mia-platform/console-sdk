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
import { catalogLabelsSchema, catalogAnnotationsSchema, catalogTagsSchema, catalogLinksSchema, catalogMaintainersSchema } from '../commons'
import {
  catalogItemDescriptionSchema,
  catalogDocumentationSchema,
  catalogImageUrlSchema,
  catalogIsLatestSchema,
  catalogItemIdSchema,
  catalogItemNameSchema,
  catalogProviderIdSchema,
  catalogReleaseDateSchema,
  catalogItemRepositoryUrlSchema,
  catalogResourcesSchema,
  catalogSupportedByImageUrlSchema,
  catalogSupportedBySchema,
  catalogTenantIdSchema,
  catalogSemverVersionSchema,
  catalogVisibilitySchema,
  catalogLifecycleStatusSchema,
  catalogItemTypeDefinitionRefSchema,
  CatalogItemTypeDefinitionRef,
  catalogRelationshipsSchema,
  CatalogItemDocumentationType,
  catalogItemLifecycleStatusEnum,
} from './commons'

const _catalogItemSchema = {
  $id: 'software-catalog-item.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Software Catalog item',
  description: 'A single version of a Software Catalog item.',
  type: 'object',
  properties: {
    _id: {
      description: 'The MongoDB `_id` of this item\'s version\'s document.',
      type: 'string',
      examples: ['63775c07a09ac0996ebfb7bc'],
    },
    annotations: catalogAnnotationsSchema,
    category: {
      description: 'The information regarding this item\'s version\'s category.',
      type: 'object',
      properties: {
        id: {
          description: 'The unique identifier of the category.',
          type: 'string',
        },
        label: {
          description: 'The human-readable label of the category. Read-only.',
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['id', 'label'],
      examples: [{ id: 'ai-agents', label: 'AI Agents' }],
    },
    componentsIds: {
      description: 'A list aggregating any `sourceComponentId` declared in the `.resources.services` of this item\'s version. Read-only.',
      items: { type: 'string' },
      type: 'array',
      examples: [['api-gateway', 'crud-service']],
    },
    description: catalogItemDescriptionSchema,
    documentation: catalogDocumentationSchema,
    imageUrl: catalogImageUrlSchema,
    isLatest: catalogIsLatestSchema,
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
      description: 'The type of this item\'s version. Deprecated in favour of `.itemTypeDefinitionRef`. It must always match the `.itemTypeDefinitionRef.name` of this item. Read-only.',
      type: 'string',
      deprecated: true,
    },
    version: catalogSemverVersionSchema,
    visibility: catalogVisibilitySchema,
  },
  additionalProperties: false,
  required: ['_id', 'name', 'itemId', 'tenantId', 'type', 'itemTypeDefinitionRef', 'releaseDate', 'lifecycleStatus'],
} as const satisfies JSONSchema

export type CatalogItem<
  Type extends string = string,
  Resources extends Record<string, unknown> = Record<string, unknown>
> = FromSchema<typeof _catalogItemSchema> & {
  resources?: Resources,
  type: Type,
  itemTypeDefinitionRef: CatalogItemTypeDefinitionRef<Type>
}

const example: CatalogItem = {
  _id: '63775c07a09ac0996ebfb7bc',
  annotations: { 'mia-platform.eu/version': '14.0.0' },
  category: { id: 'e-commerce', label: 'E-Commerce' },
  description: 'A standardized service to handle orders from an e-commerce website.',
  documentation: { type: CatalogItemDocumentationType.EXTERNAL_LINK, url: 'https://docs.mia-platform.eu/' },
  imageUrl: 'https://mia-platform.eu/wp-content/uploads/mia.svg',
  isLatest: true,
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
  type: 'plugin',
  version: {
    name: '1.0.0',
    releaseNote: '# About this version\n\nThe first release of the service 🎉\n',
  },
  visibility: { public: false, allTenants: false },
}

export const catalogItemSchema = { ..._catalogItemSchema, examples: [example] }
