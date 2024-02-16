import t from 'tap'

import { decoratorPath } from './decorators'
import { createTestsRegex, PatternTest } from './validate-utils.test'

t.test('decoratorPath json schema pattern', t => {
  const regex = new RegExp(decoratorPath.pattern)

  const tests: PatternTest[] = [{
    name: 'is a valid decoratorPath',
    items: [
      '/foo/bar',
      '/:s/bar',
      '/foo/:s/bar',
      '/',
      '/fff5/:sds5/fdsf',
      '/foo-bar/:path/foo',
      '/$1/asd',
      '/foo/$1',
      '/:foo/$1',
      '/checkACL',
      '/foo/bar_foo',
    ],
    assertion: 'ok',
  }, {
    name: 'is not a valid decoratorPath',
    items: [
      '/foo/:/bar',
      '/:/bar',
      '/aa:s/bar',
      '//bar',
      '////fds',
      '////:fds',
      '//:/bar',
      '/fff//fdsf',
      '/fff5/5dsa',
      '/fff5/5',
      '/fff5/:5',
      '/fff5/:sds5/fds/',
      '//',
      '/foo-bar/:path/-foo',
      'fooBar',
    ],
    assertion: 'notOk',
  }]

  createTestsRegex(t, tests, regex)

  t.end()
})
