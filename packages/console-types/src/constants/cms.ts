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
  OBJECT_ID,
  STRING,
  CMS_ARRAY,
  CMS_DATE,
  DATE,
  CMS_GEOPOINT,
  GEO_POINT,
  NUMBER,
  ARRAY_OF_RAWOBJECT,
  ARRAY_OF_NUMBER,
  ARRAY_OF_STRING,
  BOOLEAN,
  OBJECT,
  RAWOBJECT,
  CMS_RAW_ARRAY,
  CMS_RAW_OBJECT,
} from './collections'

export interface SupportedCMSInterfaceType {
  value: string
  label: string
  allowedTypes: string[]
}

export const CMS_INTERFACE_TYPES: SupportedCMSInterfaceType[] = [{
  value: STRING,
  label: 'String',
  allowedTypes: [STRING, OBJECT_ID],
}, {
  value: CMS_DATE,
  label: 'Date',
  allowedTypes: [DATE],
}, {
  value: CMS_GEOPOINT,
  label: 'Geo Point',
  allowedTypes: [GEO_POINT],
}, {
  value: 'cmslookup',
  label: 'Lookup',
  allowedTypes: [STRING, OBJECT_ID],
}, {
  value: NUMBER,
  label: 'Number',
  allowedTypes: [NUMBER],
}, {
  value: 'text',
  label: 'Text',
  allowedTypes: [STRING],
}, {
  value: 'files',
  label: 'Files',
  allowedTypes: [ARRAY_OF_RAWOBJECT],
}, {
  value: 'textArea',
  label: ' Text Area',
  allowedTypes: [STRING],
}, {
  value: 'cmsmultilookup',
  label: 'Multi lookup',
  allowedTypes: [STRING, ARRAY_OF_RAWOBJECT, ARRAY_OF_STRING, ARRAY_OF_NUMBER, OBJECT_ID],
}, {
  value: 'datetime',
  label: 'Date Time',
  allowedTypes: [DATE, NUMBER],
}, {
  value: CMS_ARRAY,
  label: 'Array',
  allowedTypes: [ARRAY_OF_RAWOBJECT, ARRAY_OF_STRING, ARRAY_OF_NUMBER],
}, {
  value: BOOLEAN,
  label: 'Boolean',
  allowedTypes: [BOOLEAN],
}, {
  value: OBJECT,
  label: 'Object',
  allowedTypes: [RAWOBJECT],
}, {
  value: CMS_RAW_ARRAY,
  label: 'Raw array',
  allowedTypes: [ARRAY_OF_RAWOBJECT, ARRAY_OF_STRING, ARRAY_OF_NUMBER],
}, {
  value: CMS_RAW_OBJECT,
  label: 'Raw object',
  allowedTypes: [RAWOBJECT],
}]


export interface CmsValueLabel {
  value: string|number,
  label: string,
}

export const CMS_LAYOUT_TYPES: CmsValueLabel[] = [{
  value: 'table',
  label: 'Table',
}, {
  value: 'push-table',
  label: 'Table Push',
}, {
  value: 'user-table',
  label: 'Table User',
}, {
  value: 'cards',
  label: 'Cards',
}, {
  value: 'gallery',
  label: 'Gallery',
}]

export const CMS_PROPERTY_VISIBILITY_LEVELS: CmsValueLabel[] = [{
  value: 0,
  label: 'Hidden',
}, {
  value: 1,
  label: 'All',
}, {
  value: 2,
  label: 'Detail and modal',
}, {
  value: 3,
  label: 'Only modal',
}]

/* Analytics */
export const CHART = 'chart'
export const CHART_SUMMARY = 'chart-summary'
export const CUSTOM_STOCK = 'custom_stock'
