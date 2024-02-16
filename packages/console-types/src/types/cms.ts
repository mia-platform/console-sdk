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

import { CHART, CHART_SUMMARY, CMS_INTERFACE_TYPES, CMS_LAYOUT_TYPES, CMS_PROPERTY_VISIBILITY_LEVELS, CUSTOM_STOCK } from '../constants/cms'
import { buildType, description } from './shared'
import { collectionFieldName, collectionName } from './collections'
import { aclExpression } from './endpoints'

const cmsName = {
  type: 'string',
  minLength: 1,
  maxLength: 32,
  pattern: '(^[a-zA-Z0-9_\\-\\s]+$)',
} as const

const positiveInteger = {
  type: 'integer',
  minimum: 0,
} as const

const layout = {
  type: 'string',
  enum: CMS_LAYOUT_TYPES.map((layout) => layout.value),
} as const

const cmsVisibilityFields = {
  type: 'object',
  properties: {
    query: {
      type: 'string',
    },
  },
  additionalProperties: false,
} as const

const cmsVisibilityLevel = {
  type: 'integer',
  enum: CMS_PROPERTY_VISIBILITY_LEVELS.map((level) => level.value),
} as const

const cmsVisibility = {
  type: 'object',
  properties: {
    level: cmsVisibilityLevel,
    new: cmsVisibilityFields,
    edit: cmsVisibilityFields,
  },
  additionalProperties: false,
  required: ['level'],
} as const

const interfaceType = {
  type: 'string',
  enum: CMS_INTERFACE_TYPES.map((type) => type.value),
} as const

const textLookup = {
  type: 'object',
  properties: {
    sources: { type: 'array', items: { type: 'string' } },
    delimiters: { type: 'array', items: { type: 'string' } },
  },
  additionalProperties: false,
  required: ['sources', 'delimiters'],
} as const

const cmsLookup = {
  type: 'object',
  properties: {
    text: textLookup,
    value: { type: 'string' },
    endpoint: { type: 'string' },
    inlineSource: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
        },
        additionalProperties: true,
      },
    },
    autoSelect: { type: 'boolean' },
    reset: { type: 'boolean' },
    limit: positiveInteger,
    query: { type: 'string' },
    searchLive: { type: 'boolean' },
  },
  additionalProperties: false,
} as const

const property = {
  id: collectionFieldName,
  label: { type: 'string', minLength: 1 },
  interfaceType,
  cmsDateFormat: { type: 'string' },
  cmsLookup,
  cmsZoom: positiveInteger,
  description,
  cmsOrder: positiveInteger,
  cmsCardPosition: positiveInteger,
  cmsEditable: { type: 'boolean' },
  cmsVisibility,
} as const

export const cmsProperty = {
  type: 'object',
  properties: property,
  additionalProperties: false,
  required: ['id', 'label', 'interfaceType', 'cmsVisibility'],
} as const

const properties = {
  type: 'object',
  patternProperties: {
    [cmsName.pattern]: cmsProperty,
  },
  additionalProperties: false,
} as const

const action = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    label: { type: 'string' },
    route: { type: 'string' },
    icon: { type: 'string' },
  },
} as const

const pageAnalytics = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string',
    },
    width: {
      type: 'integer',
      enum: [6, 12],
      default: 6,
    },
    order: {
      type: 'integer',
      minimum: 0,
      default: 0,
    },
  },
  additionalProperties: false,
} as const

const cmsPageAnalytics = {
  type: 'array',
  items: pageAnalytics,
  default: [],
} as const

const highlight = {
  type: 'object',
  properties: {
    query: { type: 'string' },
    color: { type: 'string' },
    backgroundColor: { type: 'string' },
  },
  additionalProperties: false,
} as const

const notification = {
  type: 'object',
  properties: {
    query: { type: 'string' },
  },
  additionalProperties: false,
} as const

const page = {
  actions: { type: 'array', items: action },
  id: { type: 'string' },
  name: cmsName,
  endpoint: { type: 'string', minLength: 1 },
  icon: { type: 'string' },
  order: positiveInteger,
  layout,
  highlight,
  notification,
  baseQuery: { type: 'string' },
  defaultDelete: { type: 'boolean' },
  blocked: { type: 'boolean' },
  hidden: { type: 'boolean' },
  properties,
  analytics: cmsPageAnalytics,
  aclExpression: { type: 'string' },
} as const

export const cmsPage = {
  type: 'object',
  properties: page,
  additionalProperties: false,
  required: ['id', 'name', 'endpoint', 'layout', 'properties'],
} as const

const pages = {
  type: 'object',
  patternProperties: {
    [cmsName.pattern]: cmsPage,
  },
  additionalProperties: false,
} as const

export const cmsCategory = {
  id: { type: 'string' },
  name: cmsName,
  order: positiveInteger,
  pages,
} as const

export const cmsCategories = {
  type: 'object',
  patternProperties: {
    [cmsName.pattern]: {
      type: 'object',
      properties: cmsCategory,
      additionalProperties: false,
      required: ['id', 'name', 'order', 'pages'],
    },
  },
  default: {},
  additionalProperties: false,
} as const

export const cmsButton = {
  type: 'object',
  properties: {
    id: { type: 'string', minLength: 1 },
    label: { type: 'string', minLength: 1 },
    route: { type: 'string', minLength: 1, pattern: '^[\\/]\\w*' },
    icon: { type: 'string' },
  },
  required: ['id', 'label', 'route'],
  additionalProperties: false,
} as const

export const cmsSettings = {
  type: 'object',
  required: ['accessGroupsExpression'],
  properties: {
    accessGroupsExpression: {
      type: aclExpression.type,
      default: 'isBackoffice && groups.admin',
    },
  },
  default: {
    accessGroupsExpression: 'isBackoffice && groups.admin',
  },
  additionalProperties: false,
} as const

const yAxis = {
  type: 'object',
  required: ['shared', 'title'],
  properties: {
    shared: { type: 'boolean' },
    labelType: { type: 'string', enum: ['euro', ''] },
    title: { type: 'string' },
  },
  additionalProperties: false,
} as const

const defaultZoom = {
  type: 'integer',
  minimum: 0,
  maximum: 6,
} as const

const series = {
  type: 'object',
  required: ['id', 'name', 'type', 'color'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string', enum: ['line', 'area', 'spline', 'column'] },
    color: { type: 'string' },
    labelType: { type: 'string', enum: ['euro', ''] },
    params: {
      type: 'object',
      required: ['collection'],
      properties: {
        collection: collectionName,
        group: { type: 'string' },
        groupDate: { type: 'string' },
        format: { type: 'string', enum: ['y', 'ym', 'yw', 'ymd', 'ymdh', 'ymdhM'] },
        filter: { type: 'string' },
        operations: {
          type: 'array',
          items: {
            type: 'array',
            items: { type: 'string' },
          },
        },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
} as const

const customStockAnalytics = {
  type: 'object',
  properties: {
    type: { type: 'string', const: CUSTOM_STOCK },
    title: { type: 'string' },
    id: { type: 'string' },
    legend: { type: 'boolean' },
    yAxis,
    customRangeDates: { type: 'boolean' },
    defaultZoom,
    series: {
      type: 'array',
      items: series,
    },
  },
  additionalProperties: false,
  required: ['type', 'title', 'legend', 'series'],
} as const

const chartAnalytics = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: [CHART, CHART_SUMMARY] },
    title: { type: 'string' },
    id: { type: 'string' },
    legend: { type: 'boolean' },
    sortBy: {
      type: 'string',
      enum: ['label-asc', 'label-desc', 'value-asc', 'value-desc'],
    },
    customRangeDates: { type: 'boolean' },
    startDate: { type: 'integer' },
    endDate: { type: 'integer' },
    series: {
      type: 'array',
      items: series,
    },
  },
  additionalProperties: false,
  required: ['type', 'title', 'legend', 'series'],
} as const

export const analytics = {
  [CHART]: chartAnalytics,
  [CHART_SUMMARY]: chartAnalytics,
  [CUSTOM_STOCK]: customStockAnalytics,
} as const

export const cmsAnalytics = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    if: buildType({ type: 'string', const: CUSTOM_STOCK }),
    then: customStockAnalytics,
    else: {
      if: buildType({ type: 'string', enum: [CHART, CHART_SUMMARY] }),
      then: chartAnalytics,
      else: false,
    },
  },
  default: {},
} as const

export type CmsAnalytics = FromSchema<typeof cmsAnalytics, {
  parseIfThenElseKeywords: true
}>

export const cmsDashboard = {
  type: 'array',
  items: pageAnalytics,
  default: [],
} as const
