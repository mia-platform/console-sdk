import { FromSchema } from 'json-schema-to-ts'

import { credentialsSchema } from './credentials'
import { CAPABILITIES } from '../constants/provider'

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

const { CONTAINER_REGISTRY, ...OTHER_CAPABILITIES } = CAPABILITIES
export const providerCapabilitySchema = {
  oneOf: [
    {
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
    },
    {
      type: 'object',
      additionalProperties: false,
      required: [
        'name',
      ],
      properties: {
        name: { const: CONTAINER_REGISTRY },
        functionalities: providerFunctionalitiesSchema,
        imagePullSecretName: { type: 'string' },
      },
    },
  ],
} as const

export const providerCapabilitiesSchema = {
  type: 'array',
  items: providerCapabilitySchema,
} as const


export const providerSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'providerId',
    'type',
    'urls',
  ],
  properties: {
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
    visibility: {
      additionalProperties: false,
      type: 'object',
      properties: {
        allTenants: { type: 'boolean' },
      },
    },
  },
} as const

export type ProviderCapability = FromSchema<typeof providerCapabilitySchema>
export type ProviderCapabilities = FromSchema<typeof providerCapabilitiesSchema>
export type Provider = FromSchema<typeof providerSchema, {
  parseIfThenElseKeywords: true
}>
