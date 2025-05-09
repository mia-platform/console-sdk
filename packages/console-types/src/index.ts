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

import {
  Credentials,
  CredentialsClientCredential,
  CredentialsClientCredentialCertificate,
  CredentialsGithubApp,
  CredentialsM2M,
  CredentialsToken,
  CredentialsUserPass,
  clientCredentialsCertificateSchema,
  clientCredentialsSchema,
  credentialsM2MSchema,
  credentialsSchema,
  credentialsTokenSchema,
  credentialsUserPassSchema,
} from './types/credentials'
import { PipelineStatus, ProviderType, ProviderTypeCapability, GitProviderTypeCapability, providerTypeSchema } from './types/providerType'
import {
  containerRegistryHostnameString,
  Provider,
  ProviderCapabilities,
  ProviderCapability,
  providerSchema,
  providerCapabilitiesSchema,
  GitProviderCapability,
} from './types/provider'
import { VALIDATION_ERROR_ID, mergeStringsWithDefault } from './strings'
import {
  analytics,
  cmsAnalytics,
  cmsButton,
  cmsCategories,
  cmsCategory,
  cmsDashboard,
  cmsPage,
  cmsProperty,
  cmsSettings,
} from './types/cms'
import { apiKeyString, apiKeys, clientType } from './types/apikeys'
import { baseField, collection, collectionName, collections } from './types/collections'
import {
  branchName,
  cluster,
  dashboard,
  enabledServicesSchema as enabledServices,
  environment,
  project,
  tagName,
  containerRegistry,
} from './types/project'
import {
  configMap,
  configMapFileName,
  configMapMountPath,
  configMapName,
  configMaps,
  containerPortProperties,
  cronJob,
  crossProjectsService,
  customResource,
  customService,
  customServiceFiles,
  dockerImage,
  externalService,
  gitSshUrl,
  kubernetesDefinition,
  kubernetesDefinitionName,
  probesPath,
  replicasJsonSchema,
  service,
  serviceName,
  serviceSecret,
  serviceSecretKey,
  serviceSecretMountPath,
  serviceSecretName,
  services,
  serviceAccount,
  serviceAccounts,
  serviceAccountName,
  configServiceSecrets,
  swaggerPath,
  url,
  environment as serviceEnvironmentVariables,
} from './types/services'
import { decorators, postDecorator, preDecorator } from './types/decorators'
import { endpoint, endpoints, path } from './types/endpoints'
import { CredentialsTypes } from './constants/credentials'
import ajvConsoleErrors from './plugins/ajv-console-errors'
import { applications } from './types/applications'
import { config } from './types/config'
import constants from './constants'
import { listeners } from './types/listeners'
import { schedule, EnvironmentVariablesTypes } from './constants/services'
import { template } from './types/template'
import { tenant } from './types/tenant'
import transformSchemaForSwagger from './plugins/transform-schema-for-swagger'
import { variableKey } from './types/publicVariables'

export {
  VALIDATION_ERROR_ID,
  ajvConsoleErrors,
  transformSchemaForSwagger,
  apiKeys as secrets,
  apiKeyString,
  applications,
  analytics,
  baseField,
  branchName,
  clientType,
  cmsAnalytics,
  cmsButton,
  cmsCategories,
  cmsCategory,
  cmsDashboard,
  cmsPage,
  cmsProperty,
  cmsSettings,
  collection,
  collectionName,
  collections,
  configMap,
  configMapMountPath,
  configMaps,
  containerRegistry,
  cronJob,
  crossProjectsService,
  customResource,
  customService,
  customServiceFiles,
  decorators,
  dockerImage,
  endpoint,
  endpoints,
  listeners,
  environment,
  externalService,
  kubernetesDefinition as annotation,
  kubernetesDefinition as label,
  kubernetesDefinitionName,
  configMapName,
  configMapFileName,
  containerPortProperties,
  path,
  postDecorator,
  preDecorator,
  probesPath,
  project,
  replicasJsonSchema,
  schedule,
  service,
  serviceEnvironmentVariables,
  serviceName,
  services,
  serviceAccount,
  serviceAccounts,
  serviceAccountName,
  configServiceSecrets,
  serviceSecret,
  serviceSecretName,
  serviceSecretKey,
  serviceSecretMountPath,
  swaggerPath,
  tagName,
  template,
  tenant,
  url,
  gitSshUrl,
  variableKey,

  constants,
  config,
  enabledServices,
  cluster,
  dashboard,

  EnvironmentVariablesTypes,

  CredentialsTypes,
  credentialsM2MSchema,
  clientCredentialsSchema,
  clientCredentialsCertificateSchema,
  credentialsSchema,
  credentialsTokenSchema,
  credentialsUserPassSchema,

  mergeStringsWithDefault,

  providerSchema,
  providerTypeSchema,
  containerRegistryHostnameString,

  providerCapabilitiesSchema,
}

export type {
  PublicVariable,
} from './types/publicVariables'

export type {
  ConfigMap,
  ConfigMaps,
  ConfigServiceSecret,
  ConfigServiceSecrets,
  EnvironmentVariablesFromSecret,
  EnvironmentVariablesPlain,
  EnvironmentVariablesFromConfigMap,
  EnvironmentVariablesDownwardAPI,
  Container,
  CustomService,
  CustomServiceFile,
  CustomServiceAdvanced,
  CronJob,
  CrossProjectService,
  ExternalService,
  ServiceConfigMap,
  Services,
  ServiceAccounts,
  ContainerPort,
  ContainerPorts,
  CoreService,
  CustomResource,
  ServiceLabel,
  ServiceAnnotation,
  LabelAnnotation,
} from './types/services'

export {
  DownwardAPIPodPath,
  DownwardAPIContainerPath,
} from './types/services'

export type {
  IEnvironment,
  IProject,
  QuickLink,
  ProjectEnvironmentLink,
  AISettings,
  InfrastructureComponent,
} from './types/project'

export {
  projectEnvironmentLink,
  quickLink,
  aiSettings,
} from './types/project'

export type { ITemplate } from './types/template'
export type { ITenant } from './types/tenant'
export type {
  ServiceTypes,
  EnvironmentTypes,
} from './constants'

export type { Config } from './types/config'

export type {
  Endpoints,
  CustomEndpoint,
  GenericEndpoint,
  SingleViewEndpoint,
  CrudEndpoint,
  FastDataProjectionEndpoint,
} from './types/endpoints'

export type {
  Listener,
  Listeners,
} from './types/listeners'

export type {
  Collection,
  Collections,
  ViewCollection,
  CollectionIndex,
} from './types/collections'

export type { Feedback } from './types/feedback'

export type {
  Credentials,
  CredentialsM2M,
  CredentialsToken,
  CredentialsUserPass,
  CredentialsClientCredential,
  CredentialsClientCredentialCertificate,
  CredentialsGithubApp,
}

export type {
  Provider,
  ProviderCapability,
  GitProviderCapability,
  ProviderCapabilities,
  ProviderType,
  ProviderTypeCapability,
  GitProviderTypeCapability,
  PipelineStatus,
}

export * from './types/catalog'
