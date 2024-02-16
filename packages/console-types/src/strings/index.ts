/*
 * Copyright © 2022-present Mia s.r.l.
 * All rights reserved
 */

import en from './en.json'
import it from './it.json'

export const VALIDATION_ERROR_ID = 'x-validation-error-id'

type KeyMessages = Record<string, string>
type LocaleMapping = Record<string, KeyMessages>

const strings: LocaleMapping = {
  en,
  it,
}
export default strings

export const mergeStringsWithDefault = (messages: LocaleMapping = {}) => {
  const locales = Object.keys(strings)
  const mergedStrings = messages
  for (const locale of locales) {
    mergedStrings[locale] = {
      ...strings[locale],
      ...messages[locale],
    }
  }
  return mergedStrings
}
