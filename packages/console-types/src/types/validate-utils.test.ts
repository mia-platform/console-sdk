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

import { DefinedError, ErrorObject } from 'ajv'

export function validationMessage(errors?: ErrorObject[] | null): string {
  let message = ''
  if (!errors) {
    return message
  }
  for (const error of errors as DefinedError[]) {
    message += `${error.message} (${error.instancePath})`
  }
  return message
}

export type PatternTest = {
  name: string
  items: string[]
  assertion: 'ok' | 'notOk'
}

// eslint-disable-next-line no-undef
export function createTestsRegex(t: Tap.Test, tests: PatternTest[], regex: RegExp) {
  for (const test of tests) {
    t.test(test.name, t => {
      test.items.forEach(item => {
        t.test(item, t => {
          t[test.assertion](regex.test(item))
          t.end()
        })
      })
      t.end()
    })
  }
}
