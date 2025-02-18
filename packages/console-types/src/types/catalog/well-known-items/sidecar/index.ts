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
  catalogComponentIdSchema,
  catalogContainerPortsSchema,
  catalogDefaultArgsSchema,
  catalogDefaultConfigMapsSchema,
  catalogDefaultEnvironmentVariablesSchema,
  catalogDefaultProbesSchema,
  catalogDefaultResourcesSchema,
  catalogDefaultSecretsSchema,
  catalogDefaultTerminationGracePeriodSecondsSchema,
  catalogDescriptionSchema,
  catalogDockerImageSchema,
  catalogNameSchema,
} from '../commons'
import { CatalogItemManifest } from '../../item-manifest'
import { CatalogItem } from '../../item'
import { CatalogVersionedItem } from '../../versioned-item'
import { CatalogCRDManifest, PublicCatalogCRD } from '../custom-resource-definition'

const type = 'sidecar'

const resourcesSchema = {
  $id: 'catalog-sidecar-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    componentId: catalogComponentIdSchema,
    description: catalogDescriptionSchema,
    containerPorts: catalogContainerPortsSchema,
    defaultArgs: catalogDefaultArgsSchema,
    defaultConfigMaps: catalogDefaultConfigMapsSchema,
    defaultEnvironmentVariables: catalogDefaultEnvironmentVariablesSchema,
    defaultProbes: catalogDefaultProbesSchema,
    defaultResources: catalogDefaultResourcesSchema,
    defaultSecrets: catalogDefaultSecretsSchema,
    defaultTerminationGracePeriodSeconds: catalogDefaultTerminationGracePeriodSecondsSchema,
    dockerImage: catalogDockerImageSchema,
    exclusiveServiceExposure: { type: 'boolean' },
    name: catalogNameSchema,
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
  required: ['dockerImage', 'name'],
  title: 'Catalog sidecar resources',
  type: 'object',
} as const satisfies JSONSchema

const crd: CatalogCRDManifest = {
  name: 'sidecar',
  itemId: 'sidecar-definition',
  description: 'Sidecar Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: false,
  visibility: { public: true },
  resources: {
    name: type,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
        default: {
          name: 'change-with-your-sidecar-name',
          dockerImage: 'change-with-your-sidecar-docker-image',
        },
      },
    },
  },
} satisfies PublicCatalogCRD

export type CatalogSidecarResources = FromSchema<typeof resourcesSchema>
export type CatalogSidecarItem = CatalogItem<typeof type, CatalogSidecarResources>
export type CatalogSidecarVersionedItem = CatalogVersionedItem<typeof type, CatalogSidecarResources>
export type CatalogSidecarManifest = CatalogItemManifest<typeof type, CatalogSidecarResources>

export default { type, resourcesSchema, crd }
