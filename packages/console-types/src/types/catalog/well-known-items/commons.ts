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

export const nameSchema = {
  minLength: 1,
  pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
  type: 'string',
} as const satisfies JSONSchema

export const descriptionSchema = { type: 'string' } as const satisfies JSONSchema

export const componentIdSchema = { type: 'string' } as const satisfies JSONSchema

export const repositoryUrlSchema = {
  format: 'uri-reference',
  type: 'string',
} as const satisfies JSONSchema

export const dockerImageSchema = {
  pattern: '^(?:[a-z0-9.\\-\\/:]+\\/)?([\\w.}{\\-\\/]+)(:[\\w.}{\\-]+)?$',
  type: 'string',
} as const satisfies JSONSchema

export const archiveUrlSchema = {
  format: 'uri-reference',
  minLength: 1,
  type: 'string',
} as const satisfies JSONSchema

export const tagsSchema = {
  items: { type: 'string' },
  type: 'array',
} as const satisfies JSONSchema

export const linksSchema = {
  items: {
    properties: {
      enableIf: { type: 'string' },
      hidePrefix: { type: 'boolean' },
      label: { type: 'string' },
      targetSection: { type: 'string' },
    },
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const plainEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    managedBy: { type: 'string' },
    name: { minLength: 1, type: 'string' },
    readOnly: { type: 'boolean' },
    value: { type: 'string' },
    valueType: { const: 'plain' },
  },
  required: ['name', 'valueType'],
  type: 'object',
} as const satisfies JSONSchema

export const secretEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    managedBy: { type: 'string' },
    name: { minLength: 1, type: 'string' },
    readOnly: { type: 'boolean' },
    secretKey: { pattern: '^[a-zA-Z0-9-_.]*$', type: 'string' },
    secretName: { pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$', type: 'string' },
    valueType: { const: 'secret' },
  },
  required: ['name', 'valueType', 'secretName', 'secretKey'],
  type: 'object',
} as const satisfies JSONSchema

export const defaultEnvironmentVariablesSchema = {
  items: {
    oneOf: [plainEnvironmentVariableSchema, secretEnvironmentVariableSchema],
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultConfigMapsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      files: {
        items: {
          properties: {
            content: { type: 'string' },
            name: { type: 'string' },
          },
          required: ['name', 'content'],
          type: 'object',
        },
        type: 'array',
      },
      link: {
        properties: {
          targetSection: { type: 'string' },
        },
        type: 'object',
      },
      mountPath: { pattern: '^[a-zA-Z0-9-/_\\s.|\\\\!"£$%&()=?^"{}[\\]*+@]+$', type: 'string' },
      name: { pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$', type: 'string' },
      usePreserve: { type: 'boolean' },
      viewAsReadOnly: { type: 'boolean' },
    },
    required: ['name', 'files', 'mountPath'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultSecretsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      mountPath: { pattern: '^[a-zA-Z0-9-/_\\s.|\\\\!"£$%&()=?^"{}[\\]*+@]+$', type: 'string' },
      name: { pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$', type: 'string' },
    },
    required: ['name', 'mountPath'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultResourcesSchema = {
  additionalProperties: false,
  properties: {
    cpuLimits: {
      additionalProperties: false,
      properties: {
        max: { pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))m$)|^$', type: 'string' },
        min: { pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))m$)|^$', type: 'string' },
      },
      type: 'object',
    },
    memoryLimits: {
      additionalProperties: false,
      properties: {
        max: { pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))Mi$)|^$', type: 'string' },
        min: { pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))Mi$)|^$', type: 'string' },
      },
      type: 'object',
    },
  },
  type: 'object',
} as const satisfies JSONSchema

export const probeSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        cmd: { items: { type: 'string' }, type: 'array' },
        failureThreshold: { type: 'number' },
        initialDelaySeconds: { type: 'number' },
        periodSeconds: { type: 'number' },
        successThreshold: { type: 'number' },
        timeoutSeconds: { type: 'number' },
      },
      required: ['cmd'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        failureThreshold: { type: 'number' },
        initialDelaySeconds: { type: 'number' },
        periodSeconds: { type: 'number' },
        port: { type: 'string' },
        successThreshold: { type: 'number' },
        timeoutSeconds: { type: 'number' },
      },
      required: ['port'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        failureThreshold: { type: 'number' },
        initialDelaySeconds: { type: 'number' },
        path: { pattern: '^\\/(([\\w\\-:.\\{\\}])\\/?)*$|^$', type: 'string' },
        periodSeconds: { type: 'number' },
        port: { type: 'string' },
        successThreshold: { type: 'number' },
        timeoutSeconds: { type: 'number' },
      },
      required: ['path'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

export const defaultProbesSchema = {
  additionalProperties: false,
  properties: {
    liveness: probeSchema,
    readiness: probeSchema,
    startup: probeSchema,
  },
  type: 'object',
} as const satisfies JSONSchema

export const defaultArgsSchema = {
  items: { type: 'string' },
  type: 'array',
} as const satisfies JSONSchema

export const defaultTerminationGracePeriodSecondsSchema = { type: 'number' } as const satisfies JSONSchema

export const defaultLogParserSchema = {
  enum: ['mia-plain', 'mia-json', 'mia-nginx'],
  type: 'string',
} as const satisfies JSONSchema

export const defaultDocumentationPathSchema = {
  pattern: '^$|^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*)+)$',
  type: 'string',
} as const satisfies JSONSchema

export const defaultMonitoringSchema = {
  additionalProperties: false,
  properties: {
    endpoints: {
      items: {
        properties: {
          interval: { type: 'string' },
          path: { type: 'string' },
          port: { type: 'string' },
        },
        type: 'object',
      },
      type: 'array',
    },
  },
  type: 'object',
} as const satisfies JSONSchema

export const defaultHeadersSchema = {
  items: {
    additionalProperties: false,
    properties: {
      description: { type: 'string' },
      name: { type: 'string' },
      value: { type: 'string' },
    },
    required: ['name', 'value'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultAnnotationsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      description: { type: 'string' },
      name: { pattern: '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$', type: 'string' },
      readOnly: { type: 'boolean' },
      value: { type: 'string' },
    },
    required: ['name', 'value'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultLabelsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      description: { type: 'string' },
      name: { pattern: '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$', type: 'string' },
      readOnly: { type: 'boolean' },
      value: { type: 'string' },
    },
    required: ['name', 'value'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const containerPortsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      from: {
        oneOf: [
          { maximum: 65535, minimum: 0, type: 'integer' },
          { pattern: '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$', type: 'string' },
        ],
      },
      name: { pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$', type: 'string' },
      protocol: { default: 'TCP', enum: ['TCP', 'UDP'], type: 'string' },
      to: {
        oneOf: [
          { maximum: 65535, minimum: 0, type: 'integer' },
          { pattern: '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$', type: 'string' },
        ],
      },
    },
    required: ['name', 'from'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const additionalContainersSchema = {
  items: {
    additionalProperties: false,
    properties: {
      args: defaultArgsSchema,
      componentId: componentIdSchema,
      containerPorts: containerPortsSchema,
      defaultArgs: defaultArgsSchema,

      defaultEnvironmentVariables: {
        items: {
          oneOf: [plainEnvironmentVariableSchema],
        },
        type: 'array',
      },
      defaultProbes: defaultProbesSchema,
      defaultResources: defaultResourcesSchema,
      description: descriptionSchema,
      dockerImage: dockerImageSchema,
      name: nameSchema,
    },
    required: ['name', 'dockerImage'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

export const pipelinesSchema = {
  properties: {
    'azure-pipelines': {
      properties: {
        branch: { type: 'string' },
        path: { type: 'string' },
        providerId: { type: 'string' },
      },
      type: 'object',
    },
    'github-actions': {
      properties: {
        branch: { type: 'string' },
        path: { type: 'string' },
        providerId: { type: 'string' },
      },
      type: 'object',
    },
    'gitlab-ci': {
      properties: {
        branch: { type: 'string' },
        path: { type: 'string' },
        providerId: { type: 'string' },
      },
      type: 'object',
    },
    jenkins: {
      properties: {
        gitWebhookOptions: { type: 'object' },
        gitlabWebhookOptions: {
          $comment: 'Deprecated',
          type: 'object',
        },
        providerId: { type: 'string' },
        xmlTemplate: {
          properties: {
            gitBranch: { type: 'string' },
            gitPath: { type: 'string' },
            gitProjectId: { type: 'string' },
            gitlabBranch: {
              $comment: 'Deprecated',
              type: 'string',
            },
            gitlabPath: {
              $comment: 'Deprecated',
              type: 'string',
            },
            gitlabProjectId: {
              $comment: 'Deprecated',
              type: 'string',
            },
          },
          type: 'object',
        },
      },
      type: 'object',
    },
    webhook: {
      properties: {
        providerId: { type: 'string' },
        token: { type: 'string' },
        url: { type: 'string' },
      },
      type: 'object',
    },
  },
  type: 'object',
} as const satisfies JSONSchema
