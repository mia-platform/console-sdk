import { FromSchema } from 'json-schema-to-ts'

import { monitoring, availableNamespaces, pipelines, environment, environmentsVariables } from './project'
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
  },
  additionalProperties: false,
  required: ['name', 'tenantId'],
} as const

export type ITenant = FromSchema<typeof tenant>
