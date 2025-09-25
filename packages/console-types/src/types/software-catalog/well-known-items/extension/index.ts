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
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import type { CatalogWellKnownItemData } from '..'

const type = 'extension'

const _resourcesSchema = {
  $id: 'software-catalog-extension-resources.schema.json',
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
  description: `The resources of Software Catalog items of type ${type}.`,
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
  title: 'Software Catalog extension resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema, { parseIfThenElseKeywords: true }>

const resourcesExamples: Resources[] = [
  {
    name: 'E-Commerce configurator',
    extensionType: 'iframe',
    contexts: ['company'],
    entry: 'https://e-commerce-configurator.com',
  },
  {
    name: 'E-Commerce dashboard',
    extensionType: 'external-link',
    contexts: ['company'],
    entry: 'https://e-commerce-dashboard.com',
  },
  {
    name: 'E-Commerce CMS',
    extensionType: 'composer-page',
    contexts: ['project'],
    configuration: '{"tag":"p","content":"Hello!"}',
  },
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const typeDefinition: CatalogItemTypeDefinition = {
  apiVersion: 'software-catalog.mia-platform.eu/v1',
  kind: 'item-type-definition',
  metadata: {
    namespace: wkiDefinitionNamespace,
    name: type,
    visibility: wkiDefinitionVisibility,
    displayName: 'Extension',
    description: 'Expands the Console with custom sections.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI3IDVINUM0LjQ2OTU3IDUgMy45NjA4NiA1LjIxMDcxIDMuNTg1NzkgNS41ODU3OUMzLjIxMDcxIDUuOTYwODYgMyA2LjQ2OTU3IDMgN1YyNUMzIDI1LjUzMDQgMy4yMTA3MSAyNi4wMzkxIDMuNTg1NzkgMjYuNDE0MkMzLjk2MDg2IDI2Ljc4OTMgNC40Njk1NyAyNyA1IDI3SDI3QzI3LjUzMDQgMjcgMjguMDM5MSAyNi43ODkzIDI4LjQxNDIgMjYuNDE0MkMyOC43ODkzIDI2LjAzOTEgMjkgMjUuNTMwNCAyOSAyNVY3QzI5IDYuNDY5NTcgMjguNzg5MyA1Ljk2MDg2IDI4LjQxNDIgNS41ODU3OUMyOC4wMzkxIDUuMjEwNzEgMjcuNTMwNCA1IDI3IDVaTTUgMTlIN0M3LjI2NTIyIDE5IDcuNTE5NTcgMTguODk0NiA3LjcwNzExIDE4LjcwNzFDNy44OTQ2NCAxOC41MTk2IDggMTguMjY1MiA4IDE4QzggMTcuNzM0OCA3Ljg5NDY0IDE3LjQ4MDQgNy43MDcxMSAxNy4yOTI5QzcuNTE5NTcgMTcuMTA1NCA3LjI2NTIyIDE3IDcgMTdINVYxNUg3QzcuMjY1MjIgMTUgNy41MTk1NyAxNC44OTQ2IDcuNzA3MTEgMTQuNzA3MUM3Ljg5NDY0IDE0LjUxOTYgOCAxNC4yNjUyIDggMTRDOCAxMy43MzQ4IDcuODk0NjQgMTMuNDgwNCA3LjcwNzExIDEzLjI5MjlDNy41MTk1NyAxMy4xMDU0IDcuMjY1MjIgMTMgNyAxM0g1VjExSDdDNy4yNjUyMiAxMSA3LjUxOTU3IDEwLjg5NDYgNy43MDcxMSAxMC43MDcxQzcuODk0NjQgMTAuNTE5NiA4IDEwLjI2NTIgOCAxMEM4IDkuNzM0NzggNy44OTQ2NCA5LjQ4MDQzIDcuNzA3MTEgOS4yOTI4OUM3LjUxOTU3IDkuMTA1MzYgNy4yNjUyMiA5IDcgOUg1VjdIMTBWMjVINVYxOVpNMjcgMjVIMTJWN0gyN1YyNVoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPjwvc3ZnPgo=',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/extension',
    },
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: false,
    validation: {
      mechanism: 'json-schema',
      schema: {
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
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
