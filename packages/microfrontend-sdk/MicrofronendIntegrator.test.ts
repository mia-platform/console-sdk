import { JSDOM } from 'jsdom'

import ConsoleSDK, { ISDKProps, ContextsType } from './MicrofronendIntegrator'
import { EventsTypes, Events } from './types'

const dom = new JSDOM()
const document = dom.window.document

const container = document.createElement('div')
container.id = '__quiankun_container__'

const eventBus = jest.fn()
const quiankunProps = { name: 'testMicrofrontend', container }
const SDKPropsMock: ISDKProps = {
  ...quiankunProps,
  console: {
    writeConfig: () => {},
    _signals: { mount: () => {} },
    eventBus,
    configObservables: {
      endpoints: {},
      collections: {},
      configMaps: {},
      services: {},
      unsecretedVariables: [],
      fastDataConfig: {},

      forceConfigUpdateChecksum: '',
      microfrontendPluginConfig: {},

      selectedEnvironments: {},
      selectedProject: {},

      _version: '0.0.0'
    },
    contexts: {
      featureTogglesProxyContext: {},
      hotkeysContext: {}
    }
  }
}

describe('ConsoleSDK', () => {
  it('should get the container id', () => {
    const microfrontendIntegrator = new ConsoleSDK(SDKPropsMock)
    expect(microfrontendIntegrator.getContainerId()).toBe('testMicrofrontend')
  })

  it('should send an event through the event bus', () => {
    const microfrontendIntegrator = new ConsoleSDK(SDKPropsMock)
    const event: Events = {
      payload: { test: 'case' },
      publisherId: 'microfrontend-test',
      action: EventsTypes.SET_DYNAMIC_ROUTES
    }

    microfrontendIntegrator.sendEvent(event)
    expect(SDKPropsMock.console.eventBus).toHaveBeenCalledWith(event)
  })

  it('should get a context', () => {
    const microfrontendIntegrator = new ConsoleSDK(SDKPropsMock)

    const featureToggleContext = microfrontendIntegrator.getContext(ContextsType.FEATURE_TOGGLE_CONTEXT)
    const hotkeysContext = microfrontendIntegrator.getContext(ContextsType.HOTKEYS_CONTEXT)
    const invalidContext = microfrontendIntegrator.getContext('INVALID_CONTEXT' as ContextsType)

    expect(featureToggleContext).toEqual({})
    expect(hotkeysContext).toEqual({})
    expect(invalidContext).toBeUndefined()
  })

  it('should get the console config observable', () => {
    const microfrontendIntegrator = new ConsoleSDK(SDKPropsMock)
    const configObservable = microfrontendIntegrator.getConsoleConfigObservable()

    expect(configObservable).toHaveProperty('endpoints')
    expect(configObservable).toHaveProperty('collections')
    expect(configObservable).toHaveProperty('configMaps')
    expect(configObservable).toHaveProperty('services')
    expect(configObservable).toHaveProperty('fastDataConfig')
    expect(configObservable).toHaveProperty('unsecretedVarialbles')
    expect(configObservable).toHaveProperty('selectedProject')
    expect(configObservable).toHaveProperty('selectedEnvironment')
    expect(configObservable).toHaveProperty('_version')
    expect(configObservable).toHaveProperty('forceConfigUpdateChecksum')
    expect(configObservable).toHaveProperty('microfrontendPluginConfig')
  })
})
