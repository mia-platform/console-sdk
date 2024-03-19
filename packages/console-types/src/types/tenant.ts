/**
 * Copyright 2024 Mia srl
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

import { availableNamespaces, dockerImageNameSuggestion, environment, environmentsVariables, monitoring, pipelines } from './project'
import { REPOSITORY_TYPES } from '../constants/project'


export const tenant = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    tenantId: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    environments: {
      type: 'array',
      items: environment,
    },
    availableNamespaces,
    environmentsVariables,
    pipelines,
    monitoring,
    defaultTemplateId: { type: 'string' },
    repository: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: Object.values(REPOSITORY_TYPES),
        },
        providerId: { type: 'string' },
        basePath: { type: 'string' },
        visibility: { type: 'string' },
      },
    },
    logicalScopeLayers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          order: { type: 'number' },
        },
      },
    },
    imagePullSecretNames: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    configurationManagement: {
      type: 'object',
      properties: {
        saveMessageOptions: {
          type: 'object',
          properties: {
            isConfirmationRequired: { type: 'boolean' },
          },
        },
      },
    },
    dockerImageNameSuggestion,
    enabledSecurityFeatures: {
      type: 'object',
      properties: {
        seccompProfile: { type: 'boolean' },
        appArmor: { type: 'boolean' },
        hostProperties: { type: 'boolean' },
        privilegedPod: { type: 'boolean' },
      },
    },
  },
  additionalProperties: false,
  required: ['name', 'tenantId'],
} as const

export type ITenant = FromSchema<typeof tenant>
