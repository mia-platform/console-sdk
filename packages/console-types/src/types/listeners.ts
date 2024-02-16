import { FromSchema } from 'json-schema-to-ts'

import { DIGIT_OR_INTERPOLATION_PATTERN } from '../constants/services'
import { port } from './services'

const numericListenerPort = { ...port } as const
const interpolatedListenerPort = {
  type: 'string',
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
} as const
export type ListenerPortNumericValue = FromSchema<typeof numericListenerPort>
export type ListenerPortInterpolatedValue = FromSchema<typeof interpolatedListenerPort>

export const listenerPortProperties = {
  name: {
    type: 'string',
  },
  port: {
    if: { type: 'number' },
    then: numericListenerPort,
    else: interpolatedListenerPort,
  },
} as const

const listener = {
  type: 'object',
  properties: {
    name: listenerPortProperties.name,
    port: listenerPortProperties.port,
    description: {
      type: 'string',
    },
    selectedByDefault: {
      type: 'boolean',
    },
    readonly: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
  required: ['name', 'port'],
} as const

export const listeners = {
  type: 'object',
  additionalProperties: listener,
} as const

export type PortNumericValue = FromSchema<typeof numericListenerPort>
export type PortInterpolatedValue = FromSchema<typeof interpolatedListenerPort>

export type Listener = FromSchema<typeof listener, { parseIfThenElseKeywords: true }>
export type Listeners = Record<string, Listener>
