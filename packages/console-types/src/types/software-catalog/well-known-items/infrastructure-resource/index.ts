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

import type { FromSchema } from 'json-schema-to-ts'

import type { JSONSchema } from '../../../../commons/json-schema'
import { CatalogItemTypeDefinition } from '../../item-type-definition'
import type { CatalogItem, CatalogItemManifest, CatalogVersionedItem } from '../../item'
import { wkiDefinitionMaintainers, wkiDefinitionNamespace, wkiDefinitionPublisher, wkiDefinitionVersion, wkiDefinitionVisibility } from '../utils'
import type { CatalogWellKnownItemData } from '..'

const type = 'custom-resource'

const _resourcesSchema = {
  $id: 'software-catalog-infrastructure-resource-resources.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: `The resources of Software Catalog items of type ${type}.`,
  properties: {
    annotations: {
      items: {
        properties: {
          name: { type: 'string' },
          value: { type: 'string' },
        },
        type: 'object',
      },
      type: 'array',
    },
    attributes: {
      additionalProperties: {
        properties: {
          type: { enum: ['input'], type: 'string' },
        },
        type: 'object',
      },
      description: 'Attributes to be used to generate the form to manage the custom resource',
      type: 'object',
    },
    generator: {
      properties: {
        configurationBaseFolder: { type: 'string' },
        templates: {
          items: {
            properties: {
              'engine': {
                'description': 'The template engine used for generating the file (default is `mustache`)',
                'enum': ['mustache'],
                'type': 'string',
              },
              fileExtension: {
                description: 'The extension of the file to generate. If not set, default is .yml',
                type: 'string',
              },
              folderName: {
                description: 'The name of the folder where the file will be created, below the configurationBaseFolder',
                type: 'string',
              },
              name: { type: 'string' },
              template: { type: 'string' },
            },
            required: ['template', 'name'],
            type: 'object',
          },
          type: 'array',
        },
        type: { enum: ['template'], type: 'string' },
      },
      required: ['type', 'templates'],
      type: 'object',
    },
    labels: {
      items: {
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        type: 'object',
      },
      type: 'array',
    },
    meta: {
      properties: {
        apiVersion: { type: 'string' },
        kind: { type: 'string' },
      },
      type: 'object',
    },
    name: {
      minLength: 1,
      type: 'string',
    },
    runtime: {
      description: 'The object used to view the status of your current Kubernetes resources directly in the Console Runtime section',
      additionalProperties: false,
      properties: {
        resourceId: {
          description: 'The plural name for the infrastructure resource definition',
          type: 'string',
        },
        type: {
          description: 'The type of the infrastructure resource. At the moment the only supported type by the Software Catalog is "kubernetes"',
          type: 'string',
        },
      },
      required: ['type'],
      type: 'object',
    },
    service: {
      properties: {
        archive: {
          description: 'URL for an tar.gz archive to be used to generate a new repository',
          type: 'string',
        },
      },
      type: 'object',
    },
    jsonSchema: { type: 'object' },
    spec: { type: 'object' },
  },
  title: 'Software Catalog infrastructure resource resources',
  type: 'object',
} as const satisfies JSONSchema

export type Resources = FromSchema<typeof _resourcesSchema>

const resourcesExamples: Resources[] = [
  {
    name: 'ExternalOrchestratorLambda',
    meta: {
      kind: 'ExternalOrchestratorLambda',
      apiVersion: 'custom-generator.console.mia-platform.eu/v1',
    },
    spec: { code: 'the code' },
    generator: {
      type: 'template',
      configurationBaseFolder: 'base-folder-name',
      templates: [
        {
          template: 'this template can take some values from the spec, such as %spec.code%',
          name: 'template-name',
          fileExtension: 'json',
          folderName: 'template-folder-name',
        },
      ],
    },
  },
  {
    name: 'sleepInfo',
    meta: {
      apiVersion: 'kube-green.com/v1alpha1',
      kind: 'SleepInfo',
    },
    spec: {
      sleepAt: '20:00',
      timeZone: 'Europe/Rome',
      weekdays: '1-5',
    },
    runtime: {
      type: 'kubernetes',
      resourceId: 'sleepinfos',
    },
  },
]

const resourcesSchema: JSONSchema = { ..._resourcesSchema, examples: resourcesExamples }

const typeDefinition: CatalogItemTypeDefinition = {
  apiVersion: 'software-catalog.mia-platform.eu/v1',
  kind: 'item-type-definition',
  metadata: {
    namespace: wkiDefinitionNamespace,
    name: type,
    visibility: wkiDefinitionVisibility,
    displayName: 'Infrastructure resource',
    description: 'Defines custom objects beyond the standard Console-supported resources.',
    icon: {
      mediaType: 'image/svg+xml',
      base64Data: 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRjb2xvciIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMjAuMjcsMTU4LjU0YTgsOCwwLDAsMC03LjctLjQ2LDIwLDIwLDAsMSwxLDAtMzYuMTZBOCw4LDAsMCwwLDIyNCwxMTQuNjlWNzJhMTYsMTYsMCwwLDAtMTYtMTZIMTcxLjc4YTM1LjM2LDM1LjM2LDAsMCwwLC4yMi00LDM2LjExLDM2LjExLDAsMCwwLTExLjM2LTI2LjI0LDM2LDM2LDAsMCwwLTYwLjU1LDIzLjYyLDM2LjU2LDM2LjU2LDAsMCwwLC4xNCw2LjYySDY0QTE2LDE2LDAsMCwwLDQ4LDcydjMyLjIyYTM1LjM2LDM1LjM2LDAsMCwwLTQtLjIyLDM2LjEyLDM2LjEyLDAsMCwwLTI2LjI0LDExLjM2LDM1LjcsMzUuNywwLDAsMC05LjY5LDI3LDM2LjA4LDM2LjA4LDAsMCwwLDMzLjMxLDMzLjYsMzUuNjgsMzUuNjgsMCwwLDAsNi42Mi0uMTRWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNjUuMzFBOCw4LDAsMCwwLDIyMC4yNywxNTguNTRaTTIwOCwyMDhINjRWMTY1LjMxYTgsOCwwLDAsMC0xMS40My03LjIzLDIwLDIwLDAsMSwxLDAtMzYuMTZBOCw4LDAsMCwwLDY0LDExNC42OVY3Mmg0Ni42OWE4LDgsMCwwLDAsNy4yMy0xMS40MywyMCwyMCwwLDEsMSwzNi4xNiwwQTgsOCwwLDAsMCwxNjEuMzEsNzJIMjA4djMyLjIzYTM1LjY4LDM1LjY4LDAsMCwwLTYuNjItLjE0QTM2LDM2LDAsMCwwLDIwNCwxNzZhMzUuMzYsMzUuMzYsMCwwLDAsNC0uMjJaIj48L3BhdGg+PC9zdmc+',
    },
    documentation: {
      type: 'external',
      url: 'https://docs.mia-platform.eu/docs/software-catalog/items-manifest/infrastructure-resource',
    },
    maintainers: wkiDefinitionMaintainers,
    publisher: wkiDefinitionPublisher,
  },
  spec: {
    type,
    scope: 'tenant',
    isVersioningSupported: true,
    validation: {
      mechanism: 'json-schema',
      schema: { ...resourcesSchema },
    },
    controlledFields: [
      { key: 'apiVersion', jsonPath: 'meta.apiVersion' },
      { key: 'kind', jsonPath: 'meta.kind' },
      { key: 'type', jsonPath: 'runtime.type' },
      { key: 'resourceId', jsonPath: 'runtime.resourceId' },
    ],
  },
  __v: wkiDefinitionVersion,
}

export type Item = CatalogItem<typeof type, Resources>
export type VersionedItem = CatalogVersionedItem<typeof type, Resources>
export type Manifest = CatalogItemManifest<typeof type, Resources>

export const data: CatalogWellKnownItemData<typeof type> = { type, resourcesSchema, typeDefinition }
