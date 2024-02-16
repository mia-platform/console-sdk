import Ajv from 'ajv'
import t from 'tap'

import constants from '../constants'
import { config, Config } from './config'
import { validationMessage } from './validate-utils.test'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

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

  t.end()
})

t.test('config compile correctly and match snapshot', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)

  t.ok(ajv.validateSchema(config))

  t.matchSnapshot(config)

  t.end()
})
