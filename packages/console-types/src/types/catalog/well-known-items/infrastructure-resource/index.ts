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
import { catalogNameSchema } from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'

const type = 'custom-resource'

const resourcesSchema = {
  $id: 'catalog-infrastructure-resource-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    annotations: {
      items: {
        properties: {
          name: { type: 'string' },
          value: { type: 'string' },
        },
        type: 'object',
      },
      type: 'array',
    },
    attributes: {
      additionalProperties: {
        properties: {
          type: { enum: ['input'], type: 'string' },
        },
        type: 'object',
      },
      description: 'Attributes to be used to generate the form to manage the custom resource',
      type: 'object',
    },
    generator: {
      properties: {
        configurationBaseFolder: { type: 'string' },
        templates: {
          items: {
            properties: {
              fileExtension: { description: 'The extension of the file to generate. If not set, default is .yml', type: 'string' },
              folderName: { description: 'The name of the folder where the file will be created, below the configurationBaseFolder', type: 'string' },
              name: { type: 'string' },
              template: { type: 'string' },
            },
            required: ['template', 'name'],
            type: 'object',
          },
          type: 'array',
        },
        type: { enum: ['template'], type: 'string' },
      },
      required: ['type', 'templates'],
      type: 'object',
    },
    labels: {
      items: {
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        type: 'object',
      },
      type: 'array',
    },
    meta: {
      properties: {
        apiVersion: { type: 'string' },
        kind: { type: 'string' },
      },
      type: 'object',
    },
    name: catalogNameSchema,
    runtime: {
      type: 'object',
      required: ['type'],
      additionalProperties: false,
      properties: {
        resourceId: { type: 'string' },
        type: { type: 'string' },
      },
    },
    service: {
      properties: {
        archive: { type: 'string' },
      },
      type: 'object',
    },
    jsonSchema: { type: 'object' },
    spec: { type: 'object' },
  },
  title: 'Catalog infrastructure resource resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogInfrastructureResourceResources = FromSchema<typeof resourcesSchema>
export type CatalogInfrastructureResourceItem = CatalogItem<typeof type, CatalogInfrastructureResourceResources>
export type CatalogInfrastructureResourceVersionedItem = CatalogVersionedItem<
  typeof type,
  CatalogInfrastructureResourceResources
>
export type CatalogInfrastructureResourceManifest = CatalogItemManifest<
  typeof type,
  CatalogInfrastructureResourceResources
>

export default { type, resourcesSchema }
