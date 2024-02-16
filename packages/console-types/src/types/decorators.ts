import { description } from './shared'
import { port } from './services'

export const decoratorPath = {
  type: 'string',
  pattern: '^(\\/$|(\\/([a-z]|(:[a-z])|\\$[0-9])[a-zA-Z0-9-_]*)+)$',
} as const

export const preDecorator = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    protocol: { type: 'string', enum: ['http:'] },
    service: { type: 'string' },
    port,
    path: decoratorPath,
    description,
    requireRequestBody: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['name', 'protocol', 'service', 'port', 'path', 'requireRequestBody'],
} as const

export const postDecorator = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    protocol: { type: 'string', enum: ['http:'] },
    service: { type: 'string' },
    port,
    path: decoratorPath,
    description,
    requireRequestBody: { type: 'boolean' },
    requireResponseBody: { type: 'boolean' },
    isCatchDecorator: { type: 'boolean', default: false },
  },
  additionalProperties: false,
  required: ['name', 'protocol', 'service', 'port', 'path', 'requireRequestBody', 'requireResponseBody'],
} as const

export const preDecorators = {
  type: 'object',
  default: {},
  additionalProperties: preDecorator,
} as const

export const postDecorators = {
  type: 'object',
  default: {},
  additionalProperties: postDecorator,
} as const

export const decorators = {
  type: 'object',
  default: {},
  properties: {
    preDecorators,
    postDecorators,
  },
} as const
