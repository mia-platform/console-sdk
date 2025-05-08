/* eslint-disable max-len */
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

/* eslint-disable max-lines */

import { FromSchema } from 'json-schema-to-ts'
import { pick } from 'ramda'

import { DIGIT_OR_INTERPOLATION_PATTERN, EnvironmentVariablesTypes, ServiceTypes } from '../constants/services'
import { VALIDATION_ERROR_ID } from '../strings'
import { description } from './shared'
import { ownersSchema } from './collections'

export const serviceName = {
  type: 'string',
  minLength: 1,
  pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
  [VALIDATION_ERROR_ID]: 'resourceName.patternError',
} as const

export const port = {
  type: 'integer',
  minimum: 0,
  maximum: 65535,
} as const

export const pathWithoutPort = {
  type: 'string',
  pattern: '^\\/(([\\w-])\\/?)*$',
} as const

export const probesPath = {
  type: 'string',
  pattern: '^\\/(([\\w\\-:.\\{\\}])\\/?)*$|^$',
  [VALIDATION_ERROR_ID]: 'probesPath.patternError',
} as const

export const probesPort = {
  type: 'string',
} as const

export const swaggerPath = {
  type: 'string',
  pattern: '^$|^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*)+)$',
  [VALIDATION_ERROR_ID]: 'swaggerPath.patternError',
} as const

export const serviceSecretName = {
  type: 'string',
  pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
  [VALIDATION_ERROR_ID]: 'resourceName.patternError',
} as const

export const emptyDirName = {
  type: 'string',
  pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
  [VALIDATION_ERROR_ID]: 'resourceName.patternError',
} as const

export const serviceSecretKey = {
  type: 'string',
  pattern: '^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|[a-zA-Z0-9-_.]*)$',
  [VALIDATION_ERROR_ID]: 'serviceSecretKey.patternError',
} as const

export const configMapName = {
  type: 'string',
  pattern: '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
  [VALIDATION_ERROR_ID]: 'resourceName.patternError',
} as const

export const configMapFileName = {
  type: 'string',
  pattern: '^[-._a-zA-Z0-9]+$',
  [VALIDATION_ERROR_ID]: 'configMapFileName.patternError',
} as const

export const serviceAccountName = {
  type: 'string',
  // max lenght for a RFC 1123 DNS Subdomain
  maxLength: 253,
  // regex for RFC 1123 DNS Subdomain
  pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$|^$',
  [VALIDATION_ERROR_ID]: 'serviceAccountName.patternError',
} as const

const envCommonProps = {
  name: {
    type: 'string',
    minLength: 1,
  },
  readOnly: { type: 'boolean' },
  managedBy: { type: 'string' },
  description,
} as const

const plainEnv = {
  type: 'object',
  properties: {
    ...envCommonProps,
    valueType: { type: 'string', const: EnvironmentVariablesTypes.PLAIN_TEXT },
    value: { type: 'string' },
  },
  additionalProperties: false,
  required: ['name', 'value', 'valueType'],
} as const
export type EnvironmentVariablesPlain = FromSchema<typeof plainEnv>

const secretEnv = {
  type: 'object',
  properties: {
    ...envCommonProps,
    valueType: { type: 'string', const: EnvironmentVariablesTypes.FROM_SECRET },
    secretName: serviceSecretName,
    secretKey: serviceSecretKey,
  },
  additionalProperties: false,
  required: ['name', 'secretName', 'secretKey', 'valueType'],
} as const
export type EnvironmentVariablesFromSecret = FromSchema<typeof secretEnv>

const configMapEnv = {
  type: 'object',
  properties: {
    ...envCommonProps,
    valueType: { type: 'string', const: EnvironmentVariablesTypes.FROM_CONFIGMAP },
    configMapName,
    configMapFileName,
  },
  additionalProperties: false,
  required: ['name', 'valueType', 'configMapName', 'configMapFileName'],
} as const
export type EnvironmentVariablesFromConfigMap = FromSchema<typeof configMapEnv>

export enum DownwardAPIPodPath {
  NAME = 'metadata.name',
  NAMESPACE = 'metadata.namespace',
  UID = 'metadata.uid',
  SERVICE_ACCOUNT_NAME = 'spec.serviceAccountName',
  NODE_NAME = 'spec.nodeName',
  HOST_IP = 'status.hostIP',
  POD_IP = 'status.podIP',
  POD_IPS = 'status.podIPs',
  METADATA_ANNOTATIONS_PREFIX = 'metadata.annotations',
  METADATA_LABELS_PREFIX = 'metadata.labels',
}

export enum DownwardAPIContainerPath {
  CPU_LIMIT = 'resource.limits.cpu',
  CPU_REQUEST = 'resource.requests.cpu',
  MEMORY_LIMIT = 'resource.limits.memory',
  MEMORY_REQUEST = 'resource.requests.memory',
  EPHEMERAL_STORAGE_LIMIT = 'resource.limits.ephemeral-storage',
  EPHEMERAL_STORAGE_REQUEST = 'resource.requests.ephemeral-storage',
}

export const DOWNWARD_API_FIELD_PATHS = {
  POD_LABELS: {
    type: 'string',
    // matches metadata.labels['<KEY>'], where <KEY> is a valid label key
    pattern: "^metadata.labels\\['([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)'\\]$",
  },
  POD_ANNOTATIONS: {
    type: 'string',
    // matches metadata.annotations['<KEY>'], where <KEY> is a valid annotation key
    pattern: "^metadata.annotations\\['([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)'\\]$",
  },
  POD: {
    type: 'string',
    enum: [
      DownwardAPIPodPath.NAME,
      DownwardAPIPodPath.NAMESPACE,
      DownwardAPIPodPath.UID,
      DownwardAPIPodPath.SERVICE_ACCOUNT_NAME,
      DownwardAPIPodPath.NODE_NAME,
      DownwardAPIPodPath.HOST_IP,
      DownwardAPIPodPath.POD_IP,
      DownwardAPIPodPath.POD_IPS,
    ],
  },
  CONTAINER: {
    type: 'string',
    enum: [
      DownwardAPIContainerPath.CPU_LIMIT,
      DownwardAPIContainerPath.CPU_REQUEST,
      DownwardAPIContainerPath.MEMORY_LIMIT,
      DownwardAPIContainerPath.MEMORY_REQUEST,
      DownwardAPIContainerPath.EPHEMERAL_STORAGE_LIMIT,
      DownwardAPIContainerPath.EPHEMERAL_STORAGE_REQUEST,
    ],
  },
} as const

const downwardAPIEnv = {
  // WARNING: we prefer the the if form instead of the oneOf form because of this ajv unexpected behavior https://ajv.js.org/guide/modifying-data.html#removing-additional-properties
  if: {
    type: 'object',
    required: ['containerName'],
    properties: { containerName: { type: 'string' } },
  },
  then: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'valueType', 'fieldPath', 'containerName'],
    properties: {
      ...envCommonProps,
      valueType: { type: 'string', const: EnvironmentVariablesTypes.DOWNWARD_API },
      fieldPath: DOWNWARD_API_FIELD_PATHS.CONTAINER,
      containerName: { type: 'string' },
    },
  },
  else: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'valueType', 'fieldPath'],
    properties: {
      ...envCommonProps,
      valueType: { type: 'string', const: EnvironmentVariablesTypes.DOWNWARD_API },
      fieldPath: {
        oneOf: [
          DOWNWARD_API_FIELD_PATHS.POD,
          DOWNWARD_API_FIELD_PATHS.POD_ANNOTATIONS,
          DOWNWARD_API_FIELD_PATHS.POD_LABELS,
        ],
      },
    },
  },
} as const
export type EnvironmentVariablesDownwardAPI = FromSchema<typeof downwardAPIEnv, { parseIfThenElseKeywords: true }>

export const environment = {
  type: 'array',
  items: {
    oneOf: [
      plainEnv,
      secretEnv,
      configMapEnv,
      downwardAPIEnv,
    ],
  },
} as const

export const url = {
  type: 'string',
  pattern: '^https?:\\/\\/([^:\\/\\s]+)((:[0-9]{1,5})?(\\/.*)?)([^\\/:])\\/?$',
  [VALIDATION_ERROR_ID]: 'url.patternError',
} as const

export const dockerImage = {
  type: 'string',
  pattern: '^(?:[a-z0-9.\\-\\/:]+\\/)?([\\w.}{\\-\\/]+)(:[\\w.}{\\-]+)?$',
  [VALIDATION_ERROR_ID]: 'dockerImage.patternError',
} as const

const headers = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      value: { type: 'string' },
      description,
    },
    additionalProperties: false,
    required: ['name', 'value'],
  },
  default: [],
} as const

const cpuValue = {
  type: 'string',
  pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))m$)|^$',
} as const

const memoryValue = {
  type: 'string',
  pattern: '(^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\d+))Mi$)|^$',
} as const

const serviceResources = {
  type: 'object',
  properties: {
    cpuLimits: {
      type: 'object',
      properties: {
        max: cpuValue,
        min: cpuValue,
      },
    },
    memoryLimits: {
      type: 'object',
      properties: {
        max: memoryValue,
        min: memoryValue,
      },
    },
  },
} as const

const probe = {
  path: probesPath,
  port: probesPort,
  cmd: { type: 'array', items: { type: 'string' } },
  initialDelaySeconds: { type: 'number' },
  periodSeconds: { type: 'number' },
  timeoutSeconds: { type: 'number' },
  successThreshold: { type: 'number' },
  failureThreshold: { type: 'number' },
} as const

const probes = {
  type: 'object',
  properties: {
    liveness: {
      type: 'object',
      properties: probe,
    },
    readiness: {
      type: 'object',
      properties: probe,
    },
    startup: {
      type: 'object',
      properties: probe,
    },
  },
} as const

const terminationGracePeriodSeconds = { type: 'number' } as const

export const replicasJsonSchema = {
  type: 'object',
  properties: {
    min: { type: 'string' },
    max: { type: 'string' },
    cpuThreshold: { type: 'string' },
    generate: { type: 'boolean' },
    deleted: { type: 'boolean' },
  },
  additionalProperties: false,
} as const

export const gitSshUrl = {
  type: 'string',
} as const

export const configMap = {
  type: 'object',
  required: ['name', 'files'],
  properties: {
    name: configMapName,
    deleted: { type: 'boolean' },
    gitFilesFolder: { type: 'string', description: 'folder on git inside /config-maps where to save the files' },
    files: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: configMapFileName,
          content: { type: 'string' },
          deleted: { type: 'boolean' },
        },
        required: ['name', 'content'],
        additionalProperties: false,
      },
    },
    path: {
      type: 'string',
      pattern: '^[^\\/]',
    },
  },
  additionalProperties: false,
} as const
export type ConfigMap = FromSchema<typeof configMap>

export const configMaps = {
  type: 'object',
  patternProperties: {
    [configMapName.pattern]: configMap,
  },
} as const

export type ConfigMaps = FromSchema<typeof configMaps>

export const configMapMountPath = {
  type: 'string',
  pattern: '^[a-zA-Z0-9-/_\\s.|\\\\!"£$%&()=?^"{}[\\]*+@]+$',
  [VALIDATION_ERROR_ID]: 'configMountPath.patternError',
} as const

const serviceConfigMap = {
  type: 'object',
  properties: {
    name: configMapName,
    mountPath: configMapMountPath,
    subPaths: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    viewAsReadOnly: { type: 'boolean' },
    link: {
      type: 'object',
      properties: {
        targetSection: { type: 'string' },
      },
    },
  },
  required: ['name', 'mountPath'],
  additionalProperties: false,
} as const
export type ServiceConfigMap = FromSchema<typeof serviceConfigMap>

const configServiceSecret = {
  type: 'object',
  required: ['name'],
  properties: {
    name: serviceSecretName,
  },
  additionalProperties: false,
} as const

export const configServiceSecrets = {
  type: 'object',
  patternProperties: {
    [serviceSecretName.pattern]: configServiceSecret,
  },
} as const

export const serviceSecretMountPath = {
  type: 'string',
  pattern: '^[a-zA-Z0-9-/_\\s.|\\\\!"£$%&()=?^"{}[\\]*+@]+$',
  [VALIDATION_ERROR_ID]: 'configMountPath.patternError',
} as const

export const serviceSecret = {
  type: 'object',
  properties: {
    name: serviceSecretName,
    mountPath: serviceSecretMountPath,
  },
  additionalProperties: false,
} as const

export const emptyDirMountPath = {
  type: 'string',
  pattern: '^[a-zA-Z0-9-/_\\s.|\\\\!"£$%&()=?^"{}[\\]*+@]+$',
  [VALIDATION_ERROR_ID]: 'configMountPath.patternError',
} as const

export const emptyDirMount = {
  type: 'object',
  properties: {
    name: emptyDirName,
    mountPath: emptyDirMountPath,
  },
  additionalProperties: false,
} as const

export const serviceAccount = {
  type: 'object',
  properties: {
    name: serviceAccountName,
    deleted: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name'],
} as const

export const serviceAccounts = {
  type: 'object',
  additionalProperties: serviceAccount,
} as const

export type ServiceAccounts = FromSchema<typeof serviceAccounts>

const dockerImagePullSecrets = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
    additionalProperties: false,
    required: ['name'],
  },
} as const

const serviceReplicas = {
  if: { type: 'number' },
  then: {
    type: 'number', minimum: 0,
  },
  else: {
    type: 'string',
    pattern: '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$',
  },
} as const

const sourceMarketplaceItem = {
  type: 'object',
  properties: {
    itemId: { type: 'string' },
    version: { type: 'string' },
    tenantId: { type: 'string' },
    detached: { type: 'boolean' },
  },
  required: ['itemId', 'version', 'tenantId'],
} as const

const numericContainerPort = { ...port } as const
export type ContainerPortNumericValue = FromSchema<typeof numericContainerPort>

const interpolatedContainerPort = {
  type: 'string',
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
} as const
export type ContainerPortInterpolatedValue = FromSchema<typeof interpolatedContainerPort>

export const containerPortProperties = {
  name: {
    type: 'string',
    pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
    [VALIDATION_ERROR_ID]: 'resourceName.patternError',
  },
  port: {
    if: { type: 'number' },
    then: numericContainerPort,
    else: interpolatedContainerPort,
  },
} as const

export type ContainerPort = {
  name: string,
  from: ContainerPortNumericValue | ContainerPortInterpolatedValue,
  to?: ContainerPortNumericValue | ContainerPortInterpolatedValue,
  protocol?: string
}

const containerPorts = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: containerPortProperties.name,
      from: containerPortProperties.port,
      to: containerPortProperties.port,
      protocol: { type: 'string' },
    },
    required: ['name', 'from'],
  },
} as const
export type ContainerPorts = ContainerPort[]

const monitoring = {
  type: 'object',
  properties: {
    endpoints: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: pathWithoutPort,
          port: { type: 'string' },
          interval: {
            type: 'string',
            pattern: '^(\\d)+[s]$',
          },
        },
        required: ['interval', 'port', 'path'],
        additionalProperties: false,
      },
    },
    deleted: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
} as const

// refers to both annotations and labels keys
export const kubernetesDefinitionName = {
  type: 'string',
  // optional 253 characters prefix composed of dns labels separated by "." and followed by a single "/"
  // name of 63 characters starting and ending with alphanumeric characters, containing "-", "_" and "."
  pattern: '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$',
  [VALIDATION_ERROR_ID]: 'kubernetesDefinition.patternError',
} as const

export const serviceLabel = {
  type: 'object',
  properties: {
    name: kubernetesDefinitionName,
    value: { type: 'string' },
    description,
    readOnly: { type: 'boolean' },
    isSelector: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'value'],
} as const

export const kubernetesDefinition = {
  type: 'object',
  properties: {
    name: kubernetesDefinitionName,
    value: { type: 'string' },
    description,
    readOnly: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'value'],
} as const

export const container = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    repoUrl: url,
    dockerImage,
    imagePullPolicy: { type: 'string' },
    environment,
    annotations: {
      type: 'array',
      items: kubernetesDefinition,
    },
    labels: {
      type: 'array',
      items: serviceLabel,
    },
    resources: serviceResources,
    probes,
    tags: {
      type: 'array',
      items: { type: 'string' },
    },
    generatedFrom: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
      },
    },
    swaggerPath,
    sshUrl: gitSshUrl,
    configMaps: {
      type: 'array',
      items: serviceConfigMap,
    },
    secrets: {
      type: 'array',
      items: serviceSecret,
    },
    emptyDirMounts: {
      type: 'array',
      items: emptyDirMount,
    },
    sourceComponentId: { type: 'string' },
    sourceMarketplaceItem,
    mapEnvVarToMountPath: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        required: ['type', 'envName'],
        properties: {
          type: {
            type: 'string',
            enum: ['file', 'folder'],
          },
          envName: { type: 'string' },
        },
      },
    },
    links: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
          enableIf: { type: 'string' },
          targetSection: { type: 'string' },
          hidePrefix: { type: 'boolean' },
        },
      },
    },
    createdAt: { type: 'string' },
    owners: ownersSchema,
    containerPorts,
    monitoring,
    execPreStop: {
      type: 'array',
      items: { type: 'string' },
    },
    args: {
      type: 'array',
      items: { type: 'string' },
    },
    terminationGracePeriodSeconds,
    exclusiveServiceExposure: { type: 'boolean' },
    containerRegistryId: { type: 'string' },
  },
  additionalProperties: false,
  required: ['name', 'dockerImage'],
} as const
export type Container = FromSchema<typeof container, { parseIfThenElseKeywords: true }>

export const customService = {
  type: 'object',
  properties: {
    type: { type: 'string', const: ServiceTypes.CUSTOM },
    advanced: { type: 'boolean', const: false },
    dockerImagePullSecrets,
    replicas: serviceReplicas,
    serviceAccountName,
    productionReplicas: replicasJsonSchema,
    logParser: { type: 'string' },
    additionalContainers: {
      type: 'array',
      items: container,
    },
    emptyDirs: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: ['default', 'memory'],
          },
          size: memoryValue,
        },
      },
    },
    ...container.properties,
  },
  additionalProperties: false,
  required: ['name', 'advanced', 'type', 'dockerImage'],
} as const
export type CustomService = FromSchema<typeof customService, { parseIfThenElseKeywords: true }>

const filePath = {
  type: 'string',
  pattern: '^\\/?(([a-z0-9_\\-:.])\\/?)*$',
} as const

export const customServiceFiles = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    path: filePath,
    kind: {
      type: 'string',
      enum: ['configmap', 'deployment', 'service'],
    },
    description,
    content: { type: 'string' },
    changed: { type: 'boolean' },
    added: { type: 'boolean' },
    deleted: { type: 'boolean' },
    lastCommitId: { type: 'string' },
  },
  required: ['name', 'path', 'kind'],
} as const
export type CustomServiceFile = FromSchema<typeof customServiceFiles>

const customServiceWithAdvancedConfiguration = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    advanced: { type: 'boolean', const: true },
    type: { type: 'string', const: ServiceTypes.CUSTOM },
    repoUrl: url,
    tags: {
      type: 'array',
      items: { type: 'string' },
    },
    files: {
      type: 'array',
      items: customServiceFiles,
      default: [],
    },
    swaggerPath,
    productionReplicas: replicasJsonSchema,
    sshUrl: gitSshUrl,
  },
  additionalProperties: false,
  required: ['name', 'advanced', 'type', 'files'],
} as const
export type CustomServiceAdvanced = FromSchema<typeof customServiceWithAdvancedConfiguration>

export const cronJob = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    advanced: { type: 'boolean', const: true },
    type: { type: 'string', const: ServiceTypes.CRONJOB },
    files: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'path', 'content'],
        properties: {
          name: { type: 'string' },
          kind: { type: 'string', const: 'cronjob' },
          path: filePath,
          content: { type: 'string' },
          deleted: { type: 'boolean' },
          lastCommitId: { type: 'string' },
        },
        additionalProperties: true,
      },
    },
    configMaps: {
      type: 'array',
      items: serviceConfigMap,
    },
    secrets: {
      type: 'array',
      items: serviceSecret,
    },
  },
  additionalProperties: false,
  required: ['name', 'advanced', 'type', 'files'],
} as const
export type CronJob = FromSchema<typeof cronJob>

export const externalService = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    url,
    headers,
    sourceMarketplaceItem,
    type: { type: 'string', const: ServiceTypes.EXTERNAL },
  },
  required: ['name', 'url', 'type'],
} as const
export type ExternalService = FromSchema<typeof externalService>

export const host = {
  type: 'string',
  // Port section of this regex from https://stackoverflow.com/questions/12968093/regex-to-validate-port-numbe
  pattern: '^([-a-z0-9]+)\\.([-_{}a-z0-9A-Z]+)\\.svc\\.cluster\\.local(:([1-9]\\d{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$',
} as const

export const crossProjectsService = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    host,
    sourceMarketplaceItem,
    type: { type: 'string', const: ServiceTypes.CROSS_PROJECTS },
  },
  required: ['name', 'host', 'type'],
} as const
export type CrossProjectService = FromSchema<typeof crossProjectsService>

const coreService = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    type: { type: 'string', const: ServiceTypes.CORE },
    version: { type: 'string' },
    resources: serviceResources,
    productionReplicas: replicasJsonSchema,
  },
  required: ['name', 'type'],
} as const

export type CoreService = FromSchema<typeof coreService>

export const kubernetesDefinitionWithOnlyNameAndValue = {
  type: 'object',
  properties: {
    name: kubernetesDefinitionName,
    value: { type: 'string' },
  },
  additionalProperties: false,
  required: ['name', 'value'],
} as const

export const CUSTOM_GENERATOR_API_VERSION = 'custom-generator.console.mia-platform.eu/v1'

export const customResource = {
  type: 'object',
  properties: {
    name: serviceName,
    description,
    type: { type: 'string', const: ServiceTypes.CUSTOM_RESOURCE },
    ...pick(['generatedFrom', 'sourceMarketplaceItem', 'repoUrl', 'sshUrl'], container.properties),
    meta: {
      type: 'object',
      properties: {
        kind: { type: 'string' },
        apiVersion: { type: 'string' },
      },
      required: ['kind', 'apiVersion'],
    },
    runtime: {
      type: 'object',
      required: ['type'],
      properties: {
        type: { type: 'string' },
        resourceId: {
          type: 'string',
          description: 'Example: for k8s custom resource is names.plural',
        },
      },
    },
    spec: {
      type: 'object',
      additionalProperties: true,
    },
    jsonSchema: {
      type: 'object',
      additionalProperties: true,
    },
    annotations: {
      type: 'array',
      items: kubernetesDefinitionWithOnlyNameAndValue,
    },
    labels: {
      type: 'array',
      items: kubernetesDefinitionWithOnlyNameAndValue,
    },
  },
  required: ['name', 'type', 'meta', 'spec'],
} as const
export type CustomResource = FromSchema<typeof customResource>

export const service = {
  type: 'object',
  if: {
    type: 'object',
    properties: {
      type: { type: 'string', const: ServiceTypes.CUSTOM },
      advanced: { type: 'boolean', const: false },
    },
  },
  then: customService,
  else: {
    if: {
      type: 'object',
      properties: {
        type: { type: 'string', const: ServiceTypes.CUSTOM },
        advanced: { type: 'boolean', const: true },
      },
    },
    then: customServiceWithAdvancedConfiguration,
    else: {
      if: {
        type: 'object',
        properties: { type: { type: 'string', const: ServiceTypes.EXTERNAL } },
      },
      then: externalService,
      else: {
        if: {
          type: 'object',
          properties: { type: { type: 'string', const: ServiceTypes.CROSS_PROJECTS } },
        },
        then: crossProjectsService,
        else: {
          if: {
            type: 'object',
            properties: { type: { type: 'string', const: ServiceTypes.CORE } },
          },
          then: coreService,
          else: {
            if: {
              type: 'object',
              properties: {
                type: { type: 'string', const: ServiceTypes.CRONJOB },
                advanced: { type: 'boolean', const: true },
              },
            },
            then: cronJob,
            else: {
              if: {
                type: 'object',
                properties: { type: { type: 'string', const: ServiceTypes.CUSTOM_RESOURCE } },
              },
              then: customResource,
              else: false,
            },
          },
        },
      },
    },
  },
} as const

export const services = {
  type: 'object',
  patternProperties: {
    [serviceName.pattern]: service,
  },
  additionalProperties: false,
  default: {},
} as const

// @Deprecated Use one of ServiceAnnotation or ServiceLabel
export type LabelAnnotation = FromSchema<typeof kubernetesDefinition>
export type ServiceAnnotation = FromSchema<typeof kubernetesDefinition>
export type ServiceLabel = FromSchema<typeof serviceLabel>

// This type is required since Services cannot parse if/then/else since it is too deep
export type Services = Record<string,
  CustomService |
  CustomServiceAdvanced |
  CrossProjectService |
  ExternalService |
  CronJob |
  CoreService |
  CustomResource
>
