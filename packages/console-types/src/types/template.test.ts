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
import addFormats from 'ajv-formats'

import { ITemplate, template } from './template'
import { validationMessage } from './validate-utils.test'
import { MLP } from '../constants/project'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

t.test('templates validated', t => {
  const ajv = new Ajv()

  ajvConsoleErrors(ajv)
  addFormats(ajv)

  const validate = ajv.compile<ITemplate>(template)

  t.test('only required fields', t => {
    const template: ITemplate = {
      name: 'template-name',
      templateId: 'my-template-id',
    }

    t.ok(validate(template), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const template: Required<ITemplate> = {
      _id: 'object-id',
      name: 'template-name',
      templateId: 'my-template-id',
      tenantId: 'my-tenant-id',
      providerId: 'my-provider-id',
      description: 'my description',
      archiveUrl: 'http://my-archive/url.trgz',
      visibility: {
        allTenants: false,
      },
      deploy: {
        runnerTool: MLP,
        useMiaPrefixEnvs: false,
      },
      enabledServices: {
        'my-service': true,
      },
      staticSecret: {
        secret: 'the-secret',
        description: 'the description',
        active: true,
        clientType: 'clienttype',
      },
      cmsImageName: 'cms-image',
      dashboards: [{
        id: 'dash-1',
        label: 'Dashboard 1',
        type: 'iframe',
        url: 'the-url',
      }],
    }

    t.ok(validate(template), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
