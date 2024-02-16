import Ajv from 'ajv'
import t from 'tap'

import ajvConsoleErrors from '../plugins/ajv-console-errors'
import { schedule } from './services'
import { validationMessage } from '../types/validate-utils.test'

t.test('schedule schema', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  const validate = ajv.compile(schedule)
  t.ok(validate('{{SCHEDULE}}'), validationMessage(validate.errors))
  t.ok(validate('* * * * *'), validationMessage(validate.errors))

  t.end()
})
