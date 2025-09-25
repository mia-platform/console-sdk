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
  description: 'A brief description of this item.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogDocumentationSchema = {
  description: 'A reference to the documentation regarding this item.',
  type: 'object',
  properties: {
    type: {
      description: 'The type of documentation.',
      type: 'string',
      enum: Object.values(CatalogItemDocumentationType),
    },
    url: {
      description: 'The URL where to reach for the documentation.',
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['type', 'url'],
  examples: [
    { type: 'externalLink', url: 'https://example.com' },
    { type: 'markdown', url: 'https://raw.githubusercontent.com/mia-platform-marketplace/Go-Hello-World-Microservice-Example/refs/heads/1.20/README.md' },
  ],
} as const satisfies JSONSchema

export const catalogImageUrlSchema = {
  description: 'The URL of the image associated with this item.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogIsLatestSchema = {
  description: 'A flag stating if the this item is the latest release of the item.',
  type: 'boolean',
} as const satisfies JSONSchema

export const catalogItemIdSchema = {
  description: 'A string that, alongside with `.version.name`, uniquely identifies this item within its namespace (`.tenantId`). Read-only.',
  type: 'string',
  pattern: '^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$',
  minLength: 1,
  maxLength: 63,
  examples: ['crud-service', 'node-js-template'],
} as const satisfies JSONSchema

export const catalogItemNameSchema = {
  description: 'The human-readable title of this item.',
  type: 'string',
  minLength: 1,
  examples: ['CRUD Service', 'Node.js template'],
} as const satisfies JSONSchema

export const catalogProviderIdSchema = {
  description: 'The identifier of the provider used to retrieve markdown documentation content and external resources, if supported by the item\'s type.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogReleaseDateSchema = {
  description: 'The time when this item was published.',
  type: 'string',
  format: 'date-time',
  examples: ['2025-09-17T10:30:45Z', '2024-01-01T12:30:10.199+00:00'],
} as const satisfies JSONSchema

export const catalogLifecycleStatusSchema = {
  description: 'The lifecycle status of this item.',
  type: 'string',
  enum: Object.values(catalogItemLifecycleStatusEnum),
} as const satisfies JSONSchema

export const catalogItemRepositoryUrlSchema = {
  description: 'The URL of the repository containing the source code of the resource(s) created by this item.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogResourcesSchema = {
  description: 'The representation of the resource(s) that will be created starting from this item. It should be validated through the matching Item Type Definition.',
  type: 'object',
  additionalProperties: true,
} as const satisfies JSONSchema

export const catalogSupportedBySchema = {
  description: 'The identifier of the company that has produced this item.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogSupportedByImageUrlSchema = {
  description: 'The URL of the image associated with the company that has produced this item.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogTenantIdSchema = {
  description: 'The identifier of the tenant to which this item belongs. Within this tenant, the combination of the `.name` and the `.version.name` of this item must be unique. Read-only.',
  type: 'string',
} as const satisfies JSONSchema

export const catalogItemTypeDefinitionRefSchema = {
  description: 'The reference to an Item Type Definition in the form of its composite primary key. Read-only.',
  type: 'object',
  properties: {
    name: {
      ...catalogItemTypeDefinitionSchema.properties.metadata.properties.name,
      description: 'The name of the Item Type Definition (references its `.metadata.name`).',
    },
    namespace: {
      ...catalogItemTypeDefinitionSchema.properties.metadata.properties.namespace.properties.id,
      description: 'The identifier of the Item Type Definition namespace (references its `.metadata.namespace.id`).',
    },
  },
  required: ['name', 'namespace'],
  additionalProperties: false,
  examples: [{ name: 'plugin', namespace: 'mia-platform' }],
} as const satisfies JSONSchema

export type CatalogItemTypeDefinitionRef<T extends string = string> = &
  FromSchema<typeof catalogItemTypeDefinitionRefSchema> &
  { name: T }

export const catalogSemverVersionSchema = {
  description: 'The Semantic version of this item.',
  type: 'object',
  properties: {
    name: {
      description: 'The name of this version. It should follow Semantic Versioning. Read-only.',
      pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
      type: 'string',
    },
    releaseNote: {
      description: 'The release note of this version. It should support Markdown.',
      type: 'string',
    },
    security: {
      description: 'A flag stating if this version addresses any vulnerability.',
      type: 'boolean',
    },
  },
  additionalProperties: true,
  required: ['name', 'releaseNote'],
  examples: [
    { name: '1.0.0', releaseNote: '# What\'s new\n\nHere comes some new **amazing** features!\n' },
  ],
} as const satisfies JSONSchema

export const catalogVersionSchema = {
  description: 'The version of this item.',
  type: 'object',
  properties: {
    name: {
      description: `The name of this version. It should follow Semantic Versioning. A fallback version \`${CATALOG_ITEM_NA_VERSION}\` is also accepted for items of types that do not support versioning, or for retro-compatibility reasons. Read-only.`,
      oneOf: [
        {
          pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
          type: 'string',
        },
        { const: CATALOG_ITEM_NA_VERSION },
      ],
    },
    releaseNote: {
      description: 'The release note of this version. It should support Markdown.',
      type: 'string',
    },
    security: {
      description: 'A flag stating if this version addresses any vulnerability.',
      type: 'boolean',
    },
  },
  additionalProperties: false,
  required: ['name', 'releaseNote'],
  examples: [
    { name: '1.0.0', releaseNote: '# What\'s new\n\nHere comes some new **amazing** features!\n' },
    { name: CATALOG_ITEM_NA_VERSION, releaseNote: '-' },
  ],
} as const satisfies JSONSchema

export const catalogVisibilitySchema = {
  description: 'The visibility of this item. It can be public (i.e., visible to any user calling the APIs, even if not authenticated with the Console), "all tenants" (i.e., visible to all tenants of the Console installation), or private (i.e., only visible to the item\'s tenant).',
  type: 'object',
  properties: {
    allTenants: {
      description: 'A flag stating whether this item\'s release should be visible to all tenants of the Console installation.',
      type: 'boolean',
      default: false,
    },
    public: {
      description: 'A flag stating whether this item\'s release should be visible to any user calling the APIs, even if not authenticated with the Console.',
      type: 'boolean',
      default: false,
    },
  },
  additionalProperties: false,
  examples: [{ allTenants: false, public: true }],
} as const satisfies JSONSchema


export const CATALOG_WELL_KNOWN_RELATIONSHIP_TYPES: string[] = [
  'uses', 'used-by',
  'depends-on', 'dependency-of',
  'consumes', 'consumed-by',
  'exposes', 'exposed-by',
  'produces', 'produced-by',
  'contains', 'contained-in',
  'outputs', 'outputted-by',
  'triggers', 'triggered-by',
  'deploys', 'deployed-by',
  'owner-of', 'owned-by',
]

export const catalogRelationshipsSchema = {
  description: 'A list of relationships from this item to any other entity (either part of the Software Catalog or not).',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      target: {
        description: 'The receiving end of the relationships. It can be a URN-reference to another Software Catalog entity or an arbitrary string.',
        type: 'string',
      },
      type: {
        description: 'The type of the relationships. It can be one of the Software Catalog well-known relationships or an arbitrary string.',
        type: 'string',
      },
    },
    additionalProperties: false,
    required: ['target', 'type'],
  },
  examples: [[
    { type: 'uses', target: 'urn:mia-platform:mktp:crud-service?=version=7.2.3' },
    { type: 'stores-data-on', target: 'In-memory DB' },
  ]],
} as const satisfies JSONSchema
