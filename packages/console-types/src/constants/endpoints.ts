
export const API_CONSOLE_TOTAL_PAGES_HEADER_KEY = 'x-total-pages'
export const TOTAL_ITEMS_HEADER_KEY = 'x-total-items'

export enum Verbs {
  METHOD_GET = 'GET',
  METHOD_PUT = 'PUT',
  METHOD_POST = 'POST',
  METHOD_PATCH = 'PATCH',
  METHOD_DELETE = 'DELETE',
}

export const { METHOD_GET } = Verbs
export const ALLOWED_HTTP_VERBS = [
  Verbs.METHOD_GET,
  Verbs.METHOD_POST,
  Verbs.METHOD_PUT,
  Verbs.METHOD_PATCH,
  Verbs.METHOD_DELETE,
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

export interface EndpointType {
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

export interface CrudRoute {
  path: string,
  verb: string,
  allowUnknownResponseContentType?: boolean
}

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
