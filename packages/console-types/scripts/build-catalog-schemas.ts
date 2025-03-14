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

/* eslint-disable no-console, no-await-in-loop */
import fs from 'fs/promises'
import path from 'path'
import { clone, lensPath, set } from 'ramda'

import {
  catalogItemSchema,
  catalogItemManifestSchema,
  catalogWellKnownItems,
  type CatalogItemManifest,
  type CatalogWellKnownItemData,
  type CatalogItem,
} from '../src'
import { JSONSchema } from '../src/commons/json-schema'

const comment = 'This file was automatically generated, do not modify it by hand. Instead, modify the source Typescript file, and run `pnpm types build:catalog-schemas`.'

const outDir = path.resolve(process.cwd(), 'schemas/catalog')

const buildItemSchema = async(): Promise<void> => {
  let item = clone({ $comment: comment, ...catalogItemSchema }) as unknown as CatalogItem

  item = set(lensPath(['properties', '$schema']), { type: 'string' }, item)

  await fs.writeFile(path.resolve(outDir, 'item.schema.json'), JSON.stringify(item, null, 2))

  console.log(`✓ Compiled schema from "item"`)
}

const buildManifestSchema = async(): Promise<void> => {
  let manifest = clone({ $comment: comment, ...catalogItemManifestSchema }) as unknown as CatalogItemManifest

  manifest = set(lensPath(['properties', '$schema']), { type: 'string' }, manifest)

  await fs.writeFile(path.resolve(outDir, 'item-manifest.schema.json'), JSON.stringify(manifest, null, 2))

  console.log(`✓ Compiled schema from "item manifest"`)
}

const buildWellKnownItemsSchemas = async(): Promise<void> => {
  const buildManifest = async(data: CatalogWellKnownItemData): Promise<void> => {
    let manifest = clone({ $comment: comment, ...catalogItemManifestSchema }) as unknown as CatalogItemManifest

    manifest = set(lensPath(['$id']), `catalog-${data.type}.manifest.schema.json`, manifest)
    manifest = set(lensPath(['title']), `Catalog ${data.type} item manifest`, manifest)
    manifest = set(lensPath(['description']), `Data model of a Catalog ${data.type} item to apply`, manifest)

    manifest = set(lensPath(['properties', '$schema']), { type: 'string' }, manifest)
    manifest = set(lensPath(['properties', 'type']), { const: data.type }, manifest)

    manifest = set(lensPath(['properties', 'resources']), data.resourcesSchema, manifest)
    manifest = set(lensPath(['properties', 'resources', '$id']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', '$schema']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'description']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'title']), undefined, manifest)

    if (!data.crd.isVersioningSupported) {
      manifest = set(lensPath(['properties', 'version']), undefined, manifest)
    }

    await fs.writeFile(path.resolve(outDir, `${data.type}.manifest.schema.json`), JSON.stringify(manifest, null, 2))
  }

  const buildItem = async(data: CatalogWellKnownItemData): Promise<void> => {
    let item = clone({ $comment: comment, ...catalogItemSchema }) as unknown as CatalogItem

    item = set(lensPath(['$id']), `catalog-${data.type}.item.schema.json`, item)
    item = set(lensPath(['title']), `Catalog ${data.type} item`, item)
    item = set(lensPath(['description']), `Data model of a Catalog ${data.type} item`, item)

    item = set(lensPath(['properties', '$schema']), { type: 'string' }, item)
    item = set(lensPath(['properties', 'type']), { const: data.type }, item)

    item = set(lensPath(['properties', 'resources']), data.resourcesSchema, item)
    item = set(lensPath(['properties', 'resources', '$id']), undefined, item)
    item = set(lensPath(['properties', 'resources', '$schema']), undefined, item)
    item = set(lensPath(['properties', 'resources', 'description']), undefined, item)
    item = set(lensPath(['properties', 'resources', 'title']), undefined, item)

    await fs.writeFile(path.resolve(outDir, `${data.type}.item.schema.json`), JSON.stringify(item, null, 2))
  }

  const buildResources = async(data: CatalogWellKnownItemData): Promise<void> => {
    let resources = clone({ $comment: comment, ...data.resourcesSchema as object }) as JSONSchema

    resources = set(lensPath(['$id']), `catalog-${data.type}.resources.schema.json`, resources)
    resources = set(lensPath(['title']), `Catalog ${data.type} item resources`, resources)
    resources = set(lensPath(['description']), `Data model of a Catalog ${data.type} item resources`, resources)

    resources = set(lensPath(['properties', '$schema']), { type: 'string' }, resources)

    await fs.writeFile(path.resolve(outDir, `${data.type}.resources.schema.json`), JSON.stringify(resources, null, 2))
  }

  for (const data of Object.values(catalogWellKnownItems)) {
    await buildManifest(data)
    await buildItem(data)
    await buildResources(data)

    console.log(`✓ Compiled schemas for "${data.type}"`)
  }
}

const main = async(): Promise<void> => {
  console.log(`Compiling Software Catalog JSON schemas...`)

  await fs.rm(outDir, { recursive: true, force: true })
  await fs.mkdir(outDir, { recursive: true })

  await buildItemSchema()
  await buildManifestSchema()
  await buildWellKnownItemsSchemas()
}

main().catch(console.error)
