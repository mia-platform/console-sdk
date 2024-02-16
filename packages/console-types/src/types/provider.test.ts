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
import addFormats from 'ajv-formats'
import t from 'tap'

import { Provider, providerSchema } from './provider'
import { CAPABILITIES } from '../constants/provider'
import { validationMessage } from './validate-utils.test'

t.test('providers', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<Provider>(providerSchema)

  t.test('match schema', t => {
    t.matchSnapshot(JSON.stringify(providerSchema, null, 2))
    t.end()
  })

  t.test('validate - only required fields', t => {
    const variable: Provider = {
      providerId: 'providerId',
      type: 'type',
      urls: {
        base: 'http://base',
        apiBase: 'http://api.base',
      },
    }
    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - capabilities with specific fields', t => {
    t.test('should validate container-registry specific fields', t => {
      const variable: Provider = {
        providerId: 'providerId',
        type: 'type',
        urls: {
          base: 'http://base',
          apiBase: 'http://api.base',
        },
        capabilities: [
          {
            name: CAPABILITIES.CONTAINER_REGISTRY,
            imagePullSecretName: 'my-secret',
          },
        ],
      }

      t.ok(validate(variable), validationMessage(validate.errors))
      t.end()
    })
    t.end()
  })
  t.end()
})
