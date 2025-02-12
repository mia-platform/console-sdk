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

import { catalogExample } from '../well-known-items'
import { PublicCatalogCRD } from '.'

const exampleCRD: PublicCatalogCRD = {
  name: 'example',
  itemId: 'example-definition',
  description: 'Example Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: true,
  visibility: { public: true },
  resources: {
    name: 'example',
    validation: {
      jsonSchema: {
        ...catalogExample.resourcesSchema,
        default: {
          services: {
            'change-with-your-example-name': {
              name: 'change-with-your-example-name',
              type: 'example',
              archiveUrl: 'https://archive-url',
            },
          },
        },
      },
    },
  },
}

export default exampleCRD
