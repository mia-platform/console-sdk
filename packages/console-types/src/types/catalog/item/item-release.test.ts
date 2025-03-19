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
import { CatalogItemReleaseStage } from './commons'
import { catalogItemReleaseSchema, type CatalogItemRelease } from './item-release'

t.test('catalog release', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<CatalogItemRelease>(catalogItemReleaseSchema)

  t.test('only required fields', t => {
    const data: CatalogItemRelease = {
      description: 'description',
      name: 'name',
      releaseDate: '2025-01-01T10:10:00.000Z',
      releaseNote: 'release-note',
      version: '1.0.0',
      reference: 'reference',
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<CatalogItemRelease> = {
      description: 'description',
      name: 'name',
      releaseDate: '2025-01-01T10:10:00.000Z',
      releaseNote: 'release-note',
      version: '1.0.0',
      reference: 'reference',
      comingSoon: true,
      isLatest: true,
      security: true,
      releaseStage: CatalogItemReleaseStage.STABLE,
      visibility: { public: true, allTenants: true },
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
