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
import ajvConsoleErrors from '../plugins/ajv-console-errors'

t.test('providers', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
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

  t.test('validate - gitlab type', t => {
    const variable: Provider = {
      providerId: 'gitlab',
      type: 'gitlab',
      urls: {
        base: 'http://base-url',
        apiBase: 'http://base-url/api',
      },
      capabilities: [{
        name: CAPABILITIES.GIT_PROVIDER,
        repositoryPathTemplate: '/repo-path',
      }],
      visibility: { allTenants: true },
    }
    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - Jenkins with options', t => {
    const variable: Provider = {
      providerId: 'jenkins',
      type: 'jenkins',
      urls: {
        base: 'http://base-url',
        apiBase: 'http://base-url/api',
      },
      capabilities: [{
        name: CAPABILITIES.CI_CD_TOOL,
        deployPipelineNameTemplate: 'configurations',
        servicesPipelineNameTemplate: '{{serviceId}}',
        apiBaseUrlPathTemplate: '/api/{{projectId}}',
      }],
      visibility: { allTenants: true },
    }

    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - Jenkins without options', t => {
    const variable: Provider = {
      providerId: 'jenkins',
      type: 'jenkins',
      urls: {
        base: 'http://base-url',
        apiBase: 'http://base-url/api',
      },
      capabilities: [{
        name: CAPABILITIES.CI_CD_TOOL,
      }],
      visibility: { allTenants: true },
    }

    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
