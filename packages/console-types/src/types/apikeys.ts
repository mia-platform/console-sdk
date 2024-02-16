import { FromSchema } from 'json-schema-to-ts'

import { description } from './shared'
import { VALIDATION_ERROR_ID } from '../strings'

export const apiKeyString = {
  type: 'string',
  minLength: 1,
  pattern: '^[^\\s]+$',
  [VALIDATION_ERROR_ID]: 'apiKey.patternError',
} as const

export const clientType = {
  type: 'string',
  pattern: '^[a-zA-Z_][A-Za-z0-9_]*$',
  [VALIDATION_ERROR_ID]: 'clientType.patternError',
} as const

export const apiKey = {
  type: 'object',
  properties: {
    secret: apiKeyString,
    active: { type: 'boolean' },
    description,
    clientType,
  },
  required: ['secret', 'active', 'clientType'],
  additionalProperties: false,
} as const
export type APIKey = FromSchema<typeof apiKey>

// @Deprecated
export const secret = apiKey

export const apiKeys = {
  type: 'array',
  items: apiKey,
  default: [],
} as const

// @Deprecated
export const secrets = apiKeys
