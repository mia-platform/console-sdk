import Ajv from 'ajv'
import t from 'tap'

import { apiKey, APIKey } from './apikeys'
import { validationMessage } from './validate-utils.test'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

const apiKeyData: APIKey = {
  secret: 'secret',
  active: true,
  clientType: 'clientType',
}

t.test('api keys', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile<APIKey>(apiKey)

  t.test('only required fields', t => {
    t.ok(validate(apiKeyData), validationMessage(validate.errors))
    t.end()
  })

  t.test('all fields', t => {
    const fullApiKey: Required<APIKey> = {
      ...apiKeyData,
      description: 'test',
    }
    t.ok(validate(fullApiKey), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
