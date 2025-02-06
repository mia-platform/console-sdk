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
import { catalogVersionSchema } from './commons'
import { catalogItemSchema } from './item'

export const catalogVersionedItemSchema = {
  $id: 'catalog-versioned-item.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Data model of a Catalog item with required version',
  properties: {
    ...catalogItemSchema.properties,
    version: catalogVersionSchema,
  },
  required: ['_id', 'name', 'itemId', 'tenantId', 'type', 'version'],
  title: 'Catalog versioned item',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogVersionedItem = FromSchema<typeof catalogVersionedItemSchema>
