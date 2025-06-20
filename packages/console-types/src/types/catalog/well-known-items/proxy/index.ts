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
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemNoVersionManifest, CatalogVersionedItem } from '../../item'
import { defaultHeadersSchema, nameSchema, descriptionSchema } from '../commons'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
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
        url: { type: 'string' },
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
    },
  },
  {
    services: {
      'cross-project-proxy': {
        name: 'cross-project-proxy',
        type: 'cross-projects',
        host: 'project-a-host:80',
      },
    },
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
    displayName: 'Proxy',
    description: 'Centralizes external API access and cross-namespace microservice communication, simplifying configuration.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjY0NjEyIDIuMzEyOTVDOS44NDEzOCAyLjExNzY5IDEwLjE1OCAyLjExNzY5IDEwLjM1MzIgMi4zMTI5NUwxMi4zNTMyIDQuMzEyOTVDMTIuNTQ4NSA0LjUwODIxIDEyLjU0ODUgNC44MjQ4IDEyLjM1MzIgNS4wMjAwNkwxMC4zNTMyIDcuMDIwMDZDMTAuMTU4IDcuMjE1MzIgOS44NDEzOCA3LjIxNTMyIDkuNjQ2MTIgNy4wMjAwNkM5LjQ1MDg2IDYuODI0OCA5LjQ1MDg2IDYuNTA4MjEgOS42NDYxMiA2LjMxMjk1TDEwLjc5MjYgNS4xNjY1SDUuMzMzMDFDNC41MDQ1OCA1LjE2NjUgMy44MzMwMSA1LjgzODA4IDMuODMzMDEgNi42NjY1VjcuMzMzMTdDMy44MzMwMSA3LjYwOTMxIDMuNjA5MTUgNy44MzMxNyAzLjMzMzAxIDcuODMzMTdDMy4wNTY4NyA3LjgzMzE3IDIuODMzMDEgNy42MDkzMSAyLjgzMzAxIDcuMzMzMTdWNi42NjY1QzIuODMzMDEgNS4yODU3OSAzLjk1MjMgNC4xNjY1IDUuMzMzMDEgNC4xNjY1SDEwLjc5MjZMOS42NDYxMiAzLjAyMDA2QzkuNDUwODYgMi44MjQ4IDkuNDUwODYgMi41MDgyMSA5LjY0NjEyIDIuMzEyOTVaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNjg2ODkgMTMuNjg2N0M1LjQ5MTYyIDEzLjg4MTkgNS4xNzUwNCAxMy44ODE5IDQuOTc5NzggMTMuNjg2N0wyLjk3OTc4IDExLjY4NjdDMi44ODYwMSAxMS41OTI5IDIuODMzMzMgMTEuNDY1NyAyLjgzMzMzIDExLjMzMzFDMi44MzMzMyAxMS4yMDA1IDIuODg2MDEgMTEuMDczMyAyLjk3OTc4IDEwLjk3OTZMNC45Nzk3OCA4Ljk3OTU4QzUuMTc1MDQgOC43ODQzMiA1LjQ5MTYyIDguNzg0MzIgNS42ODY4OSA4Ljk3OTU4QzUuODgyMTUgOS4xNzQ4NCA1Ljg4MjE1IDkuNDkxNDIgNS42ODY4OSA5LjY4NjY4TDQuNTQwNDQgMTAuODMzMUgxMEMxMC44Mjg0IDEwLjgzMzEgMTEuNSAxMC4xNjE2IDExLjUgOS4zMzMxM1Y4LjY2NjQ2QzExLjUgOC4zOTAzMiAxMS43MjM5IDguMTY2NDYgMTIgOC4xNjY0NkMxMi4yNzYxIDguMTY2NDYgMTIuNSA4LjM5MDMyIDEyLjUgOC42NjY0NlY5LjMzMzEzQzEyLjUgMTAuNzEzOCAxMS4zODA3IDExLjgzMzEgMTAgMTEuODMzMUg0LjU0MDQ0TDUuNjg2ODkgMTIuOTc5NkM1Ljg4MjE1IDEzLjE3NDggNS44ODIxNSAxMy40OTE0IDUuNjg2ODkgMTMuNjg2N1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPjwvc3ZnPgo=',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/proxy',
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
  __v: wkiDefinitionVersion,
}

export type Service = FromSchema<typeof catalogProxyServiceSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
