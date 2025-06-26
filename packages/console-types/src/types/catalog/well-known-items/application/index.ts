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
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemNoVersionManifest, CatalogVersionedItem } from '../../item'
import { listenerSchema, nameSchema } from '../commons'
import { catalogExampleServiceSchema } from '../example'
import { catalogPluginServiceSchema } from '../plugin'
import { catalogTemplateServiceSchema } from '../template'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
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

const typeDefinition: CatalogItemTypeDefinition = {
  apiVersion: 'software-catalog.mia-platform.eu/v1',
  kind: 'item-type-definition',
  metadata: {
    namespace: wkiDefinitionNamespace,
    name: type,
    visibility: wkiDefinitionVisibility,
    displayName: 'Application',
    description: 'A set of resources that includes plugins, templates, examples and other components.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjQwNTUgMS43OTg5N0M3LjQ4NTQgMS42NTc4MSA3Ljc2MzA2IDEuNTgzNSA4LjA0NTcgMS41ODM1QzguMzI4MzMgMS41ODM1IDguNjA1OTggMS42NTc4IDguODUwODIgMS43OTg5NUw4Ljg1MTcxIDEuNzk5NDZMMTMuMDM1NCA0LjE5MDE0QzEzLjI4MDIgNC4zMzE0OSAxMy40ODM2IDQuNTM0NzMgMTMuNjI1IDQuNzc5NDdDMTMuNzY2NSA1LjAyNDIxIDEzLjg0MTEgNS4zMDE4NSAxMy44NDE0IDUuNTg0NTNWMTAuMzY2M0MxMy44NDExIDEwLjY0OSAxMy43NjY1IDEwLjkyNzEgMTMuNjI1IDExLjE3MThDMTMuNDgzNiAxMS40MTY2IDEzLjI4MDIgMTEuNjE5OCAxMy4wMzU0IDExLjc2MTFMMTMuMDMzOCAxMS43NjIxTDguODUxNzEgMTQuMTUxOEw4Ljg1MDc0IDE0LjE1MjRDOC42MDU5MiAxNC4yOTM1IDguMzI4MyAxNC4zNjc4IDguMDQ1NyAxNC4zNjc4QzcuNzYzMDkgMTQuMzY3OCA3LjQ4NTQ2IDE0LjI5MzUgNy4yNDA2MyAxNC4xNTI0TDcuMjM5NyAxNC4xNTE4TDMuMDU3NjEgMTEuNzYyMUwzLjA1NiAxMS43NjExQzIuODExMTkgMTEuNjE5OCAyLjYwNzg1IDExLjQxNjYgMi40NjYzOCAxMS4xNzE4QzIuMzI0OTEgMTAuOTI3MSAyLjI1MDI5IDEwLjY0OTQgMi4yNSAxMC4zNjY4TDIuMjUgNS41ODQ5NkMyLjI1MDI5IDUuMzAyMjcgMi4zMjQ5MSA1LjAyNDIxIDIuNDY2MzggNC43Nzk0N0MyLjYwNzg1IDQuNTM0NzMgMi44MTExOSA0LjMzMTQ5IDMuMDU2IDQuMTkwMTVMMy4wNTc2MSA0LjE4OTIyTDcuMjM5NyAxLjc5OTQ2TDcuMjQwNTUgMS43OTg5N1pNOC4wNDU3IDIuNDE2ODNDNy45MDkwMiAyLjQxNjgzIDcuNzc0NzQgMi40NTI4MSA3LjY1NjM3IDIuNTIxMTVMNy42NTQ3NiAyLjUyMjA4TDYuMjAxOTkgMy4zNTIyM0wxMC44NzA1IDUuOTcwMDdDMTEuMDcxMiA2LjA4MjYyIDExLjE0MjYgNi4zMzY1NyAxMS4wMzAxIDYuNTM3MjlDMTAuOTE3NSA2LjczOCAxMC42NjM2IDYuODA5NDcgMTAuNDYyOSA2LjY5NjkyTDUuMzU4MTIgMy44MzQ0NEwzLjQ3MjY3IDQuOTExODNMMy40NzE5OCA0LjkxMjI0QzMuMzU0MDMgNC45ODA0OSAzLjI1NjA2IDUuMDc4NTEgMy4xODc4NiA1LjE5NjVDMy4xMTk1NSA1LjMxNDY2IDMuMDgzNTEgNS40NDg3IDMuMDgzMzMgNS41ODUxOFYxMC4zNjYxQzMuMDgzNTEgMTAuNTAyNiAzLjExOTU1IDEwLjYzNjYgMy4xODc4NiAxMC43NTQ4QzMuMjU2MDYgMTAuODcyOCAzLjM1NDAzIDEwLjk3MDggMy40NzE5NyAxMS4wMzlMMy40NzI2NyAxMS4wMzk1TDcuNjU2MzcgMTMuNDMwMUM3Ljc3NDc0IDEzLjQ5ODUgNy45MDkwMiAxMy41MzQ1IDguMDQ1NyAxMy41MzQ1QzguMTgyMzkgMTMuNTM0NSA4LjMxNjY3IDEzLjQ5ODUgOC40MzUwNCAxMy40MzAxTDguNDM2NjUgMTMuNDI5MkwxMi42MTg3IDExLjAzOTVMMTIuNjE5NCAxMS4wMzlDMTIuNzM3NCAxMC45NzA4IDEyLjgzNTMgMTAuODcyOCAxMi45MDM2IDEwLjc1NDhDMTIuOTcxOSAxMC42MzY2IDEzLjAwNzkgMTAuNTAyNCAxMy4wMDgxIDEwLjM2NTlWNS41ODUzOUMxMy4wMDc5IDUuNDQ4ODQgMTIuOTcxOSA1LjMxNDcyIDEyLjkwMzYgNS4xOTY1QzEyLjgzNTMgNS4wNzg1MiAxMi43Mzc0IDQuOTgwNSAxMi42MTk0IDQuOTEyMjRMMTIuNjE4NyA0LjkxMTgzTDguNDM2NjUgMi41MjIwOEw4LjQzNTA0IDIuNTIxMTVDOC4zMTY2NyAyLjQ1MjgxIDguMTgyMzkgMi40MTY4MyA4LjA0NTcgMi40MTY4M1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi40Njc1MiA0Ljc1NDczQzIuNTgyNzUgNC41NTU1NCAyLjgzNzY0IDQuNDg3NDcgMy4wMzY4MyA0LjYwMjdMOC4wNDU4NiA3LjUwMDI1TDEzLjA1NDkgNC42MDI3QzEzLjI1NDEgNC40ODc0NyAxMy41MDkgNC41NTU1NCAxMy42MjQyIDQuNzU0NzNDMTMuNzM5NCA0Ljk1MzkyIDEzLjY3MTMgNS4yMDg4MSAxMy40NzIyIDUuMzI0MDRMOC4yNTQ0OSA4LjM0MjI3QzguMTI1NDIgOC40MTY5NCA3Ljk2NjI5IDguNDE2OTQgNy44MzcyMiA4LjM0MjI3TDIuNjE5NTYgNS4zMjQwNEMyLjQyMDM3IDUuMjA4ODEgMi4zNTIzIDQuOTUzOTIgMi40Njc1MiA0Ljc1NDczWiIgZmlsbD0iY3VycmVudGNvbG9yIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjA0NTU3IDcuNTU4OTZDOC4yNzU2OSA3LjU1ODk2IDguNDYyMjQgNy43NDU1MSA4LjQ2MjI0IDcuOTc1NjNWMTQuMDAwMUM4LjQ2MjI0IDE0LjIzMDMgOC4yNzU2OSAxNC40MTY4IDguMDQ1NTcgMTQuNDE2OEM3LjgxNTQ1IDE0LjQxNjggNy42Mjg5MSAxNC4yMzAzIDcuNjI4OTEgMTQuMDAwMVY3Ljk3NTYzQzcuNjI4OTEgNy43NDU1MSA3LjgxNTQ1IDcuNTU4OTYgOC4wNDU1NyA3LjU1ODk2WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+PC9zdmc+Cg==',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/application',
    },
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: false,
    validation: {
      mechanism: 'json-schema',
      schema: {
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
  __v: wkiDefinitionVersion,
}

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

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition, crd }
