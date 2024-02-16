import Ajv from 'ajv'
import t from 'tap'

import { PublicVariable, unsecretedVariable } from './publicVariables'
import { validationMessage } from './validate-utils.test'


t.test('public variables', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<PublicVariable>(unsecretedVariable)

  t.test('only required fields', t => {
    const variable: PublicVariable = {
      name: 'mycollection',
      environments: {
        env1: { value: 'VAL1' },
        env2: { value: 'VAL2' },
      },
    }
    t.ok(validate(variable), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
