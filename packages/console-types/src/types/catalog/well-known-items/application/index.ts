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

const _resourcesSchema = {
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

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    services: {
      'e-commerce-service': {
        type: 'plugin',
        name: 'e-commerce-service',
        description: 'Backend for an E-Commerce',
        tags: ['e-commerce', 'backend'],
        links: [{ label: 'Configurator', targetSection: 'flow-manager' }],
        componentId: 'e-commerce',
        dockerImage: 'e-commerce-service:1.0.0',
        containerPorts: [{ from: 3000, to: 80, name: 'http' }],
        defaultAnnotations: [{ name: 'domain', value: 'orders' }],
        defaultLabels: [{ name: 'technologies', value: 'javascript' }],
        defaultDocumentationPath: '/documentation/json',
        defaultLogParser: 'mia-json',
        defaultEnvironmentVariables: [{ name: 'LOG_LEVEL', valueType: 'plain', value: '{{LOG_LEVEL}}' }],
        defaultConfigMaps: [
          {
            name: 'e-commerce-service-config',
            mountPath: '/home/node',
            files: [{ name: 'config.json', content: '{ "mongodbUrl": "{{MONGODB_URL}}" }' }],
          },
        ],
        defaultSecrets: [{ name: 'private-key', mountPath: '/home/node' }],
        defaultProbes: {
          liveness: { port: '3000', path: '/healthz' },
          readiness: { port: '3000', path: '/healthz' },
          startup: { port: '3000', path: '/healthz' },
        },
        defaultResources: {
          memoryLimits: { max: '250Mi', min: '150Mi' },
          cpuLimits: { min: '150m', max: '200m' },
        },
      },
      'crud-service': {
        type: 'plugin',
        name: 'crud-service',
        componentId: 'crud-service',
        dockerImage: 'nexus.mia-platform.eu/core/crud-service:7.2.3',
      },
    },
    endpoints: {
      '/e-commerce': {
        defaultBasePath: '/e-commerce',
        defaultPathRewrite: '/',
        public: true,
        secreted: false,
        service: 'e-commerce-service',
        tags: ['e-commerce'],
        type: 'custom',
      },
    },
    collections: {
      items: {
        id: 'items',
        type: 'collection',
        defaultName: 'items',
        internalEndpoints: [{ basePath: '/items' }],
        fields: [
          {
            'name': 'name',
            'nullable': false,
            'required': true,
            'type': 'string',
          },
        ],
      },
    },
    unsecretedVariables: {
      LOG_LEVEL: { noProductionEnv: 'debug', productionEnv: 'info' },
    },
  },
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

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

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export type { Collection, Endpoint, UnsecretedVariable }

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
