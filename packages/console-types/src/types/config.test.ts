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

import constants from '../constants'
import { Config, config } from './config'
import { validationMessage } from './validate-utils.test'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

const { ServiceTypes } = constants

t.test('services', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile<Config>(config)

  t.test('only required fields for custom non advanced', t => {
    const config: Config = {
      services: {},
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.test('service with numeric container ports', t => {
    const config: Config = {
      services: {
        svc1: {
          name: 'svc1',
          type: ServiceTypes.CUSTOM,
          dockerImage: 'dockerimage',
          advanced: false,
          containerPorts: [{
            name: 'port1',
            from: 80,
            to: 3000,
          }],
        },
      },
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.test('service with interpolated container ports', t => {
    const config: Config = {
      services: {
        svc1: {
          name: 'svc1',
          type: ServiceTypes.CUSTOM,
          dockerImage: 'dockerimage',
          advanced: false,
          containerPorts: [{
            name: 'port1',
            from: 80,
            to: '{{PORT}}',
          }],
        },
      },
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('config compile correctly and match snapshot', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  t.ok(ajv.validateSchema(config))

  t.matchSnapshot(config)

  t.end()
})
