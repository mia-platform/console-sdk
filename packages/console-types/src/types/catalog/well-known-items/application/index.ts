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
import { catalogExampleSchema } from '../example'
import { catalogPluginSchema } from '../plugin'
import { catalogTemplateSchema } from '../template'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'
import { catalogListenerSchema } from '../commons'
import { catalogCollectionSchema } from './collection'
import { catalogEndpointSchema } from './endpoint'
import { catalogUnsecretedVariableSchema } from './unsecreted-variable'

const type = 'application'

const resourcesSchema = {
  $id: 'catalog-application-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    collections: { additionalProperties: catalogCollectionSchema, type: 'object' },
    endpoints: { additionalProperties: catalogEndpointSchema, type: 'object' },
    listeners: {
      additionalProperties: catalogListenerSchema,
      type: 'object',
    },
    services: {
      additionalProperties: {
        oneOf: [catalogPluginSchema, catalogExampleSchema, catalogTemplateSchema],
      },
      minProperties: 1,
      type: 'object',
    },
    unsecretedVariables: { additionalProperties: catalogUnsecretedVariableSchema, type: 'object' },
  },
  required: ['services'],
  title: 'Catalog application resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogApplicationResources = FromSchema<typeof resourcesSchema>
export type CatalogApplicationItem = CatalogItem<typeof type, CatalogApplicationResources>
export type CatalogApplicationVersionedItem = CatalogVersionedItem<typeof type, CatalogApplicationResources>
export type CatalogApplicationManifest = CatalogItemManifest<typeof type, CatalogApplicationResources>

export default { type, resourcesSchema }
