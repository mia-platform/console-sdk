/* eslint-disable max-lines */
import Ajv from 'ajv'
import t from 'tap'

import { validationMessage } from './validate-utils.test'
import { listeners } from './listeners'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

const LISTENERS = {
  'my-listener': {
    name: 'my-listener',
    port: 80,
    description: 'My listener',
    selectedByDefault: false,
    readonly: true,
  },
  'another-listener': {
    name: 'another-listener',
    port: '{{PORT}}',
  },
}

t.test('listeners schema', t => {
  const ajv = new Ajv({ allErrors: true })
  ajvConsoleErrors(ajv)
  const validateListeners = ajv.compile(listeners)

  t.matchSnapshot(JSON.stringify(listeners, null, 2))

  t.test('correctly validates listeners', t => {
    const testCases = [
      {
        desc: 'base listeners',
        listeners: LISTENERS,
      },
    ]

    testCases.forEach(({ desc, listeners }) => {
      t.test(desc, t => {
        t.ok(validateListeners(listeners), validationMessage(validateListeners.errors))
        t.end()
      })
    })

    t.end()
  })

  t.test('do not validate incorrect ports', t => {
    const testListener = {
      'custom': {
        name: 'custom',
        port: 'aaa',
      },
    }

    t.notOk(validateListeners(testListener))

    t.end()
  })

  t.end()
})
