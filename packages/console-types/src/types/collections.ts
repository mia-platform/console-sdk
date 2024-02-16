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

import { CollectionTypes, FIELD_TYPES, FieldTypes, INDEX_TYPES, IndexTypes, STATES } from '../constants/collections'
import { VALIDATION_ERROR_ID } from '../strings'
import { buildType, description } from './shared'

export const ownersSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['owner'],
    additionalProperties: true,
    properties: {
      owner: { type: 'string' },
    },
  },
} as const

export type CollectionOwner = FromSchema<typeof ownersSchema>

export const collectionName = {
  type: 'string',
  maxLength: 80,
  pattern: '(^[\\w-]+$)',
  [VALIDATION_ERROR_ID]: 'collectionName.patternError',
} as const

export const collectionFieldName = {
  type: 'string',
  pattern: '^[^$\\.]+$',
} as const

export const indexFieldName = {
  type: 'string',
  pattern: '^_?[ \\w-]+(\\.[\\w-]+|(\\.\\$\\*\\*))*$|^(\\$\\*\\*)$',
} as const

export const indexField = {
  type: 'object',
  properties: {
    name: indexFieldName,
    order: {
      type: 'number',
      enum: [1, -1],
    },
  },
  required: ['name', 'order'],
} as const

export const index = {
  name: {
    type: 'string',
    pattern: '^[a-zA-Z_][\\w-]*$',
  },
  type: {
    type: 'string',
    enum: INDEX_TYPES,
  },
  unique: { type: 'boolean' },
  description,
  usePartialFilter: {
    type: 'boolean',
  },
  partialFilterExpression: {
    type: 'string',
  },
  fields: {
    type: 'array',
    items: indexField,
  },
  ttlFields: {
    type: 'array',
    minItems: 1,
    maxItems: 1,
    items: indexField,
  },
  field: indexFieldName,
  expireAfterSeconds: {
    type: 'number',
    minimum: 1,
  },
} as const

export const normalIndex = {
  type: 'object',
  properties: {
    name: index.name,
    type: {
      type: 'string',
      const: IndexTypes.NORMAL,
    },
    unique: index.unique,
    description: index.description,
    usePartialFilter: index.usePartialFilter,
    partialFilterExpression: index.partialFilterExpression,
    fields: index.fields,
  },
  required: ['name', 'type', 'unique', 'fields'],
} as const
type NormalIndex = FromSchema<typeof normalIndex>

export const geoIndex = {
  type: 'object',
  properties: {
    name: index.name,
    type: {
      type: 'string',
      const: IndexTypes.GEO,
    },
    unique: index.unique,
    description: index.description,
    usePartialFilter: index.usePartialFilter,
    partialFilterExpression: index.partialFilterExpression,
    field: index.field,
  },
  required: ['name', 'type', 'unique', 'field'],
} as const
type GeoIndex = FromSchema<typeof geoIndex>

export const hashIndex = {
  type: 'object',
  properties: {
    name: index.name,
    type: {
      type: 'string',
      const: IndexTypes.HASH,
    },
    description: index.description,
    field: index.field,
    usePartialFilter: index.usePartialFilter,
    partialFilterExpression: index.partialFilterExpression,
    unique: { type: 'boolean', const: false },
  },
  required: ['name', 'type', 'field', 'unique'],
} as const

type HashIndex = FromSchema<typeof hashIndex>

const ttlIndex = {
  type: 'object',
  properties: {
    name: index.name,
    type: {
      type: 'string',
      const: IndexTypes.TTL,
    },
    description: index.description,
    fields: index.ttlFields,
    expireAfterSeconds: index.expireAfterSeconds,
    usePartialFilter: index.usePartialFilter,
    partialFilterExpression: index.partialFilterExpression,
    unique: { type: 'boolean' },
  },
  required: ['name', 'type', 'fields', 'unique', 'expireAfterSeconds'],
} as const

type TTLIndex = FromSchema<typeof ttlIndex>

export const baseField = {
  type: 'object',
  properties: {
    name: collectionFieldName,
    description,
    type: {
      type: 'string',
      enum: FIELD_TYPES.map((type) => type.value),
    },
    required: { type: 'boolean' },
    nullable: { type: 'boolean' },
    sensitivityDescription: { type: 'string' },
    sensitivityValue: { type: 'number', minimum: 0, maximum: 4 },
    encryptionEnabled: { type: 'boolean' },
    encryptionSearchable: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'type', 'required', 'nullable'],
} as const

const field = {
  type: 'object',
  if: {
    type: 'object',
    properties: {
      type: { enum: [FieldTypes.RAWOBJECT, FieldTypes.ARRAY_OF_RAWOBJECT] },
    },
  },
  then: {
    type: 'object',
    properties: {
      ...baseField.properties,
      schema: {
        type: 'object',
        properties: {
          properties: { type: 'object', additionalProperties: true },
          required: { type: 'array', items: { type: 'string' } },
          additionalProperties: { type: 'boolean' },
          type: { type: 'string', enum: ['object'] },
          encryption: {
            type: 'object',
            properties: {
              enabled: { type: 'boolean' },
              searchable: { type: 'boolean' },
            },
          },
        },
        additionalProperties: false,
      },
    },
    additionalProperties: baseField.additionalProperties,
    required: baseField.required,
  },
  else: {
    type: 'object',
    properties: baseField.properties,
    additionalProperties: baseField.additionalProperties,
    required: baseField.required,
  },
} as const

export const indexes = {
  type: 'array',
  items: {
    type: 'object',
    if: buildType(normalIndex.properties.type),
    then: normalIndex,
    else: {
      if: buildType(geoIndex.properties.type),
      then: geoIndex,
      else: {
        if: buildType(hashIndex.properties.type),
        then: hashIndex,
        else: {
          if: buildType(ttlIndex.properties.type),
          then: ttlIndex,
          else: false,
        },
      },
    },
  },
} as const

export type CollectionIndex = NormalIndex | GeoIndex | HashIndex | TTLIndex

const statesValue: string[] = STATES.map((state) => state.value)
export const internalEndpoints = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      basePath: { type: 'string' },
      defaultState: {
        type: 'string',
        enum: statesValue,
        default: statesValue[0],
      },
      defaultSortingIndex: {
        type: 'string',
      },
    },
    required: ['defaultState', 'basePath'],
    additionalProperties: false,
  },
} as const

export const collection = {
  name: collectionName,
  id: collectionName,
  description,
  type: { enum: [CollectionTypes.COLLECTION, CollectionTypes.MONGODB_VIEW] },
  tags: { type: 'array', items: { type: 'string' } },
  hidden: { type: 'boolean' },
  index,
  indexes,
  normalIndex,
  geoIndex,
  hashIndex,
  ttlIndex,
  indexField,
  field,
  internalEndpoints,
  source: collectionName,
  pipeline: { anyOf: [
    { type: 'array', items: { type: 'object', additionalProperties: true } },
    { type: 'string' },
  ] },
  enableLookup: { type: 'boolean' },
} as const

const viewSchema = {
  type: 'object',
  properties: {
    id: collection.id,
    description: collection.description,
    name: collection.name,
    tags: collection.tags,
    hidden: collection.hidden,
    fields: {
      type: 'array',
      items: collection.field,
    },
    internalEndpoints: collection.internalEndpoints,
    owners: ownersSchema,
    type: { type: 'string', const: 'view' },
    source: collection.source,
    pipeline: collection.pipeline,
    enableLookup: collection.enableLookup,
  },
  additionalProperties: false,
  required: ['id', 'name', 'fields', 'internalEndpoints', 'type', 'pipeline', 'source'],
} as const

export type ViewCollection = FromSchema<typeof viewSchema, {
  parseIfThenElseKeywords: true
}>

const collectionSchema = {
  type: 'object',
  properties: {
    id: collection.id,
    description: collection.description,
    name: collection.name,
    tags: collection.tags,
    hidden: collection.hidden,
    fields: {
      type: 'array',
      items: collection.field,
    },
    internalEndpoints: collection.internalEndpoints,
    owners: ownersSchema,
    type: { type: 'string', const: 'collection' },
    indexes,
  },
  additionalProperties: false,
  required: ['id', 'name', 'fields', 'internalEndpoints', 'type', 'indexes'],
} as const

// This type is required since Collection cannot parse if/then/else since it is too deep
type EnhancedCollectionFields = {
  fields: FromSchema<typeof collection.field, {
    parseIfThenElseKeywords: true
  }>[]
  indexes: CollectionIndex[]
}

export type Collection = Omit<FromSchema<typeof collectionSchema>, 'fields'> & EnhancedCollectionFields

export const collections = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    if: buildType(viewSchema.properties.type),
    then: viewSchema,
    else: collectionSchema,
  },
  default: {},
} as const

export type Collections = Record<string, Collection | ViewCollection>
