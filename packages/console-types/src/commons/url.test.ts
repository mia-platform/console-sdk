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

import ajvConsoleErrors from '../plugins/ajv-console-errors'
import url from './url'

t.test('url schema', t => {
  const ajv = new Ajv()

  ajvConsoleErrors(ajv)
  addFormats(ajv)

  const validate = ajv.compile<string>(url)

  const testCases = [
    {
      name: 'hostname is valid',
      value: 'console.mia-platform.eu',
      isValid: true,
    },
    {
      name: 'ipv4 is valid',
      value: '192.168.1.1',
      isValid: true,
    },
    {
      name: 'ipv6 is valid',
      value: '2001:0db8:0000:0000:0000:8a2e:0370:7334',
      isValid: true,
    },
    {
      name: 'shortened ipv6 is valid',
      value: '2001:db8::8a2e:370:7334',
      isValid: true,
    },
    {
      name: 'http URI is valid',
      value: 'http://mia-platform.eu/the-path/',
      isValid: true,
    },
    {
      name: 'https URI is valid',
      value: 'https://mia-platform.eu/the-path/',
      isValid: true,
    },
    {
      name: 'ftp URI is not valid',
      value: 'ftp://mia-platform.eu/the-path/',
      isValid: false,
    },
  ]

  testCases.forEach(testCase => {
    t.test(testCase.name, t => {
      const assertion = testCase.isValid ? t.ok : t.notOk

      assertion(validate(testCase.value))

      t.end()
    })
  })

  t.end()
})
