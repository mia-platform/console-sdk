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

import { type FetchFactory, type Manifest } from '@micro-lc/compose-toolkit'

const fetchMock: FetchFactory = () => {
  return [
    {
      url: { pathname: '/api/marketplace/' },
      method: 'GET',
      handler: () => {
        const response = new Response(
          JSON.stringify([]),
          { headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' }, status: 200 }
        )

        return Promise.resolve(response)
      },
    },
  ]
}

/** @see https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/manifest */
const manifest: Manifest = {
  label: 'Console Client',
  description: 'Console Client WebComponent to interact with Mia-Platform Console API.',
  type: 'connector',
  example: JSON.stringify({ 'tag': 'console-client' }),
  mocks: { fetch: fetchMock },
  properties: {
    baseApi: {
      type: 'string',
      __mia_configuration: {
        label: 'Base API',
        description: 'Base URL for the Console API.',
      },
    },
  },
}

export default manifest
