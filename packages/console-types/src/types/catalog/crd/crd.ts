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

import type { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../commons/json-schema'
import { catalogItemDescriptionSchema, catalogItemIdSchema, catalogItemNameSchema, catalogTenantIdSchema } from '../item/commons'
import { CATALOG_CRD_TYPE, catalogCrdIsVersioningSupportedSchema, catalogCrdResourcesSchema } from './commons'

export const catalogCrdSchema = {
  $id: 'catalog-crd.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Catalog CRD',
  description: 'Data model of a Catalog Custom Resource Definition',
  type: 'object',
  properties: {
    description: catalogItemDescriptionSchema,
    isVersioningSupported: catalogCrdIsVersioningSupportedSchema,
    itemId: catalogItemIdSchema,
    name: catalogItemNameSchema,
    resources: catalogCrdResourcesSchema,
    tenantId: catalogTenantIdSchema,
    type: { const: CATALOG_CRD_TYPE },
  },
  additionalProperties: false,
  required: ['name', 'itemId', 'tenantId', 'type', 'resources'],
} as const satisfies JSONSchema

export type CatalogCrd = FromSchema<typeof catalogCrdSchema>
