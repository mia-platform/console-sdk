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

const typeReferenceJsonSchema = {
  $id: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  additionalProperties: true,
} as const satisfies JSONSchema

const imageSchema = {
  description: 'Representation of an image resource',
  type: 'object',
  properties: {
    mediaType: {
      description: 'MIME type of the image',
      type: 'string',
      enum: ['image/png', 'image/svg+xml'],
    },
    base64Data: {
      description: 'Image data encoded in Base64 format',
      type: 'string',
      contentEncoding: 'base64',
    },
  },
  additionalProperties: false,
  required: ['mediaType', 'base64Data'],
} as const satisfies JSONSchema

export const itemSchema = {
  $id: 'catalog-itd.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Software Catalog item type definition',
  description: 'A resource of this kind extends the Software Catalog by adding a new custom item type',
  type: 'object',
  properties: {
    apiVersion: { const: 'software-catalog.mia-platform.eu/v1' },
    kind: { const: 'item-type-definition' },
    metadata: {
      description: 'Descriptive properties referring to this type definition entity itself',
      type: 'object',
      properties: {
        namespace: {
          description: 'Read-only namespace the resource belongs to and within which its name must be unique',
          type: 'object',
          properties: {
            scope: { const: 'tenant' },
            id: {
              description: 'Identifier of the tenant',
              type: 'string',
              minLength: 1,
            },
          },
          additionalProperties: false,
          required: ['scope', 'id'],
        },

        name: {
          description: 'Read-only RFC-1035 compliant string that uniquely identifies the resource within its namespace. Must match the `spec.itemType` field',
          type: 'string',
          pattern: '^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$',
          minLength: 1,
          maxLength: 63,
        },

        creationTimestamp: {
          description: 'RFC 3339 date of the date and time the resource was created',
          type: 'string',
          pattern: '^((?:(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?))(Z|[\\+-]\\d{2}:\\d{2})?)$',
        },

        visibility: {
          description: 'Visibility on the resource',
          oneOf: [
            {
              description: 'Resource visible to all tenants of the Console installation',
              type: 'object',
              properties: {
                scope: { const: 'console' },
              },
              additionalProperties: false,
              required: ['scope'],
            },
            {
              description: 'Resource visible to a subset of tenants',
              type: 'object',
              properties: {
                scope: { const: 'tenant' },
                ids: {
                  description: 'Identifies of the tenants with visibility on the resource. For now, it can only contain the namespace of the resource',
                  type: 'array',
                  items: { type: 'string' },
                  minItems: 1,
                  maxItems: 1,
                },
              },
              additionalProperties: false,
              required: ['scope', 'ids'],
            },
          ],
        },

        displayName: {
          description: 'Display name of the resource',
          type: 'string',
        },

        description: {
          description: 'Human-readable description of the resource',
          type: 'string',
        },

        labels: {
          description: 'Set of identifying key/value pairs akin to Kubernetes object labels',
          patternProperties: {
            '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
              type: 'string',
              pattern: '^$|^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$',
              maxLength: 63,
            },
          },
          additionalProperties: false,
        },

        annotations: {
          description: 'Set of non-identifying key/value pairs akin to Kubernetes object annotations',
          patternProperties: {
            '^([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,253}[\\/])?([a-zA-Z0-9][a-zA-Z0-9\\.\\-]{0,63}[a-zA-Z0-9]?)$': {
              type: 'string',
              pattern: '^$|^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$',
              maxLength: 63,
            },
          },
          additionalProperties: false,
        },

        tags: {
          description: 'List of single-valued strings',
          type: 'array',
          items: {
            type: 'string',
            pattern: '^[a-z0-9:+#]+(-[a-z0-9:+#]+)*$',
            minLength: 1,
            maxLength: 63,
          },
        },

        links: {
          description: 'List of external hyperlinks',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              url: {
                description: 'URL in standard uri format',
                type: 'string',
              },
              displayName: {
                description: 'User friendly display name for the link',
                type: 'string',
              },
            },
            additionalProperties: false,
            required: ['url'],
          },
        },

        maintainers: {
          description: 'List of organizational entities maintaining the resource',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {
                description: 'Display name of the entity',
                type: 'string',
                minLength: 1,
              },
              email: {
                description: 'Contact email of the entity',
                type: 'string',
                format: 'email',
                minLength: 1,
              },
            },
            additionalProperties: false,
            required: ['name'],
          },
        },

        publisher: {
          description: 'Entity providing the resource',
          type: 'object',
          properties: {
            name: {
              description: 'Display name of the entity',
              type: 'string',
              minLength: 1,
            },
            url: {
              description: 'Link to the entity webpage',
              type: 'string',
              minLength: 1,
            },
            image: {
              ...imageSchema,
              description: 'Entity logo or relevant image',
            },
          },
          additionalProperties: false,
          required: ['name'],
        },
      },
      additionalProperties: true,
      required: ['namespace', 'name', 'creationTimestamp', 'visibility'],
    },
    spec: {
      description: 'State definition referring to the items of the type defined by this type definition entity',
      type: 'object',
      properties: {
        type: {
          description: 'Read-only item type defined by the type definition. It must match the `metadata.name` field',
          type: 'string',
          pattern: '^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$',
          minLength: 1,
          maxLength: 63,
        },

        scope: {
          description: 'Software Catalog scope where items of the defined type should be managed',
          type: 'string',
          enum: ['tenant'],
        },

        displayName: {
          description: 'Display name associated with the items of the defined type. Defaults to `type`',
          oneOf: [
            { type: 'string' },
            {
              type: 'object',
              properties: {
                singular: {
                  description: 'Singular display name',
                  type: 'string',
                  minLength: 1,
                },
                plural: {
                  description: 'Plural display name',
                  type: 'string',
                  minLength: 1,
                },
              },
              additionalProperties: false,
              required: ['singular'],
            },
          ],
        },

        description: {
          description: 'Description associated with the items of the defined type',
          type: 'string',
        },

        icon: {
          ...imageSchema,
          description: 'Icon associated with the items of the defined type',
        },

        isVersioningSupported: {
          description: 'Whether the defined item type supports versioning',
          type: 'boolean',
          default: false,
        },

        validation: {
          description: 'Indication on how to validate the defined item type resources',
          oneOf: [
            {
              description: 'Validation through JSON schema',
              type: 'object',
              properties: {
                mechanism: { const: 'json-schema' },
                // schema: {
                //   type: 'object',
                //   additionalProperties: true,
                // },
                schema: { $ref: 'http://json-schema.org/draft-07/schema#' },
              },
              additionalProperties: false,
              required: ['mechanism'],
            },
          ],
        },

        controlledFields: {
          description: 'List of fields managed by the Catalog',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              jsonPath: {
                description: 'JSON path to access the marketplace item value',
                type: 'string',
              },
              key: {
                description: 'Unique name of the field',
                type: 'string',
              },
            },
            additionalProperties: false,
            required: ['key', 'jsonPath'],
          },
        },
      },
      additionalProperties: true,
      required: ['type', 'scope'],
    },

    __v: {
      description: 'Read-only opaque value that represents the internal version of the document',
      type: 'integer',
      minimum: 0,
      default: 0,
    },
  },
  additionalProperties: false,
  required: ['apiVersion', 'kind', 'metadata', 'spec', '__v'],
} as const satisfies JSONSchema

export type Item = FromSchema<typeof itemSchema, { references: [typeof typeReferenceJsonSchema] }>
