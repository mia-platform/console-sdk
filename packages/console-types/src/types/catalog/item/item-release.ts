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
  catalogComingSoonSchema,
  catalogItemDescriptionSchema,
  catalogIsLatestSchema,
  catalogItemNameSchema,
  catalogReleaseDateSchema,
  catalogReleaseStageSchema,
  catalogVersionSchema,
  catalogVisibilitySchema,
  catalogTypeSchema,
} from './commons'

export const catalogItemReleaseSchema = {
  $id: 'catalog-release.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Catalog release',
  description: 'Data model of a Catalog item release',
  type: 'object',
  properties: {
    comingSoon: catalogComingSoonSchema,
    description: catalogItemDescriptionSchema,
    isLatest: catalogIsLatestSchema,
    name: catalogItemNameSchema,
    reference: { description: 'Mongo objectId of the item', type: 'string' },
    releaseDate: catalogReleaseDateSchema,
    releaseNote: catalogVersionSchema.properties.releaseNote,
    releaseStage: catalogReleaseStageSchema,
    security: catalogVersionSchema.properties.security,
    version: catalogVersionSchema.properties.name,
    visibility: catalogVisibilitySchema,
    type: catalogTypeSchema,
  },
  additionalProperties: false,
  required: ['name', 'description', 'version', 'reference', 'releaseNote', 'releaseDate'],
} as const satisfies JSONSchema

export type CatalogItemRelease = FromSchema<typeof catalogItemReleaseSchema>
