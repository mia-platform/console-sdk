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

import type { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../../commons/json-schema'
import { CatalogItemNoVersionManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'

const type = 'custom-resource-definition'

const resourcesSchema = {
  $id: 'catalog-crd-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: `Resources of Catalog items of type ${type}`,
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
  required: ['name'],
  title: 'Catalog CRD resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogCRDResources = FromSchema<typeof resourcesSchema>
export type CatalogCRDItem = CatalogItem<typeof type, CatalogCRDResources>
export type CatalogCRDVersionedItem = CatalogVersionedItem<typeof type, CatalogCRDResources>
export type CatalogCRDManifest = CatalogItemNoVersionManifest<typeof type, CatalogCRDResources>

export default { type, resourcesSchema }

/**
 * This type is meant only as a way to ensure correctness of public CRDs.
 * It should not be exposed nor used elsewhere.
 */
export type PublicCatalogCRD = CatalogCRDManifest & {
  tenantId: 'mia-platform',
  visibility: { public: true },
}
