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
import type { ICatalogCrd } from '../../crd'
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

const resourcesSchema = {
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
export type Resources = FromSchema<typeof resourcesSchema>
export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
