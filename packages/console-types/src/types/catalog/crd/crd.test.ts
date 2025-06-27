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

import { validationMessage } from '../../validate-utils.test'
import { itemSchema, type Item } from './crd'

t.test('catalog custom resource definition', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<Item>(itemSchema)

  t.test('only required fields', t => {
    const data: Item = {
      itemId: 'item-id',
      name: 'name',
      tenantId: 'tenant-id',
      resources: { name: 'item-type' },
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<Item> = {
      itemId: 'item-id',
      name: 'name',
      tenantId: 'tenant-id',
      description: 'description',
      resources: {
        controlledFields: [{ jsonPath: 'foo', key: 'bar' }],
        isVersioningSupported: true,
        name: 'item-type',
        validation: { jsonSchema: { type: 'object' } },
      },
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
