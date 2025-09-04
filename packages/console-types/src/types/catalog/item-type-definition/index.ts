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
import { catalogAnnotationsSchema, catalogLabelsSchema, catalogLinksSchema, catalogMaintainersSchema, catalogTagsSchema, domainStringSchema } from '../commons'
import { imageSchema } from './commons'

export const catalogItemTypeDefinitionSchema = {
  $id: 'catalog-itd.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Software Catalog Item Type Definition',
  description: 'Data model of a Software Catalog Item Type Definition',
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
          ...domainStringSchema,
          description: 'Read-only RFC-1035 compliant string that uniquely identifies the resource within its namespace. Must match the `spec.itemType` field',
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
              required: ['scope', 'ids'],
            },
          ],
        },

        displayName: {
          description: 'Display name of the resource. Clients may also use it as the display name associated with the items of the defined type',
          type: 'string',
          minLength: 1,
        },

        description: {
          description: 'Display name of the resource. Clients may also use it as the description associated with the items of the defined type',
          type: 'string',
        },

        icon: {
          ...imageSchema,
          description: 'Icon of the resource. Clients may also use it as the icon associated with the items of the defined type',
        },

        documentation: {
          description: 'Documentation regarding the resource. Clients may also use it as the documentation associated with the items of the defined type',
          oneOf: [
            {
              description: 'External documentation',
              type: 'object',
              properties: {
                type: { const: 'external' },
                url: { type: 'string' },
              },
              additionalProperties: false,
              required: ['type', 'url'],
            },
          ],
        },

        labels: catalogLabelsSchema,

        annotations: catalogAnnotationsSchema,

        tags: catalogTagsSchema,

        links: catalogLinksSchema,

        maintainers: catalogMaintainersSchema,

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
      required: ['namespace', 'name', 'visibility'],
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

        isVersioningSupported: {
          description: 'Whether the defined item type supports versioning',
          type: 'boolean',
        },

        validation: {
          description: 'Indication on how to validate the defined item type resources',
          oneOf: [
            {
              description: 'Validation through JSON schema',
              type: 'object',
              properties: {
                mechanism: { const: 'json-schema' },
                schema: { type: 'object', additionalProperties: true },
              },
              additionalProperties: false,
              required: ['mechanism', 'schema'],
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
      required: ['type', 'scope', 'validation'],
    },
    __v: {
      description: 'Read-only opaque value that represents the internal version of the document',
      type: 'integer',
      minimum: 0,
    },
  },
  additionalProperties: false,
  required: ['apiVersion', 'kind', 'metadata', 'spec'],
} as const satisfies JSONSchema

export type CatalogItemTypeDefinition = FromSchema<typeof catalogItemTypeDefinitionSchema>
