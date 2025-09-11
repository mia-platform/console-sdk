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
import type { CatalogItem, CatalogItemNoVersionManifest, CatalogVersionedItem } from '../../item'
import {
  componentIdSchema,
  containerPortsSchema,
  defaultArgsSchema,
  defaultConfigMapsSchema,
  defaultEnvironmentVariablesSchema,
  defaultProbesSchema,
  defaultResourcesSchema,
  defaultSecretsSchema,
  defaultTerminationGracePeriodSecondsSchema,
  descriptionSchema,
  dockerImageSchema,
  nameSchema,
} from '../commons'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import type { CatalogWellKnownItemData } from '..'

const type = 'sidecar'

const _resourcesSchema = {
  $id: 'catalog-sidecar-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    componentId: componentIdSchema,
    description: descriptionSchema,
    containerPorts: containerPortsSchema,
    defaultArgs: defaultArgsSchema,
    defaultConfigMaps: defaultConfigMapsSchema,
    defaultEnvironmentVariables: defaultEnvironmentVariablesSchema,
    defaultProbes: defaultProbesSchema,
    defaultResources: defaultResourcesSchema,
    defaultSecrets: defaultSecretsSchema,
    defaultTerminationGracePeriodSeconds: defaultTerminationGracePeriodSecondsSchema,
    dockerImage: dockerImageSchema,
    exclusiveServiceExposure: { type: 'boolean' },
    name: nameSchema,
    owners: {
      items: {
        additionalProperties: true,
        properties: {
          owner: { type: 'string' },
        },
        required: ['owner'],
        type: 'object',
      },
      type: 'array',
    },
  },
  required: ['name'],
  title: 'Catalog sidecar resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    name: 'e-commerce-audit-trail',
    description: 'Collect audit logs from your E-Commerce',
    componentId: 'e-commerce-audit',
    dockerImage: 'e-commerce-audit-trail:0.2.0',
    containerPorts: [{ from: 8080, to: 80, name: 'http' }],
    defaultEnvironmentVariables: [{ name: 'LOG_LEVEL', valueType: 'plain', value: 'info' }],
    defaultConfigMaps: [
      {
        name: 'e-commerce-audit-service-config',
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
    owners: [{ owner: 'e-commerce' }],
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
    displayName: 'Sidecar',
    description: 'A secondary container that enhances microservices with features like security, logging, or data synchronization.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNTAwMzcgMkM4LjUwMDM3IDEuNzIzODYgOC4yNzY1MSAxLjUgOC4wMDAzNyAxLjVDNy43MjQyMiAxLjUgNy41MDAzNyAxLjcyMzg2IDcuNTAwMzcgMlYzLjcxMTMyTDQuMjg2MjUgNS41NjY5OUM0LjEzMTU1IDUuNjU2MyA0LjAzNjI1IDUuODIxMzcgNC4wMzYyNSA2VjdDNC4wMzYyNSA3LjI3NjE0IDQuMjYwMTEgNy41IDQuNTM2MjUgNy41QzQuODEyNCA3LjUgNS4wMzYyNSA3LjI3NjE0IDUuMDM2MjUgN1Y2LjI4ODY4TDguMDAwMzYgNC41NzczNUwxMC45NjQ1IDYuMjg4NjhWOS43MTEzMkw3Ljc1MDM2IDExLjU2N0M3LjUxMTIxIDExLjcwNTEgNy40MjkyNyAxMi4wMTA5IDcuNTY3MzQgMTIuMjVDNy43MDU0MSAxMi40ODkxIDguMDExMjEgMTIuNTcxMSA4LjI1MDM2IDEyLjQzM0wxMS40ODIxIDEwLjU2NzJMMTIuOTgyNCAxMS40MzM0QzEzLjIyMTYgMTEuNTcxNSAxMy41Mjc0IDExLjQ4OTUgMTMuNjY1NSAxMS4yNTA0QzEzLjgwMzUgMTEuMDExMiAxMy43MjE2IDEwLjcwNTUgMTMuNDgyNCAxMC41Njc0TDExLjk2NDUgOS42OTA5N1Y2QzExLjk2NDUgNS44MjEzNyAxMS44NjkyIDUuNjU2MyAxMS43MTQ1IDUuNTY2OTlMOC41MDAzNyAzLjcxMTMzVjJaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNzAwNDIgOC41ODAzOEMzLjg4NjA2IDguNDczMjEgNC4xMTQ3OCA4LjQ3MzIxIDQuMzAwNDIgOC41ODAzOEw2LjI5ODUgOS43MzM5N0M2LjQ4NDE0IDkuODQxMTUgNi41OTg1IDEwLjAzOTIgNi41OTg1IDEwLjI1MzZWMTIuNTYwOEM2LjU5ODUgMTIuNzc1MSA2LjQ4NDE0IDEyLjk3MzIgNi4yOTg1IDEzLjA4MDRMNC4zMDA0MiAxNC4yMzRDNC4xMTQ3OCAxNC4zNDEyIDMuODg2MDYgMTQuMzQxMiAzLjcwMDQyIDE0LjIzNEwxLjcwMjM0IDEzLjA4MDRDMS41MTY3IDEyLjk3MzIgMS40MDIzNCAxMi43NzUxIDEuNDAyMzQgMTIuNTYwOFYxMC4yNTM2QzEuNDAyMzQgMTAuMDM5MiAxLjUxNjcgOS44NDExNSAxLjcwMjM0IDkuNzMzOTdMMy43MDA0MiA4LjU4MDM4Wk0yLjQwMjM0IDEwLjQ4NDVMNC4wMDA0MiA5LjU2MTg4TDUuNTk4NSAxMC40ODQ1VjEyLjMyOThMNC4wMDA0MiAxMy4yNTI1TDIuNDAyMzQgMTIuMzI5OFYxMC40ODQ1WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+PC9zdmc+Cg==',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/sidecar',
    },
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: false,
    validation: {
      mechanism: 'json-schema',
      schema: {
        ...resourcesSchema,
        default: {
          name: '<change-with-your-sidecar-name>',
          dockerImage: '<change-with-your-sidecar-docker-image>',
        },
      },
    },
  },
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
