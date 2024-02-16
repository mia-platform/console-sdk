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

export const variableKey = {
  type: 'string',
  pattern: '^([A-Z])([A-Z0-9_]*)$',
  [VALIDATION_ERROR_ID]: 'variableKey.patternError',
}

export const unsecretedVariable = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    environments: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          value: { type: 'string' },
        },
        required: ['value'],
        additionalProperties: false,
      },
    },
    readOnly: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'environments'],
} as const

export type PublicVariable = FromSchema<typeof unsecretedVariable>

export const unsecretedVariables = {
  type: 'array',
  default: [],
  items: unsecretedVariable,
} as const
