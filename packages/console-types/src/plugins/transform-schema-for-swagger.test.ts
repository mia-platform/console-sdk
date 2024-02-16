/**
 * Copyright 2024 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Ajv from 'ajv'
import { FastifySchema } from 'fastify'
import t from 'tap'

import { VALIDATION_ERROR_ID } from '../strings'
import ajvConsoleErrors from './ajv-console-errors'
import transform from './transform-schema-for-swagger'

t.test('transform schema', t => {
  const url = 'my-url'

  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  t.test('remove VALIDATION_ERROR_ID if present', t => {
    const jsonSchema = {
      type: 'string',
      [VALIDATION_ERROR_ID]: 'resourceName.patternError',
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
