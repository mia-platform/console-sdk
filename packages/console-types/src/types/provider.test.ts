import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import t from 'tap'

import { Provider, providerSchema } from './provider'
import { validationMessage } from './validate-utils.test'
import { CAPABILITIES } from '../constants/provider'

t.test('providers', t => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile<Provider>(providerSchema)

  t.test('match schema', t => {
    t.matchSnapshot(JSON.stringify(providerSchema, null, 2))
    t.end()
  })

  t.test('validate - only required fields', t => {
    const variable: Provider = {
      providerId: 'providerId',
      type: 'type',
      urls: {
        base: 'http://base',
        apiBase: 'http://api.base',
      },
    }
    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.test('validate - capabilities with specific fields', t => {
    t.test('should validate container-registry specific fields', t => {
      const variable: Provider = {
        providerId: 'providerId',
        type: 'type',
        urls: {
          base: 'http://base',
          apiBase: 'http://api.base',
        },
        capabilities: [
          {
            name: CAPABILITIES.CONTAINER_REGISTRY,
            imagePullSecretName: 'my-secret',
          },
        ],
      }

      t.ok(validate(variable), validationMessage(validate.errors))
      t.end()
    })
    t.end()
  })
  t.end()
})
