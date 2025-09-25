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

import type { JSONSchema7TypeName, JSONSchema7 as OriginalJSONSchema7 } from 'json-schema'

declare const $JSONSchema7: unique symbol

type $JSONSchema7 = typeof $JSONSchema7

type PropsToOverride = 'type' | 'const' | 'enum' | 'items' | 'additionalItems' | 'contains' | 'properties' | 'required' | 'patternProperties' | 'additionalProperties' | 'dependencies' | 'propertyNames' | 'if' | 'then' | 'else' | 'allOf' | 'anyOf' | 'oneOf' | 'not' | 'definitions' | 'examples' | 'default'

type JSONSchema7 = boolean | (Omit<OriginalJSONSchema7, PropsToOverride> & Readonly<{
  [$JSONSchema7]?: $JSONSchema7
  type?: JSONSchema7TypeName | readonly JSONSchema7TypeName[]
  const?: unknown
  enum?: unknown
  items?: JSONSchema7 | readonly JSONSchema7[]
  additionalItems?: JSONSchema7
  contains?: JSONSchema7
  properties?: Readonly<Record<string, JSONSchema7>>
  required?: readonly string[]
  patternProperties?: Readonly<Record<string, JSONSchema7>>
  additionalProperties?: JSONSchema7
  dependencies?: Readonly<Record<string, JSONSchema7 | readonly string[]>>
  propertyNames?: JSONSchema7
  if?: JSONSchema7
  then?: JSONSchema7
  else?: JSONSchema7
  allOf?: readonly JSONSchema7[]
  anyOf?: readonly JSONSchema7[]
  oneOf?: readonly JSONSchema7[]
  not?: JSONSchema7
  nullable?: boolean
  definitions?: Readonly<Record<string, JSONSchema7>>
  examples?: readonly unknown[]
  default?: unknown
  deprecated?: boolean
}>)

export type JSONSchema = JSONSchema7
