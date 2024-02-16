import Ajv from 'ajv'
import t from 'tap'
import { FastifySchema } from 'fastify'

import transform from './transform-schema-for-swagger'
import ajvConsoleErrors from './ajv-console-errors'
import { VALIDATION_ERROR_ID } from '../strings'

t.test('transform schema', t => {
  const jsonSchema = {
    type: 'string',
    [VALIDATION_ERROR_ID]: 'resourceName.patternError',
  }
  const url = 'my-url'

  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  t.test('remove VALIDATION_ERROR_ID if present', t => {
    const schema = transform({ schema: jsonSchema, url })

    t.strictSame(schema, {
      schema: {
        type: 'string',
      },
      url,
    })

    t.end()
  })

  t.test('noop if VALIDATION_ERROR_ID not present', t => {
    const jsonSchema = {
      type: 'string',
    } as FastifySchema
    const schema = transform({ schema: jsonSchema, url })

    t.strictSame(schema, {
      schema: {
        type: 'string',
      },
      url,
    })

    t.end()
  })

  t.end()
})
