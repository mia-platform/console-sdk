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
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'

const type = 'extension'

const resourcesSchema = {
  $id: 'catalog-extension-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  allOf: [
    {
      if: {
        properties: {
          extensionType: {
            enum: ['iframe', 'external-link'],
            type: 'string',
          },
        },
      },
      then: {
        properties: {
          entry: { type: 'string' },
          routes: {
            items: {
              properties: {
                destinationPath: { type: 'string' },
                icon: {
                  properties: {
                    name: { type: 'string' },
                  },
                  type: 'object',
                },
                id: { type: 'string' },
                labelIntl: {
                  properties: {
                    en: { type: 'string' },
                    it: { type: 'string' },
                  },
                  type: 'object',
                },
                locationId: { type: 'string' },
                matchExactMountPath: { type: 'boolean' },
                order: { type: 'number' },
                parentId: { type: 'string' },
                renderType: {
                  enum: ['category'],
                  type: 'string',
                },
              },
              required: [
                'id',
                'locationId',
                'labelIntl',
                'destinationPath',
              ],
              type: 'object',
            },
            type: 'array',
          },
        },
        required: ['entry'],
      },
    },
    {
      if: {
        properties: {
          extensionType: { const: 'composer-page' },
        },
      },
      then: {
        properties: {
          configuration: { type: 'string' },
        },
        required: ['configuration'],
      },
    },
  ],
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    contexts: {
      items: {
        enum: ['console', 'project', 'company'],
        type: 'string',
      },
      type: 'array',
    },
    extensionType: {
      enum: ['iframe', 'external-link', 'composer-page'],
      type: 'string',
    },
    name: { type: 'string' },
    permissions: {
      items: { type: 'string' },
      type: 'array',
    },
    roleIds: {
      items: { type: 'string' },
      type: 'array',
    },
  },
  required: ['name', 'extensionType', 'contexts'],
  title: 'Catalog extension resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogExtensionResources = FromSchema<typeof resourcesSchema, { parseIfThenElseKeywords: true }>
export type CatalogExtensionItem = CatalogItem<typeof type, CatalogExtensionResources>
export type CatalogExtensionVersionedItem = CatalogVersionedItem<typeof type, CatalogExtensionResources>
export type CatalogExtensionManifest = CatalogItemManifest<typeof type, CatalogExtensionResources>

export default { type, resourcesSchema }
