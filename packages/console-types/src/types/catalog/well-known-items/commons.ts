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

/* eslint-disable max-lines */

import type { JSONSchema } from '../../../commons/json-schema'
import { DIGIT_OR_INTERPOLATION_PATTERN } from '../../../constants/services'
import {
  configMapFileName,
  configMapMountPath,
  configMapName,
  container,
  dockerImage,
  DOWNWARD_API_FIELD_PATHS,
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

export const portSchema = {
  minLength: 1,
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
  type: 'string',
} as const satisfies JSONSchema

export const nameSchema = {
  minLength: serviceName.minLength,
  pattern: serviceName.pattern,
  type: 'string',
} as const satisfies JSONSchema

export const descriptionSchema = {
  type: 'string',
} as const satisfies JSONSchema

export const componentIdSchema = {
  type: 'string',
} as const satisfies JSONSchema

export const repositoryUrlSchema = {
  format: 'uri-reference',
  type: 'string',
} as const satisfies JSONSchema

export const dockerImageSchema = {
  pattern: dockerImage.pattern,
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
  description: 'Custom links to other Console pages',
  items: {
    properties: {
      enableIf: {
        description: 'The name of a feature toggle to be used to optionally display the link',
        type: 'string',
      },
      hidePrefix: {
        description: 'Flag stating if the `label` should not be prefixed by a "View" copy',
        type: 'boolean',
      },
      label: {
        description: 'The label to be shown in the link button. It does not support internationalization. Unless property `hidePrefix` is set to `false`, the label will be shown right next to a "View" copy',
        type: 'string',
      },
      targetSection: {
        description: 'The name of the registered microfrontend where the link should land',
        examples: ['flow-manager'],
        type: 'string',
      },
    },
    type: 'object',
  },
  type: 'array',
} as const satisfies JSONSchema

const baseEnvironmentVariableProps = {
  name: {
    description: 'The variable name (generally, a key written in UPPER_SNAKE_CASE)',
    minLength: 1,
    type: 'string',
  },
  description: {
    description: 'A brief description of the variable',
    type: 'string',
  },
  managedBy: {
    description: 'A string that represents the Console section that manages the variable. It only works used in combination with the `readOnly` property set to `true`',
    type: 'string',
    enum: ['fast-data'],
  },
  readOnly: {
    description: 'A boolean that represents if you can change the value of the variable through the Console',
    type: 'boolean',
  },
} as const satisfies Record<string, JSONSchema>

const plainEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    ...baseEnvironmentVariableProps,
    value: {
      description: 'The variable default value. It can contain placeholders that will be replaced with the actual values when the service is created',
      type: 'string',
    },
    valueType: { const: 'plain' },
  },
  required: ['name', 'valueType'],
  type: 'object',
} as const satisfies JSONSchema

const configMapEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    ...baseEnvironmentVariableProps,
    configMapName: { pattern: configMapName.pattern, type: 'string' },
    configMapFileName: { pattern: configMapFileName.pattern, type: 'string' },
    valueType: { const: 'configmap' },
  },
  required: ['name', 'valueType', 'secretName', 'secretKey'],
  type: 'object',
} as const satisfies JSONSchema

const secretEnvironmentVariableSchema = {
  additionalProperties: false,
  properties: {
    ...baseEnvironmentVariableProps,
    secretKey: { pattern: serviceSecretKey.pattern, type: 'string' },
    secretName: { pattern: serviceSecretName.pattern, type: 'string' },
    valueType: { const: 'secret' },
  },
  required: ['name', 'valueType', 'secretName', 'secretKey'],
  type: 'object',
} as const satisfies JSONSchema

const downwardApiVariableSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        ...baseEnvironmentVariableProps,
        fieldPath: {
          description: 'The field path of the Downward API that contains the value of the variable',
          oneOf: [
            DOWNWARD_API_FIELD_PATHS.POD,
            DOWNWARD_API_FIELD_PATHS.POD_ANNOTATIONS,
            DOWNWARD_API_FIELD_PATHS.POD_LABELS,
          ],
        },
        valueType: { const: 'downwardAPI' },
      },
      required: ['fieldPath', 'name', 'valueType'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        ...baseEnvironmentVariableProps,
        fieldPath: DOWNWARD_API_FIELD_PATHS.CONTAINER,
        valueType: { const: 'downwardAPI' },
        containerName: {
          description: 'The name of the container where the field is located',
          type: 'string',
        },
      },
      required: ['fieldPath', 'name', 'valueType', 'containerName'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

export const defaultEnvironmentVariablesSchema = {
  description: 'The environment variables that will overwrite the default environment variables applied by the Console',
  items: {
    oneOf: [
      plainEnvironmentVariableSchema,
      configMapEnvironmentVariableSchema,
      secretEnvironmentVariableSchema,
      downwardApiVariableSchema,
    ],
  },
  type: 'array',
} as const satisfies JSONSchema

export const defaultConfigMapsSchema = {
  description: 'The default ConfigMaps, if any, that will be mounted inside the container of the microservice',
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

export const defaultSecretsSchema = {
  description: 'The default secrets, if any, to be mounted inside the container of the microservice',
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

export const defaultResourcesSchema = {
  description: 'CPU and memory limitations of the service, which can be used to overwrite the default limitations imposed by the Console for these parameters',
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

export const defaultProbesSchema = {
  description: 'The readiness, liveness, and startup paths of the service. By modifying the map of the probes, you can overwrite the default paths applied by the Console',
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

export const defaultTerminationGracePeriodSecondsSchema = {
  type: 'number',
} as const satisfies JSONSchema

export const defaultLogParserSchema = {
  enum: ['mia-plain', 'mia-json', 'mia-nginx'],
  type: 'string',
} as const satisfies JSONSchema

export const defaultDocumentationPathSchema = {
  description: 'The APIs documentation path',
  pattern: swaggerPath.pattern,
  type: 'string',
} as const satisfies JSONSchema

export const defaultMonitoringSchema = {
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
  description: 'The service annotations, which can be used to provide additional information about your services for various purposes. Annotations starting with `mia-platform.eu` are reserved',
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

export const defaultLabelsSchema = {
  description: 'The service labels, which can be used to categorize, group, and select your service. Labels starting with "mia-platform.eu" are reserved',
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

export const containerPortsSchema = {
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

export const execPreStopSchema = {
  type: 'array',
  items: { type: 'string' },
} as const satisfies JSONSchema

export const mapEnvVarToMountPathSchema = {
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

export const listenerSchema = {
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
    port: portSchema,
    selectedByDefault: { type: 'boolean' },
  },
  required: ['name', 'port'],
  type: 'object',
} as const satisfies JSONSchema
