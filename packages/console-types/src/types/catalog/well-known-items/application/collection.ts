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

import { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../../commons/json-schema'
import { collectionFieldName, collectionName, index, indexFieldName, collection } from '../../../collections'
import { descriptionSchema, tagsSchema } from '../commons'

const idSchema = { type: 'string' } as const satisfies JSONSchema

const collectionNameSchema = {
  maxLength: collectionName.maxLength,
  pattern: collectionName.pattern,
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
          name: { pattern: collectionFieldName.pattern, type: 'string' },
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
          name: { pattern: collectionFieldName.pattern, type: 'string' },
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

const internalEndpointsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      basePath: { type: 'string' },
      defaultState: {
        type: 'string',
        enum: ['DRAFT', 'PUBLIC'],
      },
    },
    required: ['basePath'],
    type: 'object',
  },
  maxItems: 1,
  minItems: 1,
  type: 'array',
} as const satisfies JSONSchema

const normalIndexSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', pattern: index.name.pattern },
    type: { const: 'normal' },
    unique: { type: 'boolean' },
    description: { type: 'string' },
    usePartialFilter: { type: 'boolean' },
    partialFilterExpression: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', pattern: indexFieldName.pattern },
          order: { type: 'number', enum: [1, -1] },
        },
        required: ['name', 'order'],
      },
    },
  },
  required: ['name', 'type', 'unique', 'fields'],
} as const satisfies JSONSchema

const geoIndexSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', pattern: index.name.pattern },
    type: { const: 'geo' },
    unique: { type: 'boolean' },
    description: { type: 'string' },
    usePartialFilter: { type: 'boolean' },
    partialFilterExpression: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', pattern: indexFieldName.pattern },
          order: { type: 'number', enum: [1, -1] },
        },
        required: ['name', 'order'],
      },
    },
  },
  required: ['name', 'type', 'unique', 'fields'],
} as const satisfies JSONSchema

const hashIndexSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', pattern: index.name.pattern },
    type: { const: 'hash' },
    unique: { const: false },
    description: { type: 'string' },
    usePartialFilter: { type: 'boolean' },
    partialFilterExpression: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', pattern: indexFieldName.pattern },
          order: { type: 'number', enum: [1, -1] },
        },
        required: ['name', 'order'],
      },
    },
  },
  required: ['name', 'type', 'unique', 'fields'],
} as const satisfies JSONSchema

const ttlIndexSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', pattern: index.name.pattern },
    type: { const: 'ttl' },
    unique: { type: 'boolean' },
    description: { type: 'string' },
    usePartialFilter: { type: 'boolean' },
    partialFilterExpression: { type: 'string' },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', pattern: indexFieldName.pattern },
          order: { type: 'number', enum: [1, -1] },
        },
        required: ['name', 'order'],
      },
    },
    expireAfterSeconds: { type: 'number', minimum: 1 },
  },
  required: ['name', 'type', 'unique', 'fields', 'expireAfterSeconds'],
} as const satisfies JSONSchema

const indexesSchema = {
  type: 'array',
  items: { oneOf: [normalIndexSchema, geoIndexSchema, hashIndexSchema, ttlIndexSchema] },
} as const satisfies JSONSchema

export const catalogCollectionSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        defaultName: collectionNameSchema,
        description: descriptionSchema,
        fields: fieldsSchema,
        id: idSchema,
        indexes: indexesSchema,
        internalEndpoints: internalEndpointsSchema,
        tags: tagsSchema,
        type: { const: 'collection' },
      },
      required: ['type', 'defaultName', 'internalEndpoints'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        defaultName: collectionNameSchema,
        defaultPipeline: { ...collection.pipeline, deprecated: true },
        defaultSource: { ...collectionNameSchema, deprecated: true },
        description: descriptionSchema,
        fields: fieldsSchema,
        id: idSchema,
        indexes: indexesSchema,
        internalEndpoints: internalEndpointsSchema,
        tags: tagsSchema,
        type: { const: 'view' },
      },
      required: ['type', 'defaultName', 'internalEndpoints'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

export type Collection = FromSchema<typeof catalogCollectionSchema>
