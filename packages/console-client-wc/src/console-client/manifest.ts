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
