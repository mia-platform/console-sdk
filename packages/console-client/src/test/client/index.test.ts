/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it } from 'node:test'
import assert from 'node:assert'

import axiosWrapper from '../../client/http/axios/customAxios'
import { ConsoleClient } from '../../client'
import { Extensions } from '../../kiota-client/api/extensibility/tenants/item/extensions'
import { invokeGetter, isGetter, isRequestBuilder } from '../testUtils'

const baseUrl = 'https://base-url.com'

class Node {
  private methods = [] as Node[]
  constructor(
    private name: string
  ) {}

  get methodName(): string {
    return this.name
  }

  get innerMethods(): Node[] {
    return this.methods
  }
}

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
    const testExtensionId = 'some-extension-id'

    const axiosMock = t.mock.method(axiosWrapper, 'axiosFn', async(url: string) => {
      const okResponse = {
        status: 204,
        headers: new Map<string, string>(),
      }
      return Promise.resolve(okResponse)
    })

    await consoleClient.extensibility.extensions.get()
    await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.get()

    // NOTE: not implemented methods
    // await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.put({})
    // await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.byExtensionId(testExtensionId).delete()
    // await consoleClient.extensibility.tenants.byTenantId(testTenantId).extensions.byExtensionId(testExtensionId).activation.post({})

    const { calls } = axiosMock.mock
    assert.equal(calls.length, 2)
  })

  it.skip('exposes APIs correctly', (t) => {
    const consoleClient = new ConsoleClient('')
    const tree = getConsoleClientProperties(consoleClient)

    assert.deepEqual(
      tree,
      [
        'extensibility.tenants.byTenantId.extensions.get',
      ]
    )
  })
})

function getConsoleClientProperties(client: ConsoleClient): string[] {
  const properties: string[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getPropertyPaths(member: any, path = ''): void {
    const memberPrototype = Object.getPrototypeOf(member)
    const memberDescriptors = Object.getOwnPropertyDescriptors(memberPrototype)
    // eslint-disable-next-line guard-for-in
    for (const name in memberDescriptors) {
      if (!Object.hasOwn(member, name) && !isGetter(member, name)) {
        continue
      }

      const fullPath = path ? `${path}.${name}` : name
      if (typeof member === 'function' && ['get', 'put', 'delete', 'post'].includes(name)) {
        properties.push(fullPath)
      }
      if (typeof member === 'function') {
        getPropertyPaths(member(), fullPath)
      } else if (typeof member === 'object' && isGetter(member, name)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const getter = invokeGetter(member, name)
        getPropertyPaths(getter, fullPath)
      }
    }
  }

  getPropertyPaths(client)
  return properties
}
