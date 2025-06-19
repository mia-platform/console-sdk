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
import { type Item, itemSchema } from './item-type-definition'

t.test('catalog item type definition', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<Item>(itemSchema)

  t.test('only required fields', t => {
    const data: Item = {
      apiVersion: 'software-catalog.mia-platform.eu/v1',
      kind: 'item-type-definition',
      metadata: {
        namespace: { scope: 'tenant', id: 'mia-platform' },
        name: 'plugin',
        creationTimestamp: '2025-06-16T12:00:00.000Z',
        visibility: { scope: 'console' },
      },
      spec: {
        type: 'plugin',
        scope: 'tenant',
      },
      __v: 0,
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<Item> = {
      apiVersion: 'software-catalog.mia-platform.eu/v1',
      kind: 'item-type-definition',
      metadata: {
        namespace: { scope: 'tenant', id: 'my-company' },
        name: 'my-plugin',
        creationTimestamp: '2025-06-16T12:00:00.000Z',
        visibility: { scope: 'tenant', ids: ['my-company'] },
        displayName: 'Plugin',
        description: 'A custom plugin',
        icon: { mediaType: 'image/svg+xml', base64Data: 'abc' },
        labels: { foo: 'bar' },
        annotations: { bar: 'foo' },
        tags: ['tag-1'],
        links: [{ url: 'https://example.com', displayName: 'Example ' }],
        maintainers: [{ name: 'Composability team', email: 'composability@team.eu' }],
        publisher: {
          name: 'Composability',
          url: 'https://example.com',
          image: { mediaType: 'image/png', base64Data: 'abc' },
        },
        customMeta: 'foo',
      },
      spec: {
        type: 'plugin',
        scope: 'tenant',
        isVersioningSupported: true,
        validation: {
          mechanism: 'json-schema',
          schema: { type: 'object' },
        },
        controlledFields: [{ key: 'foo', jsonPath: 'bar' }],
        customSpec: 'foo',
      },
      __v: 0,
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
