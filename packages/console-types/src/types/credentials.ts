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

import { CredentialsTypes } from '../constants/credentials'

const expirationDate = { type: 'string' } as const

export const credentialsTokenSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.TOKEN },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['accessToken'],
      properties: {
        accessToken: { type: 'string' },
      },
    },
  },
} as const

export const credentialsUserPassSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.USER_PASS },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['userName', 'password'],
      properties: {
        userName: { type: 'string' },
        password: { type: 'string' },
      },
    },
  },
} as const

export const credentialsM2MSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.M2M },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['token', 'accessTokenURL'],
      properties: {
        accessTokenURL: { type: 'string' },
        token: { type: 'string' },
      },
    },
  },
} as const

export const clientCredentialsSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.CLIENT_CREDENTIALS },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['clientId', 'clientSecret', 'accessTokenURL'],
      properties: {
        accessTokenURL: { type: 'string' },
        clientId: { type: 'string' },
        clientSecret: { type: 'string' },
        scope: { type: 'string' },
      },
    },
  },
} as const

export const clientCredentialsCertificateSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.CLIENT_CREDENTIALS_CERTIFICATE },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['accessTokenURL', 'certificateThumbprint', 'clientId', 'privateKeyBase64'],
      properties: {
        accessTokenURL: { type: 'string' },
        certificateThumbprint: { type: 'string' },
        clientId: { type: 'string' },
        privateKeyBase64: { type: 'string' },
        scope: { type: 'string' },
      },
    },
  },
} as const

export const credentialsGithubAppSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'content'],
  properties: {
    expirationDate,
    type: { type: 'string', const: CredentialsTypes.GITHUB_APP },
    content: {
      type: 'object',
      additionalProperties: false,
      required: ['appId', 'installationId', 'privateKeyBase64'],
      properties: {
        appId: { type: 'string' },
        installationId: { type: 'string' },
        privateKeyBase64: { type: 'string' },
      },
    },
  },
} as const

export const credentialsSchema = {
  oneOf: [
    credentialsTokenSchema,
    credentialsUserPassSchema,
    credentialsM2MSchema,
    clientCredentialsSchema,
    clientCredentialsCertificateSchema,
    credentialsGithubAppSchema,
  ],
} as const

export type CredentialsToken = FromSchema<typeof credentialsTokenSchema>
export type CredentialsUserPass = FromSchema<typeof credentialsUserPassSchema>
export type CredentialsM2M = FromSchema<typeof credentialsM2MSchema>
export type CredentialsClientCredential = FromSchema<typeof clientCredentialsSchema>
export type CredentialsClientCredentialCertificate = FromSchema<typeof clientCredentialsCertificateSchema>
export type CredentialsGithubApp = FromSchema<typeof credentialsGithubAppSchema>
export type Credentials = FromSchema<typeof credentialsSchema>
