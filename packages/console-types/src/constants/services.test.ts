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

import ajvConsoleErrors from '../plugins/ajv-console-errors'
import { schedule } from './services'
import { validationMessage } from '../types/validate-utils.test'

t.test('schedule schema', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  const validate = ajv.compile(schedule)
  t.ok(validate('{{SCHEDULE}}'), validationMessage(validate.errors))
  t.ok(validate('* * * * *'), validationMessage(validate.errors))

  t.end()
})
