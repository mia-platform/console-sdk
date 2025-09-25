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

import { validateJsonSchemaExamples } from '../../../commons/test-utils.test'
import { validationMessage } from '../../validate-utils.test'
import { CatalogItemManifest, catalogItemManifestSchema } from './item-manifest'
import { CatalogItemDocumentationType, catalogItemLifecycleStatusEnum } from './commons'

t.test('catalog item manifest', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<CatalogItemManifest>(catalogItemManifestSchema)

  t.test('validate examples', t => {
    t.doesNotThrow(() => validateJsonSchemaExamples(catalogItemManifestSchema))

    t.end()
  })

  t.test('only required fields', t => {
    const data: CatalogItemManifest = {
      itemId: 'item-id',
      name: 'name',
      resources: { foo: 'bar' },
      tenantId: 'tenant-id',
      lifecycleStatus: 'published',
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const data: Required<CatalogItemManifest> = {
      type: 'type',
      itemTypeDefinitionRef: { name: 'type', namespace: 'mia-platform' },
      itemId: 'item-id',
      name: 'name',
      resources: { foo: 'bar' },
      tenantId: 'tenant-id',
      categoryId: 'category-id',
      description: 'description',
      documentation: { type: CatalogItemDocumentationType.EXTERNAL_LINK, url: 'http://example.com' },
      imageUrl: 'http://example.com',
      lifecycleStatus: catalogItemLifecycleStatusEnum.PUBLISHED,
      providerId: 'provider-id',
      repositoryUrl: 'http://example.com',
      supportedBy: 'supported-by',
      supportedByImageUrl: 'http://example.com',
      version: { name: '1.0.0', releaseNote: 'release-note', security: true },
      visibility: { allTenants: true, public: true },
      annotations: { foo: 'bar' },
      labels: { foo: 'bar' },
      tags: ['foo'],
      links: [{ url: 'https://example.com', displayName: 'Example' }],
      maintainers: [{ name: 'Team A', email: 'team@a.com' }],
      releaseDate: '2025-01-01T10:00:00.000Z',
      relationships: [{ target: 'foo', type: 'bar' }],
    }

    t.ok(validate(data), validationMessage(validate.errors))

    t.end()
  })

  t.end()
})
