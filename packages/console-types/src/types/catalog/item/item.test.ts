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
import { catalogItemSchema, type CatalogItem } from './item'
import { CatalogItemDocumentationType, CatalogItemReleaseStage } from './commons'

t.test('catalog item', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<CatalogItem>(catalogItemSchema)

  t.test('only required fields', t => {
    const data: CatalogItem = {
      releaseDate: new Date().toISOString(),
      type: 'type',
      itemId: 'item-id',
      name: 'name',
      tenantId: 'tenant-id',
      _id: 'uuid',
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<CatalogItem> = {
      type: 'type',
      itemId: 'item-id',
      name: 'name',
      tenantId: 'tenant-id',
      _id: 'uuid',
      category: { id: 'category-id', label: 'category-label' },
      comingSoon: true,
      componentsIds: ['component-id'],
      description: 'description',
      documentation: { type: CatalogItemDocumentationType.EXTERNAL_LINK, url: 'http://example.com' },
      imageUrl: 'http://example.com',
      isLatest: true,
      providerId: 'provider-id',
      publishOnMiaDocumentation: true,
      releaseDate: '2025-01-01T10:10:00.000Z',
      releaseStage: CatalogItemReleaseStage.BETA,
      repositoryUrl: 'http://example.com',
      resources: { foo: 'bar' },
      supportedBy: 'supported-by',
      supportedByImageUrl: 'http://example.com',
      version: { name: '1.0.0', releaseNote: 'release-note', security: true },
      visibility: { allTenants: true, public: true },
      isVersioningSupported: false,
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
