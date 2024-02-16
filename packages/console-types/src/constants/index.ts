import {
  CMS_INTERFACE_TYPES,
  CMS_LAYOUT_TYPES,
  CMS_PROPERTY_VISIBILITY_LEVELS,
  CHART,
  CHART_SUMMARY,
  CUSTOM_STOCK,
} from './cms'
import {
  ARRAY,
  ARRAY_OF_NUMBER,
  ARRAY_OF_RAWOBJECT,
  ARRAY_OF_STRING,
  BOOLEAN,
  DATE,
  DEFAULT_COLLECTION_FIELDS,
  FIELD_TYPES,
  GEO,
  GEO_POINT,
  HASH,
  INDEX_TYPES,
  NORMAL,
  NUMBER,
  TTL,
  OBJECT_ID,
  OBJECT,
  RAWOBJECT,
  STATES,
  DRAFT_STATE,
  PUBLIC_STATE,
  STRING,
  IndexTypes,
  FieldTypes,
} from './collections'
import {
  API_CONSOLE_TOTAL_PAGES_HEADER_KEY,
  TOTAL_ITEMS_HEADER_KEY,
  ALLOWED_HTTP_VERBS,
  EndpointTypes,
  CRUD_ROUTES,
  ENDPOINT_TYPES,
  Verbs,
} from './endpoints'
import {
  REPOSITORY_TYPES,
  ENVIRONMENTS_VARIABLES_TYPES,
  DEPLOYMENT_TYPES,
  DOCKER_IMAGE_NAME_SUGGESTION_TYPES,
  NUMERIC_VISIBILITY,
  PIPELINE_FROM_TEMPLATE,
  VISIBILITY_PROJECT_FIELDS,
  ALLOWED_RUNNER_TOOLS,
  ALLOWED_MONITORING_SYSTEMS,
  KUBERNETES_FILES_FOLDER,
  MLP,
  ProjectPipelinesTypes,
  PULL_DEPLOY_STRATEGY,
  PUSH_DEPLOY_STRATEGY,
} from './project'
import {
  CRONJOB,
  DEFAULT_ENVIRONMENT_VARIABLES,
  DEFAULT_HEADERS,
  SERVICE_TYPES,
  DEFAULT_CPU_LIMIT,
  DEFAULT_MEMORY_LIMIT,
  DEFAULT_CPU_REQUEST,
  DEFAULT_MEMORY_REQUEST,
  MIA_DEFAULT_LOG_PARSER,
  MIA_LOG_PARSER_JSON,
  MIA_LOG_PARSER_NGINX,
  MIA_LOG_PARSER_PLAIN,
  ENVIRONMENT_VAR_TYPES,
  EnvironmentVariablesTypes,
  ServiceTypes,
  DIGIT_OR_INTERPOLATION_PATTERN,
} from './services'
import { DASHBOARD_TYPES, DASHBOARD_TYPE_IFRAME } from './dashboard'
import { CAPABILITIES, PIPELINE_STATUS, CAPABILITIES_FUNCTIONALITIES } from './provider'
import { FEEDBACK_TYPES } from './feedback'

const constants = {
  API_CONSOLE_TOTAL_PAGES_HEADER_KEY,
  TOTAL_ITEMS_HEADER_KEY,
  ALLOWED_HTTP_VERBS,
  ARRAY,
  ARRAY_OF_NUMBER,
  ARRAY_OF_RAWOBJECT,
  ARRAY_OF_STRING,
  BOOLEAN,
  CMS_INTERFACE_TYPES,
  CMS_LAYOUT_TYPES,
  CMS_PROPERTY_VISIBILITY_LEVELS,
  CMS_ANALYTICS_CUSTOM_STOCK: CUSTOM_STOCK,
  CMS_ANALYTICS_CHART: CHART,
  CMS_ANALYTICS_CHART_SUMMARY: CHART_SUMMARY,
  CRUD_ROUTES,
  CRUD: EndpointTypes.CRUD,
  DIGIT_OR_INTERPOLATION_PATTERN,
  MONGODB_VIEW: EndpointTypes.MONGODB_VIEW,
  CUSTOM: EndpointTypes.CUSTOM,
  EXTERNAL: EndpointTypes.EXTERNAL,
  CROSS_PROJECTS: EndpointTypes.CROSS_PROJECTS,
  CORE: EndpointTypes.CORE,
  FAST_DATA_PROJECTION: EndpointTypes.FAST_DATA_PROJECTION,
  SINGLE_VIEW: EndpointTypes.SINGLE_VIEW,
  DATE,
  DEFAULT_COLLECTION_FIELDS,
  DEFAULT_HEADERS,
  DEFAULT_ENVIRONMENT_VARIABLES,
  REPOSITORY_TYPES,
  ENVIRONMENTS_VARIABLES_TYPES,
  DEPLOYMENT_TYPES,
  DOCKER_IMAGE_NAME_SUGGESTION_TYPES,
  ENDPOINT_TYPES,
  CRONJOB,
  PIPELINE_FROM_TEMPLATE,
  FIELD_TYPES,
  GEO,
  TTL,
  GEO_POINT,
  HASH,
  INDEX_TYPES,
  NORMAL,
  NUMBER,
  OBJECT_ID,
  OBJECT,
  RAWOBJECT,
  SERVICE_TYPES,
  DRAFT_STATE,
  PUBLIC_STATE,
  STATES,
  STRING,
  DEFAULT_CPU_LIMIT,
  DEFAULT_MEMORY_LIMIT,
  DEFAULT_CPU_REQUEST,
  DEFAULT_MEMORY_REQUEST,
  KUBERNETES_FILES_FOLDER,
  NUMERIC_VISIBILITY,
  VISIBILITY_PROJECT_FIELDS,
  MIA_DEFAULT_LOG_PARSER,
  MIA_LOG_PARSER_JSON,
  MIA_LOG_PARSER_NGINX,
  MIA_LOG_PARSER_PLAIN,
  PLAIN_TEXT: EnvironmentVariablesTypes.PLAIN_TEXT,
  FROM_SECRET: EnvironmentVariablesTypes.FROM_SECRET,
  EnvironmentVariablesTypes,
  ENVIRONMENT_VAR_TYPES,
  METHOD_GET: Verbs.METHOD_GET,
  MLP,
  ALLOWED_RUNNER_TOOLS,
  ALLOWED_MONITORING_SYSTEMS,
  ProjectPipelinesTypes,
  DASHBOARD_TYPES,
  DASHBOARD_TYPE_IFRAME,
  ServiceTypes,
  IndexTypes,
  EndpointTypes,
  Verbs,
  FieldTypes,
  CAPABILITIES,
  PIPELINE_STATUS,
  CAPABILITIES_FUNCTIONALITIES,
  FEEDBACK_TYPES,
  PULL_DEPLOY_STRATEGY,
  PUSH_DEPLOY_STRATEGY,
}
export default constants

export type { ServiceTypes } from './services'
export type { IndexTypes, FieldTypes } from './collections'
export type { EndpointTypes, Verbs } from './endpoints'
