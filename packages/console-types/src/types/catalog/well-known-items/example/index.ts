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
import { ICatalogCrd } from '../../crd'
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import {
  archiveUrlSchema,
  componentIdSchema,
  containerPortsSchema,
  defaultAnnotationsSchema,
  defaultArgsSchema,
  defaultConfigMapsSchema,
  defaultDocumentationPathSchema,
  defaultEnvironmentVariablesSchema,
  defaultLabelsSchema,
  defaultLogParserSchema,
  defaultMonitoringSchema,
  defaultProbesSchema,
  defaultResourcesSchema,
  defaultSecretsSchema,
  defaultTerminationGracePeriodSecondsSchema,
  descriptionSchema,
  dockerImageSchema,
  mapEnvVarToMountPathSchema,
  nameSchema,
  pipelinesSchema,
} from '../commons'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import type { CatalogWellKnownItemData } from '..'

const type = 'example'

export const catalogExampleServiceSchema = {
  additionalProperties: false,
  properties: {
    archiveUrl: archiveUrlSchema,
    componentId: componentIdSchema,
    containerPorts: containerPortsSchema,
    defaultAnnotations: defaultAnnotationsSchema,
    defaultArgs: defaultArgsSchema,
    defaultConfigMaps: defaultConfigMapsSchema,
    defaultDocumentationPath: defaultDocumentationPathSchema,
    defaultEnvironmentVariables: defaultEnvironmentVariablesSchema,
    defaultLabels: defaultLabelsSchema,
    defaultLogParser: defaultLogParserSchema,
    defaultMonitoring: defaultMonitoringSchema,
    defaultProbes: defaultProbesSchema,
    defaultResources: defaultResourcesSchema,
    defaultSecrets: defaultSecretsSchema,
    defaultTerminationGracePeriodSeconds: defaultTerminationGracePeriodSecondsSchema,
    description: descriptionSchema,
    dockerImage: dockerImageSchema,
    mapEnvVarToMountPath: mapEnvVarToMountPathSchema,
    name: nameSchema,
    pipelines: pipelinesSchema,
    type: { const: type },
  },
  required: ['name', 'type', 'archiveUrl'],
  type: 'object',
} as const satisfies JSONSchema

const _resourcesSchema = {
  $id: 'catalog-example-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      maxProperties: 1,
      minProperties: 1,
      patternProperties: { [nameSchema.pattern]: catalogExampleServiceSchema },
      additionalProperties: false,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog example resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    services: {
      'e-commerce-service': {
        type: 'example',
        name: 'e-commerce-service',
        description: 'Backend for an E-Commerce',
        componentId: 'e-commerce',
        archiveUrl: 'https://github.com/e-commerce/backend/archive/refs/tags/v1.0.0.tar.gz',
        containerPorts: [{ from: 3000, to: 80, name: 'http' }],
        defaultAnnotations: [{ name: 'domain', value: 'orders' }],
        defaultLabels: [{ name: 'technologies', value: 'javascript' }],
        defaultDocumentationPath: '/documentation/json',
        defaultLogParser: 'mia-json',
        defaultEnvironmentVariables: [{ name: 'LOG_LEVEL', valueType: 'plain', value: 'info' }],
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
    displayName: 'Example',
    description: 'A pre-configured model with business logic, ready to modify for custom needs.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNTAwMSAyLjVDOC41MDAxIDIuMjIzODYgOC4yNzYyNSAyIDguMDAwMSAyQzcuNzIzOTYgMiA3LjUwMDEgMi4yMjM4NiA3LjUwMDEgMi41VjQuMjA5OTZMNC4yNTIwNSA2LjA2NTg3QzQuMDk2MjUgNi4xNTQ4OSA0LjAwMDEgNi4zMjA1NyA0LjAwMDEgNi41VjEwLjIzMjRMMi4xNDI2MiAxMS40NzA3QzEuOTEyODYgMTEuNjIzOSAxLjg1MDc3IDExLjkzNDQgMi4wMDM5NSAxMi4xNjQxQzIuMTU3MTMgMTIuMzkzOSAyLjQ2NzU2IDEyLjQ1NiAyLjY5NzMzIDEyLjMwMjhMNC41MjAzNiAxMS4wODc0TDcuNzUyMjggMTIuOTM0MUM3LjkwNiAxMy4wMjIgOC4wOTQ3MSAxMy4wMjIgOC4yNDg0MiAxMi45MzQxTDExLjQ5OTEgMTEuMDc2NUwxMy40MTU2IDEyLjE4MjlDMTMuNjU0NyAxMi4zMjEgMTMuOTYwNSAxMi4yMzkxIDE0LjA5ODYgMTEuOTk5OUMxNC4yMzY2IDExLjc2MDggMTQuMTU0NyAxMS40NTUgMTMuOTE1NiAxMS4zMTY5TDEyLjAwMDEgMTAuMjExVjYuNUMxMi4wMDAxIDYuMzIwNTggMTEuOTA0IDYuMTU0OTEgMTEuNzQ4MiA2LjA2NTg5TDguNTAwMSA0LjIwOTcxVjIuNVpNNS4wMDAxIDEwLjIwOThWNi43OTAxN0w4LjAwMDMyIDUuMDc1ODhMMTEuMDAwMSA2Ljc5MDE1VjEwLjIwOThMOC4wMDAzMiAxMS45MjQxTDUuMDAwMSAxMC4yMDk4WiIgZmlsbD0iY3VycmVudGNvbG9yIiAvPjwvc3ZnPg==',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/example',
    },
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: true,
    validation: {
      mechanism: 'json-schema',
      schema: {
        ...resourcesSchema,
        default: {
          services: {
            '<change-with-your-example-name>': {
              name: '<change-with-your-example-name>',
              type: 'example',
              archiveUrl: 'https://archive-url',
            },
          },
        },
      },
    },
  },
  __v: wkiDefinitionVersion,
}

const crd: ICatalogCrd.Item = {
  name: 'example',
  itemId: 'example-definition',
  description: 'Example Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: true,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          services: {
            '<change-with-your-example-name>': {
              name: '<change-with-your-example-name>',
              type: 'example',
              archiveUrl: 'https://archive-url',
            },
          },
        },
      },
    },
  },
}


export type Service = FromSchema<typeof catalogExampleServiceSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition, crd }
