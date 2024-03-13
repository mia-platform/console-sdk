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

import { ITenant, tenant } from './tenant'
import { PROMETHEUS_OPERATOR } from '../constants/project'
import { fullEnvironment } from './project.test'
import { validationMessage } from './validate-utils.test'

t.test('tenants validated', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<ITenant>(tenant)

  t.test('only required fields', t => {
    const tenant: ITenant = {
      name: 'tenant-name',
      tenantId: 'my-tenant-id',
    }

    t.ok(validate(tenant), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const tenant: Required<ITenant> = {
      _id: 'object-id',
      name: 'tenant-name',
      tenantId: 'my-tenant-id',
      description: 'my description',
      environments: [fullEnvironment],
      availableNamespaces: [{
        value: 'avail-ns',
        label: 'Avail Ns',
      }],
      pipelines: {
        type: 'gitlab-ci',
        azurePipelineId: 123,
      },
      monitoring: {
        systems: [{
          type: PROMETHEUS_OPERATOR,
        }],
      },
      defaultTemplateId: 'default-template',
      environmentsVariables: {
        type: 'vault',
        providerId: 'my-vault',
      },
      repository: {
        type: 'gitlab',
        providerId: 'my-provider',
        basePath: 'the-base-path',
        visibility: 'visible',
      },
      logicalScopeLayers: [{
        name: 'clients',
        order: 1,
      }],
      imagePullSecretNames: ['some-imagePullSecret-here', 'some-other-one'],
      configurationManagement: {
        saveMessageOptions: {
          isConfirmationRequired: true,
        },
      },
    }

    t.ok(validate(tenant), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
