import { FromSchema } from 'json-schema-to-ts'

import { credentialsSchema } from './credentials'
import { CAPABILITIES, PIPELINE_STATUS } from '../constants/provider'

const functionalitiesSchema = {
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
      defaultActive: {
        type: 'boolean',
      },
      description: { type: 'string' },
      label: { type: 'string' },
      rules: {
        type: 'object',
        properties: {
          excludeOtherFunctionalities: {
            type: 'boolean',
            description: 'If true, any other functionality of this capability will be excluded',
          },
          excludeOtherCapabilities: {
            type: 'boolean',
            description: 'If true, any other capability will be excluded',
          },
        },
      },
    },
  },
} as const

const { GIT_PROVIDER, ...OTHER_CAPABILITIES } = CAPABILITIES
export const providerTypeCapabilitySchema = {
  oneOf: [
    {
      type: 'object',
      additionalProperties: false,
      required: ['name'],
      properties: {
        name: {
          type: 'string',
          enum: Object.values(OTHER_CAPABILITIES),
        },
        functionalities: functionalitiesSchema,
      },
    }, {
      type: 'object',
      additionalProperties: false,
      required: ['name', 'allowedRepositoryVisibilities'],
      properties: {
        name: { const: GIT_PROVIDER },
        allowedRepositoryVisibilities: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['private', 'internal', 'public'],
          },
          description: 'The visibility levels allowed by this git provider',
        },
        functionalities: functionalitiesSchema,
      },
    },
  ],
} as const

export const providerTypeCapabilitiesSchema = {
  type: 'array',
  items: providerTypeCapabilitySchema,
} as const

const credentialTypesSchema = {
  type: 'array',
  items: {
    type: 'string',
    enum: credentialsSchema.oneOf.map(credential => credential.properties.type.const as string),
  },
} as const

export const providerTypeSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'type',
    'imageUrl',
    'capabilities',
    'credentialTypes',
  ],
  properties: {
    type: { type: 'string' },
    label: { type: 'string' },
    imageUrl: {
      description: 'file location',
      type: 'string',
    },
    capabilities: providerTypeCapabilitiesSchema,
    credentialTypes: credentialTypesSchema,
  },
} as const

export const pipelineStatusSchema = {
  type: 'string',
  enum: Object.values(PIPELINE_STATUS),
} as const

export type ProviderTypeCapability = FromSchema<typeof providerTypeCapabilitySchema>
export type ProviderTypeCapabilities = FromSchema<typeof providerTypeCapabilitiesSchema>
export type ProviderType = FromSchema<typeof providerTypeSchema>
export type PipelineStatus = FromSchema<typeof pipelineStatusSchema>
