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

import { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../commons/json-schema'
import { domainStringSchema } from '../commons'
import { catalogItemTypeDefinitionSchema } from '../item-type-definition'

export const CATALOG_ITEM_NA_VERSION = 'NA'

export enum CatalogItemDocumentationType {
  EXTERNAL_LINK = 'externalLink',
  MARKDOWN = 'markdown'
}

export const catalogItemLifecycleStatusEnum = Object.freeze({
  COMING_SOON: 'coming-soon',
  DRAFT: 'draft',
  PUBLISHED: 'published',
  MAINTENANCE: 'maintenance',
  DEPRECATED: 'deprecated',
  ARCHIVED: 'archived',
})
export type CatalogItemLifecycleStatus =
  typeof catalogItemLifecycleStatusEnum[keyof typeof catalogItemLifecycleStatusEnum]


export const catalogItemDescriptionSchema = {
  description: 'Brief description of the item',
  type: 'string',
} as const satisfies JSONSchema

export const catalogDocumentationSchema = {
  description: 'Documentation of the item',
  properties: {
    type: { enum: Object.values(CatalogItemDocumentationType), type: 'string' },
    url: { type: 'string' },
  },
  required: ['type', 'url'],
  type: 'object',
} as const satisfies JSONSchema

export const catalogImageUrlSchema = {
  description: 'Url of the image associated with the item',
  type: 'string',
} as const satisfies JSONSchema

export const catalogIsLatestSchema = {
  description: 'Flag stating if the the current document is the latest version of the item',
  type: 'boolean',
} as const satisfies JSONSchema

export const catalogItemIdSchema = {
  ...domainStringSchema,
  description: 'RFC-1035 compliant identifier of the item. It forms a composite PK with tenantId and, if present, version.name',
} as const satisfies JSONSchema

export const catalogItemNameSchema = {
  description: 'Human-readable name of the item',
  minLength: 1,
  type: 'string',
} as const satisfies JSONSchema

export const catalogProviderIdSchema = {
  description: 'Identifier of the provider used to retrieve markdown documentation content and external resources, if supported by the item type',
  type: 'string',
} as const satisfies JSONSchema

export const catalogPublishOnMiaDocumentationSchema = {
  description: 'Flag stating if the resource documentation should be published on Mia-Platform public documentation',
  type: 'boolean',
} as const satisfies JSONSchema

export const catalogReleaseDateSchema = {
  description: 'Creation date of this item\'s release',
  format: 'date-time',
  type: 'string',
} as const satisfies JSONSchema

export const catalogLifecycleStatusSchema = {
  description: 'Lifecycle status of the item',
  enum: Object.values(catalogItemLifecycleStatusEnum),
  type: 'string',
} as const satisfies JSONSchema

export const catalogItemRepositoryUrlSchema = {
  description: 'URL of the repository containing the source code of the resource created by the item',
  type: 'string',
} as const satisfies JSONSchema

export const catalogResourcesSchema = {
  additionalProperties: true,
  description: 'Representation of the resource that will be created starting from this item. It could be validated through the matching CRD',
  type: 'object',
} as const satisfies JSONSchema

export const catalogSupportedBySchema = {
  description: 'Identifier of the company that has produced the item',
  type: 'string',
} as const satisfies JSONSchema

export const catalogSupportedByImageUrlSchema = {
  description: 'Url of the image associated with the company that has produced the item',
  type: 'string',
} as const satisfies JSONSchema

export const catalogTenantIdSchema = {
  description: 'Identifier of the tenant to which the item belongs. It forms a composite PK with itemId and, if present, version.name',
  type: 'string',
} as const satisfies JSONSchema

/** @deprecated */
export const catalogTypeSchema = {
  description: 'Type of the item. Deprecated in favour of `itemTypeDefinitionRef` (it always matches `itemTypeDefinitionRef.name`)',
  type: 'string',
  deprecated: true,
} as const satisfies JSONSchema

export const catalogItemTypeDefinitionRefSchema = {
  description: 'Reference to an Item Type Definition in the form of its composite primary key',
  type: 'object',
  properties: {
    name: {
      ...catalogItemTypeDefinitionSchema.properties.metadata.properties.name,
      description: 'Name of the Item Type Definition (references `itd.metadata.name`)',
    },
    namespace: {
      ...catalogItemTypeDefinitionSchema.properties.metadata.properties.namespace.properties.id,
      description: 'ID of the Item Type Definition namespace (references `itd.metadata.namespace.id`)',
    },
  },
  required: ['name', 'namespace'],
  additionalProperties: false,
} as const satisfies JSONSchema

export type CatalogItemTypeDefinitionRef<T extends string = string> = &
  FromSchema<typeof catalogItemTypeDefinitionRefSchema> &
  { name: T }

export const catalogSemverVersionSchema = {
  description: 'Version of the item following semver',
  properties: {
    name: {
      description: 'Semantic version',
      pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
      type: 'string',
    },
    releaseNote: {
      description: 'Markdown release note',
      type: 'string',
    },
    security: {
      description: 'Flag stating if the version addresses any vulnerability',
      type: 'boolean',
    },
  },
  required: ['name', 'releaseNote'],
  type: 'object',
} as const satisfies JSONSchema

export const catalogVersionSchema = {
  description: 'Version of the item',
  properties: {
    name: {
      oneOf: [
        {
          description: 'Semantic version',
          pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
          type: 'string',
        },
        {
          const: CATALOG_ITEM_NA_VERSION,
          description: 'Fallback version',
        },
      ],
    },
    releaseNote: {
      description: 'Markdown release note',
      type: 'string',
    },
    security: {
      description: 'Flag stating if the version addresses any vulnerability',
      type: 'boolean',
    },
  },
  required: ['name', 'releaseNote'],
  type: 'object',
} as const satisfies JSONSchema

export const catalogVisibilitySchema = {
  description: 'Visibility of the item',
  properties: {
    allTenants: {
      default: false,
      description: 'If true, the item will be accessible to all companies',
      type: 'boolean',
    },
    public: {
      default: false,
      description: 'If true, the item will be accessible from any user that access the Console, even if not authenticated',
      type: 'boolean',
    },
  },
  type: 'object',
} as const satisfies JSONSchema
