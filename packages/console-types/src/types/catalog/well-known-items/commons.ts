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

import { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../commons/json-schema'
import { DIGIT_OR_INTERPOLATION_PATTERN } from '../../../constants/services'
import {
  configMapMountPath,
  configMapName,
  container,
  dockerImage,
  kubernetesDefinitionName,
  pathWithoutPort,
  port,
  probesPath,
  serviceName,
  serviceSecretKey,
  serviceSecretMountPath,
  serviceSecretName,
  swaggerPath,
} from '../../services'
import { CatalogCrd } from '../crd'


export type CatalogWellKnownItemData<T = string> = {
  type: T
  resourcesSchema: JSONSchema
  crd: CatalogCrd
}


export const catalogPortSchema = {
  minLength: 1,
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
  type: 'string',
} as const satisfies JSONSchema
export type CatalogPort = FromSchema<typeof catalogPortSchema>

export const catalogNameSchema = {
  minLength: serviceName.minLength,
  pattern: serviceName.pattern,
  type: 'string',
} as const satisfies JSONSchema
export type CatalogName = FromSchema<typeof catalogNameSchema>

export const catalogDescriptionSchema = {
  type: 'string',
} as const satisfies JSONSchema
export type CatalogDescription = FromSchema<typeof catalogDescriptionSchema>

export const catalogComponentIdSchema = {
  type: 'string',
} as const satisfies JSONSchema
export type CatalogComponentId = FromSchema<typeof catalogComponentIdSchema>

export const catalogRepositoryUrlSchema = {
  format: 'uri-reference',
  type: 'string',
} as const satisfies JSONSchema
export type CatalogRepositoryUrl = FromSchema<typeof catalogRepositoryUrlSchema>

export const catalogDockerImageSchema = {
  pattern: dockerImage.pattern,
  type: 'string',
} as const satisfies JSONSchema
export type CatalogDockerImage = FromSchema<typeof catalogDockerImageSchema>

export const catalogArchiveUrlSchema = {
  format: 'uri-reference',
  minLength: 1,
  type: 'string',
} as const satisfies JSONSchema
export type CatalogArchiveUrl = FromSchema<typeof catalogArchiveUrlSchema>

export const catalogTagsSchema = {
  items: { type: 'string' },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogTags = FromSchema<typeof catalogTagsSchema>

export const catalogLinksSchema = {
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
export type CatalogLinks = FromSchema<typeof catalogLinksSchema>

const plainEnvironmentVariableSchema = {
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

const secretEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    managedBy: { type: 'string' },
    name: { minLength: 1, type: 'string' },
    readOnly: { type: 'boolean' },
    secretKey: { pattern: serviceSecretKey.pattern, type: 'string' },
    secretName: { pattern: serviceSecretName.pattern, type: 'string' },
    valueType: { const: 'secret' },
  },
  required: ['name', 'valueType', 'secretName', 'secretKey'],
  type: 'object',
} as const satisfies JSONSchema

const downwardApiVariableSchema = {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    managedBy: { type: 'string' },
    fieldPath: { type: 'string' },
    name: { minLength: 1, type: 'string' },
    readOnly: { type: 'boolean' },
    valueType: { const: 'downwardAPI' },
  },
  required: ['fieldPath', 'name', 'valueType'],
  type: 'object',
} as const satisfies JSONSchema

export const catalogDefaultEnvironmentVariablesSchema = {
  items: {
    oneOf: [plainEnvironmentVariableSchema, secretEnvironmentVariableSchema, downwardApiVariableSchema],
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultEnvironmentVariables = FromSchema<typeof catalogDefaultEnvironmentVariablesSchema>

export const catalogDefaultConfigMapsSchema = {
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
      mountPath: { pattern: configMapMountPath.pattern, type: 'string' },
      name: { pattern: configMapName.pattern, type: 'string' },
      subPaths: { type: 'array', items: { type: 'string' } },
      usePreserve: { type: 'boolean' },
      viewAsReadOnly: { type: 'boolean' },
    },
    required: ['name', 'files', 'mountPath'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultConfigMaps = FromSchema<typeof catalogDefaultConfigMapsSchema>

export const catalogDefaultSecretsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      mountPath: { pattern: serviceSecretMountPath.pattern, type: 'string' },
      name: { pattern: serviceSecretName.pattern, type: 'string' },
    },
    required: ['name', 'mountPath'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultSecrets = FromSchema<typeof catalogDefaultSecretsSchema>

export const catalogDefaultResourcesSchema = {
  additionalProperties: false,
  properties: {
    cpuLimits: {
      additionalProperties: false,
      properties: {
        max: { pattern: container.properties.resources.properties.cpuLimits.properties.max.pattern, type: 'string' },
        min: { pattern: container.properties.resources.properties.cpuLimits.properties.min.pattern, type: 'string' },
      },
      type: 'object',
    },
    memoryLimits: {
      additionalProperties: false,
      properties: {
        max: { pattern: container.properties.resources.properties.memoryLimits.properties.max.pattern, type: 'string' },
        min: { pattern: container.properties.resources.properties.memoryLimits.properties.min.pattern, type: 'string' },
      },
      type: 'object',
    },
  },
  type: 'object',
} as const satisfies JSONSchema
export type CatalogDefaultResources = FromSchema<typeof catalogDefaultResourcesSchema>

const probeSchema = {
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
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        failureThreshold: { type: 'number' },
        initialDelaySeconds: { type: 'number' },
        path: { pattern: probesPath.pattern, type: 'string' },
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

export const catalogDefaultProbesSchema = {
  additionalProperties: false,
  properties: {
    liveness: probeSchema,
    readiness: probeSchema,
    startup: probeSchema,
  },
  type: 'object',
} as const satisfies JSONSchema
export type CatalogDefaultProbes = FromSchema<typeof catalogDefaultProbesSchema>

export const catalogDefaultArgsSchema = {
  items: { type: 'string' },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultArgs = FromSchema<typeof catalogDefaultArgsSchema>

export const catalogDefaultTerminationGracePeriodSecondsSchema = {
  type: 'number',
} as const satisfies JSONSchema
export type CatalogDefaultTerminationGracePeriodSeconds = FromSchema<
  typeof catalogDefaultTerminationGracePeriodSecondsSchema
>

export const catalogDefaultLogParserSchema = {
  enum: ['mia-plain', 'mia-json', 'mia-nginx'],
  type: 'string',
} as const satisfies JSONSchema
export type CatalogDefaultLogParser = FromSchema<typeof catalogDefaultLogParserSchema>

export const catalogDefaultDocumentationPathSchema = {
  pattern: swaggerPath.pattern,
  type: 'string',
} as const satisfies JSONSchema
export type CatalogDefaultDocumentationPath = FromSchema<typeof catalogDefaultDocumentationPathSchema>

export const catalogDefaultMonitoringSchema = {
  additionalProperties: false,
  properties: {
    endpoints: {
      items: {
        additionalProperties: false,
        properties: {
          interval: { type: 'string', pattern: container.properties.monitoring.properties.endpoints.items.properties.interval.pattern },
          path: pathWithoutPort,
          port: { type: 'string' },
        },
        required: ['interval', 'path', 'port'],
        type: 'object',
      },
      type: 'array',
    },
  },
  type: 'object',
} as const satisfies JSONSchema
export type CatalogDefaultMonitoring = FromSchema<typeof catalogDefaultMonitoringSchema>

export const catalogDefaultHeadersSchema = {
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
export type CatalogDefaultHeaders = FromSchema<typeof catalogDefaultHeadersSchema>

export const catalogDefaultAnnotationsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      description: { type: 'string' },
      name: { pattern: kubernetesDefinitionName.pattern, type: 'string' },
      readOnly: { type: 'boolean' },
      value: { type: 'string' },
    },
    required: ['name', 'value'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultAnnotations = FromSchema<typeof catalogDefaultAnnotationsSchema>

export const catalogDefaultLabelsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      description: { type: 'string' },
      name: { pattern: kubernetesDefinitionName.pattern, type: 'string' },
      readOnly: { type: 'boolean' },
      value: { type: 'string' },
    },
    required: ['name', 'value'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogDefaultLabels = FromSchema<typeof catalogDefaultLabelsSchema>

export const catalogContainerPortsSchema = {
  items: {
    additionalProperties: false,
    properties: {
      from: {
        oneOf: [port, { pattern: '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$', type: 'string' }],
      },
      name: { pattern: serviceName.pattern, type: 'string' },
      protocol: { default: 'TCP', enum: ['TCP', 'UDP'], type: 'string' },
      to: {
        oneOf: [port, { pattern: '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$', type: 'string' }],
      },
    },
    required: ['name', 'from'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogContainerPorts = FromSchema<typeof catalogContainerPortsSchema>

export const catalogExecPreStopSchema = {
  type: 'array',
  items: { type: 'string' },
} as const satisfies JSONSchema
export type CatalogExecPreStop = FromSchema<typeof catalogExecPreStopSchema>

export const catalogMapEnvVarToMountPathSchema = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    properties: {
      type: { type: 'string', enum: ['file', 'folder'] },
      envName: { type: 'string' },
    },
    additionalProperties: false,
    required: ['type', 'envName'],
  },
} as const satisfies JSONSchema
export type CatalogMapEnvVarToMountPath = FromSchema<typeof catalogMapEnvVarToMountPathSchema>

export const catalogAdditionalContainersSchema = {
  items: {
    additionalProperties: false,
    properties: {
      args: catalogDefaultArgsSchema,
      componentId: catalogComponentIdSchema,
      containerPorts: catalogContainerPortsSchema,
      defaultArgs: catalogDefaultArgsSchema,

      defaultEnvironmentVariables: {
        items: {
          oneOf: [plainEnvironmentVariableSchema],
        },
        type: 'array',
      },
      defaultProbes: catalogDefaultProbesSchema,
      defaultResources: catalogDefaultResourcesSchema,
      description: catalogDescriptionSchema,
      dockerImage: catalogDockerImageSchema,
      name: catalogNameSchema,
    },
    required: ['name', 'dockerImage'],
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema
export type CatalogAdditionalContainers = FromSchema<typeof catalogAdditionalContainersSchema>

export const catalogPipelinesSchema = {
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
export type CatalogPipelines = FromSchema<typeof catalogPipelinesSchema>

export const catalogListenerSchema = {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    name: { type: 'string' },
    ownedBy: {
      additionalProperties: false,
      properties: {
        componentIds: { items: { type: 'string' }, type: 'array' },
      },
      required: ['componentIds'],
      type: 'object',
    },
    port: catalogPortSchema,
    selectedByDefault: { type: 'boolean' },
  },
  required: ['name', 'port'],
  type: 'object',
} as const satisfies JSONSchema
export type CatalogListener = FromSchema<typeof catalogListenerSchema>
