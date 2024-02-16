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

import { EnvironmentVariablesPlain } from '../types/services'
import { VALIDATION_ERROR_ID } from '../strings'

export enum EnvironmentVariablesTypes {
  PLAIN_TEXT = 'plain',
  FROM_SECRET = 'secret'
}

export const ENVIRONMENT_VAR_TYPES: EnvironmentVariablesTypes[] = [
  EnvironmentVariablesTypes.PLAIN_TEXT,
  EnvironmentVariablesTypes.FROM_SECRET,
]

export const DIGIT_OR_INTERPOLATION_PATTERN = '^$|^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|([1-9]\\d*|0))$'

export enum ServiceTypes {
  CUSTOM = 'custom',
  CORE = 'core',
  CRONJOB = 'cronjob',
  EXTERNAL = 'external',
  CROSS_PROJECTS = 'cross-projects'
}
export const { CRONJOB } = ServiceTypes

export const SERVICE_TYPES = [{
  value: ServiceTypes.EXTERNAL,
  label: 'Outer service',
}, {
  value: ServiceTypes.CROSS_PROJECTS,
  label: 'Cross projects service',
}, {
  value: ServiceTypes.CUSTOM,
  label: 'Existing Git Service',
}]

export const DEFAULT_HEADERS: EnvironmentVariablesPlain[] = [{
  name: 'USERID_HEADER_KEY',
  value: 'miauserid',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'GROUPS_HEADER_KEY',
  value: 'miausergroups',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'CLIENTTYPE_HEADER_KEY',
  value: 'client-type',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'BACKOFFICE_HEADER_KEY',
  value: 'isbackoffice',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'USER_PROPERTIES_HEADER_KEY',
  value: 'miauserproperties',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}]

export const DEFAULT_ENVIRONMENT_VARIABLES: EnvironmentVariablesPlain[] = [{
  name: 'LOG_LEVEL',
  value: '{{LOG_LEVEL}}',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'MICROSERVICE_GATEWAY_SERVICE_NAME',
  value: 'microservice-gateway',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'TRUSTED_PROXIES',
  value: '10.0.0.0/8,172.16.0.0/12,192.168.0.0/16',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, {
  name: 'HTTP_PORT',
  value: '3000',
  valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
}, ...DEFAULT_HEADERS]

export const DEFAULT_CPU_LIMIT = '100m'
export const DEFAULT_MEMORY_LIMIT = '150Mi'
export const DEFAULT_CPU_REQUEST = '100m'
export const DEFAULT_MEMORY_REQUEST = '150Mi'

export const MIA_LOG_PARSER_JSON = 'mia-json'
export const MIA_LOG_PARSER_NGINX = 'mia-nginx'
export const MIA_LOG_PARSER_PLAIN = 'mia-plain'
export const MIA_DEFAULT_LOG_PARSER = MIA_LOG_PARSER_JSON

export const schedule = {
  type: 'string',
  pattern: '^((\\{\\{([A-Z])([A-Z0-9_]*)\\}\\})|(\\S+ \\S+ \\S+ \\S+ \\S+))$',
  [VALIDATION_ERROR_ID]: 'cronjobSchedule.patternError',
} as const
