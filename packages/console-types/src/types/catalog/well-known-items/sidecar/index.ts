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
    owners: [{ owner: 'e-commerce' }],
  }
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const crd: ICatalogCrd.Item = {
  name: 'sidecar',
  itemId: 'sidecar-definition',
  description: 'Sidecar Custom Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          name: '<change-with-your-sidecar-name>',
          dockerImage: '<change-with-your-sidecar-docker-image>',
        },
      },
    },
  },
}


export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemNoVersionManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, crd }
