import tap from 'tap'

import ConsoleSDK from './MicrofronendIntegrator'
import { IMountingProps } from './types'

const mountingProps: IMountingProps = {}

tap.test('Console SDK', (t) => {
  t.test('getContainerId', (t) => {
    const sdk = new ConsoleSDK(mountingProps)
    const containerID = sdk.getContainerId()

    t.strictSame(containerID, '')
    t.end()
  })
  
  t.end()
})