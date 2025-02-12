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

import { catalogApplication } from '../well-known-items'
import { PublicCatalogCRD } from '.'

const applicationCRD: PublicCatalogCRD = {
  name: 'application',
  itemId: 'application-definition',
  description: 'Application Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: false,
  visibility: { public: true },
  resources: {
    name: 'application',
    validation: {
      jsonSchema: {
        ...catalogApplication.resourcesSchema,
        default: {
          services: {
            'change-with-your-plugin-name': {
              name: 'change-with-your-plugin-name',
              type: 'plugin',
              dockerImage: 'change-with-your-plugin-docker-image',
            },
          },
          endpoints: {
            '/change-with-your-endpoint-base-path': {
              defaultBasePath: '/change-with-your-endpoint-base-path',
              service: 'change-with-the-service-exposing-the-endpoint',
              type: 'custom',
              tags: [
                'custom',
              ],
            },
          },
          collections: {
            'change-with-your-collection-name': {
              defaultName: 'change-with-your-collection-name',
              type: 'collection',
              internalEndpoints: [
                {
                  basePath: 'change-with-the-collection-endpoint-base-path',
                },
              ],
            },
          },
          unsecretedVariables: {
            'change-with-your-variable-name': {
              productionEnv: 'change-with-your-value',
              noProductionEnv: 'change-with-your-value',
            },
          },
        },
      },
    },
  },
}

export default applicationCRD
