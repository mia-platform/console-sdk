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

import catalogApplication from './application'
import catalogCRD from './custom-resource-definition'
import catalogExample, { catalogExampleSchema } from './example'
import catalogExtension from './extension'
import catalogInfrastructureResource from './infrastructure-resource'
import catalogPlugin, { catalogPluginSchema } from './plugin'
import catalogProxy, { catalogProxySchema } from './proxy'
import catalogSidecar from './sidecar'
import catalogTemplate, { catalogTemplateSchema } from './template'

export * from './commons'
export * from './application/collection'
export * from './application/endpoint'
export * from './application/unsecreted-variable'

export type { CatalogApplicationItem, CatalogApplicationManifest, CatalogApplicationResources, CatalogApplicationVersionedItem } from './application'
export type { CatalogCRDItem, CatalogCRDManifest, CatalogCRDResources, CatalogCRDVersionedItem } from './custom-resource-definition'
export type { CatalogExample, CatalogExampleItem, CatalogExampleManifest, CatalogExampleResources, CatalogExampleVersionedItem } from './example'
export type { CatalogExtensionItem, CatalogExtensionManifest, CatalogExtensionResources, CatalogExtensionVersionedItem } from './extension'
export type { CatalogInfrastructureResourceItem, CatalogInfrastructureResourceManifest, CatalogInfrastructureResourceResources, CatalogInfrastructureResourceVersionedItem } from './infrastructure-resource'
export type { CatalogPlugin, CatalogPluginItem, CatalogPluginManifest, CatalogPluginResources, CatalogPluginVersionedItem } from './plugin'
export type { CatalogProxy, CatalogProxyItem, CatalogProxyManifest, CatalogProxyResources, CatalogProxyVersionedItem } from './proxy'
export type { CatalogSidecarItem, CatalogSidecarManifest, CatalogSidecarResources, CatalogSidecarVersionedItem } from './sidecar'
export type { CatalogTemplate, CatalogTemplateItem, CatalogTemplateManifest, CatalogTemplateResources, CatalogTemplateVersionedItem } from './template'

const catalogWellKnownItemsCustomResourceDefinitions = {
  [catalogApplication.type]: catalogApplication.crd,
  [catalogExample.type]: catalogExample.crd,
  [catalogExtension.type]: catalogExtension.crd,
  [catalogInfrastructureResource.type]: catalogInfrastructureResource.crd,
  [catalogPlugin.type]: catalogPlugin.crd,
  [catalogProxy.type]: catalogProxy.crd,
  [catalogSidecar.type]: catalogSidecar.crd,
  [catalogTemplate.type]: catalogTemplate.crd,
}

export {
  catalogWellKnownItemsCustomResourceDefinitions,
  catalogApplication,
  catalogCRD,
  catalogExample,
  catalogExampleSchema,
  catalogExtension,
  catalogInfrastructureResource,
  catalogPlugin,
  catalogPluginSchema,
  catalogProxy,
  catalogProxySchema,
  catalogSidecar,
  catalogTemplate,
  catalogTemplateSchema,
}
