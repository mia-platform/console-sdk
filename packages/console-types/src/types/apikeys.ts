/**
 * Copyright 2024 Mia srl
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

import { FromSchema } from 'json-schema-to-ts'

import { VALIDATION_ERROR_ID } from '../strings'
import { description } from './shared'

export const apiKeyString = {
  type: 'string',
  minLength: 1,
  pattern: '^[^\\s]+$',
  [VALIDATION_ERROR_ID]: 'apiKey.patternError',
} as const

export const clientType = {
  type: 'string',
  pattern: '^[a-zA-Z_][A-Za-z0-9_]*$',
  [VALIDATION_ERROR_ID]: 'clientType.patternError',
} as const

export const apiKey = {
  type: 'object',
  properties: {
    secret: apiKeyString,
    active: { type: 'boolean' },
    description,
    clientType,
  },
  required: ['secret', 'active', 'clientType'],
  additionalProperties: false,
} as const
export type APIKey = FromSchema<typeof apiKey>

// @Deprecated
export const secret = apiKey

export const apiKeys = {
  type: 'array',
  items: apiKey,
  default: [],
} as const

// @Deprecated
export const secrets = apiKeys
