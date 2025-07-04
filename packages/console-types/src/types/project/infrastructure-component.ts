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

import { FromSchema } from 'json-schema-to-ts'

import { DEPLOYMENT_TYPES } from '../../constants/project'

export const infrastructureComponent = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'component name',
    },
    tags: {
      type: 'array',
      description: 'List of tags that can help categorizing and searching items',
      items: { type: 'string' },
    },
    gitInfo: {
      type: 'object',
      properties: {
        repoUrl: {
          type: 'string',
          description: 'Repository URL for UI link and HTTPS clone',
        },
        sshUrl: {
          type: 'string',
          description: 'Repository SSH URL for clone',
        },
      },
    },
    pipelineInfo: {
      type: 'object',
      required: ['refName'],
      additionalProperties: false,
      properties: {
        providerType: {
          type: 'string',
          enum: [
            DEPLOYMENT_TYPES.GITLAB_CI,
            DEPLOYMENT_TYPES.GITHUB,
            DEPLOYMENT_TYPES.AZURE_PIPELINES,
            DEPLOYMENT_TYPES.JENKINS,
            DEPLOYMENT_TYPES.WEBHOOK,
          ],
          description: 'Type of the provider',
        },
        providerId: {
          type: 'string',
          description: 'Provider identifier. To be used in case you want to override the main project provider',
        },
        organizationName: {
          type: 'string',
          description: 'Name of the organization in the Git provider that hosts the component. Required for Azure Pipelines and GitHub Actions',
        },
        projectId: {
          type: 'string',
          description: 'ID of the project in the git provider, used to call the provider API to handle the component deployment',
        },
        refName: {
          type: 'string',
          description: 'Name of the ref (branch/tag) used to trigger the pipeline and its jobs',
        },
        pipelineId: {
          type: 'string',
          description: 'ID of the pipeline configured in the git provider. Required for Azure Pipelines and GitHub Actions',
        },
        pipelineEventWebhookId: {
          type: 'string',
          description: 'ID of the pipeline event webhook configured in the git provider',
        },
        statusWebhookSecretCredentialsId: {
          type: 'string',
          description: 'ID of the credential item that includes the secret used to authenticate the webhook',
        },
        jobs: {
          type: 'object',
          properties: {
            planJobName: { type: 'string' },
            applyJobName: { type: 'string' },
          },
        },
      },
    },
  },
  required: ['name', 'gitInfo', 'pipelineInfo'],
} as const
export type InfrastructureComponent = FromSchema<typeof infrastructureComponent>

export const infrastructureComponents = {
  type: 'object',
  patternProperties: {
    '^[a-z]([-_a-z0-9]*[a-z0-9])?$': infrastructureComponent,
  },
} as const
export type InfrastructureComponents = FromSchema<typeof infrastructureComponents>
