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

import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

import {
  catalogComingSoonSchema,
  catalogDescriptionSchema,
  catalogDocumentationSchema,
  catalogImageUrlSchema,
  catalogIsLatestSchema,
  catalogIsVersioningSupportedSchema,
  catalogItemIdSchema,
  catalogNameSchema,
  catalogProviderIdSchema,
  catalogPublishOnMiaDocumentationSchema,
  catalogReleaseDateSchema,
  catalogReleaseStageSchema,
  catalogRepositoryUrlSchema,
  catalogResourcesSchema,
  catalogSupportedByImageUrlSchema,
  catalogSupportedBySchema,
  catalogTenantIdSchema,
  catalogTypeSchema,
  catalogSemverVersionSchema,
  catalogVisibilitySchema,
} from './commons'

export const catalogItemSchema = {
  $id: 'catalog-item.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Data model of a Catalog item',
  properties: {
    _id: {
      description: 'Database identifier of the item',
      type: 'string',
    },
    category: {
      additionalProperties: false,
      description: 'Identifier of the item\'s category',
      properties: {
        id: { type: 'string' },
        label: { type: 'string' },
      },
      required: ['id', 'label'],
      type: 'object',
    },
    comingSoon: catalogComingSoonSchema,
    componentsIds: {
      description: 'List of source component ids of the services in the item\'s resources',
      items: { type: 'string' },
      type: 'array',
    },
    description: catalogDescriptionSchema,
    documentation: catalogDocumentationSchema,
    imageUrl: catalogImageUrlSchema,
    isLatest: catalogIsLatestSchema,
    isVersioningSupported: catalogIsVersioningSupportedSchema,
    itemId: catalogItemIdSchema,
    name: catalogNameSchema,
    providerId: catalogProviderIdSchema,
    publishOnMiaDocumentation: catalogPublishOnMiaDocumentationSchema,
    releaseDate: catalogReleaseDateSchema,
    releaseStage: catalogReleaseStageSchema,
    repositoryUrl: catalogRepositoryUrlSchema,
    resources: catalogResourcesSchema,
    supportedBy: catalogSupportedBySchema,
    supportedByImageUrl: catalogSupportedByImageUrlSchema,
    tenantId: catalogTenantIdSchema,
    type: catalogTypeSchema,
    version: catalogSemverVersionSchema,
    visibility: catalogVisibilitySchema,
  },
  required: ['_id', 'name', 'itemId', 'tenantId', 'type'],
  title: 'Catalog item',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogItem = FromSchema<typeof catalogItemSchema>
