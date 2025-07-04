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

import type { FromSchema, JSONSchema } from 'json-schema-to-ts'

import { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import { CatalogWellKnownItemData } from '..'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import { ICatalogCrd } from '../../crd'
import { azurePipelineSchema, gitHubActionSchema, gitlabCiSchema } from '../commons'

const type = 'infrastructure-component'

const infrastructureComponentPipelineJobsSchema = {
  type: 'object',
  description: 'Plan and Apply jobs for the Azure Pipeline',
  properties: {
    planJobName: {
      type: 'string',
      description: 'Name of the job that runs the plan step',
    },
    applyJobName: {
      type: 'string',
      description: 'Name of the job that runs the apply step',
    },
  },
} as const satisfies JSONSchema

const _resourcesSchema = {
  $id: 'catalog-infrastructure-component-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  description: `Resources of Catalog items of type ${type}`,
  properties: {
    name: {
      type: 'string',
      description: 'The name of the infrastructure component',
    },
    gitInfo: {
      type: 'object',
      description: 'Information about the infrastructure component git repository',
      properties: {
        repoUrl: {
          type: 'string',
          description: 'The HTTPS URL of the git repository containing the infrastructure component',
        },
        sshUrl: {
          type: 'string',
          description: 'The SSH URL of the git repository containing the infrastructure component',
        },
      },
    },
    pipelineInfo: {
      type: 'object',
      description: 'Information about the pipeline used to deploy the infrastructure component',
      properties: {
        'gitlab-ci': {
          type: 'object',
          properties: {
            ...gitlabCiSchema.properties,
            jobs: infrastructureComponentPipelineJobsSchema,
          },
        },
        'azure-pipelines': {
          type: 'object',
          properties: {
            ...azurePipelineSchema.properties,
            jobs: infrastructureComponentPipelineJobsSchema,
          },
        },
        'github-actions': {
          type: 'object',
          properties: {
            ...gitHubActionSchema.properties,
            jobs: infrastructureComponentPipelineJobsSchema,
          },
        },
      },
    },
  },
  required: ['name', 'gitInfo', 'pipelineInfo'],
  title: 'Catalog Infrastructure Component Resources',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    name: 'example-infrastructure-component',
    gitInfo: {
      repoUrl: 'https://gitlab.com/example/infrastructure-component.git',
      sshUrl: 'ssh://gitlab.com/example/infrastructure-component.git',
    },
    pipelineInfo: {
      'gitlab-ci': {
        branch: 'main',
        path: 'infrastructure-component/.gitlab-ci.yml',
        providerId: 'gitlab-provider',
      },
      'azure-pipelines': {
        branch: 'main',
        path: 'infrastructure-component/azure-pipelines.yml',
        providerId: 'azure-provider',
        jobs: {
          planJobName: 'plan',
          applyJobName: 'apply',
        },
      },
    },
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
    displayName: 'Infrastructure Component',
    description: 'A reusable component that can be used to build infrastructure resources in the Software Catalog',
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
    // FIXME: Use the correct URL for the documentation
    // documentation: {
    //   type: 'external',
    //   url: 'https://docs.mia-platform.eu/docs/console/project-configuration/infrastructure-project#managing-infrastructure-components',
    // },
    // FIXME: Use the correct URL for the icon
    // icon: {
    //   mediaType: 'image/svg+xml',
    //   base64Data: '',
    // },
  },
  spec: {
    type,
    scope: 'tenant',
    validation: {
      mechanism: 'json-schema',
      schema: resourcesSchema,
    },
  },
  __v: wkiDefinitionVersion,
}

const crd: ICatalogCrd.Item = {
  name: 'infrastructure-component',
  itemId: 'infrastructure-component',
  description: 'Infrastructure Component Resource Definition',
  tenantId: 'mia-platform',
  resources: {
    name: type,
    isVersioningSupported: false,
    validation: {
      jsonSchema: {
        ...resourcesSchema,
      },
    },
  },
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition, crd }
