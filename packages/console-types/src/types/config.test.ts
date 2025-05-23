/* eslint-disable max-lines */
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
import * as t from 'tap'

import { Config, config } from './config'
import ajvConsoleErrors from '../plugins/ajv-console-errors'
import constants from '../constants'
import { validationMessage } from './validate-utils.test'
import { Verbs, EndpointTypes } from '../constants/endpoints'
import { EnvironmentVariablesTypes } from '../constants/services'

const { ServiceTypes } = constants

t.test('services', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile<Config>(config)

  t.test('only required fields for custom non advanced', t => {
    const config: Config = {
      services: {},
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.test('service with numeric container ports', t => {
    const config: Config = {
      services: {
        svc1: {
          name: 'svc1',
          type: ServiceTypes.CUSTOM,
          dockerImage: 'dockerimage',
          advanced: false,
          containerPorts: [{
            name: 'port1',
            from: 80,
            to: 3000,
          }],
        },
      },
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.test('service with interpolated container ports', t => {
    const config: Config = {
      services: {
        svc1: {
          name: 'svc1',
          type: ServiceTypes.CUSTOM,
          dockerImage: 'dockerimage',
          advanced: false,
          containerPorts: [{
            name: 'port1',
            from: 80,
            to: '{{PORT}}',
          }],
        },
      },
      endpoints: {},
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.test('test', t => {
    const config: Config = {
      endpoints: {
        '/secretbooks': {
          basePath: '/secretbooks',
          routes: {
            'GET/': {
              id: 'GET/',
              path: '/',
              public: {
                inherited: true,
              },
              showInDocumentation: {
                inherited: true,
              },
              secreted: {
                inherited: true,
              },
              acl: {
                inherited: true,
              },
              backofficeAcl: {
                inherited: true,
              },
              verb: Verbs.METHOD_GET,
              allowUnknownRequestContentType: {
                inherited: true,
              },
              allowUnknownResponseContentType: {
                inherited: true,
              },
              preDecorators: [],
              postDecorators: [],
              rateLimit: {
                inherited: true,
              },
            },
            'POST/': {
              id: 'POST/',
              path: '/',
              public: {
                inherited: true,
              },
              showInDocumentation: {
                inherited: true,
              },
              secreted: {
                inherited: true,
              },
              acl: {
                inherited: true,
              },
              backofficeAcl: {
                inherited: true,
              },
              verb: Verbs.METHOD_POST,
              allowUnknownRequestContentType: {
                inherited: true,
              },
              allowUnknownResponseContentType: {
                inherited: true,
              },
              preDecorators: [],
              postDecorators: [],
              rateLimit: {
                inherited: true,
              },
            },
          },
          type: EndpointTypes.CRUD,
          public: true,
          showInDocumentation: true,
          secreted: true,
          acl: 'clientType == "secret_key"',
          pathName: '/',
          collectionId: 'books',
          pathRewrite: '/books',
          description: 'Endpoint /secretbooks',
          tags: [
            'crud',
          ],
          backofficeAcl: {
            inherited: true,
          },
          allowUnknownRequestContentType: false,
          allowUnknownResponseContentType: false,
          forceMicroserviceGatewayProxy: false,
          listeners: {
            frontend: true,
          },
        },
        '/active-users': {
          basePath: '/active-users',
          routes: {},
          type: EndpointTypes.CRUD,
          public: true,
          showInDocumentation: true,
          secreted: false,
          acl: 'true',
          pathName: '/',
          collectionId: 'active_users',
          pathRewrite: '/active-users',
          description: 'Endpoint /active-users',
          tags: [
            'data analytics',
          ],
          backofficeAcl: {
            inherited: true,
          },
          allowUnknownRequestContentType: false,
          allowUnknownResponseContentType: false,
          forceMicroserviceGatewayProxy: false,
          listeners: {
            frontend: true,
          },
        },
        '/echo': {
          basePath: '/echo',
          type: EndpointTypes.CUSTOM,
          public: true,
          showInDocumentation: true,
          secreted: false,
          acl: 'true',
          service: 'echo-service',
          port: '80',
          pathRewrite: '/',
          description: '',
          tags: [
            'echo-service',
          ],
          backofficeAcl: {
            inherited: true,
          },
          allowUnknownRequestContentType: false,
          allowUnknownResponseContentType: false,
          forceMicroserviceGatewayProxy: false,
          listeners: {
            frontend: true,
          },
        },
      },
      services: {
        'echo-service': {
          type: ServiceTypes.CUSTOM,
          advanced: false,
          name: 'echo-service',
          dockerImage: 'docker.io/davidebianchi/echo-service',
          replicas: 1,
          logParser: 'mia-json',
          containerPorts: [
            {
              name: 'http',
              from: 80,
              to: 3000,
            },
          ],
          environment: [
            {
              name: 'HTTP_PORT',
              valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
              value: '3000',
            },
          ],
          tags: [
            'custom',
          ],
        },
        'swagger-aggregator': {
          type: ServiceTypes.CUSTOM,
          advanced: false,
          name: 'swagger-aggregator',
          dockerImage: 'nexus.mia-platform.eu/core/swagger-aggregator:3.9.1',
          replicas: 1,
          description: 'Use Mia-Platform core Swagger Aggregator',
        },
      },
      collections: {},
      cmsCategories: {},
      cmsSettings: {
        accessGroupsExpression: '',
      },
      cmsAnalytics: {},
      decorators: {
        preDecorators: {},
        postDecorators: {},
      },
      secrets: [],
      groups: [],
      cmsDashboard: [],
      version: '0.61.0',
      platformVersion: '10.1.0',
    }
    t.ok(validate(config), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('config compile correctly and match snapshot', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  t.ok(ajv.validateSchema(config))

  t.matchSnapshot(config)

  t.end()
})
