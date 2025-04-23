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

import { JSONSchema } from '../../../../commons/json-schema'
import type { ICatalogCrd } from '../../crd'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import {
  additionalContainersSchema,
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
  execPreStopSchema,
  linksSchema,
  listenerSchema,
  mapEnvVarToMountPathSchema,
  nameSchema,
  tagsSchema,
} from '../commons'
import type { CatalogWellKnownItemData } from '..'

const type = 'plugin'

export const catalogPluginServiceSchema = {
  additionalProperties: false,
  properties: {
    args: defaultArgsSchema,
    additionalContainers: additionalContainersSchema,
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
    execPreStop: execPreStopSchema,
    links: linksSchema,
    mapEnvVarToMountPath: mapEnvVarToMountPathSchema,
    name: nameSchema,
    tags: tagsSchema,
    type: { const: 'plugin' },
  },
  required: ['name', 'type', 'dockerImage'],
  type: 'object',
} as const satisfies JSONSchema

const _resourcesSchema = {
  $id: 'catalog-plugin-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    listeners: {
      additionalProperties: listenerSchema,
      type: 'object',
    },
    services: {
      maxProperties: 1,
      minProperties: 1,
      patternProperties: { [nameSchema.pattern]: catalogPluginServiceSchema },
      additionalProperties: false,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog plugin resources',
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
        defaultEnvironmentVariables: [{ name: 'LOG_LEVEL', valueType: 'plain', value: 'info' }],
        defaultConfigMaps: [
          {
            name: 'e-commerce-service-config',
            mountPath: '/home/node',
            files: [{ name: 'config.json', content: '{ "mongodbUrl": "{{MONGODB_URL}}" }' }]
          }
        ],
        defaultSecrets: [{ name: 'private-key', mountPath: '/home/node' }],
        defaultProbes: {
          liveness: { port: '3000', path: '/healthz' },
          readiness: { port: '3000', path: '/healthz' },
          startup: { port: '3000', path: '/healthz' },
        },
        defaultResources: {
          memoryLimits: { max: '250Mi', min: '150Mi' },
          cpuLimits: { min: '150m', max: '200m' }
        },
      },
    },
  },
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const crd: ICatalogCrd.Item = {
  name: 'plugin',
  itemId: 'plugin-definition',
  description: 'Plugin Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: true,
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
        },
      },
    },
  },
}

export type Service = FromSchema<typeof catalogPluginServiceSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
