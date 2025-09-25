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

export const catalogLabelsSchema = {
  description: 'A map of string keys and values that can be used to organize and categorize (scope and select) objects.',
  type: 'object',
  patternProperties: {
    '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
      type: 'string',
      pattern: '^$|^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$',
      maxLength: 63,
    },
  },
  additionalProperties: false,
  examples: [
    {
      environment: 'dev',
      'mia-platform.eu/tenant': 'my-company',
      track: '',
    },
  ],
} as const satisfies JSONSchema

export const catalogAnnotationsSchema = {
  description: 'An unstructured key value map that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying this object.',
  type: 'object',
  patternProperties: {
    '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
      type: 'string',
      maxLength: 262144,
    },
  },
  additionalProperties: false,
  examples: [
    {
      imageregistry: 'https://hub.docker.com/',
      'mia-platform.eu/version': '14.0.0',
    },
  ],
} as const satisfies JSONSchema

export const catalogTagsSchema = {
  description: 'A list of single-valued strings.',
  type: 'array',
  items: {
    type: 'string',
    pattern: '^[a-z0-9:+#]+(-[a-z0-9:+#]+)*$',
    minLength: 1,
    maxLength: 63,
  },
  examples: [['ai', 'production']],
} as const satisfies JSONSchema

export const catalogLinksSchema = {
  description: 'A list of external hyperlinks.',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      url: {
        description: 'The URL in standard URI format.',
        type: 'string',
        pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&\\/=]*)$',
      },
      displayName: {
        description: 'A user-friendly title for the link.',
        type: 'string',
      },
    },
    additionalProperties: false,
    required: ['url'],
    examples: [
      { url: 'https://mia-platform.eu/', displayName: 'Mia-Platform' },
      { url: 'https://example.com' },
    ],
  },
} as const satisfies JSONSchema

export const catalogMaintainersSchema = {
  description: 'A list of organizational entities maintaining this object.',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: {
        description: 'The display name of the maintainer.',
        type: 'string',
        minLength: 1,
      },
      email: {
        description: 'A contact email of the maintainer.',
        type: 'string',
        format: 'email',
        minLength: 1,
      },
    },
    additionalProperties: false,
    required: ['name'],
    examples: [
      { name: 'John Doe', email: 'john.doe@mail.com' },
      { name: 'Mia-Platform core team' },
    ],
  },
} as const satisfies JSONSchema
