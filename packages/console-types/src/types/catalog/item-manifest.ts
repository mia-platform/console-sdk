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

import type { JSONSchema, FromSchema } from 'json-schema-to-ts'

import {
  catalogComingSoonSchema,
  catalogDescriptionSchema,
  catalogDocumentationSchema,
  catalogImageUrlSchema,
  catalogIsVersioningSupportedSchema,
  catalogItemIdSchema,
  catalogNameSchema,
  catalogProviderIdSchema,
  catalogPublishOnMiaDocumentationSchema,
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

export const catalogItemManifestSchema = {
  $id: 'catalog-item-manifest.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: 'Data model of a Catalog item to apply',
  properties: {
    categoryId: { description: 'Identifier of the item\'s category', type: 'string' },
    comingSoon: catalogComingSoonSchema,
    description: catalogDescriptionSchema,
    documentation: catalogDocumentationSchema,
    imageUrl: catalogImageUrlSchema,
    isVersioningSupported: catalogIsVersioningSupportedSchema,
    itemId: catalogItemIdSchema,
    name: catalogNameSchema,
    providerId: catalogProviderIdSchema,
    publishOnMiaDocumentation: catalogPublishOnMiaDocumentationSchema,
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
  required: ['name', 'itemId', 'tenantId', 'type', 'resources'],
  title: 'Catalog item manifest',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogItemManifest = FromSchema<typeof catalogItemManifestSchema>
