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

import { DIGIT_OR_INTERPOLATION_PATTERN } from '../constants/services'
import { port } from './services'

const numericListenerPort = { ...port } as const
const interpolatedListenerPort = {
  type: 'string',
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
} as const
export type ListenerPortNumericValue = FromSchema<typeof numericListenerPort>
export type ListenerPortInterpolatedValue = FromSchema<typeof interpolatedListenerPort>

export const listenerPortProperties = {
  name: {
    type: 'string',
  },
  port: {
    if: { type: 'number' },
    then: numericListenerPort,
    else: interpolatedListenerPort,
  },
} as const

const listener = {
  type: 'object',
  properties: {
    name: listenerPortProperties.name,
    port: listenerPortProperties.port,
    description: {
      type: 'string',
    },
    selectedByDefault: {
      type: 'boolean',
    },
    readonly: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
  required: ['name', 'port'],
} as const

export const listeners = {
  type: 'object',
  additionalProperties: listener,
} as const

export type PortNumericValue = FromSchema<typeof numericListenerPort>
export type PortInterpolatedValue = FromSchema<typeof interpolatedListenerPort>

export type Listener = FromSchema<typeof listener, { parseIfThenElseKeywords: true }>
export type Listeners = Record<string, Listener>
