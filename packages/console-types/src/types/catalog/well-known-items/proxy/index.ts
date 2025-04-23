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
import type { ICatalogCrd } from '../../crd'
import type { CatalogItem, CatalogItemNoVersionManifest, CatalogVersionedItem } from '../../item'
import { defaultHeadersSchema, nameSchema, descriptionSchema } from '../commons'
import type { CatalogWellKnownItemData } from '..'

const type = 'proxy'

export const catalogProxyServiceSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        defaultHeaders: defaultHeadersSchema,
        description: descriptionSchema,
        name: nameSchema,
        type: { const: 'external' },
        url: { format: 'uri', type: 'string' },
      },
      required: ['name', 'type', 'url'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        description: descriptionSchema,
        host,
        name: nameSchema,
        type: { const: 'cross-projects' },
      },
      required: ['name', 'type', 'host'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

const _resourcesSchema = {
  $id: 'catalog-proxy-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      maxProperties: 1,
      minProperties: 1,
      patternProperties: { [nameSchema.pattern]: catalogProxyServiceSchema },
      additionalProperties: false,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog proxy resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    services: {
      'external-proxy': {
        name: 'external-proxy',
        type: 'external',
        url: 'https://example.com',
      },
    }
  },
  {
    services: {
      'cross-project-proxy': {
        name: 'cross-project-proxy',
        type: 'cross-projects',
        host: 'project-a-host:80',
      },
    }
  }
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const crd: ICatalogCrd.Item = {
  name: 'proxy',
  itemId: 'proxy-definition',
  description: 'Proxy Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          services: {
            '<change-with-your-proxy-name>': {
              name: '<change-with-your-proxy-name>',
              type: 'external',
              url: 'https://example.com',
            },
          },
        },
      },
    },
  },
}

export type Service = FromSchema<typeof catalogProxyServiceSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
