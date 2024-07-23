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
import { AxiosError, AxiosResponse } from 'axios'

import axiosWrapper from '../../client/http/axios'
import { ConsoleClient } from '../../client'
import { Extensions, ExtensionsPutRequestBody } from '../../kiota-client/api/extensibility/tenants/item/extensions'
import { WithExtensionGetResponse } from '../../kiota-client/api/extensibility/tenants/item/extensions/item'

const baseUrl = 'https://base-url.com'

const buildAxiosError = (errorResponse: unknown): AxiosError => {
  const axiosError = new AxiosError()
  axiosError.response = { data: errorResponse } as AxiosResponse<unknown>
  return axiosError
}

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
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'user-agent': 'console-client',
        },
        method: 'GET',
      },
    ])
    assert.deepEqual(extensions, mockedExtensions)
  })

  describe('verbs integration', () => {
    const testTenantId = 'some-tenant-id'
    const testExtensionId = 'the-extension-id'

    describe('GET /{id} method', () => {
      it('properly invokes api', async(t) => {
        const expectedUrl = `/api/extensibility/tenants/${testTenantId}/extensions/${testExtensionId}`
        const expectedResult: WithExtensionGetResponse = {
          extensionId: 'the-extension-id',
          activationContexts: ['company'],
          name: 'The Extension',
          type: 'iframe',
          entry: 'http://my-extension:8000',
        }

        const mock = async(url: string): Promise<unknown> => {
          assert.equal(url, expectedUrl)
          return Promise.resolve({ data: expectedResult })
        }
        const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', mock)

        const response = await new ConsoleClient('').extensibility
          .tenants.byTenantId(testTenantId)
          .extensions
          .byExtensionId(testExtensionId)
          .get()

        const { calls } = axiosMock.mock
        assert.equal(calls.length, 1)

        const [axiosCall] = calls
        assert.deepEqual(axiosCall.arguments, [
          expectedUrl,
          {
            data: undefined,
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'user-agent': 'console-client',
            },
            method: 'GET',
          },
        ])

        assert.deepEqual(response, expectedResult)
      })

      it('handles error', async(t) => {
        const expectedUrl = `/api/extensibility/tenants/${testTenantId}/extensions/${testExtensionId}`
        const expectedError = {
          statusCode: 500,
          error: 'some-error',
          message: 'some-message',
        }

        const mock = async(url: string): Promise<unknown> => {
          assert.equal(url, expectedUrl)
          return Promise.reject(buildAxiosError(expectedError))
        }

        t.mock.method(axiosWrapper, 'axiosFn', mock)

        const response = new ConsoleClient('').extensibility
          .tenants.byTenantId(testTenantId).
          extensions.byExtensionId(testExtensionId)
          .get()

        await assert.rejects(response, expectedError)
      })
    })

    describe('PUT method', () => {
      const expectedUrl = `/api/extensibility/tenants/${testTenantId}/extensions`

      it('properly invokes api', async(t) => {
        const expectedResult = { extensionId: 'created-id' }
        const mock = async(url: string): Promise<unknown> => {
          assert.equal(url, expectedUrl)
          return Promise.resolve({ data: expectedResult })
        }
        const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', mock)

        const createData: ExtensionsPutRequestBody = {
          contexts: ['company', 'project'],
          name: 'extension name',
        }

        const response = await new ConsoleClient('').extensibility
          .tenants.byTenantId(testTenantId)
          .extensions
          .put(createData)

        const { calls } = axiosMock.mock
        assert.equal(calls.length, 1)

        const [axiosCall] = calls
        assert.deepEqual(axiosCall.arguments[0], expectedUrl)
        assert.deepEqual(axiosCall.arguments[1]?.headers, {
          'accept': 'application/json',
          'content-type': 'application/json',
          'user-agent': 'console-client',
        })
        assert.deepEqual(axiosCall.arguments[1]?.method, 'PUT')
        assert.deepEqual(
          JSON.parse(Buffer.from(axiosCall.arguments[1]?.data as Uint8Array).toString()),
          {
            contexts: 'company, project',
            name: 'extension name',
          }
        )
        assert.deepEqual(response, expectedResult)
      })
    })

    describe('DELETE method', () => {
      const expectedUrl = `/api/extensibility/tenants/${testTenantId}/extensions/${testExtensionId}`

      it('properly invokes delete', async(t) => {
        const mock = async(url: string): Promise<unknown> => {
          assert.equal(url, expectedUrl)
          return Promise.resolve({ status: 204 })
        }
        const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', mock)

        await new ConsoleClient('').extensibility
          .tenants.byTenantId(testTenantId)
          .extensions.byExtensionId(testExtensionId)
          .delete()

        const { calls } = axiosMock.mock
        assert.equal(calls.length, 1)

        const [axiosCall] = calls
        assert.deepEqual(axiosCall.arguments, [
          expectedUrl,
          {
            data: undefined,
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json',
              'user-agent': 'console-client',
            },
            method: 'DELETE',
          },
        ])
      })

      it('handles error', async(t) => {
        const mock = async(url: string): Promise<unknown> => {
          assert.equal(url, expectedUrl)
          return Promise.reject(buildAxiosError({
            statusCode: 500,
            error: 'the error',
            message: 'the message',
          }))
        }

        t.mock.method(axiosWrapper, 'axiosFn', mock)
        assert.rejects(async() =>
          new ConsoleClient('').extensibility
            .tenants.byTenantId(testTenantId)
            .extensions.byExtensionId(testExtensionId)
            .delete()
        , { name: 'ConsoleRequestError', message: 'the message' })
      })
    })
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
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'user-agent': 'console-client',
        },
        method: 'GET',
      },
    ])
    assert.deepEqual(extensions, mockedExtensions)
  })

  it('exposes extensibility fluent APIs correctly', async(t) => {
    const consoleClient = new ConsoleClient(baseUrl)
    const testTenantId = 'some-tenant-id'
    const testExtensionId = 'some-extension-id'

    const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', async(_url: string) => {
      const okResponse = {
        status: 204,
        headers: new Map<string, string>(),
      }
      return Promise.resolve(okResponse)
    })

    await consoleClient.extensibility.extensions.get()
    await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.get()
    await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.byExtensionId(testExtensionId).get()

    // TODO: add not implemented methods

    const { calls } = axiosMock.mock
    assert.equal(calls.length, 3)
  })
})
