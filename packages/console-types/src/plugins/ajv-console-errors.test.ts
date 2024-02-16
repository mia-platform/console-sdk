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
import t from 'tap'

import { VALIDATION_ERROR_ID } from '../strings'
import addConsoleErrors from './ajv-console-errors'

t.test('validation', t => {
  const ajv = new Ajv()
  addConsoleErrors(ajv)

  const schemaWithKeyword = {
    type: 'object',
    properties: {
      field: {
        type: 'number',
      },
      name: {
        type: 'string',
        pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
        [VALIDATION_ERROR_ID]: 'resourceName.patternError',
      },
    },
  }

  const schemaWithoutValidationErrorId = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
      },
    },
  }

  t.test('if pattern not match type returns correct error message', t => {
    const validate = ajv.compile(schemaWithKeyword)
    validate({ name: 11 })
    t.strictSame(validate.errors?.length, 1)
    t.strictSame(validate.errors?.[0].message, 'must be string')
    t.end()
  })

  t.test('without validation error id', t => {
    const validateWithoutErrorId = ajv.compile(schemaWithoutValidationErrorId)
    validateWithoutErrorId({ name: 'NOT_VALID' })
    t.strictSame(validateWithoutErrorId.errors?.length, 1)
    t.strictSame(validateWithoutErrorId.errors?.[0].message, 'must match pattern "^[a-z]([-a-z0-9]*[a-z0-9])?$"')
    t.end()
  })

  t.end()
})
