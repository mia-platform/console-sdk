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

/* eslint-disable max-lines */
import Ajv from 'ajv'
import t from 'tap'

import { PatternTest, createTestsRegex, validationMessage } from './validate-utils.test'
import { basePath, endpoints } from './endpoints'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

const CRUD_ENDPOINT = {
  '/crud': {
    'basePath': '/crud',
    'pathRewrite': '/crud',
    'description': 'Endpoint /crud',
    'type': 'crud',
    'tags': [
      'crud',
    ],
    'collectionId': 'crud',
    'pathName': '/',
    'public': false,
    'showInDocumentation': true,
    'secreted': false,
    'acl': 'false',
    'backofficeAcl': {
      'inherited': true,
    },
    'allowUnknownRequestContentType': false,
    'allowUnknownResponseContentType': false,
    'forceMicroserviceGatewayProxy': false,
    'routes': {
      'GET/': {
        'id': 'GET/',
        'path': '/',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/': {
        'id': 'POST/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/export': {
        'id': 'GET/export',
        'path': '/export',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': false,
          'value': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/:id': {
        'id': 'GET/:id',
        'path': '/:id',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/:id': {
        'id': 'DELETE/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/': {
        'id': 'DELETE/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/:id': {
        'id': 'PATCH/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/': {
        'id': 'PATCH/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/count': {
        'id': 'GET/count',
        'path': '/count',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/bulk': {
        'id': 'POST/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/upsert-one': {
        'id': 'POST/upsert-one',
        'path': '/upsert-one',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/bulk': {
        'id': 'PATCH/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/:id/state': {
        'id': 'POST/:id/state',
        'path': '/:id/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/state': {
        'id': 'POST/state',
        'path': '/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
    },
    'listeners': {
      'my-listener': true,
      'another-listener': true,
    },
  },
}

const MONGO_VIEW_ENDPOINT = {
  '/mongo-view': {
    'basePath': '/mongo-view',
    'pathRewrite': '/mongo-view',
    'description': 'Endpoint /mongo-view',
    'type': 'view',
    'tags': [
      'mongo-view',
    ],
    'collectionId': 'mongo-view',
    'pathName': '/',
    'public': false,
    'showInDocumentation': true,
    'secreted': false,
    'acl': 'false',
    'backofficeAcl': {
      'inherited': true,
    },
    'allowUnknownRequestContentType': false,
    'allowUnknownResponseContentType': false,
    'forceMicroserviceGatewayProxy': false,
    'routes': {
      'GET/': {
        'id': 'GET/',
        'path': '/',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/': {
        'id': 'POST/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/export': {
        'id': 'GET/export',
        'path': '/export',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': false,
          'value': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/:id': {
        'id': 'GET/:id',
        'path': '/:id',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/:id': {
        'id': 'DELETE/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/': {
        'id': 'DELETE/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/:id': {
        'id': 'PATCH/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/': {
        'id': 'PATCH/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/count': {
        'id': 'GET/count',
        'path': '/count',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/bulk': {
        'id': 'POST/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/upsert-one': {
        'id': 'POST/upsert-one',
        'path': '/upsert-one',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/bulk': {
        'id': 'PATCH/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/:id/state': {
        'id': 'POST/:id/state',
        'path': '/:id/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/state': {
        'id': 'POST/state',
        'path': '/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
    },
  },
}

const CUSTOM_ENDPOINT = {
  '/custom': {
    'basePath': '/custom',
    'pathRewrite': '/custom',
    'pathName': '/',
    'description': 'Endpoint /custom',
    'type': 'custom',
    'tags': [
      'custom',
    ],
    'public': false,
    'showInDocumentation': false,
    'secreted': false,
    'acl': 'true',
    'backofficeAcl': {
      'inherited': true,
    },
    'allowUnknownRequestContentType': true,
    'allowUnknownResponseContentType': true,
    'forceMicroserviceGatewayProxy': false,
    'service': 'backend',
  },
}

const PROJECTION_ENDPOINT = {
  '/projection': {
    'basePath': '/projection',
    'pathRewrite': '/projection',
    'description': 'Endpoint /projection',
    'type': 'fast-data-projection',
    'tags': [
      'projection',
    ],
    'projectionId': 'projection',
    'pathName': '/',
    'public': false,
    'showInDocumentation': true,
    'secreted': false,
    'acl': 'false',
    'backofficeAcl': {
      'inherited': true,
    },
    'allowUnknownRequestContentType': false,
    'allowUnknownResponseContentType': false,
    'forceMicroserviceGatewayProxy': false,
    'routes': {
      'GET/': {
        'id': 'GET/',
        'path': '/',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/': {
        'id': 'POST/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/export': {
        'id': 'GET/export',
        'path': '/export',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': false,
          'value': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/:id': {
        'id': 'GET/:id',
        'path': '/:id',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/:id': {
        'id': 'DELETE/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/': {
        'id': 'DELETE/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/:id': {
        'id': 'PATCH/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/': {
        'id': 'PATCH/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/count': {
        'id': 'GET/count',
        'path': '/count',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/bulk': {
        'id': 'POST/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/upsert-one': {
        'id': 'POST/upsert-one',
        'path': '/upsert-one',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/bulk': {
        'id': 'PATCH/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/:id/state': {
        'id': 'POST/:id/state',
        'path': '/:id/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/state': {
        'id': 'POST/state',
        'path': '/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
    },
  },
}

const SINGLE_VIEW_ENDPOINT = {
  '/single/view': {
    'basePath': '/single/view',
    'pathRewrite': '/single/view',
    'description': 'Endpoint /single/view',
    'type': 'fast-data-single-view',
    'tags': [
      'single-view',
    ],
    'internalEndpoint': '/single-view',
    'pathName': '/',
    'public': false,
    'showInDocumentation': true,
    'secreted': false,
    'acl': 'false',
    'backofficeAcl': {
      'inherited': true,
    },
    'allowUnknownRequestContentType': false,
    'allowUnknownResponseContentType': false,
    'forceMicroserviceGatewayProxy': false,
    'routes': {
      'GET/': {
        'id': 'GET/',
        'path': '/',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/': {
        'id': 'POST/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/export': {
        'id': 'GET/export',
        'path': '/export',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': false,
          'value': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/:id': {
        'id': 'GET/:id',
        'path': '/:id',
        'public': {
          'inherited': false,
          'value': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': false,
          'value': 'true',
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/:id': {
        'id': 'DELETE/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'DELETE/': {
        'id': 'DELETE/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'DELETE',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/:id': {
        'id': 'PATCH/:id',
        'path': '/:id',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/': {
        'id': 'PATCH/',
        'path': '/',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'GET/count': {
        'id': 'GET/count',
        'path': '/count',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'GET',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/bulk': {
        'id': 'POST/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/upsert-one': {
        'id': 'POST/upsert-one',
        'path': '/upsert-one',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'PATCH/bulk': {
        'id': 'PATCH/bulk',
        'path': '/bulk',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'PATCH',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/:id/state': {
        'id': 'POST/:id/state',
        'path': '/:id/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
      'POST/state': {
        'id': 'POST/state',
        'path': '/state',
        'public': {
          'inherited': true,
        },
        'showInDocumentation': {
          'inherited': true,
        },
        'secreted': {
          'inherited': true,
        },
        'allowUnknownRequestContentType': {
          'inherited': true,
        },
        'allowUnknownResponseContentType': {
          'inherited': true,
        },
        'acl': {
          'inherited': true,
        },
        'backofficeAcl': {
          'inherited': true,
        },
        'verb': 'POST',
        'preDecorators': [],
        'postDecorators': [],
      },
    },
  },
}

t.test('endpoints schema', t => {
  const ajv = new Ajv({ allErrors: true })
  ajvConsoleErrors(ajv)
  const validateEndpoints = ajv.compile(endpoints)

  t.matchSnapshot(JSON.stringify(endpoints, null, 2))

  t.test('correctly validates endpoints', t => {
    const testCases = [
      {
        desc: 'crud type',
        endpoints: CRUD_ENDPOINT,
      },
      {
        desc: 'mongo view type',
        endpoints: MONGO_VIEW_ENDPOINT,
      },
      {
        desc: 'custom type',
        endpoints: CUSTOM_ENDPOINT,
      },
      {
        desc: 'projection type',
        endpoints: PROJECTION_ENDPOINT,
      },
      {
        desc: 'single view type',
        endpoints: SINGLE_VIEW_ENDPOINT,
      },
    ]

    testCases.forEach(({ desc, endpoints }) => {
      t.test(desc, t => {
        t.ok(validateEndpoints(endpoints), validationMessage(validateEndpoints.errors))
        t.end()
      })
    })

    t.end()
  })

  t.test('do not validate incorrect base paths', t => {
    const testEndpoint = {
      '/custom': {
        ...CUSTOM_ENDPOINT['/custom'],
        basePath: 'path with spaces',
      },
    }

    t.notOk(validateEndpoints(testEndpoint))

    t.end()
  })

  t.end()
})

t.test('basePath json schema pattern', t => {
  const regex = new RegExp(basePath.pattern)

  const tests: PatternTest[] = [{
    name: 'is a valid basePath',
    items: [
      '/foo/bar',
      '/:s/bar',
      '/foo/:s/bar',
      '/',
      '/fff5/:sds5/fdsf',
      '/foo-bar/:path/foo',
      '/foObAr/:path/lOReM',
      '/foObAr',
      '/foObAr/:PaTh/LoreM',
      '/foo_bar/:l_ol/Lo_Rem',
      '/--foo_bar--/--l_ol/-Lo_Rem-',
      '/123_-',
      '/fff5/5dsa',
      '/fff5/5',
      '/foo-bar/:path/-foo',
      '/_foobar/:lol/LoRem',
      '/foobar/:lol/_LoRem',
      '/with.dot',
      '/foo/with.dot',
      '/end/dot.',
      '/.initial/dot',
      '/foo/:param.withdot/foo',
    ],
    assertion: 'ok',
  }, {
    name: 'is not a valid basePath',
    items: [
      '/foo/:/bar',
      '/:/bar',
      '/aa:s/bar',
      '//bar',
      '////fds',
      '////:fds',
      '//:/bar',
      '/fff//fdsf',
      '/fff5/:5',
      '/fff5/:sds5/fds/',
      '//',
      'fooBar',
      'foobar',
      '/foobar/:_lol/LoRem',
      '/foobar/:/lorem',
      '/foo/:.param/start/:.with/dot',
    ],
    assertion: 'notOk',
  }]

  createTestsRegex(t, tests, regex)

  t.end()
})
