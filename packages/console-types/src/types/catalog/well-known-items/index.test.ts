/**
 * Copyright 2025 Mia srl
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
import addFormats from 'ajv-formats'
import fs from 'fs/promises'
import path from 'path'

import type { JSONSchema } from '../../../commons/json-schema'

type ItemModule = {
  default: {
    type: string
    resourcesSchema: JSONSchema
  }
}

t.test('catalog well-known items', async t => {
  const ajv = new Ajv()
  addFormats(ajv)

  type TestCase = {
    indexPath: string
    itemName: string
  }

  const files = await fs.readdir(__dirname, { withFileTypes: true })
  const testCases = files.reduce<TestCase[]>((acc, cur) => {
    if (cur.isDirectory()) {
      acc.push({
        itemName: cur.name,
        indexPath: path.resolve(cur.parentPath, cur.name, 'index.ts'),
      })
    }

    return acc
  }, [])

  for (const testCase of testCases) {
    t.test(`${testCase.itemName} resources should be a valid JSON schema`, async t => {
      const { default: itemData } = await import(testCase.indexPath) as ItemModule

      t.doesNotThrow(() => ajv.compile(itemData.resourcesSchema))

      t.end()
    })
  }

  t.end()
})
