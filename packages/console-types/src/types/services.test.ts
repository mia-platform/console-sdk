/* eslint-disable max-lines */
import Ajv from 'ajv'
import t from 'tap'

import { ServiceTypes } from '../constants/services'
import { tagName } from './project'
import { validationMessage, createTestsRegex, PatternTest } from './validate-utils.test'
import {
  configMapFileName,
  configMapMountPath,
  configMapName,
  container,
  CronJob,
  CrossProjectService,
  CustomService,
  CustomServiceAdvanced,
  dockerImage,
  ExternalService,
  host,
  probesPath,
  service,
  CoreService,
  serviceSecretMountPath,
  serviceSecretName,
  swaggerPath,
  url,
} from './services'
import ajvConsoleErrors from '../plugins/ajv-console-errors'

t.test('services', t => {
  const ajv = new Ajv()
  ajvConsoleErrors(ajv)
  const validate = ajv.compile(service)

  t.test('only required fields for custom non advanced', t => {
    const service: CustomService = {
      name: 'myservice',
      type: ServiceTypes.CUSTOM,
      advanced: false,
      replicas: 3,
      dockerImage: 'helloworld:1.0.0',
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('custom service container ports support', t => {
    t.test('number', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        containerPorts: [{ name: 'name', from: 80, to: 90 }],
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('interpolation string', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        containerPorts: [{ name: 'name', from: '{{SOME_VAR}}', to: '{{SOME_VAR}}' }],
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.end()
  })

  t.test('only required fields for custom advanced', t => {
    const service: CustomServiceAdvanced = {
      name: 'myservice',
      type: ServiceTypes.CUSTOM,
      advanced: true,
      files: [{
        name: 'myfile',
        path: '/path',
        kind: 'deployment',
      }],
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('only required fields for external proxy', t => {
    const service: ExternalService = {
      name: 'myservice',
      type: ServiceTypes.EXTERNAL,
      url: 'https://example.com',
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('only required fields for cross-project proxy', t => {
    const service: CrossProjectService = {
      name: 'myservice',
      type: ServiceTypes.CROSS_PROJECTS,
      host: 'service-name.target-namespace.svc.cluster.local:8080',
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('only required fields for core proxy', t => {
    const service: CoreService = {
      name: 'myservice',
      type: ServiceTypes.CORE,
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('only required fields for cronjob', t => {
    const service: CronJob = {
      name: 'myservice',
      type: ServiceTypes.CRONJOB,
      advanced: true,
      files: [{
        name: 'myfile',
        path: '/path',
        kind: 'cronjob',
        content: 'mycronjobcontent',
      }],
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('validate pattern', t => {
  t.test('configMap name json schema pattern', t => {
    const regex = new RegExp(configMapName.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid configMap name',
      items: [
        'simple',
        'with-dash',
        'with-more-dash',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid configMap name',
      items: [
        'with.dot',
        'withUpper',
        '-startdash',
        'enddash-',
        'special@char',
        'space char',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('configMap file name json schema pattern', t => {
    const regex = new RegExp(configMapFileName.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid configMap file name',
      items: [
        'with.extension',
        'WithUppercase',
        'with-dash',
        'with_underscore',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid configMap file name',
      items: [
        'with space',
        '/startslash',
        'endslash/',
        'middle/slash',
        '/',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('configMap mountPath json schema pattern', t => {
    const regex = new RegExp(configMapMountPath.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid mountPath name',
      items: [
        'simple',
        'with-dash',
        'with-more-dash',
        '/startslash',
        'endslash/',
        'with/slash',
        'with_undescore',
        'withUpper',
        'with/multi/directory',
        'with space',
        'withnumber1',
        'with.dot',
        'with\\backslash',
        'with@atsign',
        'with+plus',
        'with$dollar',
        'with!exclamationmark',
        'with"quotationmarks',
        'with£pound',
        'with%percent',
        'with()parenthesis',
        'with[]squarebrackets',
        'with{}curlybrackets',
        'with=equal',
        'with?questionmark',
        'with^caret',
        'with+plus',
        'with*asterisk',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid mountPath name',
      items: [
        'with:colon',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('host cross-projects service json schema pattern', t => {
    const regex = new RegExp(host.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid cross-projects service host',
      items: [
        'api-gateway.test-namespace.svc.cluster.local',
        'api-gateway.Asd0.svc.cluster.local',
        'api-gateway0.Asd0.svc.cluster.local',
        'api-gateway.{{TEST_NAMESPACE}}.svc.cluster.local',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid cross-projects service host',
      items: [
        'host-not-local',
        'host-with-port:8000',
        'host.with.port.local',
        'host.with.cluster.local',
        'host.svc.cluster.local',
        'host..svc.cluster.local',
        'host.svc.cluster.local:80',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('docker image json schema pattern', t => {
    const regex = new RegExp(dockerImage.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid docker image',
      items: [
        'nexus.mia-platform.eu/some/image:1.2.3',
        'some/image:1.2.3',
        'some/image:latest',
        'some/image:LATEST.1.1',
        'some/image:latest.{{ENV_1}}.1.1',
        'nexus.mia-platform.eu/SOME/image:1.2.3',
        'nexus.mia_platform.eu/SOME/image:1.2.3',
        'NEXUS.mia-platform.eu/some/image:1.2.3',
        'NEXUS.MIA-PLATFORM.eu/some/image:1.2.3',
        '{{SOME_ENV_VAR}}',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid docker image',
      items: [
        'nexus~mia-platform/some/image:1.2.3',
        'nexus mia-platform/some/image:1.2.3',
        'nexus.mia&platform/some/image:1.2.3',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('probesPath json schema pattern', t => {
    const regex = new RegExp(probesPath.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid probesPath',
      items: [
        '/-/ready',
        '/-/healthz',
        '/{{SOME_VAR}}/some-path',
        '/{{BACK_KIT_VERSION}}/bk-web-components.esm.js',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid probesPath',
      items: [
        '/ -/ready',
        '/$/healtz',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('service secret name json schema pattern', t => {
    const regex = new RegExp(serviceSecretName.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid secret name',
      items: [
        'simple',
        'with-dash',
        'with-more-dash',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid secret name',
      items: [
        'with.dot',
        'withUpper',
        '-startdash',
        'enddash-',
        'special@char',
        'space char',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('service secret mountPath json schema pattern', t => {
    const regex = new RegExp(serviceSecretMountPath.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid mountPath name',
      items: [
        'simple',
        'with-dash',
        'with-more-dash',
        '/startslash',
        'endslash/',
        'with/slash',
        'with_undescore',
        'withUpper',
        'with/multi/directory',
        'with space',
        'withnumber1',
        'with.dot',
        'with\\backslash',
        'with@atsign',
        'with+plus',
        'with$dollar',
        'with!exclamationmark',
        'with"quotationmarks',
        'with£pound',
        'with%percent',
        'with()parenthesis',
        'with[]squarebrackets',
        'with{}curlybrackets',
        'with=equal',
        'with?questionmark',
        'with^caret',
        'with+plus',
        'with*asterisk',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid mountPath name',
      items: [
        'with:colon',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('swaggerPath schema pattern', t => {
    const regex = new RegExp(swaggerPath.pattern)
    const tests: PatternTest[] = [{
      name: 'is a valid swaggerPath',
      items: [
        '',
        '/path',
        '/pathWithUpperCaseLetters',
        '/documentation/json',
        '/documentation/myfile.json',
        '/dash-support',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid swaggerPath',
      items: [
        'noslashes',
        'nostarting/slashes',
        '/no-support-for-qs?fails=true',
        '/no-support-for-hash#/fails/true',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('tagName json schema pattern', t => {
    const regex = new RegExp(tagName.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid tagName',
      items: [
        'my-name',
        '2.0.0',
        'v2.0.0',
        '2.0.0-rc.2',
        '2.0.0-rc.1',
        '1.0.0',
        '1.0.0-beta',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid tagName',
      items: [
        'i am invalid',
        '1 0',
        '1:2',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('URL json schema pattern', t => {
    const regex = new RegExp(url.pattern)

    const tests: PatternTest[] = [{
      name: 'is a valid url',
      items: [
        'http://google.com',
        'http://crud-service',
        'http://gitlab.com/v4',
        'https://google.com',
        'https://crud-service',
        'https://gitlab.com/v4',
        'https://gitlab.com/v4/',
        'https://service:3000/v1',
        'https://service:3000/v1/',
        'https://service:3000',
        'https://service:80',
      ],
      assertion: 'ok',
    }, {
      name: 'is not a valid url',
      items: [
        'git@git.tools.mia-platform.eu:platform/api-console/website.git',
        'https:gitlab.com/v4',
        'git://sodiighfdoi',
        'http://',
        'http',
        'http:',
        'https://',
        'https',
        'https:',
        'https://service:port/v1',
        'https://service:port',
        'https://service:',
        'http://service:',
        'https://service:1/',
      ],
      assertion: 'notOk',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.test('ssh url', t => {
    const regex = new RegExp(`^${container.properties.sshUrl.pattern}$`)

    const tests: PatternTest[] = [{
      name: 'is a valid git ssh url',
      items: [
        'git@github.com:user/project.git',
        'https://github.com/user/project.git',
        'http://github.com/user/project.git',
        'git@192.168.101.127:user/project.git',
        'https://192.168.101.127/user/project.git',
        'http://192.168.101.127/user/project.git',
        'ssh://user@host.xz:port/path/to/repo.git/',
        'ssh://git@name=somename.domain.it:3333/miaplatform/angular-template.git',
        'git@ssh.dev.azure.com:v3/mia-platform/Test/test-configurations',
        'git@git.tools.mia-platform.eu:clients/mia-platform/platform-development/manual-test-projects/team-james/services/nodejs-daemon-template.git',
        'org-mia-platform@github.com:user/repo.git',
      ],
      assertion: 'ok',
    }]

    createTestsRegex(t, tests, regex)

    t.end()
  })

  t.end()
})
