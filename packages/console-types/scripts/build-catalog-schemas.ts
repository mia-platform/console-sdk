/* eslint-disable no-console */
import type { Dirent } from 'fs'
import fs from 'fs/promises'
import path from 'path'
import type { JSONSchema } from 'json-schema-to-ts'
import { clone, lensPath, set } from 'ramda'

import { CatalogItemManifest, catalogItemManifestSchema } from '../src'

type ItemModule = {
  default: {
    type: string,
    resourcesSchema: JSONSchema
  }
}

const comment = 'This file was automatically generated, do not modify it by hand. Instead, modify the source Typescript file, and run `build-catalog-schemas`.'

const processItemType = async(dirent: Dirent): Promise<void> => {
  try {
    const dirPath = path.resolve(dirent.parentPath, dirent.name)

    const module = await import(path.resolve(dirPath, 'index.ts')) as ItemModule

    let manifest = clone({ $comment: comment, ...catalogItemManifestSchema }) as unknown as CatalogItemManifest

    manifest = set(lensPath(['$id']), `catalog-${module.default.type}.schema.json`, manifest)
    manifest = set(lensPath(['properties', 'type']), { const: module.default.type }, manifest)
    manifest = set(lensPath(['properties', 'resources']), module.default.resourcesSchema, manifest)
    manifest = set(lensPath(['description']), undefined, manifest)
    manifest = set(lensPath(['title']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', '$id']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', '$schema']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'description']), undefined, manifest)
    manifest = set(lensPath(['properties', 'resources', 'title']), undefined, manifest)

    await fs.writeFile(path.resolve(dirPath, 'manifest.schema.json'), JSON.stringify(manifest, null, 2))

    console.log(`✔️ Compiled manifest for ${dirent.name}`)
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
