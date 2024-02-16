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

export const credentialsSchema = {
  oneOf: [
    credentialsTokenSchema,
    credentialsUserPassSchema,
    credentialsM2MSchema,
    clientCredentialsSchema,
    clientCredentialsCertificateSchema,
  ],
} as const

export type CredentialsToken = FromSchema<typeof credentialsTokenSchema>
export type CredentialsUserPass = FromSchema<typeof credentialsUserPassSchema>
export type CredentialsM2M = FromSchema<typeof credentialsM2MSchema>
export type CredentialsClientCredential = FromSchema<typeof clientCredentialsSchema>
export type CredentialsClientCredentialCertificate = FromSchema<typeof clientCredentialsCertificateSchema>
export type Credentials = FromSchema<typeof credentialsSchema>
