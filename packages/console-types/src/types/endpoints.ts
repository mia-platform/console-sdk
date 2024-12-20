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

import { ALLOWED_HTTP_VERBS, ENDPOINT_TYPES, EndpointIFramePolicy, EndpointTypes } from '../constants/endpoints'
import { buildType, description } from './shared'
import { VALIDATION_ERROR_ID } from '../strings'
import { collectionName } from './collections'
import { serviceName } from './services'
import { DIGIT_OR_INTERPOLATION_PATTERN } from '../constants/services'

const servicePort = {
  type: 'string',
  minLength: 1,
  pattern: DIGIT_OR_INTERPOLATION_PATTERN,
} as const

const routeBooleanValue = {
  type: 'object',
  default: { inherited: true },
  if: { type: 'object', properties: { inherited: { type: 'boolean', const: false } } },
  then: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: false },
      value: { type: 'boolean' },
    },
    required: ['inherited', 'value'],
    additionalProperties: false,
  },
  else: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: true },
    },
    required: ['inherited'],
    additionalProperties: false,
  },
} as const

const routeRequestsPerSecond = {
  type: 'object',
  default: { inherited: true },
  if: { type: 'object', properties: { inherited: { type: 'boolean', const: false } } },
  then: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: false },
      requestsPerSecond: {
        type: 'number',
        description: 'Maximum number of requests allowed per second',
      },
    },
    required: ['inherited', 'requestsPerSecond'],
    additionalProperties: false,
  },
  else: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: true },
    },
    required: ['inherited'],
    additionalProperties: false,
  },
} as const

export const path = {
  type: 'string',
  pattern: '^\\/(([\\w\\-:])\\/?)*$',
} as const


export const aclExpression = {
  type: 'string',
} as const

export const basePath = {
  type: 'string',
  pattern: '^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*)+)$',
} as const

const pathRewrite = { type: 'string' } as const

const aclConfig = {
  type: 'object',
  default: { inherited: true },
  if: { type: 'object', properties: { inherited: { type: 'boolean', const: false } } },
  then: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: false },
      value: aclExpression,
    },
    required: ['inherited', 'value'],
    additionalProperties: false,
  },
  else: {
    type: 'object',
    properties: {
      inherited: { type: 'boolean', const: true },
    },
    required: ['inherited'],
    additionalProperties: false,
  },
} as const

const endpointRoute = {
  id: { type: 'string' },
  path: {
    type: 'string',
    pattern: '^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*\\/?)+)$',
  },
  public: routeBooleanValue,
  showInDocumentation: routeBooleanValue,
  schema: { type: 'object' },
  secreted: routeBooleanValue,
  allowUnknownRequestContentType: routeBooleanValue,
  allowUnknownResponseContentType: routeBooleanValue,
  acl: aclConfig,
  backofficeAcl: aclConfig,
  verb: {
    type: 'string',
    enum: ALLOWED_HTTP_VERBS,
  },
  catchDecorator: { type: 'string' },
  preDecorators: { type: 'array', items: { type: 'string' }, default: [] },
  postDecorators: { type: 'array', items: { type: 'string' }, default: [] },
  rateLimit: routeRequestsPerSecond,
} as const

const endpointTimeout = {
  type: 'object',
  properties: {
    readSeconds: {
      type: 'number',
      description: 'The number of seconds to wait before the request is rejected',
    },
  },
} as const

const endpointRateLimit = {
  type: 'object',
  properties: {
    requestsPerSecond: {
      type: 'integer',
      description: 'The number of request that can be made each second',
    },
  },
} as const

const endpointRequestBody = {
  type: 'object',
  properties: {
    maxSizeMB: {
      type: 'number',
      description: 'Maximum size of the request body',
    },
  },
} as const

const commonEndpointFields = {
  type: {
    type: 'string',
    enum: ENDPOINT_TYPES.map((type) => type.value),
  },
  tags: {
    type: 'array',
    items: { type: 'string' },
  },
  public: { type: 'boolean' },
  showInDocumentation: { type: 'boolean' },
  secreted: { type: 'boolean' },
  acl: aclExpression,
  backofficeAcl: aclConfig,
  allowUnknownRequestContentType: { type: 'boolean', default: false },
  allowUnknownResponseContentType: { type: 'boolean', default: false },
  forceMicroserviceGatewayProxy: { type: 'boolean', default: false },
  timeout: endpointTimeout,
  rateLimit: endpointRateLimit,
  requestBody: endpointRequestBody,
  listeners: {
    type: 'object',
    additionalProperties: {
      type: 'boolean',
    },
  },
  options: {
    type: 'object',
    properties: {
      iframePolicy: { type: 'string', enum: [EndpointIFramePolicy.ALL, EndpointIFramePolicy.DENY, EndpointIFramePolicy.SAMEORIGIN] },
    },
  },
} as const

export const endpoint = {
  basePath: {
    ...basePath,
    [VALIDATION_ERROR_ID]: 'endpoint.basePath.patternError',
  },
  pathRewrite,
  description,
  collectionId: collectionName,
  pathName: path,
  route: endpointRoute,
  serviceName,
  ...commonEndpointFields,
} as const

const routes = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    properties: endpoint.route,
    additionalProperties: false,
    required: ['id', 'path', 'acl', 'backofficeAcl', 'public', 'secreted', 'showInDocumentation', 'verb'],
  },
} as const

const baseEndpointProperties = {
  basePath,
  pathRewrite,
  description,
  routes,
  ...commonEndpointFields,
} as const

const baseEndpointRequiredProperties = [
  'basePath', 'type', 'public', 'secreted', 'showInDocumentation', 'acl',
] as const

const endpointWithCollection = {
  type: 'object',
  properties: {
    ...baseEndpointProperties,
    type: { type: 'string', enum: [EndpointTypes.CRUD, EndpointTypes.MONGODB_VIEW] },
    pathName: endpoint.pathName,
    collectionId: endpoint.collectionId,
  },
  required: ['routes', 'collectionId', 'pathName', ...baseEndpointRequiredProperties],
} as const

export type CrudEndpoint = FromSchema<typeof endpointWithCollection, {
  parseIfThenElseKeywords: true
}>

const endpointFastDataProjection = {
  type: 'object',
  properties: {
    ...baseEndpointProperties,
    type: { type: 'string', const: EndpointTypes.FAST_DATA_PROJECTION },
    pathName: endpoint.pathName,
    projectionId: { type: 'string' },
  },
  required: ['projectionId', 'routes', 'pathName', ...baseEndpointRequiredProperties],
} as const

export type FastDataProjectionEndpoint = FromSchema<typeof endpointFastDataProjection, {
  parseIfThenElseKeywords: true
}>

const endpointSingleView = {
  type: 'object',
  properties: {
    ...baseEndpointProperties,
    type: { type: 'string', const: EndpointTypes.SINGLE_VIEW },
    pathName: endpoint.pathName,
    internalEndpoint: { type: 'string' },
  },
  required: ['internalEndpoint', 'routes', 'pathName', ...baseEndpointRequiredProperties],
} as const

export type SingleViewEndpoint = FromSchema<typeof endpointSingleView, {
  parseIfThenElseKeywords: true
}>

const customEndpoint = {
  type: 'object',
  properties: {
    ...baseEndpointProperties,
    type: { type: 'string', const: EndpointTypes.CUSTOM },
    service: serviceName,
    port: servicePort,
    useDownstreamProtocol: { type: 'boolean' },
  },
  required: ['service', 'port', ...baseEndpointRequiredProperties],
} as const

export type CustomEndpoint = FromSchema<typeof customEndpoint, {
  parseIfThenElseKeywords: true
}>

const genericEndpoint = {
  type: 'object',
  properties: {
    ...baseEndpointProperties,
    type: { type: 'string', enum: [EndpointTypes.EXTERNAL, EndpointTypes.CUSTOM, EndpointTypes.CROSS_PROJECTS] },
    service: serviceName,
  },
  required: ['service', ...baseEndpointRequiredProperties],
} as const

export type GenericEndpoint = FromSchema<typeof genericEndpoint, {
  parseIfThenElseKeywords: true
}>

export const endpoints = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    if: buildType(endpointWithCollection.properties.type),
    then: endpointWithCollection,
    else: {
      if: buildType(customEndpoint.properties.type),
      then: customEndpoint,
      else: {
        if: buildType(genericEndpoint.properties.type),
        then: genericEndpoint,
        else: {
          if: buildType(endpointFastDataProjection.properties.type),
          then: endpointFastDataProjection,
          else: {
            if: buildType(endpointSingleView.properties.type),
            then: endpointSingleView,
          },
        },
      },
    },
  },
  default: {},
} as const

// This type is required since Endpoints cannot parse if/then/else since it is too deep
export type Endpoints = Record<string,
  FastDataProjectionEndpoint |
  CrudEndpoint |
  SingleViewEndpoint |
  CustomEndpoint |
  GenericEndpoint
>
