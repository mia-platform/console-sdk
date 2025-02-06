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

import type { JSONSchema } from '../../../../commons/json-schema'

const collectionNameSchema = {
  maxLength: 80,
  pattern: '(^[\\w-]+$)',
  type: 'string',
} as const satisfies JSONSchema

const fieldsSchema = {
  items: {
    oneOf: [
      {
        additionalProperties: false,
        properties: {
          description: { type: 'string' },
          encryptionEnabled: { type: 'boolean' },
          encryptionSearchable: { type: 'boolean' },
          name: { pattern: '^[^$\\.]+$', type: 'string' },
          nullable: { type: 'boolean' },
          required: { type: 'boolean' },
          schema: {
            additionalProperties: false,
            properties: {
              additionalProperties: { type: 'boolean' },
              encryption: {
                properties: {
                  enabled: { type: 'boolean' },
                  searchable: { type: 'boolean' },
                },
                type: 'object',
              },
              properties: { additionalProperties: true, type: 'object' },
              required: { items: { type: 'string' }, type: 'array' },
              type: { const: 'object' },
            },
            type: 'object',
          },
          sensitivityDescription: { type: 'string' },
          sensitivityValue: { maximum: 4, minimum: 0, type: 'number' },
          type: { enum: ['RawObject', 'Array_RawObject'], type: 'string' },
        },
        required: ['name', 'type', 'required', 'nullable'],
        type: 'object',
      },
      {
        additionalProperties: false,
        properties: {
          description: { type: 'string' },
          encryptionEnabled: { type: 'boolean' },
          encryptionSearchable: { type: 'boolean' },
          name: { pattern: '^[^$\\.]+$', type: 'string' },
          nullable: { type: 'boolean' },
          required: { type: 'boolean' },
          sensitivityDescription: { type: 'string' },
          sensitivityValue: { maximum: 4, minimum: 0, type: 'number' },
          type: {
            enum: ['ObjectId', 'string', 'Date', 'boolean', 'GeoPoint', 'object', 'number', 'Array', 'Array_string', 'Array_number'],
            type: 'string',
          },
        },
        required: ['name', 'type', 'required', 'nullable'],
        type: 'object',
      },
    ],
  },
  type: 'array',
} as const satisfies JSONSchema

export const collectionSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        defaultName: collectionNameSchema,
        fields: fieldsSchema,
        internalEndpoints: {
          items: {
            additionalProperties: false,
            properties: {
              basePath: { type: 'string' },
            },
            required: ['basePath'],
            type: 'object',
          },
          maxItems: 1,
          minItems: 1,
          type: 'array',
        },
        type: { const: 'collection' },
      },
      required: ['type', 'defaultName', 'internalEndpoints'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        defaultName: collectionNameSchema,
        fields: fieldsSchema,
        internalEndpoints: {
          items: {
            additionalProperties: false,
            properties: {
              basePath: { type: 'string' },
            },
            required: ['basePath'],
            type: 'object',
          },
          maxItems: 1,
          minItems: 1,
          type: 'array',
        },
        type: { const: 'view' },
      },
      required: ['type', 'defaultName', 'internalEndpoints', 'startingCollection'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema
