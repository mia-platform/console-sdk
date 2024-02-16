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

import { apiKey, APIKey } from './apikeys'
import { validationMessage } from './validate-utils.test'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

const apiKeyData: APIKey = {
  secret: 'secret',
  active: true,
  clientType: 'clientType',
}

t.test('api keys', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile<APIKey>(apiKey)

  t.test('only required fields', t => {
    t.ok(validate(apiKeyData), validationMessage(validate.errors))
    t.end()
  })

  t.test('all fields', t => {
    const fullApiKey: Required<APIKey> = {
      ...apiKeyData,
      description: 'test',
    }
    t.ok(validate(fullApiKey), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
