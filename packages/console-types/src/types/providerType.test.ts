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

import { ProviderType, providerTypeSchema } from './providerType'
import { validationMessage } from './validate-utils.test'

t.test('providerType', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<ProviderType>(providerTypeSchema)

  t.test('match schema', t => {
    t.matchSnapshot(JSON.stringify(providerTypeSchema, null, 2))
    t.end()
  })

  t.test('validate - only required fields', t => {
    const providerType: ProviderType = {
      type: 'GitLab',
      imageUrl: '/v2/files/download/0bc3dfd3-5f95-4699-afa2-df0d87397eef.png',
      capabilities: [
        {
          name: 'git-provider',
          allowedRepositoryVisibilities: ['internal', 'public', 'private'],
        },
        {
          name: 'secret-manager',
        },
        {
          name: 'ci-cd-tool',
        },
      ],
      credentialTypes: ['token', 'm2m', 'userPass', 'client_credentials'],
    }

    t.ok(validate(providerType), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - only required fields', t => {
    const providerType: ProviderType = {
      type: 'extension-api',
      imageUrl: '/v2/files/download/0bc3dfd3-5f95-4699-afa2-df0d87397eef.png',
      capabilities: [{ name: 'orchestrator-generator' }],
      credentialTypes: ['token'],
    }

    t.ok(validate(providerType), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - only required fields and functionalities', t => {
    const providerType: ProviderType = {
      type: 'GitLab',
      imageUrl: '/v2/files/download/0bc3dfd3-5f95-4699-afa2-df0d87397eef.png',
      capabilities: [
        {
          name: 'git-provider',
          allowedRepositoryVisibilities: ['internal', 'public', 'private'],
          functionalities: [
            {
              name: 'marketplace',
            },
          ],
        },
        {
          name: 'secret-manager',
        },
        {
          name: 'ci-cd-tool',
        },
      ],
      credentialTypes: ['token', 'm2m', 'userPass', 'client_credentials'],
    }

    t.ok(validate(providerType), validationMessage(validate.errors))
    t.end()
  })

  t.test('fails credentialTypes validation', t => {
    const providerType: ProviderType = {
      type: 'GitLab',
      imageUrl: '/v2/files/download/0bc3dfd3-5f95-4699-afa2-df0d87397eef.png',
      capabilities: [
        {
          name: 'git-provider',
          allowedRepositoryVisibilities: ['internal', 'public', 'private'],
        },
        {
          name: 'secret-manager',
        },
        {
          name: 'ci-cd-tool',
        },
      ],
      credentialTypes: ['token', 'm2m', 'userPass', 'client_credentials', 'random'],
    }

    t.notOk(validate(providerType), validationMessage(validate.errors))
    t.end()
  })

  t.test('should accept a container registry provider type', t => {
    const providerType: ProviderType = {
      type: 'container-registry',
      label: 'Container Registry',
      capabilities: [{ name: 'container-registry' }],
      imageUrl: '/v2/files/download/0bc3dfd3-5f95-4699-afa2-df0d87397eef.png',
    }

    t.ok(validate(providerType))
    t.end()
  })

  t.end()
})
