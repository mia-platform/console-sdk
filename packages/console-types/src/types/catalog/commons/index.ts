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

export * from './relations'

/** @link https://datatracker.ietf.org/doc/html/rfc1035 */
export const domainStringSchema = {
  description: 'RFC-1035-compliant domain name',
  type: 'string',
  pattern: '^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$',
  minLength: 1,
  maxLength: 63,
} as const satisfies JSONSchema

export const catalogLabelsSchema = {
  description: 'Set of identifying key/value pairs akin to Kubernetes object labels',
  type: 'object',
  patternProperties: {
    '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
      type: 'string',
      pattern: '^$|^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$',
      maxLength: 63,
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchema

export const catalogAnnotationsSchema = {
  description: 'Set of non-identifying key/value pairs akin to Kubernetes object annotations',
  type: 'object',
  patternProperties: {
    '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
      type: 'string',
      pattern: '^$|^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$',
      maxLength: 63,
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchema

export const catalogTagsSchema = {
  description: 'List of single-valued strings',
  type: 'array',
  items: {
    type: 'string',
    pattern: '^[a-z0-9:+#]+(-[a-z0-9:+#]+)*$',
    minLength: 1,
    maxLength: 63,
  },
} as const satisfies JSONSchema

export const catalogLinksSchema = {
  description: 'List of external hyperlinks',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      url: {
        description: 'URL in standard uri format',
        type: 'string',
      },
      displayName: {
        description: 'User friendly display name for the link',
        type: 'string',
      },
    },
    additionalProperties: false,
    required: ['url'],
  },
} as const satisfies JSONSchema

export const catalogMaintainersSchema = {
  description: 'List of organizational entities maintaining the resource',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: {
        description: 'Display name of the entity',
        type: 'string',
        minLength: 1,
      },
      email: {
        description: 'Contact email of the entity',
        type: 'string',
        format: 'email',
        minLength: 1,
      },
    },
    additionalProperties: false,
    required: ['name'],
  },
} as const satisfies JSONSchema
