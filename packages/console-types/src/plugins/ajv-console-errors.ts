import Ajv, { Plugin } from 'ajv'

import { VALIDATION_ERROR_ID } from '../strings'

type ValidationIdOptions = Record<string, never>

const ajvConsoleErrors: Plugin<ValidationIdOptions> = (ajv: Ajv): Ajv => {
  return ajv.addKeyword({
    keyword: VALIDATION_ERROR_ID,
    type: 'string',
    schemaType: 'string',
  })
}

export default ajvConsoleErrors
