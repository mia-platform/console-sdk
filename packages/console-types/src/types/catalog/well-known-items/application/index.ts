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
import { collection } from '../../../collections'
import { endpoint } from '../../../endpoints'
import type { ICatalogCrd } from '../../crd'
import type { CatalogItem, CatalogItemNoVersionManifest, CatalogVersionedItem } from '../../item'
import { listenerSchema, nameSchema } from '../commons'
import { catalogExampleServiceSchema } from '../example'
import { catalogPluginServiceSchema } from '../plugin'
import { catalogTemplateServiceSchema } from '../template'
import type { CatalogWellKnownItemData } from '..'
import { catalogCollectionSchema, type Collection } from './collection'
import { catalogEndpointSchema, type Endpoint } from './endpoint'
import { catalogUnsecretedVariableSchema, type UnsecretedVariable } from './unsecreted-variable'

const type = 'application'

const resourcesSchema = {
  $id: 'catalog-application-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    collections: {
      description: 'Collections to be created with the application. The key of each collection MUST be equal to the collection `defaultName` property. Collections only work if a Mia-Platform CRUD Service is already in the project or is created through the application itself.',
      patternProperties: { [collection.name.pattern]: catalogCollectionSchema },
      additionalProperties: false,
      type: 'object',
    },
    endpoints: {
      description: 'Endpoints to be created with the application. The key of each endpoint MUST be equal to the endpoint `defaultBasePath` property. Endpoints only work if a Mia-Platform API Gateway is already in the project or is created through the application itself.',
      patternProperties: { [endpoint.basePath.pattern]: catalogEndpointSchema },
      additionalProperties: false,
      type: 'object',
    },
    listeners: {
      additionalProperties: listenerSchema,
      type: 'object',
    },
    services: {
      description: 'Services to be created with the application. The key of each service MUST be equal to the service `name` property',
      patternProperties: {
        [nameSchema.pattern]: {
          oneOf: [catalogPluginServiceSchema, catalogExampleServiceSchema, catalogTemplateServiceSchema],
        },
      },
      additionalProperties: false,
      minProperties: 1,
      type: 'object',
    },
    unsecretedVariables: { additionalProperties: catalogUnsecretedVariableSchema, type: 'object' },
  },
  required: ['services'],
  title: 'Catalog application resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: ICatalogCrd.Item = {
  name: 'application',
  itemId: 'application-definition',
  description: 'Application Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          services: {
            '<change-with-your-plugin-name>': {
              name: '<change-with-your-plugin-name>',
              type: 'plugin',
              dockerImage: '<change-with-your-plugin-docker-image>',
            },
          },
          endpoints: {
            '<change-with-your-endpoint-base-path>': {
              defaultBasePath: '<change-with-your-endpoint-base-path>',
              service: '<change-with-the-service-exposing-the-endpoint>',
              type: 'custom',
              tags: [
                'custom',
              ],
            },
          },
          collections: {
            '<change-with-your-collection-name>': {
              defaultName: '<change-with-your-collection-name>',
              type: 'collection',
              internalEndpoints: [
                {
                  basePath: '<change-with-the-collection-endpoint-base-path>',
                },
              ],
            },
          },
          unsecretedVariables: {
            '<change-with-your-variable-name>': {
              productionEnv: '<change-with-your-value>',
              noProductionEnv: '<change-with-your-value>',
            },
          },
        },
      },
    },
  },
}

export type Resources = FromSchema<typeof resourcesSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export type { Collection, Endpoint, UnsecretedVariable }

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
