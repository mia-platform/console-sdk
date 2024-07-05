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

import { describe, it } from 'node:test'
import assert from 'node:assert'

import axiosWrapper from '../../client/http/axios'
import { ConsoleClient } from '../../client'
import { Extensions } from '../../kiota-client/api/extensibility/tenants/item/extensions'

const baseUrl = 'https://base-url.com'

describe('console-client', () => {
  it('calls APIs correctly without baseUrl set', async(t) => {
    const testTenantId = 'some-tenant-id'
    const apiPath = `/api/extensibility/tenants/${testTenantId}/extensions`
    const expectedUrl = apiPath

    const mockedExtensions: Extensions[] = [
      {
        extensionId: 'some-id-1',
        name: 'extension-1',
        description: 'this is extension 1',
      },
    ]

    const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', async(url: string) => {
      assert.equal(url, expectedUrl)

      const response = {
        data: mockedExtensions,
        status: 200,
        headers: new Map<string, string>(),
      }
      return Promise.resolve(response)
    })

    const consoleClient = new ConsoleClient('')

    const extensions = await consoleClient.extensibility
      .tenants.byTenantId(testTenantId)
      .extensions.get()

    const { calls } = axiosMock.mock
    assert.equal(calls.length, 1)

    const [axiosCall] = calls
    assert.deepEqual(axiosCall.arguments, [
      expectedUrl,
      {
        data: undefined,
        headers: [
          ['accept', 'application/json'],
          ['content-type', 'application/json'],
          ['user-agent', 'console-client'],
        ],
        method: 'GET',
      },
    ])
    assert.deepEqual(extensions, mockedExtensions)
  })

  it('sets default headers correctly', async(t) => {
    const consoleClient = new ConsoleClient(baseUrl)
    const testTenantId = 'some-tenant-id'
    const apiPath = `/api/extensibility/tenants/${testTenantId}/extensions`
    const expectedUrl = `${baseUrl}${apiPath}`

    const mockedExtensions: Extensions[] = [
      {
        extensionId: 'some-id-1',
        name: 'extension-1',
        description: 'this is extension 1',
      },
    ]

    const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', async(url: string) => {
      assert.equal(url, expectedUrl)

      const response = {
        data: mockedExtensions,
        status: 200,
        headers: new Map<string, string>(),
      }
      return Promise.resolve(response)
    })

    const extensions = await consoleClient.extensibility
      .tenants.byTenantId(testTenantId)
      .extensions.get()

    const { calls } = axiosMock.mock
    assert.equal(calls.length, 1)

    const [axiosCall] = calls
    assert.deepEqual(axiosCall.arguments, [
      expectedUrl,
      {
        data: undefined,
        headers: [
          ['accept', 'application/json'],
          ['content-type', 'application/json'],
          ['user-agent', 'console-client'],
        ],
        method: 'GET',
      },
    ])
    assert.deepEqual(extensions, mockedExtensions)
  })

  it('exposes extensibility fluent APIs correctly', async(t) => {
    const consoleClient = new ConsoleClient(baseUrl)
    const testTenantId = 'some-tenant-id'

    const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', async(_url: string) => {
      const okResponse = {
        status: 204,
        headers: new Map<string, string>(),
      }
      return Promise.resolve(okResponse)
    })

    await consoleClient.extensibility.extensions.get()
    await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.get()

    // TODO: add not implemented methods

    const { calls } = axiosMock.mock
    assert.equal(calls.length, 2)
  })
})
