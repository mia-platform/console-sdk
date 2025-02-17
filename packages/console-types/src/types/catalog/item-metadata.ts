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

import type { JSONSchema } from '../../commons/json-schema'
import { catalogComponentIdSchema, catalogDockerImageSchema } from './well-known-items/commons'
import { catalogItemIdSchema, catalogItemNameSchema, catalogTenantIdSchema, catalogVersionSchema } from './commons'

export const catalogItemMetadataSchema = {
  $id: 'catalog-item-metadata.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: 'Data model of a Catalog item metadata',
  properties: {
    itemId: catalogItemIdSchema,
    tenantId: catalogTenantIdSchema,
    type: { type: 'string', enum: ['template', 'plugin', 'example', 'proxy', 'sidecar'] },
    versions: {
      items: {
        additionalProperties: false,
        properties: {
          componentId: catalogComponentIdSchema,
          dockerImage: catalogDockerImageSchema,
          id: { type: 'string' },
          name: catalogItemNameSchema,
          url: { type: 'string' },
          version: catalogVersionSchema.properties.name,
        },
        required: ['id', 'version'],
        type: 'object',
      },
      type: 'array',
    },
  },
  required: ['itemId', 'tenantId', 'type', 'versions'],
  title: 'Catalog item metadata',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogItemMetadata = FromSchema<typeof catalogItemMetadataSchema>
