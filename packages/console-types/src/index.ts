import constants from './constants'
import { apiKeyString, apiKeys, clientType } from './types/apikeys'
import { config } from './types/config'
import { applications } from './types/applications'
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
import { baseField, collection, collectionName, collections } from './types/collections'
import { decorators, postDecorator, preDecorator } from './types/decorators'
import { endpoint, endpoints, path } from './types/endpoints'
import { listeners } from './types/listeners'
import {
  branchName,
  cluster,
  dashboard,
  enabledServicesSchema as enabledServices,
  environment,
  project,
  tagName,
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
  swaggerPath,
  url,
} from './types/services'
import { schedule } from './constants/services'
import { template } from './types/template'
import { tenant } from './types/tenant'
import { CredentialsTypes } from './constants/credentials'
import {
  Credentials,
  CredentialsClientCredential,
  CredentialsClientCredentialCertificate,
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
import { VALIDATION_ERROR_ID, mergeStringsWithDefault } from './strings'
import { variableKey } from './types/publicVariables'
import { Provider, ProviderCapability, providerSchema } from './types/provider'
import { PipelineStatus, ProviderType, ProviderTypeCapability, providerTypeSchema } from './types/providerType'
import ajvConsoleErrors from './plugins/ajv-console-errors'
import transformSchemaForSwagger from './plugins/transform-schema-for-swagger'

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
  cronJob,
  crossProjectsService,
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
  serviceName,
  services,
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
}

export type {
  PublicVariable,
} from './types/publicVariables'

export type {
  ConfigMaps,
  EnvironmentVariablesFromSecret,
  EnvironmentVariablesPlain,
  Container,
  CustomService,
  CustomServiceFile,
  CustomServiceAdvanced,
  CronJob,
  CrossProjectService,
  ExternalService,
  ServiceConfigMap,
  Services,
  ContainerPort,
  ContainerPorts,
  CoreService,
} from './types/services'

export type {
  IEnvironment,
  IProject,
  QuickLink,
  ProjectEnvironmentLink,
} from './types/project'

export {
  projectEnvironmentLink,
  quickLink,
} from './types/project'

export type { ITemplate } from './types/template'
export type { ITenant } from './types/tenant'
export type {
  ServiceTypes,
} from './constants'

export type { Config } from './types/config'

export type {
  Endpoints,
  GenericEndpoint,
  SingleViewEndpoint,
  CrudEndpoint,
  FastDataProjectionEndpoint,
} from './types/endpoints'

export type {
  Listener,
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
}

export type {
  Provider,
  ProviderCapability,
  ProviderType,
  ProviderTypeCapability,
  PipelineStatus,
}
