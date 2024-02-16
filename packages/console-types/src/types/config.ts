import { FromSchema } from 'json-schema-to-ts'

import { CmsAnalytics, cmsAnalytics, cmsCategories, cmsDashboard, cmsSettings } from './cms'
import { Collections, collections } from './collections'
import { Endpoints, endpoints } from './endpoints'
import { Listeners, listeners } from './listeners'
import { Services, configMaps, configServiceSecrets, services } from './services'
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
