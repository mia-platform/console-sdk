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

export const NORMAL = 'normal'
export const GEO = 'geo'
export const HASH = 'hash'
export const TTL = 'TTL'

export enum CollectionTypes {
  COLLECTION = 'collection',
  MONGODB_VIEW = 'view',
}

export enum IndexTypes {
  NORMAL = 'normal',
  GEO = 'geo',
  HASH = 'hash',
  TTL = 'TTL',
}
export const INDEX_TYPES = [IndexTypes.NORMAL, IndexTypes.GEO, IndexTypes.HASH, IndexTypes.TTL]

export const OBJECT_ID = 'ObjectId'
export const STRING = 'string'
export const DATE = 'Date'
export const BOOLEAN = 'boolean'
export const GEO_POINT = 'GeoPoint'
export const RAWOBJECT = 'RawObject'
export const OBJECT = 'object'
export const NUMBER = 'number'
export const CMS_DATE = 'date'
export const CMS_GEOPOINT = 'geopoint'
export const CMS_ARRAY = 'array'
export const ARRAY = 'Array'
export const ARRAY_OF_STRING = `${ARRAY}_${STRING}`
export const ARRAY_OF_NUMBER = `${ARRAY}_${NUMBER}`
export const ARRAY_OF_RAWOBJECT = `${ARRAY}_${RAWOBJECT}`
export const CMS_RAW_ARRAY = 'rawarray'
export const CMS_RAW_OBJECT = 'rawobject'

export enum FieldTypes {
  OBJECT_ID = 'ObjectId',
  STRING = 'string',
  DATE = 'Date',
  BOOLEAN = 'boolean',
  GEO_POINT = 'GeoPoint',
  RAWOBJECT = 'RawObject',
  OBJECT = 'object',
  NUMBER = 'number',
  CMS_DATE = 'date',
  CMS_GEOPOINT = 'geopoint',
  CMS_ARRAY = 'array',
  ARRAY = 'Array',
  ARRAY_OF_STRING = 'Array_string',
  ARRAY_OF_NUMBER = 'Array_number',
  ARRAY_OF_RAWOBJECT = 'Array_RawObject',
  CMS_RAW_ARRAY = 'rawarray',
  CMS_RAW_OBJECT = 'rawobject',
}

export type Field = {
  value: string
  label: string
  defaultCmsInterfaceType: string
}

export const FIELD_TYPES: Field[] = [{
  value: FieldTypes.STRING,
  label: 'String',
  defaultCmsInterfaceType: FieldTypes.STRING,
}, {
  value: FieldTypes.NUMBER,
  label: 'Number',
  defaultCmsInterfaceType: FieldTypes.NUMBER,
}, {
  value: FieldTypes.BOOLEAN,
  label: 'Boolean',
  defaultCmsInterfaceType: FieldTypes.BOOLEAN,
}, {
  value: FieldTypes.DATE,
  label: FieldTypes.DATE,
  defaultCmsInterfaceType: FieldTypes.CMS_DATE,
}, {
  value: FieldTypes.GEO_POINT,
  label: FieldTypes.GEO_POINT,
  defaultCmsInterfaceType: FieldTypes.CMS_GEOPOINT,
}, {
  value: FieldTypes.RAWOBJECT,
  label: 'Object',
  defaultCmsInterfaceType: FieldTypes.CMS_RAW_OBJECT,
}, {
  value: FieldTypes.ARRAY_OF_STRING,
  label: 'Array of string',
  defaultCmsInterfaceType: FieldTypes.CMS_ARRAY,
}, {
  value: FieldTypes.ARRAY_OF_NUMBER,
  label: 'Array of number',
  defaultCmsInterfaceType: FieldTypes.CMS_ARRAY,
}, {
  value: FieldTypes.ARRAY_OF_RAWOBJECT,
  label: 'Array of object',
  defaultCmsInterfaceType: FieldTypes.CMS_RAW_ARRAY,
}, {
  value: FieldTypes.OBJECT_ID,
  label: FieldTypes.OBJECT_ID,
  defaultCmsInterfaceType: FieldTypes.STRING,
}]

const BOOLEAN_VALUES = [true, false]

export enum Sensitivity {
  Unclassified = 0,
  Public = 1,
  Confidential = 2,
  Secret = 3,
  TopSecret = 4
}

const SENSITIITY_VALUES: Sensitivity[] = [
  Sensitivity.Unclassified,
  Sensitivity.Public,
  Sensitivity.Confidential,
  Sensitivity.Secret,
  Sensitivity.TopSecret,
]

export interface AllowedValue {
  type?: string[]
  sensitivityValue: Sensitivity[]
  encryptionEnabled?: boolean[]
  encryptionSearchable?: boolean[]
}

export interface SupportedValue {
  name: string
  type: string
  allowedValues: AllowedValue
}

export const DEFAULT_COLLECTION_FIELDS: SupportedValue[] = [{
  name: '_id',
  type: OBJECT_ID,
  allowedValues: {
    type: [OBJECT_ID, STRING],
    sensitivityValue: SENSITIITY_VALUES,
  },
}, {
  name: 'creatorId',
  type: STRING,
  allowedValues: {
    sensitivityValue: SENSITIITY_VALUES,
    encryptionEnabled: BOOLEAN_VALUES,
    encryptionSearchable: BOOLEAN_VALUES,
  },
}, {
  name: 'createdAt',
  type: DATE,
  allowedValues: {
    sensitivityValue: SENSITIITY_VALUES,
  },
}, {
  name: 'updaterId',
  type: STRING,
  allowedValues: {
    sensitivityValue: SENSITIITY_VALUES,
    encryptionEnabled: BOOLEAN_VALUES,
    encryptionSearchable: BOOLEAN_VALUES,
  },
}, {
  name: 'updatedAt',
  type: DATE,
  allowedValues: {
    sensitivityValue: SENSITIITY_VALUES,
  },
}, {
  name: '__STATE__',
  type: STRING,
  allowedValues: {
    sensitivityValue: SENSITIITY_VALUES,
  },
}]

export interface State {
  value: string
  label: string
  cmsValue: string
}

export const DRAFT_STATE = 'DRAFT'
export const PUBLIC_STATE = 'PUBLIC'

export const STATES: State[] = [{
  value: DRAFT_STATE,
  label: DRAFT_STATE,
  cmsValue: 'draft',
}, {
  value: PUBLIC_STATE,
  label: PUBLIC_STATE,
  cmsValue: 'publish',
}]
