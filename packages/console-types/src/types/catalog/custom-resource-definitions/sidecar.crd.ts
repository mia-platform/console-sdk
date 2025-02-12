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

import { catalogSidecar } from '../well-known-items'
import { PublicCatalogCRD } from '.'

const sidecarCRD: PublicCatalogCRD = {
  name: 'sidecar',
  itemId: 'sidecar-definition',
  description: 'Sidecar Custom Resource Definition',
  type: 'custom-resource-definition',
  tenantId: 'mia-platform',
  isVersioningSupported: false,
  visibility: { public: true },
  resources: {
    name: 'sidecar',
    validation: {
      jsonSchema: {
        ...catalogSidecar.resourcesSchema,
        default: {
          name: 'change-with-your-sidecar-name',
          dockerImage: 'change-with-your-sidecar-docker-image',
        },
      },
    },
  },
}

export default sidecarCRD
