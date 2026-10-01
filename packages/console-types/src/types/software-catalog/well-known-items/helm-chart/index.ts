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
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import type { CatalogWellKnownItemData } from '..'

const type = 'helm-chart'

const _chartSchema = {
  $id: 'software-catalog-helm-chart-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `The resources of Software Catalog items of type ${type}.`,
  properties: {
    source: {
      additionalProperties: false,
      description: 'The registry the chart has been imported from',
      properties: {
        repository: {
          description: 'The chart repository URL (e.g. `oci://registry.example.com/charts`)',
          minLength: 1,
          type: 'string',
        },
        digest: {
          description: 'The digest of the chart package (e.g. `sha256:...`)',
          minLength: 1,
          type: 'string',
        },
      },
      required: ['repository', 'digest'],
      type: 'object',
    },
    chart: {
      additionalProperties: { type: 'string' },
      description: 'The chart files, keyed by their path relative to the chart root, with their content as value',
      properties: {
        'Chart.yaml': {
          description: 'The chart metadata',
          minLength: 1,
          type: 'string',
        },
        'values.yaml': {
          description: 'The default configuration values of the chart',
          type: 'string',
        },
        'values.schema.json': {
          description: 'The JSON Schema used to validate the chart values',
          type: 'string',
        },
        'README.md': {
          description: 'The chart documentation',
          type: 'string',
        },
      },
      required: ['Chart.yaml'],
      type: 'object',
    },
  },
  required: ['chart'],
  title: 'Software Catalog helm chart resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _chartSchema>

const resourcesExamples: Resources[] = [
  {
    chart: {
      'Chart.yaml': 'apiVersion: v2\nname: my-chart\nversion: 0.1.0\n',
    },
  },
  {
    source: {
      repository: 'oci://registry.example.com/platform-team/charts',
      digest: 'sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    },
    chart: {
      'Chart.yaml': 'apiVersion: v2\nname: orders-api\nversion: 2.3.1\nappVersion: 5.8.0\ntype: application\n',
      'values.yaml': 'replicaCount: 2\nimage:\n  repository: registry.example.com/orders/orders-api\n  tag: ""\n',
      'values.schema.json': '{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "replicaCount": { "type": "integer", "minimum": 1 }\n  }\n}\n',
      'README.md': '# orders-api\n\nOrders API chart curated by the platform team.\n',
      'templates/deployment.yaml': 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Release.Name }}-orders-api\nspec:\n  replicas: {{ .Values.replicaCount }}\n',
    },
  },
]

const resourcesSchema: JSONSchema = { ..._chartSchema, examples: resourcesExamples }

const typeDefinition: CatalogItemTypeDefinition = {
  apiVersion: 'software-catalog.mia-platform.eu/v1',
  kind: 'item-type-definition',
  metadata: {
    namespace: wkiDefinitionNamespace,
    name: type,
    visibility: wkiDefinitionVisibility,
    displayName: 'Helm Chart',
    description: 'A Helm chart that packages a set of Kubernetes resources to be deployed together.',
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: true,
    validation: {
      mechanism: 'json-schema',
      schema: resourcesSchema,
    },
  },
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
