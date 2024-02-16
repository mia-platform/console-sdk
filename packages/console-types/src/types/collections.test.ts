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

import Ajv from 'ajv'
import t from 'tap'

import { CollectionTypes, IndexTypes, PUBLIC_STATE, STRING } from '../constants/collections'
import { Collection, collections, collectionFieldName, indexFieldName, ViewCollection } from './collections'
import { validationMessage, createTestsRegex, PatternTest } from './validate-utils.test'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

t.test('collections', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile(collections)

  t.test('only required fields for collection', t => {
    const collection: Collection = {
      type: CollectionTypes.COLLECTION,
      id: 'mycollection',
      name: 'mycollection',
      fields: [{
        name: 'field1',
        type: STRING,
        required: false,
        nullable: false,
      }],
      internalEndpoints: [{
        defaultState: PUBLIC_STATE,
        basePath: '/test',
      }],
      indexes: [{
        name: 'myindex',
        type: IndexTypes.NORMAL,
        unique: false,
        fields: [{ name: 'field1', order: 1 }],
      }],
    }
    t.ok(validate({ collection_name: collection }), validationMessage(validate.errors))
    t.end()
  })

  t.test('only required fields for views', t => {
    const collection: ViewCollection = {
      type: CollectionTypes.MONGODB_VIEW,
      id: 'mycollection',
      name: 'mycollection',
      fields: [{
        name: 'field1',
        type: STRING,
        required: false,
        nullable: false,
      }],
      internalEndpoints: [{
        defaultState: PUBLIC_STATE,
        basePath: '/test',
      }],
      pipeline: [],
      source: 'mycollection',
    }
    t.ok(validate({ collection_name: collection }), validationMessage(validate.errors))
    t.end()
  })


  t.test('collections with a name with more than 80 characters get rejected', t => {
    const collection: Collection = {
      type: CollectionTypes.COLLECTION,
      id: 'a-collection-with-a-name-with-more-than-eighty-characters-get-rejected-because-the-name-is-definitely-too-long',
      name: 'a-collection-with-a-name-with-more-than-eighty-characters-get-rejected-because-the-name-is-definitely-too-long',
      fields: [{
        name: 'field1',
        type: STRING,
        required: false,
        nullable: false,
      }],
      internalEndpoints: [{
        defaultState: PUBLIC_STATE,
        basePath: '/test',
      }],
      indexes: [],
    }
    t.notOk(validate({ collection_name: collection }), validationMessage(validate.errors))

    t.end()
  })

  t.test('default sorting is accepted', t => {
    const collection: Collection = {
      type: CollectionTypes.COLLECTION,
      id: 'mycollection',
      name: 'mycollection',
      fields: [{
        name: 'field1',
        type: STRING,
        required: false,
        nullable: false,
      }],
      internalEndpoints: [{
        defaultState: PUBLIC_STATE,
        basePath: '/test',
        defaultSortingIndex: 'myindex',
      }],
      indexes: [{
        name: 'myindex',
        type: IndexTypes.NORMAL,
        unique: false,
        fields: [{ name: 'field1', order: 1 }],
      }],
    }

    t.ok(validate({ collection_name: collection }), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('validate pattern', t => {
  t.test('collection field name json schema pattern', t => {
    const regex = new RegExp(collectionFieldName.pattern)
    const tests: PatternTest[] = [{
      name: 'is a valid index name',
      items: [
        'field',
        'field1',
        '__fieldName__',
        'fieldname',
        'field_nameprop',
        'ValidField',
        'valid-field',
        'valid field ',
        'validField**',
        'valid[field]',
        '#validField',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid index name',
      items: [
        '.invalid',
        'invalid.',
        'invalid$field',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('index field name json schema pattern', t => {
    const regex = new RegExp(indexFieldName.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid index name',
      items: [
        'field',
        'field1',
        '__fieldName__',
        'field.name',
        'field_name.prop',
        'ValidField',
        'invalid-name',
        'valid name ',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid index name',
      items: [
        '.invalid',
        'invalid.',
        'invalidName**',
        'invalid[name]',
        '#invalidName',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.end()
})
