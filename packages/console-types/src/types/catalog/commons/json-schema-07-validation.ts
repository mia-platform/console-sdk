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

import { JSONSchema7 } from 'json-schema'

import { JSONSchema } from '../../../commons/json-schema'

export const jsonSchema7ValidationDefinitions: Record<string, JSONSchema> = {
  schemaArray: {
    type: 'array',
    minItems: 1,
    items: { $ref: '#' },
  },
  nonNegativeInteger: {
    type: 'integer',
    minimum: 0,
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      { $ref: '#/definitions/nonNegativeInteger' },
      { default: 0 },
    ],
  },
  simpleTypes: {
    'enum': ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'],
  },
  stringArray: {
    type: 'array',
    items: { type: 'string' },
    uniqueItems: true,
    default: [],
  },
}

export const jsonSchema7Validation: JSONSchema7 = {
  'type': 'object',
  'properties': {
    'title': { 'type': 'string' },
    'description': { 'type': 'string' },
    'examples': { 'type': 'array', 'items': true },
    'multipleOf': { 'type': 'number', 'exclusiveMinimum': 0 },
    'maximum': { 'type': 'number' },
    'exclusiveMaximum': { 'type': 'number' },
    'minimum': { 'type': 'number' },
    'exclusiveMinimum': { 'type': 'number' },
    'maxLength': { '$ref': '#/definitions/nonNegativeInteger' },
    'minLength': { '$ref': '#/definitions/nonNegativeIntegerDefault0' },
    'pattern': { 'type': 'string', 'format': 'regex' },
    'additionalItems': { '$ref': '#' },
    'items': {
      'anyOf': [
        { '$ref': '#' },
        { '$ref': '#/definitions/schemaArray' },
      ],
      'default': true,
    },
    'maxItems': { '$ref': '#/definitions/nonNegativeInteger' },
    'minItems': { '$ref': '#/definitions/nonNegativeIntegerDefault0' },
    'uniqueItems': { 'type': 'boolean', 'default': false },
    'contains': { '$ref': '#' },
    'maxProperties': { '$ref': '#/definitions/nonNegativeInteger' },
    'minProperties': { '$ref': '#/definitions/nonNegativeIntegerDefault0' },
    'required': { '$ref': '#/definitions/stringArray' },
    'additionalProperties': { '$ref': '#' },
    'properties': {
      'type': 'object',
      'additionalProperties': { '$ref': '#' },
      'default': {},
    },
    'patternProperties': {
      'type': 'object',
      'additionalProperties': { '$ref': '#' },
      'propertyNames': { 'format': 'regex' },
      'default': {},
    },
    'propertyNames': { '$ref': '#' },
    'const': true,
    'enum': {
      'type': 'array',
      'items': true,
      'minItems': 1,
      'uniqueItems': true,
    },
    'type': {
      'anyOf': [
        { '$ref': '#/definitions/simpleTypes' },
        {
          'type': 'array',
          'items': { '$ref': '#/definitions/simpleTypes' },
          'minItems': 1,
          'uniqueItems': true,
        },
      ],
    },
    'format': { 'type': 'string' },
    'contentMediaType': { 'type': 'string' },
    'contentEncoding': { 'type': 'string' },
    'if': { '$ref': '#' },
    'then': { '$ref': '#' },
    'else': { '$ref': '#' },
    'allOf': { '$ref': '#/definitions/schemaArray' },
    'anyOf': { '$ref': '#/definitions/schemaArray' },
    'oneOf': { '$ref': '#/definitions/schemaArray' },
    'not': { '$ref': '#' },
  },
}
