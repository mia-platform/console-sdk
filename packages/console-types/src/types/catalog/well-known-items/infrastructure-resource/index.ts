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
import type { CatalogCrd } from '../../crd'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import { nameSchema } from '../commons'
import type { CatalogWellKnownItemData } from '..'

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
              'engine': {
                'description': 'The template engine used for generating the file (default is `mustache`)',
                'enum': ['mustache'],
                'type': 'string',
              },
              fileExtension: {
                description: 'The extension of the file to generate. If not set, default is .yml',
                type: 'string',
              },
              folderName: {
                description: 'The name of the folder where the file will be created, below the configurationBaseFolder',
                type: 'string',
              },
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
    name: nameSchema,
    runtime: {
      additionalProperties: false,
      properties: {
        resourceId: { type: 'string' },
        type: { type: 'string' },
      },
      required: ['type'],
      type: 'object',
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

const crd: CatalogCrd = {
  name: 'custom-resource',
  itemId: 'custom-resource',
  description: 'Custom Workload Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: true,
  resources: {
    name: type,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
      },
    },
    controlledFields: [
      { key: 'apiVersion', jsonPath: 'meta.apiVersion' },
      { key: 'kind', jsonPath: 'meta.kind' },
      { key: 'type', jsonPath: 'runtime.type' },
      { key: 'resourceId', jsonPath: 'runtime.resourceId' },
    ],
  },
}

export type Resources = FromSchema<typeof resourcesSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
