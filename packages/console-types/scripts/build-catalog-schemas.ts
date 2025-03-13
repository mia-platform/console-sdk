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
import type { Dirent } from 'fs'
import fs from 'fs/promises'
import path from 'path'
import { clone, lensPath, set } from 'ramda'

import {
  catalogItemManifestSchema,
  catalogWellKnownItems,
  type CatalogWellKnownItemData,
  type CatalogWellKnownItemsType,
  type CatalogItemManifest,
} from '../src'

type ItemModule = { data: CatalogWellKnownItemData<CatalogWellKnownItemsType> }

const comment = 'This file was automatically generated, do not modify it by hand. Instead, modify the source Typescript file, and run `build-catalog-schemas`.'

const processItemType = async(dirent: Dirent): Promise<void> => {
  try {
    const dirPath = path.resolve(dirent.parentPath, dirent.name)

    const module = await import(path.resolve(dirPath, 'index.ts')) as ItemModule

    let manifest = clone({ $comment: comment, ...catalogItemManifestSchema }) as unknown as CatalogItemManifest

    manifest = set(lensPath(['$id']), `catalog-${module.data.type}.schema.json`, manifest)
    manifest = set(lensPath(['description']), undefined, manifest)
    manifest = set(lensPath(['title']), undefined, manifest)

    manifest = set(lensPath(['properties', '$schema']), { type: 'string' }, manifest)
    manifest = set(lensPath(['properties', 'type']), { const: module.data.type }, manifest)

    manifest = set(lensPath(['properties', 'resources']), module.data.resourcesSchema, manifest)
    manifest = set(lensPath(['properties', 'resources', '$id']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', '$schema']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'description']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'title']), undefined, manifest)

    const { crd } = catalogWellKnownItems[module.data.type]
    if (!crd?.isVersioningSupported) {
      manifest = set(lensPath(['properties', 'version']), undefined, manifest)
    }

    await fs.writeFile(path.resolve(dirPath, 'manifest.schema.json'), JSON.stringify(manifest, null, 2))

    console.log(`✓ Compiled manifest for ${dirent.name}`)
  } catch (error) {
    console.error(`⨯ Error compiling manifest for ${dirent.name}`)
    console.error(error)
  }
}

const main = async(): Promise<void> => {
  const itemDirs = await fs.readdir(path.resolve(process.cwd(), 'src/types/catalog/well-known-items'), { withFileTypes: true })

  const promises = itemDirs.map((dirent) => {
    if (!dirent.isDirectory()) { return Promise.resolve() }

    return processItemType(dirent)
  })

  await Promise.all(promises)
}

main().catch(console.error)
