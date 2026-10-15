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
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAxLjMzQzguMTggMS4zMyA4LjM1IDEuNCA4LjQ3IDEuNTNDOC42IDEuNjUgOC42NyAxLjgyIDguNjcgMlYyLjcxQzkuNjIgMi44MyAxMC41MiAzLjIgMTEuMjcgMy43OUwxMS43NyAzLjI5QzExLjkgMy4xNiAxMi4wNyAzLjA5IDEyLjI0IDMuMDlDMTIuNDIgMy4wOSAxMi41OSAzLjE2IDEyLjcxIDMuMjlDMTIuODQgMy40MSAxMi45MSAzLjU4IDEyLjkxIDMuNzZDMTIuOTEgMy45MyAxMi44NCA0LjEgMTIuNzEgNC4yM0wxMi4yMSA0LjczQzEyLjggNS40OCAxMy4xNyA2LjM4IDEzLjI5IDcuMzNIMTRDMTQuMTggNy4zMyAxNC4zNSA3LjQgMTQuNDcgNy41M0MxNC42IDcuNjUgMTQuNjcgNy44MiAxNC42NyA4QzE0LjY3IDguMTggMTQuNiA4LjM1IDE0LjQ3IDguNDdDMTQuMzUgOC42IDE0LjE4IDguNjcgMTQgOC42N0gxMy4yOUMxMy4xNyA5LjYyIDEyLjggMTAuNTIgMTIuMjEgMTEuMjdMMTIuNzEgMTEuNzdDMTIuODQgMTEuOSAxMi45IDEyLjA3IDEyLjkgMTIuMjRDMTIuOSAxMi40MSAxMi44MyAxMi41OCAxMi43MSAxMi43MUMxMi41OCAxMi44MyAxMi40MSAxMi45IDEyLjI0IDEyLjlDMTIuMDcgMTIuOSAxMS45IDEyLjg0IDExLjc3IDEyLjcxTDExLjI3IDEyLjIxQzEwLjUyIDEyLjggOS42MiAxMy4xNyA4LjY3IDEzLjI5VjE0QzguNjcgMTQuMTggOC42IDE0LjM1IDguNDcgMTQuNDdDOC4zNSAxNC42IDguMTggMTQuNjcgOCAxNC42N0M3LjgyIDE0LjY3IDcuNjUgMTQuNiA3LjUzIDE0LjQ3QzcuNCAxNC4zNSA3LjMzIDE0LjE4IDcuMzMgMTRWMTMuMjlDNi4zOCAxMy4xNyA1LjQ4IDEyLjggNC43MyAxMi4yMUw0LjIzIDEyLjcxQzQuMTcgMTIuNzggNC4wOSAxMi44MyA0LjAxIDEyLjg2QzMuOTMgMTIuOSAzLjg0IDEyLjkyIDMuNzUgMTIuOTJDMy42NyAxMi45MiAzLjU4IDEyLjkgMy41IDEyLjg3QzMuNDEgMTIuODMgMy4zNCAxMi43OCAzLjI4IDEyLjcyQzMuMjIgMTIuNjYgMy4xNyAxMi41OCAzLjEzIDEyLjVDMy4xIDEyLjQyIDMuMDggMTIuMzMgMy4wOCAxMi4yNEMzLjA4IDEyLjE2IDMuMSAxMi4wNyAzLjE0IDExLjk5QzMuMTcgMTEuOTEgMy4yMiAxMS44MyAzLjI5IDExLjc3TDMuNzkgMTEuMjdDMy4yIDEwLjUyIDIuODMgOS42MiAyLjcxIDguNjdIMkMxLjgyIDguNjcgMS42NSA4LjYgMS41MyA4LjQ3QzEuNCA4LjM1IDEuMzMgOC4xOCAxLjMzIDhDMS4zMyA3LjgyIDEuNCA3LjY1IDEuNTMgNy41M0MxLjY1IDcuNCAxLjgyIDcuMzMgMiA3LjMzSDIuNzFDMi44MyA2LjM4IDMuMiA1LjQ4IDMuNzkgNC43M0wzLjI5IDQuMjNDMy4xNiA0LjEgMy4xIDMuOTMgMy4xIDMuNzZDMy4xIDMuNTggMy4xNyAzLjQyIDMuMjkgMy4yOUMzLjQyIDMuMTcgMy41OSAzLjEgMy43NiAzLjFDMy45NCAzLjEgNC4xIDMuMTYgNC4yMyAzLjI5TDQuNzMgMy43OUM1LjQ4IDMuMiA2LjM4IDIuODMgNy4zMyAyLjcxVjJDNy4zMyAxLjgyIDcuNCAxLjY1IDcuNTMgMS41M0M3LjY1IDEuNCA3LjgyIDEuMzMgOCAxLjMzWk05LjM1IDEwLjNDOS4xNCAxMC40MiA4LjkxIDEwLjUyIDguNjcgMTAuNThWMTEuOTRDOS4yNiAxMS44NCA5LjgzIDExLjYxIDEwLjMyIDExLjI2TDkuMzUgMTAuM1pNNi42NSAxMC4zTDUuNjggMTEuMjZDNi4xNyAxMS42MSA2Ljc0IDExLjg0IDcuMzMgMTEuOTRWMTAuNThDNy4wOSAxMC41MiA2Ljg2IDEwLjQyIDYuNjUgMTAuM1pNMTEuOTQgOC42N0gxMC41OEMxMC41MiA4LjkxIDEwLjQyIDkuMTQgMTAuMyA5LjM1TDExLjI2IDEwLjMyQzExLjYxIDkuODMgMTEuODQgOS4yNiAxMS45NCA4LjY3Wk01LjQyIDguNjdINC4wNkM0LjE2IDkuMjYgNC4zOSA5LjgzIDQuNzQgMTAuMzJMNS43IDkuMzVDNS41OCA5LjE0IDUuNDggOC45MSA1LjQyIDguNjdaTTggNi42N0M3LjY4IDYuNjcgNy4zOCA2Ljc4IDcuMTUgNi45N0w3LjA1IDcuMDdDNi44NyA3LjI1IDYuNzQgNy40OCA2LjY5IDcuNzNDNi42NCA3Ljk5IDYuNjcgOC4yNSA2Ljc2IDguNDlDNi44NSA4LjczIDcuMDIgOC45NCA3LjIzIDkuMDlDNy40NCA5LjI0IDcuNjkgOS4zMiA3Ljk0IDkuMzNDOC4yIDkuMzQgOC40NiA5LjI4IDguNjggOS4xNUM4LjkgOS4wMiA5LjA4IDguODIgOS4xOSA4LjU5QzkuMzEgOC4zNiA5LjM1IDguMSA5LjMyIDcuODVDOS4yOSA3LjU5IDkuMTkgNy4zNSA5LjAzIDcuMTVMOC45NCA3LjA1QzguNjkgNi44IDguMzUgNi42NyA4IDYuNjdaTTExLjI2IDUuNjhMMTAuMyA2LjY1QzEwLjQyIDYuODYgMTAuNTIgNy4wOSAxMC41OCA3LjMzSDExLjk0QzExLjg0IDYuNzQgMTEuNjEgNi4xNyAxMS4yNiA1LjY4Wk00Ljc0IDUuNjhDNC4zOSA2LjE3IDQuMTYgNi43NCA0LjA2IDcuMzNINS40MkM1LjQ4IDcuMDkgNS41OCA2Ljg2IDUuNyA2LjY1TDQuNzQgNS42OFpNNy4zMyA0LjA2QzYuNzQgNC4xNiA2LjE3IDQuMzkgNS42OCA0Ljc0TDYuNjUgNS43QzYuODYgNS41OCA3LjA5IDUuNDggNy4zMyA1LjQyVjQuMDZaTTguNjcgNC4wNVY1LjQyQzguOTEgNS40OCA5LjE0IDUuNTggOS4zNSA1LjdMMTAuMzIgNC43NEwxMC4xNSA0LjYzQzkuNyA0LjM0IDkuMTkgNC4xNCA4LjY3IDQuMDVaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz48L3N2Zz4=',
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
      schema: resourcesSchema,
    },
  },
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
