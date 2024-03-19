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

import { enabledServicesSchema } from './project'
import { ALLOWED_RUNNER_TOOLS } from '../constants/project'

export const template = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    templateId: { type: 'string' },
    tenantId: { type: 'string' },
    providerId: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    archiveUrl: { type: 'string' },
    visibility: {
      type: 'object',
      properties: {
        allTenants: { type: 'boolean' },
      },
    },
    deploy: {
      type: 'object',
      properties: {
        runnerTool: { type: 'string', enum: ALLOWED_RUNNER_TOOLS },
        useMiaPrefixEnvs: { type: 'string' },
        projectStructure: { type: 'string' },
      },
    },
    enabledServices: enabledServicesSchema,
    staticSecret: {
      type: 'object',
      properties: {
        secret: {
          type: 'string',
          minLength: 1,
          pattern: '^[^\\s]+$',
        },
        active: { type: 'boolean' },
        description: { type: 'string' },
        clientType: {
          type: 'string',
          pattern: '^[a-zA-Z_][A-Za-z0-9_]*$',
        },
      },
      additionalProperties: false,
    },
    cmsImageName: { type: 'string' },
  },
  additionalProperties: false,
  required: ['name', 'templateId'],
} as const

export type ITemplate = FromSchema<typeof template>
