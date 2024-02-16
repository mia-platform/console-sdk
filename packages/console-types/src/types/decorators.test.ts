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

import t from 'tap'

import { decoratorPath } from './decorators'
import { PatternTest, createTestsRegex } from './validate-utils.test'

t.test('decoratorPath json schema pattern', t => {
  const regex = new RegExp(decoratorPath.pattern)

  const tests: PatternTest[] = [{
    name: 'is a valid decoratorPath',
    items: [
      '/foo/bar',
      '/:s/bar',
      '/foo/:s/bar',
      '/',
      '/fff5/:sds5/fdsf',
      '/foo-bar/:path/foo',
      '/$1/asd',
      '/foo/$1',
      '/:foo/$1',
      '/checkACL',
      '/foo/bar_foo',
    ],
    assertion: 'ok',
  }, {
    name: 'is not a valid decoratorPath',
    items: [
      '/foo/:/bar',
      '/:/bar',
      '/aa:s/bar',
      '//bar',
      '////fds',
      '////:fds',
      '//:/bar',
      '/fff//fdsf',
      '/fff5/5dsa',
      '/fff5/5',
      '/fff5/:5',
      '/fff5/:sds5/fds/',
      '//',
      '/foo-bar/:path/-foo',
      'fooBar',
    ],
    assertion: 'notOk',
  }]

  createTestsRegex(t, tests, regex)

  t.end()
})
