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
import {
  catalogAdditionalContainersSchema,
  catalogComponentIdSchema,
  catalogContainerPortsSchema,
  catalogDefaultAnnotationsSchema,
  catalogDefaultArgsSchema,
  catalogDefaultConfigMapsSchema,
  catalogDefaultDocumentationPathSchema,
  catalogDefaultEnvironmentVariablesSchema,
  catalogDefaultLabelsSchema,
  catalogDefaultLogParserSchema,
  catalogDefaultMonitoringSchema,
  catalogDefaultProbesSchema,
  catalogDefaultResourcesSchema,
  catalogDefaultSecretsSchema,
  catalogDefaultTerminationGracePeriodSecondsSchema,
  catalogDescriptionSchema,
  catalogDockerImageSchema,
  catalogExecPreStopSchema,
  catalogLinksSchema,
  catalogListenerSchema,
  catalogMapEnvVarToMountPathSchema,
  catalogNameSchema,
  catalogRepositoryUrlSchema,
  catalogTagsSchema,
} from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'

const type = 'plugin'

export const catalogPluginSchema = {
  additionalProperties: false,
  properties: {
    args: catalogDefaultArgsSchema,
    additionalContainers: catalogAdditionalContainersSchema,
    componentId: catalogComponentIdSchema,
    containerPorts: catalogContainerPortsSchema,
    defaultAnnotations: catalogDefaultAnnotationsSchema,
    defaultArgs: catalogDefaultArgsSchema,
    defaultConfigMaps: catalogDefaultConfigMapsSchema,
    defaultDocumentationPath: catalogDefaultDocumentationPathSchema,
    defaultEnvironmentVariables: catalogDefaultEnvironmentVariablesSchema,
    defaultLabels: catalogDefaultLabelsSchema,
    defaultLogParser: catalogDefaultLogParserSchema,
    defaultMonitoring: catalogDefaultMonitoringSchema,
    defaultProbes: catalogDefaultProbesSchema,
    defaultResources: catalogDefaultResourcesSchema,
    defaultSecrets: catalogDefaultSecretsSchema,
    defaultTerminationGracePeriodSeconds: catalogDefaultTerminationGracePeriodSecondsSchema,
    description: catalogDescriptionSchema,
    dockerImage: catalogDockerImageSchema,
    execPreStop: catalogExecPreStopSchema,
    links: catalogLinksSchema,
    mapEnvVarToMountPath: catalogMapEnvVarToMountPathSchema,
    name: catalogNameSchema,

    /** @deprecated */
    repositoryUrl: { ...catalogRepositoryUrlSchema, deprecated: true },
    tags: catalogTagsSchema,
    type: { const: 'plugin' },
  },
  required: ['name', 'type', 'dockerImage'],
  type: 'object',
} as const satisfies JSONSchema

export type CatalogPlugin = FromSchema<typeof catalogPluginSchema>

const resourcesSchema = {
  $id: 'catalog-plugin-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    listeners: {
      additionalProperties: catalogListenerSchema,
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

export type CatalogPluginResources = FromSchema<typeof resourcesSchema>
export type CatalogPluginItem = CatalogItem<typeof type, CatalogPluginResources>
export type CatalogPluginVersionedItem = CatalogVersionedItem<typeof type, CatalogPluginResources>
export type CatalogPluginManifest = CatalogItemManifest<typeof type, CatalogPluginResources>

export default { type, resourcesSchema }
