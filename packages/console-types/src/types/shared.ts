import { JSONSchema } from 'json-schema-to-ts'

export const description = { type: 'string' } as const

export const buildType = (type: JSONSchema): JSONSchema => ({
  type: 'object',
  properties: {
    type,
  },
})
