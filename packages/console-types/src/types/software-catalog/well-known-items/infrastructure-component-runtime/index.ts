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

const type = 'infrastructure-component-runtime'

const _resourcesSchema = {
  $id: 'software-catalog-infrastructure-compomnent-runtime-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `The resources of Software Catalog items of type ${type}.`,
  properties: {
    projectId: {
      type: 'string',
      description: 'project object id',
    },
    name: {
      type: 'string',
      description: 'name of the resource',
    },
    tags: {
      type: 'array',
      description: 'list of tags useful for organize data',
      items: { type: 'string' },
    },
    runtimeData: {
      type: 'object',
      additionalProperties: true,
    },
  },
  title: 'Software Catalog infrastructure component runtime resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    name: 'orders-gcp-bucket',
    projectId: '67e573d5ea16c05de9363dd2',
    runtimeData: {
      address: 'google_storage_bucket.orders-gcp-bucket',
      mode: 'managed',
      name: 'orders-gcp-bucket',
      provider_name: 'registry.terraform.io/hashicorp/google',
      schema_version: 3,
      type: 'google_storage_bucket',
    },
    tags: ['gcp'],
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
    displayName: 'Infrastructure Component Runtime',
    description: 'Infrastructure Component Runtime definition to be used in the Mia-Platform Console Infrastructure Projects to store runtime data from a Cloud Provider.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRjb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMjAuMjcsMTU4LjU0YTgsOCwwLDAsMC03LjctLjQ2LDIwLDIwLDAsMSwxLDAtMzYuMTZBOCw4LDAsMCwwLDIyNCwxMTQuNjlWNzJhMTYsMTYsMCwwLDAtMTYtMTZIMTcxLjc4YTM1LjM2LDM1LjM2LDAsMCwwLC4yMi00LDM2LjExLDM2LjExLDAsMCwwLTExLjM2LTI2LjI0LDM2LDM2LDAsMCwwLTYwLjU1LDIzLjYyLDM2LjU2LDM2LjU2LDAsMCwwLC4xNCw2LjYySDY0QTE2LDE2LDAsMCwwLDQ4LDcydjMyLjIyYTM1LjM2LDM1LjM2LDAsMCwwLTQtLjIyLDM2LjEyLDM2LjEyLDAsMCwwLTI2LjI0LDExLjM2LDM1LjcsMzUuNywwLDAsMC05LjY5LDI3LDM2LjA4LDM2LjA4LDAsMCwwLDMzLjMxLDMzLjYsMzUuNjgsMzUuNjgsMCwwLDAsNi42Mi0uMTRWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNjUuMzFBOCw4LDAsMCwwLDIyMC4yNywxNTguNTRaTTIwOCwyMDhINjRWMTY1LjMxYTgsOCwwLDAsMC0xMS40My03LjIzLDIwLDIwLDAsMSwxLDAtMzYuMTZBOCw4LDAsMCwwLDY0LDExNC42OVY3Mmg0Ni42OWE4LDgsMCwwLDAsNy4yMy0xMS40MywyMCwyMCwwLDEsMSwzNi4xNiwwQTgsOCwwLDAsMCwxNjEuMzEsNzJIMjA4djMyLjIzYTM1LjY4LDM1LjY4LDAsMCwwLTYuNjItLjE0QTM2LDM2LDAsMCwwLDIwNCwxNzZhMzUuMzYsMzUuMzYsMCwwLDAsNC0uMjJaIj48L3BhdGg+PC9zdmc+',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/infrastructure-component-runtime',
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
      schema: { ...resourcesSchema },
    },
  },
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
