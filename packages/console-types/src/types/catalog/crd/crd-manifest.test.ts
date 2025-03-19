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
import { catalogCrdManifestSchema, type CatalogCrdManifest } from './crd-manifest'

t.test('catalog item manifest', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<CatalogCrdManifest>(catalogCrdManifestSchema)

  t.test('only required fields', t => {
    const data: CatalogCrdManifest = {
      type: 'custom-resource-definition',
      itemId: 'item-id',
      name: 'name',
      resources: { name: 'item-type' },
      tenantId: 'tenant-id',
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<CatalogCrdManifest> = {
      type: 'custom-resource-definition',
      itemId: 'item-id',
      name: 'name',
      resources: {
        controlledFields: [{ jsonPath: 'foo', key: 'bar' }],
        name: 'item-type',
        validation: { jsonSchema: { type: 'object' } },
      },
      tenantId: 'tenant-id',
      description: 'description',
      isVersioningSupported: true,
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
