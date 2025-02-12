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
import catalogExample from './example'
import catalogExtension from './extension'
import catalogInfrastructureResource from './infrastructure-resource'
import catalogPlugin from './plugin'
import catalogProxy from './proxy'
import catalogSidecar from './sidecar'
import catalogTemplate from './template'

export type { CatalogApplicationItem, CatalogApplicationManifest, CatalogApplicationResources, CatalogApplicationVersionedItem } from './application'
export type { CatalogCRDItem, CatalogCRDManifest, CatalogCRDResources, CatalogCRDVersionedItem } from './custom-resource-definition'
export type { CatalogExampleItem, CatalogExampleManifest, CatalogExampleResources, CatalogExampleVersionedItem } from './example'
export type { CatalogExtensionItem, CatalogExtensionManifest, CatalogExtensionResources, CatalogExtensionVersionedItem } from './extension'
export type { CatalogInfrastructureResourceItem, CatalogInfrastructureResourceManifest, CatalogInfrastructureResourceResources, CatalogInfrastructureResourceVersionedItem } from './infrastructure-resource'
export type { CatalogPluginItem, CatalogPluginManifest, CatalogPluginResources, CatalogPluginVersionedItem } from './plugin'
export type { CatalogProxyItem, CatalogProxyManifest, CatalogProxyResources, CatalogProxyVersionedItem } from './proxy'
export type { CatalogSidecarItem, CatalogSidecarManifest, CatalogSidecarResources, CatalogSidecarVersionedItem } from './sidecar'
export type { CatalogTemplateItem, CatalogTemplateManifest, CatalogTemplateResources, CatalogTemplateVersionedItem } from './template'

export {
  catalogApplication,
  catalogCRD,
  catalogExample,
  catalogExtension,
  catalogInfrastructureResource,
  catalogPlugin,
  catalogProxy,
  catalogSidecar,
  catalogTemplate,
}
