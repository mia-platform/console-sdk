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

import type { JSONSchema } from '../../../commons/json-schema'
import {
  catalogItemDescriptionSchema,
  catalogIsLatestSchema,
  catalogItemNameSchema,
  catalogReleaseDateSchema,
  catalogVersionSchema,
  catalogVisibilitySchema,
  catalogLifecycleStatusSchema,
} from './commons'

const _catalogItemReleaseSchema = {
  $id: 'catalog-release.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Software Catalog item release',
  description: 'A single release of a Software Catalog item.',
  type: 'object',
  properties: {
    description: catalogItemDescriptionSchema,
    isLatest: catalogIsLatestSchema,
    lifecycleStatus: catalogLifecycleStatusSchema,
    name: catalogItemNameSchema,
    reference: {
      description: 'The reference to the item in the form of the MongoDB `_id` of the corresponding document.',
      type: 'string',
      examples: ['63775c07a09ac0996ebfb7bc'],
    },
    releaseDate: catalogReleaseDateSchema,
    releaseNote: catalogVersionSchema.properties.releaseNote,
    security: catalogVersionSchema.properties.security,
    version: catalogVersionSchema.properties.name,
    visibility: catalogVisibilitySchema,
  },
  additionalProperties: false,
  required: ['name', 'description', 'version', 'reference', 'releaseNote', 'releaseDate', 'lifecycleStatus'],
} as const satisfies JSONSchema

export type CatalogItemRelease = FromSchema<typeof _catalogItemReleaseSchema>

const example: CatalogItemRelease = {
  name: 'Order Service',
  description: 'A standardized service to handle orders from an e-commerce website.',
  version: '1.0.0',
  lifecycleStatus: 'published',
  isLatest: true,
  reference: '63775c07a09ac0996ebfb7bc',
  releaseDate: '2025-09-17T10:30:45Z',
  releaseNote: '# About this version\n\nThe first release of the service 🎉\n',
  security: false,
  visibility: { public: false, allTenants: false },
}

export const catalogItemReleaseSchema = { ..._catalogItemReleaseSchema, examples: [example] }
