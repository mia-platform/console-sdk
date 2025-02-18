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
  catalogNameSchema,
  catalogPipelinesSchema,
  catalogRepositoryUrlSchema,
} from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'
import { CatalogCRDManifest, PublicCatalogCRD } from '../custom-resource-definition'

const type = 'template'

export const catalogTemplateSchema = {
  additionalProperties: false,
  properties: {
    archiveUrl: catalogArchiveUrlSchema,
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
    name: catalogNameSchema,
    pipelines: catalogPipelinesSchema,

    /** @deprecated */
    repositoryUrl: { ...catalogRepositoryUrlSchema, deprecated: true },
    type: { const: 'template' },
  },
  required: ['name', 'type', 'archiveUrl'],
  type: 'object',
} as const satisfies JSONSchema

export type CatalogTemplate = FromSchema<typeof catalogTemplateSchema>

const resourcesSchema = {
  $id: 'catalog-template-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    services: {
      additionalProperties: catalogTemplateSchema,
      maxProperties: 1,
      minProperties: 1,
      type: 'object',
    },
  },
  required: ['services'],
  title: 'Catalog template resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: CatalogCRDManifest = {
  name: 'template',
  itemId: 'template-definition',
  description: 'Template Custom Resource Definition',
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
            'change-with-your-template-name': {
              name: 'change-with-your-template-name',
              type: 'template',
              archiveUrl: 'https://archive-url',
            },
          },
        },
      },
    },
  },
} satisfies PublicCatalogCRD

export type CatalogTemplateResources = FromSchema<typeof resourcesSchema>
export type CatalogTemplateItem = CatalogItem<typeof type, CatalogTemplateResources>
export type CatalogTemplateVersionedItem = CatalogVersionedItem<typeof type, CatalogTemplateResources>
export type CatalogTemplateManifest = CatalogItemManifest<typeof type, CatalogTemplateResources>

export default { type, resourcesSchema, crd }
