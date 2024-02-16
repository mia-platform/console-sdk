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

import { description } from './shared'
import { port } from './services'

export const decoratorPath = {
  type: 'string',
  pattern: '^(\\/$|(\\/([a-z]|(:[a-z])|\\$[0-9])[a-zA-Z0-9-_]*)+)$',
} as const

export const preDecorator = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    protocol: { type: 'string', enum: ['http:'] },
    service: { type: 'string' },
    port,
    path: decoratorPath,
    description,
    requireRequestBody: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'protocol', 'service', 'port', 'path', 'requireRequestBody'],
} as const

export const postDecorator = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    protocol: { type: 'string', enum: ['http:'] },
    service: { type: 'string' },
    port,
    path: decoratorPath,
    description,
    requireRequestBody: { type: 'boolean' },
    requireResponseBody: { type: 'boolean' },
    isCatchDecorator: { type: 'boolean', default: false },
  },
  additionalProperties: false,
  required: ['name', 'protocol', 'service', 'port', 'path', 'requireRequestBody', 'requireResponseBody'],
} as const

export const preDecorators = {
  type: 'object',
  default: {},
  additionalProperties: preDecorator,
} as const

export const postDecorators = {
  type: 'object',
  default: {},
  additionalProperties: postDecorator,
} as const

export const decorators = {
  type: 'object',
  default: {},
  properties: {
    preDecorators,
    postDecorators,
  },
} as const
