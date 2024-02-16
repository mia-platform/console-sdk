import { FromSchema } from 'json-schema-to-ts'

import { enabledServicesSchema } from './project'

export const template = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    templateId: { type: 'string' },
    tenantId: { type: 'string' },
    providerId: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
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
