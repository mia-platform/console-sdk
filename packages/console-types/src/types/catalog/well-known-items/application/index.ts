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
import { CatalogItemNoVersionManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'
import { catalogListenerSchema, catalogNameSchema } from '../commons'
import { CatalogCRDManifest, PublicCatalogCRD } from '../custom-resource-definition'
import { catalogExampleSchema } from '../example'
import { catalogPluginSchema } from '../plugin'
import { catalogTemplateSchema } from '../template'
import { catalogCollectionSchema } from './collection'
import { catalogEndpointSchema } from './endpoint'
import { catalogUnsecretedVariableSchema } from './unsecreted-variable'

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
      type: 'object',
    },
    endpoints: {
      description: 'Endpoints to be created with the application. The key of each endpoint MUST be equal to the endpoint `defaultBasePath` property. Endpoints only work if a Mia-Platform API Gateway is already in the project or is created through the application itself.',
      patternProperties: { [endpoint.basePath.pattern]: catalogEndpointSchema },
      type: 'object',
    },
    listeners: {
      additionalProperties: catalogListenerSchema,
      type: 'object',
    },
    services: {
      description: 'Services to be created with the application. The key of each service MUST be equal to the service `name` property',
      patternProperties: {
        [catalogNameSchema.pattern]: {
          oneOf: [catalogPluginSchema, catalogExampleSchema, catalogTemplateSchema],
        },
      },
      minProperties: 1,
      type: 'object',
    },
    unsecretedVariables: { additionalProperties: catalogUnsecretedVariableSchema, type: 'object' },
  },
  required: ['services'],
  title: 'Catalog application resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: CatalogCRDManifest = {
  name: 'application',
  itemId: 'application-definition',
  description: 'Application Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: false,
  visibility: { public: true },
  resources: {
    name: type,
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
} satisfies PublicCatalogCRD

export type CatalogApplicationResources = FromSchema<typeof resourcesSchema>
export type CatalogApplicationItem = CatalogItem<typeof type, CatalogApplicationResources>
export type CatalogApplicationVersionedItem = CatalogVersionedItem<typeof type, CatalogApplicationResources>
export type CatalogApplicationManifest = CatalogItemNoVersionManifest<typeof type, CatalogApplicationResources>

export default { type, resourcesSchema, crd }
