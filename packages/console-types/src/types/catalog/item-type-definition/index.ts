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

import { FromSchema } from 'json-schema-to-ts'

import { JSONSchema } from '../../../commons/json-schema'
import { catalogAnnotationsSchema, catalogLabelsSchema, catalogLinksSchema, catalogMaintainersSchema, catalogTagsSchema } from '../commons'
import { imageSchema } from './commons'

const typeSchema = {
  type: 'string',
  pattern: '^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$',
  minLength: 1,
  maxLength: 63,
  examples: ['plugin', 'custom-workload', 'ai-agent'],
} as const satisfies JSONSchema

const _catalogItemTypeDefinitionSchema = {
  $id: 'catalog-itd.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Software Catalog item type definition',
  description: 'An entity used to extend the Software Catalog beyond its built-in capabilities defining a new type of items.',
  type: 'object',
  properties: {
    apiVersion: {
      description: 'The versioned schema of this representation of an object.',
      const: 'software-catalog.mia-platform.eu/v1',
    },
    kind: {
      description: 'The family of resources this object belongs to.',
      const: 'item-type-definition',
    },
    metadata: {
      description: 'Descriptive properties referring to this object.',
      type: 'object',
      properties: {
        namespace: {
          description: 'The namespace this object belongs to. Within this namespace, the `.metadata.name` of this object must be unique. Read-only.',
          type: 'object',
          properties: {
            scope: {
              description: 'The hierarchical level of the namespace.',
              const: 'tenant',
            },
            id: {
              description: 'The identifier of the tenant.',
              type: 'string',
              minLength: 1,
            },
          },
          additionalProperties: false,
          required: ['scope', 'id'],
          examples: [{ scope: 'tenant', id: 'my-company' }],
        },
        name: {
          description: 'A string that uniquely identifies this object within its namespace (`.metadata.namespace`). Must be equal to the `.spec.type` of this object. Read-only.',
          ...typeSchema,
        },
        visibility: {
          description: 'The visibility on this object. It can be public (i.e., visible to all tenants of the Console installation), or private (i.e., only visible to the namespace this object belongs to).',
          oneOf: [
            {
              type: 'object',
              properties: {
                scope: {
                  description: 'The hierarchical level at which this object is visible.',
                  const: 'console',
                },
              },
              required: ['scope'],
            },
            {
              type: 'object',
              properties: {
                scope: {
                  description: 'The hierarchical level at which this object is visible.',
                  const: 'tenant',
                },
                ids: {
                  description: 'A list of identifiers of the tenants with visibility on this object. It can contain only one item that must be equal to the `.metadata.namespace.id` of this object.',
                  type: 'array',
                  items: { type: 'string' },
                  minItems: 1,
                  maxItems: 1,
                },
              },
              required: ['scope', 'ids'],
            },
          ],
          examples: [
            { scope: 'console' },
            { scope: 'tenant', ids: ['my-company'] },
          ],
        },
        displayName: {
          description: 'The human-readable title of this object. Clients may use it as the title associated with the items of the defined type. Defaults to the `.metadata.name` of this object.',
          type: 'string',
          minLength: 1,
          examples: ['Plugin', 'Custom Workload', 'AI Agent'],
        },
        description: {
          description: 'A brief description of this object. Clients may use it as the description associated with the items of the defined type.',
          type: 'string',
        },
        icon: {
          description: 'An icon associated with this object. Clients may use it as the icon associated with the items of the defined type.',
          ...imageSchema,
        },
        documentation: {
          description: 'A reference to the documentation regarding this object. Clients may use it as the documentation associated with the items of the defined type.',
          type: 'object',
          properties: {
            type: {
              description: 'The type of documentation.',
              const: 'external',
            },
            url: {
              description: 'The URL of the documentation page.',
              type: 'string',
              pattern: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&\\/=]*)$',
            },
          },
          additionalProperties: false,
          required: ['type', 'url'],
          examples: [{ type: 'external', url: 'https://example.com' }],
        },
        labels: catalogLabelsSchema,
        annotations: catalogAnnotationsSchema,
        tags: catalogTagsSchema,
        links: catalogLinksSchema,
        maintainers: catalogMaintainersSchema,
        publisher: {
          description: 'The entity providing this object.',
          type: 'object',
          properties: {
            name: {
              description: 'The display name of the publisher.',
              type: 'string',
              minLength: 1,
            },
            url: {
              description: 'A link to a publisher webpage.',
              type: 'string',
              minLength: 1,
            },
            image: {
              description: 'A logo or relevant image of the publisher.',
              ...imageSchema,
            },
          },
          additionalProperties: false,
          required: ['name'],
          examples: [
            { name: 'Mia-Platform', url: 'https://mia-platform.eu/', image: { mediaType: 'image/svg+xml', base64Data: 'w0KGgoAA' } },
            { name: 'John Doe' },
          ],
        },
      },
      additionalProperties: true,
      required: ['namespace', 'name', 'visibility'],
    },
    spec: {
      description: 'The specification of the desired state of this object.',
      type: 'object',
      properties: {
        type: {
          description: 'The item type defined by this object. It must match the `.metadata.name` of this object. Read-only.',
          ...typeSchema,
        },
        scope: {
          description: 'The scope where items of the defined type should be managed.',
          type: 'string',
          enum: ['tenant'],
        },
        isVersioningSupported: {
          description: 'A flag stating whether the items of the defined type should support versioning.',
          type: 'boolean',
        },
        validation: {
          description: 'The JSON schema against which the `.resources` of  the items of the defined type should be validated.',
          type: 'object',
          properties: {
            mechanism: {
              description: 'The validation mechanism.',
              const: 'json-schema',
            },
            schema: {
              description: 'The validation JSON Schema. It must be a valid JSON Schema draft 07.',
              type: 'object',
              additionalProperties: true,
            },
          },
          additionalProperties: false,
          required: ['mechanism', 'schema'],
          examples: [
            {
              mechanism: 'json-schema',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                },
                required: ['name'],
              },
            },
          ],
        },
        controlledFields: {
          description: 'A list of fields managed by the server when changing the version of an item of the defined type.',
          type: 'array',
          items: {
            description: 'The information needed to access a specific value of the item.',
            type: 'object',
            properties: {
              jsonPath: {
                description: 'The JSON path to access the item value.',
                type: 'string',
              },
              key: {
                description: 'The unique name of the field.',
                type: 'string',
              },
            },
            additionalProperties: false,
            required: ['key', 'jsonPath'],
          },
          examples: [[{ key: 'apiVersion', jsonPath: 'meta.apiVersion' }]],
        },
      },
      additionalProperties: true,
      required: ['type', 'scope', 'validation'],
    },
    __v: {
      description: 'The opaque value that represents the internal version of this object. Clients may not set this value and must treat it as opaque. Read-only.',
      type: 'integer',
      minimum: 0,
    },
  },
  additionalProperties: false,
  required: ['apiVersion', 'kind', 'metadata', 'spec'],
} as const satisfies JSONSchema

export type CatalogItemTypeDefinition = FromSchema<typeof _catalogItemTypeDefinitionSchema>

const example: CatalogItemTypeDefinition = {
  apiVersion: 'software-catalog.mia-platform.eu/v1',
  kind: 'item-type-definition',
  metadata: {
    namespace: { scope: 'tenant', id: 'mia-platform-company' },
    name: 'docker-image',
    visibility: { scope: 'console' },
    displayName: 'Docker Image',
    description: 'A single Docker image',
    icon: { mediaType: 'image/svg+xml', base64Data: 'abc=' },
    documentation: { type: 'external', url: 'https://docs.mia-platform.eu/' },
    labels: { environment: 'prod' },
    annotations: { 'mia-platform.eu/version': '14.0.0' },
    tags: ['cloud'],
    links: [{ displayName: 'Homepage', url: 'https://www.docker.com/' }],
    maintainers: [{ name: 'Mia-Platform Core Team', email: 'support@mia-platform.eu' }],
    publisher: {
      name: 'Mia-Platform',
      url: 'https://mia-platform.eu/',
      image: { mediaType: 'image/png', base64Data: 'abc=' },
    },
  },
  spec: {
    type: 'docker-image',
    scope: 'tenant',
    isVersioningSupported: true,
    validation: {
      mechanism: 'json-schema',
      schema: {
        type: 'object',
        'properties': {
          'imageName': {
            description: 'The name of the Docker image (without registry or tag)',
            type: 'string',
            pattern: '^[a-z0-9]+([._-][a-z0-9]+)*$',
          },
          'registry': {
            description: 'The Docker registry hostname where the image is stored',
            type: 'string',
            pattern: '^[a-z0-9]+([.-][a-z0-9]+)*\\.[a-z]{2,}([:\\d+])?(/[a-z0-9._-]+)*$|^[a-z0-9]+([.-][a-z0-9]+)*$',
          },
          'tag': {
            description: 'The tag/version of the Docker image',
            type: 'string',
            pattern: '^(latest|[0-9]+\\.[0-9]+\\.[0-9]+(-[a-z]+[0-9]*)?|[0-9]+\\.[0-9]+\\.[0-9]+)$',
          },
        },
        'required': ['imageName', 'registry', 'tag'],
        'additionalProperties': false,
      },
    },
  },
  __v: 0,
}

export const catalogItemTypeDefinitionSchema = { ..._catalogItemTypeDefinitionSchema, examples: [example] }
