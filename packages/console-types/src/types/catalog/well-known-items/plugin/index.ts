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

import type { JSONSchema, FromSchema } from 'json-schema-to-ts'

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
  linksSchema,
  nameSchema,
} from '../commons'

export const catalogPluginType = 'plugin'

export const catalogPluginSchema = {
  additionalProperties: false,
  properties: {
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
    links: linksSchema,
    name: nameSchema,
    type: { const: 'plugin' },
  },
  required: ['name', 'type', 'dockerImage'],
  type: 'object',
} as const satisfies JSONSchema

export const catalogPluginResourcesSchema = {
  $id: 'catalog-plugin-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${catalogPluginType}`,
  properties: {
    listeners: {
      additionalProperties: {
        additionalProperties: false,
        properties: {
          description: { type: 'string' },
          name: { type: 'string' },
          port: { type: 'string' },
          selectedByDefault: { type: 'boolean' },
        },
        required: ['name', 'port'],
        type: 'object',
      },
      type: 'object',
    },
    services: {
      additionalProperties: catalogPluginSchema,
      maxProperties: 1,
      minProperties: 1,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog plugin resources',
  type: 'object',
} as const satisfies JSONSchema

export type CatalogPluginResources = FromSchema<typeof catalogPluginResourcesSchema>
