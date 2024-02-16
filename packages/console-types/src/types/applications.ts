import { collectionName } from './collections'
import { endpoint } from './endpoints'
import { serviceName } from './services'

const applicationName = {
  type: 'string',
  minLength: 1,
  pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
}

export const application = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    generatedFrom: { type: 'string' },
    resources: {
      type: 'object',
      properties: {
        services: {
          type: 'object',
          patternProperties: {
            [serviceName.pattern]: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
        endpoints: {
          type: 'object',
          patternProperties: {
            [endpoint.basePath.pattern]: {
              type: 'object',
              properties: {
                basePath: { type: 'string' },
                service: { type: 'string' },
              },
              required: ['basePath', 'service'],
              additionalProperties: true,
            },

          },
        },
        collections: {
          type: 'object',
          patternProperties: {
            [collectionName.pattern]: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
        unsecretedVariables: {
          type: 'object',
          patternProperties: {
            '.*': {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: true,
            },
          },
        },
      },
    },
  },
} as const

export const applications = {
  type: 'object',
  patternProperties: {
    [applicationName.pattern]: application,
  },
  additionalProperties: false,
  default: {},
} as const
