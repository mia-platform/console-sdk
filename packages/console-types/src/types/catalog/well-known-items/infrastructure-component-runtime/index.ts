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

const type = 'infrastructure-component-runtime'

const resourcesSchema = {
  $id: 'catalog-infrastructure-compomnent-runtime-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
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
  title: 'Catalog infrastructure component runtime resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: ICatalogCrd.Item = {
  name: 'infrastructure-component-runtime',
  itemId: 'infrastructure-component-runtime',
  description: 'Infrastructure Component Runtime definition to be used in the Mia-Platform Console Infrastructure Projects.',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
      },
    },
    controlledFields: [],
  },
}

export type Resources = FromSchema<typeof resourcesSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
