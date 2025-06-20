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
import { catalogExampleServiceSchema } from './example'
import { catalogPluginServiceSchema } from './plugin'
import { catalogTemplateServiceSchema } from './template'
import { catalogProxyServiceSchema } from './proxy'
import { CatalogWellKnownItemData } from '.'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVisibility } from './utils'

type ItemModule = { data: CatalogWellKnownItemData }

t.test('catalog well-known items', async t => {
  const ajv = new Ajv({ addUsedSchema: false })
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
      const { data: itemData } = await import(testCase.indexPath) as ItemModule

      t.doesNotThrow(() => ajv.compile(itemData.resourcesSchema))

      t.end()
    })

    t.test(`${testCase.itemName} ITD should be valid`, async t => {
      const { data: itemData } = await import(testCase.indexPath) as ItemModule

      t.hasProp(itemData, 'typeDefinition')

      t.same(itemData.typeDefinition.metadata.namespace, wkiDefinitionNamespace)
      t.equal(itemData.typeDefinition.metadata.name, itemData.type)
      t.same(itemData.typeDefinition.metadata.visibility, wkiDefinitionVisibility)
      t.same(itemData.typeDefinition.metadata.maintainers, wkiDefinitionMaintainers)
      t.same(itemData.typeDefinition.metadata.publisher, wkiDefinitionPublisher)
      t.same(itemData.typeDefinition.spec.type, itemData.type)

      t.doesNotThrow(() => ajv.compile(itemData.typeDefinition.spec.validation?.schema as JSONSchema))

      t.end()
    })
  }

  t.test('auxiliary schemas should be valid', t => {
    t.doesNotThrow(() => ajv.compile(catalogExampleServiceSchema))
    t.doesNotThrow(() => ajv.compile(catalogPluginServiceSchema))
    t.doesNotThrow(() => ajv.compile(catalogTemplateServiceSchema))
    t.doesNotThrow(() => ajv.compile(catalogProxyServiceSchema))

    t.end()
  })

  t.end()
})
