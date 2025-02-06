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
import t from 'tap'
import addFormats from 'ajv-formats'
import path from 'path'
import { glob } from 'glob'

import { JSONSchema } from '../../../commons/json-schema'
import crdManifestSchema from '../well-known-items/custom-resource-definition/manifest.schema.json'
import { PublicCatalogCRD } from '.'
import { catalogIsLatestSchema } from '../commons'

type CRDModule = { default: PublicCatalogCRD }

const customCrdManifestSchema = {
  ...crdManifestSchema,
  properties: {
    ...crdManifestSchema.properties,
    isLatest: catalogIsLatestSchema,
  },
}

t.test('catalog CRDs', async t => {
  const ajv = new Ajv()
  addFormats(ajv)

  const filePaths = await glob(path.resolve(__dirname, '*.crd.ts'))

  for (const filePath of filePaths) {
    t.test(`${path.basename(filePath)} should respect JSON schema`, async t => {
      const { default: crd } = await import(filePath) as CRDModule

      const validate = ajv.compile(customCrdManifestSchema)
      const isValid = validate(crd)

      t.ok(isValid, JSON.stringify(validate.errors))

      t.end()
    })

    t.test(`${path.basename(filePath)} validator should be ok`, async t => {
      const { default: crd } = await import(filePath) as CRDModule

      if (crd.resources.validation?.jsonSchema) {
        t.doesNotThrow(() => ajv.compile(crd.resources.validation!.jsonSchema as JSONSchema))
      }

      t.end()
    })
  }

  t.end()
})
