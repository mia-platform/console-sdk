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

import type { JSONSchema } from '../../../../commons/json-schema'
import { host } from '../../../services'
import { catalogDefaultHeadersSchema, catalogNameSchema, catalogDescriptionSchema } from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'

const type = 'proxy'

export const catalogProxySchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        defaultHeaders: catalogDefaultHeadersSchema,
        description: catalogDescriptionSchema,
        name: catalogNameSchema,
        type: { const: 'external' },
        url: { format: 'uri', type: 'string' },
      },
      required: ['name', 'type', 'url'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        description: catalogDescriptionSchema,
        host,
        name: catalogNameSchema,
        type: { const: 'cross-projects' },
      },
      required: ['name', 'type', 'host'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

export type CatalogProxy = FromSchema<typeof catalogProxySchema>

const resourcesSchema = {
  $id: 'catalog-proxy-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      additionalProperties: catalogProxySchema,
      maxProperties: 1,
      minProperties: 1,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog proxy resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogProxyResources = FromSchema<typeof resourcesSchema>
export type CatalogProxyItem = CatalogItem<typeof type, CatalogProxyResources>
export type CatalogProxyVersionedItem = CatalogVersionedItem<typeof type, CatalogProxyResources>
export type CatalogProxyManifest = CatalogItemManifest<typeof type, CatalogProxyResources>

export default { type, resourcesSchema }
