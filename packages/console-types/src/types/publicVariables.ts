import { FromSchema } from 'json-schema-to-ts'

import { VALIDATION_ERROR_ID } from '../strings'

export const variableKey = {
  type: 'string',
  pattern: '^([A-Z])([A-Z0-9_]*)$',
  [VALIDATION_ERROR_ID]: 'variableKey.patternError',
}

export const unsecretedVariable = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    environments: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          value: { type: 'string' },
        },
        required: ['value'],
        additionalProperties: false,
      },
    },
    readOnly: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'environments'],
} as const

export type PublicVariable = FromSchema<typeof unsecretedVariable>

export const unsecretedVariables = {
  type: 'array',
  default: [],
  items: unsecretedVariable,
} as const
