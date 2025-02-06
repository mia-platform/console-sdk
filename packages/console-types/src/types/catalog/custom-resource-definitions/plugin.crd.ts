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

import { catalogPlugin } from '../well-known-items'
import { PublicCatalogCRD } from '.'

const pluginCRD: PublicCatalogCRD = {
  name: 'plugin',
  itemId: 'plugin-definition',
  description: 'Plugin Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: true,
  visibility: { public: true },
  isLatest: true,
  resources: {
    name: 'plugin',
    validation: {
      jsonSchema: {
        ...catalogPlugin.resourcesSchema,
        default: {
          services: {
            'change-with-your-plugin-name': {
              name: 'change-with-your-plugin-name',
              type: 'plugin',
              dockerImage: 'change-with-your-plugin-docker-image',
            },
          },
        },
      },
    },
  },
}

export default pluginCRD
