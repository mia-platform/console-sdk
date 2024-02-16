import { DefinedError, ErrorObject } from 'ajv'

export function validationMessage(errors?: ErrorObject[] | null): string {
  let message = ''
  if (!errors) {
    return message
  }
  for (const error of errors as DefinedError[]) {
    message += `${error.message} (${error.instancePath})`
  }
  return message
}

export type PatternTest = {
  name: string
  items: string[]
  assertion: 'ok' | 'notOk'
}

// eslint-disable-next-line no-undef
export function createTestsRegex(t: Tap.Test, tests: PatternTest[], regex: RegExp) {
  for (const test of tests) {
    t.test(test.name, t => {
      test.items.forEach(item => {
        t.test(item, t => {
          t[test.assertion](regex.test(item))
          t.end()
        })
      })
      t.end()
    })
  }
}
