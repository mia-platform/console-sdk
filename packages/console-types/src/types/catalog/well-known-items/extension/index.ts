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
import type { ICatalogCrd } from '../../crd'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import type { CatalogWellKnownItemData } from '..'

const type = 'extension'

const _resourcesSchema = {
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

export type Resources = FromSchema<typeof _resourcesSchema, { parseIfThenElseKeywords: true }>

const resourcesExamples: Resources[] = [
  {
    name: 'E-Commerce configurator',
    extensionType: 'iframe',
    contexts: ['company'],
    entry: 'https://e-commerce-configurator.com'
  },
  {
    name: 'E-Commerce dashboard',
    extensionType: 'external-link',
    contexts: ['company'],
    entry: 'https://e-commerce-dashboard.com'
  },
  {
    name: 'E-Commerce CMS',
    extensionType: 'composer-page',
    contexts: ['project'],
    configuration: '{"tag":"p","content":"Hello!"}'
  }
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const crd: ICatalogCrd.Item = {
  name: 'extension',
  itemId: 'extension-definition',
  description: 'Extension Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          name: '<change-with-your-extension-name>',
          extensionType: 'iframe',
          entry: 'https://example.com',
          contexts: [],
        },
      },
    },
  },
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
