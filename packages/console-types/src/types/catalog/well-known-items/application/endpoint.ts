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

import type { JSONSchema } from '../../../../commons/json-schema'
import { portSchema, tagsSchema } from '../commons'

const defaultBasePathSchema = { pattern: '^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*)+)$', type: 'string' } as const satisfies JSONSchema

const defaultPathRewriteSchema = { type: 'string' } as const satisfies JSONSchema

const descriptionSchema = { type: 'string' } as const satisfies JSONSchema

const publicSchema = { type: 'boolean' } as const satisfies JSONSchema

const showInDocumentationSchema = { type: 'boolean' } as const satisfies JSONSchema

const secretedSchema = { type: 'boolean' } as const satisfies JSONSchema

const aclSchema = { type: 'string' } as const satisfies JSONSchema

const backofficeAclSchema = {
  default: { inherited: true },
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        inherited: { const: false },
        value: aclSchema,
      },
      required: ['inherited'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        inherited: { const: true },
      },
      required: ['inherited'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

const allowUnknownRequestContentTypeSchema = { default: false, type: 'boolean' } as const satisfies JSONSchema

const allowUnknownResponseContentTypeSchema = { default: false, type: 'boolean' } as const satisfies JSONSchema

const forceMicroserviceGatewayProxySchema = { default: false, type: 'boolean' } as const satisfies JSONSchema

const listenersSchema = {
  additionalProperties: { type: 'boolean' },
  type: 'object',
} as const satisfies JSONSchema

const optionsSchema = {
  type: 'object',
  properties: {
    iframePolicy: { type: 'string', enum: ['all', 'deny', 'sameorigin'] },
  },
} as const satisfies JSONSchema

const routeBooleanValueSchema = {
  default: { inherited: true },
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        inherited: { const: false },
        value: { type: 'boolean' },
      },
      required: ['inherited', 'value'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        inherited: { const: true },
      },
      required: ['inherited'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema

const routesSchema = {
  additionalProperties: false,
  patternProperties: {
    '^(GET|POST|PUT|PATCH|DELETE|HEAD)(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*\\/?)+)$': {
      additionalProperties: false,
      properties: {
        acl: backofficeAclSchema,
        allowUnknownRequestContentType: routeBooleanValueSchema,
        allowUnknownResponseContentType: routeBooleanValueSchema,
        backofficeAcl: backofficeAclSchema,
        catchDecorator: { type: 'string' },
        id: { pattern: '^(GET|POST|PUT|PATCH|DELETE)(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*\\/?)+)$', type: 'string' },
        path: { pattern: '^(\\/$|(\\/([\\w\\-\\.]|(:[a-zA-Z]))[\\w\\-\\.]*\\/?)+)$', type: 'string' },
        postDecorators: { default: [], items: { type: 'string' }, type: 'array' },
        preDecorators: { default: [], items: { type: 'string' }, type: 'array' },
        public: routeBooleanValueSchema,
        schema: { type: 'object' },
        secreted: routeBooleanValueSchema,
        showInDocumentation: routeBooleanValueSchema,
        verb: { enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], type: 'string' },
      },
      required: [
        'id',
        'path',
        'verb',
        'public',
        'secreted',
        'acl',
        'showInDocumentation',
        'allowUnknownRequestContentType',
        'allowUnknownResponseContentType',
      ],
      type: 'object',
    },
  },
  type: 'object',
} as const satisfies JSONSchema

export const endpointSchema = {
  oneOf: [
    {
      additionalProperties: false,
      properties: {
        acl: aclSchema,
        allowUnknownRequestContentType: allowUnknownRequestContentTypeSchema,
        allowUnknownResponseContentType: allowUnknownResponseContentTypeSchema,
        backofficeAcl: backofficeAclSchema,
        defaultBasePath: defaultBasePathSchema,
        defaultPathRewrite: defaultPathRewriteSchema,
        description: descriptionSchema,
        forceMicroserviceGatewayProxy: forceMicroserviceGatewayProxySchema,
        listeners: listenersSchema,
        options: optionsSchema,
        port: portSchema,
        public: publicSchema,
        routes: routesSchema,
        secreted: secretedSchema,
        service: { minLength: 1, pattern: '^[a-z]([-a-z0-9]*[a-z0-9])?$', type: 'string' },
        showInDocumentation: showInDocumentationSchema,
        tags: tagsSchema,
        type: { enum: ['external', 'custom', 'cross-projects'], type: 'string' },
        useDownstreamProtocol: { type: 'boolean' },
      },
      required: ['type', 'defaultBasePath', 'service', 'tags'],
      type: 'object',
    },
    {
      additionalProperties: false,
      properties: {
        acl: aclSchema,
        allowUnknownRequestContentType: allowUnknownRequestContentTypeSchema,
        allowUnknownResponseContentType: allowUnknownResponseContentTypeSchema,
        backofficeAcl: backofficeAclSchema,
        collectionId: { maxLength: 80, pattern: '(^[\\w-]+$)', type: 'string' },
        defaultBasePath: defaultBasePathSchema,
        defaultPathRewrite: defaultPathRewriteSchema,
        description: descriptionSchema,
        forceMicroserviceGatewayProxy: forceMicroserviceGatewayProxySchema,
        listeners: listenersSchema,
        pathName: { 'type': 'string', 'pattern': '^\\/(([\\w\\-:])\\/?)*$' },
        options: optionsSchema,
        public: publicSchema,
        routes: routesSchema,
        secreted: secretedSchema,
        showInDocumentation: showInDocumentationSchema,
        tags: tagsSchema,
        type: { enum: ['crud', 'view'], type: 'string' },
      },
      required: ['type', 'defaultBasePath', 'collectionId', 'tags'],
      type: 'object',
    },
  ],
} as const satisfies JSONSchema
