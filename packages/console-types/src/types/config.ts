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

import { CmsAnalytics, cmsAnalytics, cmsCategories, cmsDashboard, cmsSettings } from './cms'
import { Collections, collections } from './collections'
import { Endpoints, endpoints } from './endpoints'
import { Listeners, listeners } from './listeners'
import { Services, configMaps, configServiceSecrets, serviceAccounts, services } from './services'
import { apiKeys } from './apikeys'
import { applications } from './applications'
import { decorators } from './decorators'
import { unsecretedVariables } from './publicVariables'

export const config = {
  type: 'object',
  properties: {
    applications,
    endpoints,
    listeners,
    collections,
    groups: { type: 'array', default: [] },
    secrets: apiKeys,
    cmsCategories,
    cmsSettings,
    cmsAnalytics,
    cmsDashboard,
    decorators,
    services,
    apiVersions: { type: 'array', default: [] },
    version: { type: 'string' },
    platformVersion: { type: 'string' },
    lastConfigFileCommitId: { type: 'string' },
    lastCommitAuthor: { type: 'string' },
    commitId: { type: 'string' },
    committedDate: { type: 'string' },
    configMaps,
    serviceSecrets: configServiceSecrets,
    serviceAccounts,
    unsecretedVariables,
  },
  additionalProperties: false,
  required: [
    'endpoints',
    'collections',
    'groups',
    'secrets',
    'cmsCategories',
    'cmsSettings',
    'cmsAnalytics',
    'services',
    'decorators',
    'cmsDashboard',
  ],
} as const

type EnhancedConfigFields = {
  services: Services
  endpoints: Endpoints
  collections: Collections
  cmsAnalytics: CmsAnalytics
  listeners?: Listeners
}

export type Config =
  Omit<
    FromSchema<typeof config>,
    // NOTE: these omitted fields are included in EnhancedConfigFields for type evaluation
    'services' | 'endpoints' | 'collections' | 'cmsAnalytics' | 'listeners'
  > & EnhancedConfigFields
