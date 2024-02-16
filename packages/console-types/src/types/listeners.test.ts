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

/* eslint-disable max-lines */
import Ajv from 'ajv'
import t from 'tap'

import ajvConsoleErrors from '../plugins/ajv-console-errors'
import { listeners } from './listeners'
import { validationMessage } from './validate-utils.test'

const LISTENERS = {
  'my-listener': {
    name: 'my-listener',
    port: 80,
    description: 'My listener',
    selectedByDefault: false,
    readonly: true,
  },
  'another-listener': {
    name: 'another-listener',
    port: '{{PORT}}',
  },
}

t.test('listeners schema', t => {
  const ajv = new Ajv({ allErrors: true })
  ajvConsoleErrors(ajv)
  const validateListeners = ajv.compile(listeners)

  t.matchSnapshot(JSON.stringify(listeners, null, 2))

  t.test('correctly validates listeners', t => {
    const testCases = [
      {
        desc: 'base listeners',
        listeners: LISTENERS,
      },
    ]

    testCases.forEach(({ desc, listeners }) => {
      t.test(desc, t => {
        t.ok(validateListeners(listeners), validationMessage(validateListeners.errors))
        t.end()
      })
    })

    t.end()
  })

  t.test('do not validate incorrect ports', t => {
    const testListener = {
      'custom': {
        name: 'custom',
        port: 'aaa',
      },
    }

    t.notOk(validateListeners(testListener))

    t.end()
  })

  t.end()
})
