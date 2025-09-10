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

import { JSONSchema } from '../../../commons/json-schema'

export const CATALOG_WELL_KNOWN_RELATIONSHIP_TYPES: string[] = [
  'uses', 'used-by',
  'depends-on', 'dependency-of',
  'consumes', 'consumed-by',
  'exposes', 'exposed-by',
  'produces', 'produced-by',
  'contains', 'contained-in',
  'outputs', 'outputted-by',
  'triggers', 'triggered-by',
  'deploys', 'deployed-by',
  'owner-of', 'owned-by',
]

export const catalogRelationshipSchema = {
  description: 'List of relations from the current Catalog entity to any other entity (either it part of the Catalog or not)',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      target: {
        description: 'The receiving end of the relation. It can be a URN-reference to another Catalog entity or an arbitrary string',
        type: 'string',
      },
      type: {
        description: 'The type of the relation. It can be one of the Catalog well-known relations or an arbitrary string',
        type: 'string',
      },
    },
    additionalProperties: false,
    required: ['target', 'type'],
  },
} as const satisfies JSONSchema
