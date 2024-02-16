import t from 'tap'

import strings, { mergeStringsWithDefault } from '.'

t.test('existing keys', t => {
  t.test('all strings translated', t => {
    Object.keys(strings.en).forEach((key) => {
      t.ok(Object.keys(strings.it).includes(key))
    })
    t.end()
  })

  t.end()
})

t.test('merge function', t => {
  t.test('it correctly merge when input messages are empty', t => {
    const mergedMessages = mergeStringsWithDefault()
    t.strictSame(mergedMessages, strings)
    t.end()
  })

  t.test('it correctly merges when input messages contain not handled languages', t => {
    const mergedMessages = mergeStringsWithDefault({ fr: { 'string.yes': 'oui' } })

    t.strictSame(mergedMessages, {
      ...strings,
      fr: {
        'string.yes': 'oui',
      },
    })

    t.end()
  })

  t.test('it correctly merges', t => {
    const mergedMessages = mergeStringsWithDefault({
      en: {
        'string.yes': 'Yes',
      },
      it: {
        'string.yes': 'Si',
      },
      fr: {
        'string.yes': 'oui',
      },
    })

    t.strictSame(mergedMessages, {
      it: {
        ...strings.it,
        'string.yes': 'Si',
      },
      en: {
        ...strings.en,
        'string.yes': 'Yes',
      },
      fr: {
        'string.yes': 'oui',
      },
    })

    t.end()
  })

  t.test('it correctly merges and overwrite default with input messages', t => {
    t.ok(Object.keys(strings.en).includes('endpoint.basePath.patternError'))
    t.ok(Object.keys(strings.it).includes('endpoint.basePath.patternError'))

    const mergedMessages = mergeStringsWithDefault({
      en: {
        'string.yes': 'Yes',
        'endpoint.basePath.patternError': 'Error!',
      },
      it: {
        'string.yes': 'Si',
        'endpoint.basePath.patternError': 'Errore!',
      },
      fr: {
        'string.yes': 'oui',
        'endpoint.basePath.patternError': 'Erreur!',
      },
    })

    t.strictSame(mergedMessages, {
      en: {
        ...strings.en,
        'string.yes': 'Yes',
        'endpoint.basePath.patternError': 'Error!',
      },
      it: {
        ...strings.it,
        'string.yes': 'Si',
        'endpoint.basePath.patternError': 'Errore!',
      },
      fr: {
        'string.yes': 'oui',
        'endpoint.basePath.patternError': 'Erreur!',
      },
    })

    t.end()
  })

  t.end()
})
