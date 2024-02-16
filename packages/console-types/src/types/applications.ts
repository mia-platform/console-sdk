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

import { collectionName } from './collections'
import { endpoint } from './endpoints'
import { serviceName } from './services'

const applicationName = {
  type: 'string',
  minLength: 1,
  pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
}

export const application = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    generatedFrom: { type: 'string' },
    resources: {
      type: 'object',
      properties: {
        services: {
          type: 'object',
          patternProperties: {
            [serviceName.pattern]: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
        endpoints: {
          type: 'object',
          patternProperties: {
            [endpoint.basePath.pattern]: {
              type: 'object',
              properties: {
                basePath: { type: 'string' },
                service: { type: 'string' },
              },
              required: ['basePath', 'service'],
              additionalProperties: true,
            },

          },
        },
        collections: {
          type: 'object',
          patternProperties: {
            [collectionName.pattern]: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
        unsecretedVariables: {
          type: 'object',
          patternProperties: {
            '.*': {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
      },
    },
  },
} as const

export const applications = {
  type: 'object',
  patternProperties: {
    [applicationName.pattern]: application,
  },
  additionalProperties: false,
  default: {},
} as const
