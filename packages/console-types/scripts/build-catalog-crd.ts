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

/* eslint-disable no-console */
import fs from 'fs/promises'
import path from 'path'
import { glob } from 'glob'

import { PublicCatalogCRD } from '../src/types/catalog/custom-resource-definitions'

type CRDModule = { default: PublicCatalogCRD }

const inputDirPath = path.resolve(process.cwd(), 'src/types/catalog/custom-resource-definitions')
const outputDirPath = path.resolve(process.cwd(), 'build/catalog/custom-resource-definitions')

const processCRD = async(filePath: string): Promise<void> => {
  const fileName = path.basename(filePath, '.crd.ts')

  try {
    const module = await import(filePath) as CRDModule

    await fs.writeFile(path.resolve(outputDirPath, `${fileName}.json`), JSON.stringify(module.default, null, 2))

    console.log(`✔️ Compiled CRD for ${fileName}`)
  } catch (error) {
    console.error(`⨯ Error compiling CRD for ${fileName}`)
    console.error(error)
  }
}

const main = async(): Promise<void> => {
  await fs.mkdir(outputDirPath, { recursive: true })

  const crdFilePaths = await glob(`${inputDirPath}/*.crd.ts`)

  const promises = crdFilePaths.map((filePath) => processCRD(filePath))

  await Promise.all(promises)
}

main().catch(console.error)
