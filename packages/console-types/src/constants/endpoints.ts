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


export const API_CONSOLE_TOTAL_PAGES_HEADER_KEY = 'x-total-pages'
export const TOTAL_ITEMS_HEADER_KEY = 'x-total-items'

export enum Verbs {
  METHOD_GET = 'GET',
  METHOD_PUT = 'PUT',
  METHOD_POST = 'POST',
  METHOD_PATCH = 'PATCH',
  METHOD_DELETE = 'DELETE',
  METHOD_HEAD = 'HEAD',
  METHOD_OPTIONS = 'OPTIONS',
}

export const { METHOD_GET } = Verbs
export const ALLOWED_HTTP_VERBS = [
  Verbs.METHOD_GET,
  Verbs.METHOD_POST,
  Verbs.METHOD_PUT,
  Verbs.METHOD_PATCH,
  Verbs.METHOD_DELETE,
  Verbs.METHOD_HEAD,
  Verbs.METHOD_OPTIONS,
]

export enum EndpointTypes {
  CUSTOM = 'custom',
  CRUD = 'crud',
  CORE = 'core',
  CROSS_PROJECTS = 'cross-projects',
  EXTERNAL = 'external',
  MONGODB_VIEW = 'view',
  FAST_DATA_PROJECTION = 'fast-data-projection',
  SINGLE_VIEW = 'fast-data-single-view'
}

export enum EndpointIFramePolicy {
  ALL = 'all',
  DENY = 'deny',
  SAMEORIGIN = 'sameorigin',
}

export type EndpointType = {
  value: string,
  label: string,
}

export const ENDPOINT_TYPES: EndpointType[] = [{
  value: EndpointTypes.CRUD,
  label: 'CRUD',
}, {
  value: EndpointTypes.MONGODB_VIEW,
  label: 'MongoDB View',
}, {
  value: EndpointTypes.CUSTOM,
  label: 'Microservice',
}, {
  value: EndpointTypes.EXTERNAL,
  label: 'External Proxy',
}, {
  value: EndpointTypes.CROSS_PROJECTS,
  label: 'Cross Projects Proxy',
}, {
  value: EndpointTypes.FAST_DATA_PROJECTION,
  label: 'Fast Data Projection',
}, {
  value: EndpointTypes.SINGLE_VIEW,
  label: 'Fast Data Single View',
}]

export type CrudRoute = {
  path: string,
  verb: string,
  allowUnknownResponseContentType?: boolean
}

export const MONGODB_VIEW_ROUTES: CrudRoute[] = [{
  path: '/',
  verb: METHOD_GET,
}, {
  path: '/',
  verb: 'POST',
}, {
  path: '/export',
  verb: METHOD_GET,
  allowUnknownResponseContentType: true,
}, {
  path: '/:id',
  verb: METHOD_GET,
}, {
  path: '/:id',
  verb: 'DELETE',
}, {
  path: '/:id',
  verb: 'PATCH',
}, {
  path: '/count',
  verb: METHOD_GET,
}, {
  path: '/lookup/:id',
  verb: METHOD_GET,
}, {
  path: '/schema',
  verb: METHOD_GET,
}]

export const CRUD_ROUTES: CrudRoute[] = [{
  path: '/',
  verb: METHOD_GET,
}, {
  path: '/',
  verb: 'POST',
}, {
  path: '/export',
  verb: METHOD_GET,
  allowUnknownResponseContentType: true,
}, {
  path: '/:id',
  verb: METHOD_GET,
}, {
  path: '/:id',
  verb: 'DELETE',
}, {
  path: '/',
  verb: 'DELETE',
}, {
  path: '/:id',
  verb: 'PATCH',
}, {
  path: '/',
  verb: 'PATCH',
}, {
  path: '/count',
  verb: 'GET',
}, {
  path: '/bulk',
  verb: 'POST',
}, {
  path: '/upsert-one',
  verb: 'POST',
}, {
  path: '/bulk',
  verb: 'PATCH',
}, {
  path: '/:id/state',
  verb: 'POST',
}, {
  path: '/state',
  verb: 'POST',
}]

export const MONGODB_VIEW_WITH_LOOKUP_ROUTES: CrudRoute[] = [
  {
    path: '/lookup/:id',
    verb: METHOD_GET,
  },
]
