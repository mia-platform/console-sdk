import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import t from 'tap'

import ajvConsoleErrors from '../plugins/ajv-console-errors'
import url from './url'

t.test('url schema', t => {
  const ajv = new Ajv()

  ajvConsoleErrors(ajv)
  addFormats(ajv)

  const validate = ajv.compile<string>(url)

  const testCases = [
    {
      name: 'hostname is valid',
      value: 'console.mia-platform.eu',
      isValid: true,
    },
    {
      name: 'ipv4 is valid',
      value: '192.168.1.1',
      isValid: true,
    },
    {
      name: 'ipv6 is valid',
      value: '2001:0db8:0000:0000:0000:8a2e:0370:7334',
      isValid: true,
    },
    {
      name: 'shortened ipv6 is valid',
      value: '2001:db8::8a2e:370:7334',
      isValid: true,
    },
    {
      name: 'http URI is valid',
      value: 'http://mia-platform.eu/the-path/',
      isValid: true,
    },
    {
      name: 'https URI is valid',
      value: 'https://mia-platform.eu/the-path/',
      isValid: true,
    },
    {
      name: 'ftp URI is not valid',
      value: 'ftp://mia-platform.eu/the-path/',
      isValid: false,
    },
  ]

  testCases.forEach(testCase => {
    t.test(testCase.name, t => {
      const assertion = testCase.isValid ? t.ok : t.notOk

      assertion(validate(testCase.value))

      t.end()
    })
  })

  t.end()
})
