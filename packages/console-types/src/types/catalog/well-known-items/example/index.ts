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
import {
  catalogArchiveUrlSchema,
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
  catalogMapEnvVarToMountPathSchema,
  catalogNameSchema,
  catalogPipelinesSchema,
  catalogRepositoryUrlSchema,
  type CatalogWellKnownItemData,
} from '../commons'

const type = 'example'

export const catalogExampleServiceSchema = {
  additionalProperties: false,
  properties: {
    archiveUrl: catalogArchiveUrlSchema,
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
    mapEnvVarToMountPath: catalogMapEnvVarToMountPathSchema,
    name: catalogNameSchema,
    pipelines: catalogPipelinesSchema,

    /** @deprecated */
    repositoryUrl: { ...catalogRepositoryUrlSchema, deprecated: true },
    type: { const: type },
  },
  required: ['name', 'type', 'archiveUrl'],
  type: 'object',
} as const satisfies JSONSchema

const resourcesSchema = {
  $id: 'catalog-example-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      maxProperties: 1,
      minProperties: 1,
      patternProperties: { [catalogNameSchema.pattern]: catalogExampleServiceSchema },
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog example resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: CatalogCrd = {
  name: 'example',
  itemId: 'example-definition',
  description: 'Example Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: true,
  resources: {
    name: type,
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
export type Resources = FromSchema<typeof resourcesSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
