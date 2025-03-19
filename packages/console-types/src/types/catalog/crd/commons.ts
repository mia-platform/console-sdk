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

export const CATALOG_CRD_TYPE = 'custom-resource-definition'

export const catalogCrdIsVersioningSupportedSchema = {
  description: 'States if versioning is supported for the custom resource defined by the CRD',
  type: 'boolean',
} as const satisfies JSONSchema

export const catalogCrdResourcesSchema = {
  type: 'object',
  properties: {
    controlledFields: {
      description: 'List detailing the fields that are managed by the Marketplace item',
      items: {
        properties: {
          jsonPath: {
            description: 'JSON path to access the marketplace item value',
            type: 'string',
          },
          key: {
            description: 'Unique name of the field',
            type: 'string',
          },
        },
        required: ['key', 'jsonPath'],
        type: 'object',
      },
      type: 'array',
    },
    name: {
      description: 'Type of the described resource',
      type: 'string',
    },
    validation: {
      description: 'How to validate the defined resource',
      oneOf: [
        {
          description: 'Validation through JSON schema',
          properties: {
            jsonSchema: { type: 'object' },
          },
          required: ['jsonSchema'],
          type: 'object',
        },
        {
          description: 'Validation through webhook',
          properties: {
            validationWebhook: {
              properties: {
                urls: {
                  properties: {
                    schema: {
                      description: 'URL to the schema',
                      pattern: '^https?:\\/\\/([^:\\/\\s]+)((:[0-9]{1,5})?(\\/.*)?)([^\\/:])\\/?$',
                      type: 'string',
                    },
                    validation: {
                      description: 'URL to the validation webhook',
                      pattern: '^https?:\\/\\/([^:\\/\\s]+)((:[0-9]{1,5})?(\\/.*)?)([^\\/:])\\/?$',
                      type: 'string',
                    },
                  },
                  required: ['validation'],
                  type: 'object',
                },
              },
              required: ['urls'],
              type: 'object',
            },
          },
          required: ['validationWebhook'],
          type: 'object',
        },
      ],
    },
  },
  additionalProperties: false,
  required: ['name'],
} as const satisfies JSONSchema
