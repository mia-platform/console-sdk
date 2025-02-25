/**
 * Copyright 2024 Mia srl
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

/* eslint-disable max-lines */
import Ajv from 'ajv'
import t from 'tap'
import { FromSchema } from 'json-schema-to-ts'

import {
  CoreService,
  CronJob,
  CrossProjectService,
  CustomResource,
  CustomService,
  CustomServiceAdvanced,
  ExternalService,
  configMapFileName,
  configMapMountPath,
  configMapName,
  dockerImage,
  host,
  probesPath,
  service,
  serviceLabel,
  kubernetesDefinition,
  serviceSecretMountPath,
  serviceSecretName,
  swaggerPath,
  url,
  environment as environmentSchema,
} from './services'
import { PatternTest, createTestsRegex, validationMessage } from './validate-utils.test'
import { EnvironmentVariablesTypes, ServiceTypes } from '../constants/services'
import ajvConsoleErrors from '../plugins/ajv-console-errors'
import { tagName } from './project'

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
      environment: [
        {
          name: 'some-env',
          valueType: EnvironmentVariablesTypes.FROM_CONFIGMAP,
          configMapName: 'some-configmap',
          configMapFileName: 'some-file',
        },
      ],
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

  t.test('service account field', t => {
    t.test('can be an empty string', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        dockerImage: 'helloworld:1.0.0',
        serviceAccount: {
          name: '',
          deleted: true,
        },
      }

      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('accept valid string', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        dockerImage: 'helloworld:1.0.0',
        serviceAccount: {
          name: 'valid-dns.subdomain1',
          deleted: true,
        },
      }

      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('reject invalid string', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        dockerImage: 'helloworld:1.0.0',
        serviceAccount: {
          name: 'invalid-subdomain-',
          deleted: true,
        },
      }

      t.notOk(validate(service), validationMessage(validate.errors))
      t.end()
    })

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

  t.test('monitoring field', t => {
    t.test('available for main container', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        monitoring: {
          endpoints: [
            { path: '/metrics', port: 'http', interval: '50s' },
          ],
        },
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('available for additional container', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        additionalContainers: [
          {
            name: 'some-sidecar',
            dockerImage: 'helloworld:1.0.0',
            monitoring: {
              endpoints: [
                { path: '/metrics', port: 'http', interval: '50s' },
              ],
            },
          },
        ],
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.end()
  })

  t.test('labels and annotations', t => {
    const annotationType: FromSchema<typeof kubernetesDefinition> = {
      name: 'labelskey',
      value: 'labelsvalye',
    }

    const labelType: FromSchema<typeof serviceLabel> = {
      name: 'labelskey',
      value: 'labelsvalue',
      readOnly: false,
      isSelector: true,
    }

    const service: CustomService = {
      name: 'myservice',
      type: ServiceTypes.CUSTOM,
      advanced: false,
      replicas: 1,
      dockerImage: 'helloworld:1.0.0',
      labels: [
        labelType,
      ],
      annotations: [
        annotationType,
      ],
      additionalContainers: [
        {
          name: 'container',
          dockerImage: 'helloworld:1.0.0',
          labels: [
            labelType,
          ],
          annotations: [
            annotationType,
          ],
        },
      ],
    }

    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('custom resource', t => {
    const service: CustomResource = {
      name: 'myservice',
      type: ServiceTypes.CUSTOM_RESOURCE,
      meta: {
        kind: 'MyKind',
        apiVersion: 'v1',
      },
      spec: {
        myField: 'myValue',
      },
      sshUrl: 'example.com',
      webUrl: 'example.com',
    }
    t.ok(validate(service), validationMessage(validate.errors))
    t.end()
  })

  t.test('environment', t => {
    const ajv = new Ajv()
    ajvConsoleErrors(ajv)
    const environment = [{
      name: 'PLAIN_VAR',
      valueType: EnvironmentVariablesTypes.PLAIN_TEXT,
      value: 'some-value',
    }, {
      name: 'SECRET_VAR',
      valueType: EnvironmentVariablesTypes.FROM_SECRET,
      secretName: 'some-secret',
      secretKey: 'some-key',
    }, {
      name: 'INTERPOLATED_SECRET_VAR',
      valueType: EnvironmentVariablesTypes.FROM_SECRET,
      secretName: 'some-secret',
      secretKey: '{{SOME_INTERPOLATED_KEY}}',
    }, {
      name: 'CONFIGMAP_VAR',
      valueType: EnvironmentVariablesTypes.FROM_CONFIGMAP,
      configMapName: 'some-configmap',
      configMapFileName: 'some-file',
    }, {
      name: 'DOWNWARD_POD_VAR',
      valueType: EnvironmentVariablesTypes.DOWNWARD_API,
      fieldPath: 'metadata.name',
    }, {
      name: 'DOWNWARD_CONTAINER_VAR',
      valueType: EnvironmentVariablesTypes.DOWNWARD_API,
      fieldPath: 'resource.limits.cpu',
      containerName: 'some-container',
    }, {
      name: 'DOWNWARD_LABEL_VAR',
      valueType: EnvironmentVariablesTypes.DOWNWARD_API,
      fieldPath: "metadata.labels['some-label']",
    }, {
      name: 'DOWNWARD_ANNOTATION_VAR',
      valueType: EnvironmentVariablesTypes.DOWNWARD_API,
      fieldPath: "metadata.annotations['some.annotation-0']",
    }]

    t.test('validate', t => {
      const validate = ajv.compile(environmentSchema)

      t.test('ok', t => {
        t.ok(validate(environment), validationMessage(validate.errors))
        t.end()
      })

      t.end()
    })

    t.end()
  })

  t.test('sourceMarketplaceItem', t => {
    t.test('in custom service', t => {
      const service: CustomService = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        sourceMarketplaceItem: {
          itemId: 'itemId',
          tenantId: 'tenantId',
          version: '1.0.0',
        },
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('in proxy service', t => {
      const service: ExternalService = {
        name: 'myservice',
        type: ServiceTypes.EXTERNAL,
        url: 'https://example.com',
        sourceMarketplaceItem: {
          itemId: 'itemId',
          tenantId: 'tenantId',
          version: '1.0.0',
        },
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('in cross-project service', t => {
      const service: CrossProjectService = {
        name: 'myservice',
        type: ServiceTypes.CROSS_PROJECTS,
        host: 'service-name.target-namespace.svc.cluster.local:8080',
        sourceMarketplaceItem: {
          itemId: 'itemId',
          tenantId: 'tenantId',
          version: '1.0.0',
        },
      }
      t.ok(validate(service), validationMessage(validate.errors))
      t.end()
    })

    t.test('non valid sourceMarketplaceItem', t => {
      const service = {
        name: 'myservice',
        type: ServiceTypes.CUSTOM,
        advanced: false,
        replicas: 3,
        dockerImage: 'helloworld:1.0.0',
        sourceMarketplaceItem: {
          itemId: 'itemId',
          tenantId: 'tenantId',
        },
      } as const

      t.notOk(validate(service), validationMessage(validate.errors))
      t.end()
    })

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

  t.end()
})
