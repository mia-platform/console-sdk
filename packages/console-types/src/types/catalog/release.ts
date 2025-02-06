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
import {
  catalogComingSoonSchema,
  catalogDescriptionSchema,
  catalogIsLatestSchema,
  catalogNameSchema,
  catalogReleaseDateSchema,
  catalogReleaseStageSchema,
  catalogVersionSchema,
  catalogVisibilitySchema,
} from './commons'

export const catalogReleaseSchema = {
  $id: 'catalog-release.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: 'Data model of a Catalog item release',
  properties: {
    comingSoon: catalogComingSoonSchema,
    description: catalogDescriptionSchema,
    isLatest: catalogIsLatestSchema,
    name: catalogNameSchema,
    reference: { description: 'Mongo objectId of the item', type: 'string' },
    releaseDate: catalogReleaseDateSchema,
    releaseNote: catalogVersionSchema.properties.releaseNote,
    releaseStage: catalogReleaseStageSchema,
    security: catalogVersionSchema.properties.security,
    version: catalogVersionSchema.properties.name,
    visibility: catalogVisibilitySchema,
  },
  required: ['name', 'description', 'version', 'reference', 'releaseNote', 'releaseDate'],
  title: 'Catalog release',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogRelease = FromSchema<typeof catalogReleaseSchema>
