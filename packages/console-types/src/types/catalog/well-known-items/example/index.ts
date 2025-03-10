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
} from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'
import { CatalogCRDManifest, PublicCatalogCRD } from '../custom-resource-definition'

const type = 'example'

export const catalogExampleSchema = {
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

export type CatalogExample = FromSchema<typeof catalogExampleSchema>

const resourcesSchema = {
  $id: 'catalog-example-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      maxProperties: 1,
      minProperties: 1,
      patternProperties: { [catalogNameSchema.pattern]: catalogExampleSchema },
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog example resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: CatalogCRDManifest = {
  name: 'example',
  itemId: 'example-definition',
  description: 'Example Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: true,
  visibility: { public: true },
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
} satisfies PublicCatalogCRD

export type CatalogExampleResources = FromSchema<typeof resourcesSchema>
export type CatalogExampleItem = CatalogItem<typeof type, CatalogExampleResources>
export type CatalogExampleVersionedItem = CatalogVersionedItem<typeof type, CatalogExampleResources>
export type CatalogExampleManifest = CatalogItemManifest<typeof type, CatalogExampleResources>

export default { type, resourcesSchema, crd }
