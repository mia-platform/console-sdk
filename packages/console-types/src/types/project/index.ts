/* eslint-disable max-lines */
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

import { DASHBOARD_TYPES, DASHBOARD_TYPE_IFRAME } from '../../constants/dashboard'
import { DEPLOYMENT_TYPES, DOCKER_IMAGE_NAME_SUGGESTION_TYPES, ENVIRONMENTS_VARIABLES_TYPES, PROJECT_APPLICATION_FLAVOR, PROJECT_INFRASTRUCTURE_FLAVOR, PROMETHEUS_OPERATOR, PULL_DEPLOY_STRATEGY, PUSH_DEPLOY_STRATEGY, REPOSITORY_TYPES } from '../../constants/project'
import { providerCommonProperties } from '../provider'
import { VALIDATION_ERROR_ID } from '../../strings'
import { ENVIRONMENT_TYPES } from '../../constants/environments'
import { infrastructureComponents } from './infrastructure-component'

export const enabledServicesSchema = {
  type: 'object',
  additionalProperties: true,
} as const

export const availableNamespaces = {
  type: 'array',
  default: [],
  items: {
    type: 'object',
    properties: {
      value: { type: 'string' },
      label: { type: 'string' },
    },
  },
} as const

export const containerRegistry = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    hostname: {
      'type': 'string',
    },
    imagePullSecretName: {
      type: 'string',
    },
    isDefault: {
      type: 'boolean',
      default: false,
    },
  },
  required: ['id', 'name', 'hostname'],
} as const

export const pipelines = {
  oneOf: [
    {
      type: 'object',
      properties: {
        providerId: { type: 'string' },
        type: {
          type: 'string',
          enum: [DEPLOYMENT_TYPES.GITLAB_CI, DEPLOYMENT_TYPES.GITHUB, DEPLOYMENT_TYPES.WEBHOOK],
        },
        statusWebhookSecretCredentialsId: { type: 'string' },
      },
    },
    {
      type: 'object',
      properties: {
        providerId: { type: 'string' },
        type: { type: 'string', enum: [DEPLOYMENT_TYPES.AZURE_PIPELINES] },
        azurePipelineId: { type: 'number' },
        statusWebhookSecretCredentialsId: { type: 'string' },
      },
      required: ['type'],
    },
    {
      type: 'object',
      properties: {
        type: { type: 'string', enum: [DEPLOYMENT_TYPES.JENKINS] },
        providerId: { type: 'string' },
        jobId: { type: 'string' },
        options: {
          type: 'object',
          properties: {
            view: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
            },
            apiBaseUrlPath: { type: 'string' },
          },
        },
      },
      required: ['type'],
    },
  ],
} as const

export const environmentsVariables = {
  oneOf: [
    {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [ENVIRONMENTS_VARIABLES_TYPES.GITLAB, ENVIRONMENTS_VARIABLES_TYPES.VAULT],
        },
        providerId: { type: 'string' },
        baseUrl: { type: 'string' },
        storage: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['groups', 'projects'],
            },
            path: { type: 'string' },
            id: { type: 'string' },
          },
          oneOf: [{ required: ['path'] }, { required: ['id'] }],
          required: ['type'],
          additionalProperties: false,
        },
      },
      required: ['type'],
      additionalProperties: false,
    },
    {
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          type: 'string',
          const: ENVIRONMENTS_VARIABLES_TYPES.AZURE_KEY_VAULT,
        },
        providerId: { type: 'string' },
        azureClientId: { type: 'string' },
        azureTenantId: { type: 'string' },
        serviceAccountName: { type: 'string' },
      },
    },
  ],
} as const

// Cluster namespace regex as defined in RFC 1123 https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#namespaces-and-dns
export const clusterNamespacePattern = '^[a-z0-9]([-a-z0-9]*[a-z0-9])?$'

export const cluster = {
  type: 'object',
  properties: {
    hostname: { type: 'string' },
    port: { type: 'number' },
    namespace: { type: 'string', pattern: clusterNamespacePattern },
    clusterId: { type: 'string' },
    _id: { type: 'string' },
    accessToken: { type: 'string' },
    base64CA: { type: 'string' },
    proxy: {
      type: 'object',
      properties: {
        url: { type: 'string' },
      },
    },
    serviceAccount: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        clusterRoleName: { type: 'string' },
      },
      required: ['name', 'clusterRoleName'],
    },
    kubeContextVariables: {
      type: 'object',
      additionalProperties: { type: 'string' },
    },
  },
} as const

export const dashboard = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    label: { type: 'string' },
    url: { type: 'string' },
    type: { type: 'string', enum: DASHBOARD_TYPES, default: DASHBOARD_TYPE_IFRAME },
    category: {
      type: 'object',
      properties: {
        label: { type: 'string' },
      },
      required: ['label'],
      additionalProperties: false,
    },
  },
  required: ['id', 'label', 'url', 'type'],
} as const

export const strategySchema = {
  type: 'string',
  enum: [PULL_DEPLOY_STRATEGY, PUSH_DEPLOY_STRATEGY],
  default: PUSH_DEPLOY_STRATEGY,
} as const

export const envIdPattern = '^[A-Za-z0-9]([-A-Za-z0-9]*[A-Za-z0-9])?$'

export const environment = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: Object.values(ENVIRONMENT_TYPES),
    },
    label: { type: 'string' },
    envId: { type: 'string', pattern: envIdPattern },
    envPrefix: { type: 'string' },
    hosts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          host: { type: 'string' },
          isBackoffice: { type: 'boolean' },
          scheme: { type: 'string', description: 'an url schema, usually one of "http" or "https"' },
        },
      },
    },
    description: { type: 'string' },
    isProduction: {
      type: 'boolean',
      default: false,
    },
    cluster,
    dashboards: {
      type: 'array',
      items: dashboard,
    },
    deploy: {
      type: 'object',
      // FIXME: this is not coherent with the project.pipelines
      // definition which allows for an empty type.
      // The empty type is then assumed to be gitlab-ci.
      // We should understand the impacts of aligning the types.
      required: ['type'],
      properties: {
        type: {
          type: 'string',
          // TODO: add the following enum
          // enum: Object.values(DEPLOYMENT_TYPES),
        },
        providerId: { type: 'string' },
        jobId: { type: 'string' },
        statusWebhookSecretCredentialsId: { type: 'string' },
        paramsMap: {
          type: 'object',
          properties: {
            revision: {
              type: 'string',
            },
            environment: {
              type: 'string',
            },
          },
        },
        strategy: strategySchema,
        runnerTool: { type: 'string' },
        orchestratorGenerator: {
          type: 'object',
          properties: {
            providerId: { type: 'string' },
          },
        },
      },
    },
    links: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
        },
        required: ['url'],
        additionalProperties: false,
      },
    },
    environmentsVariables,
  },
  required: ['envId'],
} as const

export type IEnvironment = FromSchema<typeof environment>

export const environments = {
  type: 'array',
  default: [],
  items: environment,
} as const

export const projectEnvironmentLink = {
  type: 'object',
  properties: {
    path: {
      type: 'string',
    },
    isBackoffice: {
      type: 'boolean',
    },
    isEnvironmentLink: {
      type: 'boolean',
    },
  },
  required: ['path'],
  additionalProperties: false,
} as const

export const quickLink = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  },
  required: ['url', 'name'],
  additionalProperties: false,

} as const

export type QuickLink = FromSchema<typeof quickLink>
export type ProjectEnvironmentLink = FromSchema<typeof projectEnvironmentLink>

export const monitoring = {
  type: 'object',
  additionalProperties: false,
  required: ['systems'],
  properties: {
    systems: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: [PROMETHEUS_OPERATOR],
          },
        },
      },
    },
  },
} as const

const ruleSet = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      jsonPath: { type: 'string' },
      ruleId: { type: 'string' },
      processingOptions: {
        type: 'object',
        properties: {
          actions: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['create', 'delete'],
            },
          },
          primaryKey: { type: 'string' },
        },
        required: ['actions'],
      },
    },
  },
} as const

export const saveChangesRules = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      disallowedRuleSet: ruleSet,
      allowedRuleSet: ruleSet,
      roleIds: {
        type: 'array',
        items: { type: 'string' },
      },
      isInheritedFromTenant: { type: 'boolean' },
    },
  },
} as const

export const configurationManagement = {
  type: 'object',
  properties: {
    saveMessageOptions: {
      type: 'object',
      properties: {
        isConfirmationRequired: {
          type: 'object',
          properties: {
            value: { type: 'boolean' },
            isInheritedFromTenant: { type: 'boolean' },
          },
        },
      },
    },
    saveChangesRules,
  },
} as const

export const dockerImageNameSuggestion = {
  anyOf: [
    {
      type: 'object',
      properties: {
        type: { type: 'string',
          enum: [
            DOCKER_IMAGE_NAME_SUGGESTION_TYPES.REPOSITORY,
            DOCKER_IMAGE_NAME_SUGGESTION_TYPES.PROJECT_ID,
          ],
        },
      },
      required: ['type'],
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        type: { type: 'string', enum: [DOCKER_IMAGE_NAME_SUGGESTION_TYPES.CONSTANT_PREFIX] },
        prefix: { type: 'string' },
      },
      required: ['type', 'prefix'],
      additionalProperties: false,
    },
  ],
  default: { type: DOCKER_IMAGE_NAME_SUGGESTION_TYPES.PROJECT_ID },
} as const

export const aiSettings = {
  type: 'object',
  properties: {
    enableAgenticFeatures: {
      type: 'boolean',
      default: true,
    },
  },
} as const
export type AISettings = FromSchema<typeof aiSettings>

export const project = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    flavor: { type: 'string', enum: [PROJECT_APPLICATION_FLAVOR, PROJECT_INFRASTRUCTURE_FLAVOR] },
    configurationGitPath: { type: 'string' },
    repositoryUrl: { type: 'string' },
    defaultBranch: { type: 'string' },
    branches: {
      type: 'array',
      items: { type: 'string' },
    },
    tags: {
      type: 'array',
      items: { type: 'string' },
    },
    projectId: { type: 'string' },
    hostnames: {
      type: 'object',
      additionalProperties: { type: 'string' },
    },
    environments,
    links: {
      type: 'object',
      additionalProperties: {
        oneOf: [quickLink, projectEnvironmentLink],
      },
    },
    environmentsVariables,
    projectNamespaceVariable: { type: 'string' },
    availableNamespaces: {
      type: 'array',
      default: [],
      items: {
        type: 'object',
        properties: {
          value: { type: 'string' },
          label: { type: 'string' },
        },
        required: ['value'],
      },
    },
    enabledServices: enabledServicesSchema,
    dockerImageNameSuggestion,
    repository: {
      type: 'object',
      properties: {
        providerId: { type: 'string' },
        provider: {
          type: 'object',
          properties: {
            providerId: { type: 'string' },
            type: {
              type: 'string',
              enum: Object.values(REPOSITORY_TYPES),
            },
            apiBaseUrl: { type: 'string' },
            baseUrl: { type: 'string' },
            accessToken: { type: 'string' },
            base64CA: { type: 'string' },
            proxy: providerCommonProperties.proxy,
          },
          additionalProperties: false,
        },
      },
    },
    pipelines,
    tenantId: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    info: {
      type: 'object',
      properties: {
        projectOwner: { type: 'string' },
        teamContact: { type: 'string' },
        technologies: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    },
    deploy: {
      type: 'object',
      properties: {
        runnerTool: { type: 'string' },
        useMiaPrefixEnvs: { type: 'boolean' },
        strategy: strategySchema,
        orchestratorGenerator: {
          type: 'object',
          properties: {
            providerId: { type: 'string' },
          },
        },
      },
    },
    enabledFeaturesPreview: {
      type: 'object',
      additionalProperties: false,
      properties: {},
    },
    enabledSecurityFeatures: {
      type: 'object',
      additionalProperties: false,
      properties: {
        seccompProfile: { type: 'boolean' },
        appArmor: { type: 'boolean' },
        hostProperties: { type: 'boolean' },
        privilegedPod: { type: 'boolean' },
      },
    },
    layerId: { type: 'string' },
    logicalScopeLayers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          order: { type: 'number' },
        },
      },
    },
    tenantName: { type: 'string' },
    featureToggles: {
      type: 'object',
      additionalProperties: false,
      properties: {
        viewBasicHomepage: { type: 'boolean' },
      },
    },
    containerRegistries: {
      type: 'array',
      items: containerRegistry,
    },
    imagePullSecretNames: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    monitoring,
    configurationManagement,
    aiSettings,
    infrastructureComponents,
    originalTemplate: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
    },
  },
  required: [
    '_id',
    'name',
    'configurationGitPath',
    'projectId',
    'environments',
    'repository',
  ],
  additionalProperties: false,
} as const

export type IProject = FromSchema<typeof project>

export const branchName = {
  type: 'string',
  pattern: '^[^.](?!.*\\.\\.)(?!.*\\.lock$)(?!.*\\.$)[\\w\\/.-]+$',
  [VALIDATION_ERROR_ID]: 'project.configuration.branchName',
} as const
export type BranchName = FromSchema<typeof branchName>

export const tagName = {
  type: 'string',
  pattern: '^[\\w.}{\\-]+$',
  [VALIDATION_ERROR_ID]: 'project.configuration.tagName',
}
