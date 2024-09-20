/**
 * Copyright 2024 Mia srl
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

import { FromSchema } from 'json-schema-to-ts'

import { CAPABILITIES } from '../constants/provider'
import { credentialsSchema } from './credentials'
import { VALIDATION_ERROR_ID } from '../strings'

const providerFunctionalitiesSchema = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'name',
    ],
    properties: {
      name: {
        type: 'string',
      },
    },
  },
} as const

const { GIT_PROVIDER, CI_CD_TOOL, ...OTHER_CAPABILITIES } = CAPABILITIES

export const containerRegistryHostnameString = {
  type: 'string',
  pattern: '^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\\.[A-Za-z0-9-]{1,63})*(?<!-)(:\\d+)?$',
  [VALIDATION_ERROR_ID]: 'containerRegistryHostname.patternError',
} as const

const otherCapabilitySchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
  ],
  properties: {
    name: {
      type: 'string',
      enum: Object.values(OTHER_CAPABILITIES),
    },
    functionalities: providerFunctionalitiesSchema,
  },
} as const

const gitProviderCapabilitySchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
  ],
  properties: {
    name: { const: GIT_PROVIDER },
    functionalities: providerFunctionalitiesSchema,
    repositoryPathTemplate: {
      type: 'string',
    },
  },
} as const

const ciCdToolProviderCapabilitySchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
  ],
  properties: {
    name: { const: CI_CD_TOOL },
    functionalities: providerFunctionalitiesSchema,
    deployPipelineNameTemplate: {type: 'string'},
    servicesPipelineNameTemplate: {type: 'string'},
    apiBaseUrlPathTemplate: {type: 'string'},
  },
} as const

export const providerCapabilitySchema = {
  oneOf: [
    gitProviderCapabilitySchema,
    ciCdToolProviderCapabilitySchema,
    otherCapabilitySchema
  ]
} as const

export const providerCapabilitiesSchema = {
  type: 'array',
  items: providerCapabilitySchema,
} as const

export const providerCommonProperties = {
  providerId: { type: 'string' },
  label: { type: 'string' },
  description: { type: 'string' },
  type: { type: 'string' },
  urls: {
    type: 'object',
    required: ['base', 'apiBase'],
    properties: {
      base: { type: 'string' },
      apiBase: { type: 'string' },
    },
  },
  base64CA: { type: 'string' },
  visibility: {
    additionalProperties: false,
    type: 'object',
    properties: {
      allTenants: { type: 'boolean' },
    },
  },
  proxy: {
    type: 'object',
    properties: {
      url: { type: 'string' },
      username: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['url'],
  },
  credentials: credentialsSchema,
  capabilities: providerCapabilitiesSchema,
} as const

export const providerSchema = {
  type: 'object',
  additionalProperties: false,
  properties: providerCommonProperties,
  required: [
    'providerId',
    'type',
    'urls',
  ],
} as const

export type ProviderCapability = FromSchema<typeof providerCapabilitySchema, {
  parseIfThenElseKeywords: true
}>
export type GitProviderCapability = FromSchema<typeof gitProviderCapabilitySchema>
export type ProviderCapabilities = FromSchema<typeof providerCapabilitiesSchema, {
  parseIfThenElseKeywords: true
}>
export type Provider = FromSchema<typeof providerSchema, {
  parseIfThenElseKeywords: true
}>
