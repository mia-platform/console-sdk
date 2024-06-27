import { describe, it } from 'node:test'
import assert from 'node:assert'

import axiosWrapper from '../../client/http/axios'
import { ConsoleClient } from '../../client'
import { Extensions } from '../../kiota-client/api/extensibility/tenants/item/extensions'

const baseUrl = 'https://base-url.com'

describe('console-client', () => {
  it('throws if baseUrl is not set', async() => {
    const consoleClient = new ConsoleClient('')

    const testApi = async(): Promise<Extensions[]> => {
      const extensions = await consoleClient.extensibility
        .tenants.byTenantId('some-tenant-id')
        .extensions.get()
      return extensions || []
    }
    await assert.rejects(() => testApi(), /baseUrl cannot be falsy/i)
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
