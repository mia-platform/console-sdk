/**
 * Copyright 2025 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { JSONPath } from 'jsonpath-plus'

/**
 * Validate the content of the `examples` keywords at any level of a JSON Schema against the portion of the schema it
 * is exemplifying.
 *
 * @param {object} schema The schema to check
 * @returns {void}
 * @throws If any check fails
 */
export const validateJsonSchemaExamples = (schema: object): void => {
  const ajv = new Ajv({ addUsedSchema: false })
  addFormats(ajv)

  const examplesPaths = JSONPath<string[]>({
    path: '$..examples',
    json: schema,
    resultType: 'path',
  })

type ExamplesData = {
  examples: unknown[]
  parentObject: object
  path: string
}

const examplesData: ExamplesData[] = []

for (const path of examplesPaths) {
  const [examples] = JSONPath<unknown[][]>({ path, json: schema })
  if (!Array.isArray(examples)) { continue }

  const parentPath = JSONPath.toPathArray(path).slice(0, -1)
  const parentObject = parentPath.length > 0
    ? JSONPath<object[]>({ path: parentPath, json: schema })[0]
    : schema

  examplesData.push({
    examples,
    parentObject,
    path: JSONPath.toPointer(JSONPath.toPathArray(path)),
  })
}

examplesData.forEach((exampleData) => {
  const validate = ajv.compile(exampleData.parentObject)

  exampleData.examples.forEach((example, idx) => {
    const isValid = validate(example)

    if (!isValid) {
      throw new Error(`Example at "${exampleData.path}/${idx}" does not follow its own schema: ${JSON.stringify(validate.errors)}`)
    }
  })
})

return undefined
}
