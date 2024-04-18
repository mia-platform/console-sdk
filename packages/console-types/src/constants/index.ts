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
  ALLOWED_HTTP_VERBS,
  API_CONSOLE_TOTAL_PAGES_HEADER_KEY,
  CRUD_ROUTES,
  ENDPOINT_TYPES,
  EndpointTypes,
  EndpointIFramePolicy,
  TOTAL_ITEMS_HEADER_KEY,
  Verbs,
} from './endpoints'
import {
  ALLOWED_MONITORING_SYSTEMS,
  ALLOWED_RUNNER_TOOLS,
  DEPLOYMENT_TYPES,
  DOCKER_IMAGE_NAME_SUGGESTION_TYPES,
  ENVIRONMENTS_VARIABLES_TYPES,
  KUBERNETES_FILES_FOLDER,
  MLP,
  NUMERIC_VISIBILITY,
  PIPELINE_FROM_TEMPLATE,
  PULL_DEPLOY_STRATEGY,
  PUSH_DEPLOY_STRATEGY,
  ProjectPipelinesTypes,
  REPOSITORY_TYPES,
  VISIBILITY_PROJECT_FIELDS,
} from './project'
import {
  ARRAY,
  ARRAY_OF_NUMBER,
  ARRAY_OF_RAWOBJECT,
  ARRAY_OF_STRING,
  BOOLEAN,
  DATE,
  DEFAULT_COLLECTION_FIELDS,
  DRAFT_STATE,
  FIELD_TYPES,
  FieldTypes,
  GEO,
  GEO_POINT,
  HASH,
  INDEX_TYPES,
  IndexTypes,
  NORMAL,
  NUMBER,
  OBJECT,
  OBJECT_ID,
  PUBLIC_STATE,
  RAWOBJECT,
  STATES,
  STRING,
  TTL,
} from './collections'
import { CAPABILITIES, CAPABILITIES_FUNCTIONALITIES, PIPELINE_STATUS } from './provider'
import {
  CHART,
  CHART_SUMMARY,
  CMS_INTERFACE_TYPES,
  CMS_LAYOUT_TYPES,
  CMS_PROPERTY_VISIBILITY_LEVELS,
  CUSTOM_STOCK,
} from './cms'
import {
  CRONJOB,
  DEFAULT_CPU_LIMIT,
  DEFAULT_CPU_REQUEST,
  DEFAULT_ENVIRONMENT_VARIABLES,
  DEFAULT_HEADERS,
  DEFAULT_MEMORY_LIMIT,
  DEFAULT_MEMORY_REQUEST,
  DIGIT_OR_INTERPOLATION_PATTERN,
  ENVIRONMENT_VAR_TYPES,
  EnvironmentVariablesTypes,
  MIA_DEFAULT_LOG_PARSER,
  MIA_LOG_PARSER_JSON,
  MIA_LOG_PARSER_NGINX,
  MIA_LOG_PARSER_PLAIN,
  SERVICE_TYPES,
  ServiceTypes,
} from './services'
import { DASHBOARD_TYPES, DASHBOARD_TYPE_IFRAME, DASHBOARD_TYPE_NEW_TAB } from './dashboard'
import { FEEDBACK_TYPES } from './feedback'
import { HISTORY_RECORD_STATUS } from './webhooks'

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
  DASHBOARD_TYPE_NEW_TAB,
  ServiceTypes,
  IndexTypes,
  EndpointTypes,
  EndpointIFramePolicy,
  Verbs,
  FieldTypes,
  CAPABILITIES,
  PIPELINE_STATUS,
  CAPABILITIES_FUNCTIONALITIES,
  FEEDBACK_TYPES,
  PULL_DEPLOY_STRATEGY,
  PUSH_DEPLOY_STRATEGY,
  HISTORY_RECORD_STATUS,
}
export default constants

export type { ServiceTypes } from './services'
export type { IndexTypes, FieldTypes } from './collections'
export type { EndpointTypes, Verbs } from './endpoints'
