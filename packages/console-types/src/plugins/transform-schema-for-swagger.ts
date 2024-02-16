import { JSONObject } from '@fastify/swagger'
import { FastifySchema } from 'fastify'

import { VALIDATION_ERROR_ID } from '../strings'

declare module 'fastify' {
  interface FastifySchema {
    [VALIDATION_ERROR_ID]?: string
  }
}

export default function transformSchemaForSwagger(
  { schema, url }: { schema: FastifySchema, url: string }
): ({ schema: JSONObject, url: string }) {
  delete schema[VALIDATION_ERROR_ID]
  return {
    schema: schema as unknown as JSONObject,
    url,
  }
}
