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

import type { JSONSchema } from '../../../commons/json-schema'
import type { ICatalogCrd } from '../crd'
import { data as catalogApplicationData } from './application'
import type * as ICatalogApplication from './application'
import { data as catalogExampleData } from './example'
import type * as ICatalogExample from './example'
import { data as catalogExtensionData } from './extension'
import type * as ICatalogExtension from './extension'
import { data as catalogInfrastructureResourceData } from './infrastructure-resource'
import type * as ICatalogInfrastructureResource from './infrastructure-resource'
import { data as catalogPluginData } from './plugin'
import type * as ICatalogPlugin from './plugin'
import { data as catalogProxyData } from './proxy'
import type * as ICatalogProxy from './proxy'
import { data as catalogSidecarData } from './sidecar'
import type * as ICatalogSidecar from './sidecar'
import { data as catalogTemplateData } from './template'
import type * as ICatalogTemplate from './template'
import { data as catalogInfrastructureComponentRuntimeData } from './infrastructure-component-runtime'
import type * as ICatalogInfrastructureComponentRuntime from './infrastructure-component-runtime'
import * as catalogWellKnownItemsCommonSchemas from './commons'

type CatalogWellKnownItemData<T = string> = {
  type: T
  resourcesSchema: JSONSchema
  crd: ICatalogCrd.Item
}

type CatalogWellKnownItemsType = |
  typeof catalogApplicationData.type |
  typeof catalogExampleData.type |
  typeof catalogExtensionData.type |
  typeof catalogInfrastructureResourceData.type |
  typeof catalogPluginData.type |
  typeof catalogProxyData.type |
  typeof catalogSidecarData.type |
  typeof catalogTemplateData.type |
  typeof catalogInfrastructureComponentRuntimeData.type

export const catalogWellKnownItems: Record<CatalogWellKnownItemsType, CatalogWellKnownItemData> = {
  [catalogApplicationData.type]: catalogApplicationData,
  [catalogExampleData.type]: catalogExampleData,
  [catalogExtensionData.type]: catalogExtensionData,
  [catalogInfrastructureResourceData.type]: catalogInfrastructureResourceData,
  [catalogPluginData.type]: catalogPluginData,
  [catalogProxyData.type]: catalogProxyData,
  [catalogSidecarData.type]: catalogSidecarData,
  [catalogTemplateData.type]: catalogTemplateData,
  [catalogInfrastructureComponentRuntimeData.type]: catalogInfrastructureComponentRuntimeData,
}

export { catalogWellKnownItemsCommonSchemas }

export type {
  CatalogWellKnownItemData,
  CatalogWellKnownItemsType,
  ICatalogExample,
  ICatalogExtension,
  ICatalogInfrastructureResource,
  ICatalogPlugin,
  ICatalogProxy,
  ICatalogSidecar,
  ICatalogTemplate,
  ICatalogApplication,
  ICatalogInfrastructureComponentRuntime,
}
