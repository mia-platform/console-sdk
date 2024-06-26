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

import Ajv from 'ajv'
import t from 'tap'

import { IEnvironment, IProject, branchName, environment, environments, project } from './project'
import { PatternTest, createTestsRegex, validationMessage } from './validate-utils.test'
import { PROMETHEUS_OPERATOR } from '../constants/project'

export const fullEnvironment: Required<IEnvironment> = {
  label: 'My Env',
  envId: 'my-env',
  envPrefix: 'prefix',
  hosts: [{
    host: 'env-host',
    isBackoffice: false,
    scheme: 'http',
  }],
  description: 'my description',
  isProduction: true,
  cluster: {
    hostname: 'my-hostname',
    port: 8080,
    namespace: 'the-namespace',
    clusterId: 'my-cl-id',
    accessToken: 'access-token',
    proxy: {
      url: 'proxy-url',
    },
    serviceAccount: {
      name: 'my-sa',
      clusterRoleName: 'role-name',
    },
    kubeContextVariables: {
      KUBE_URL: 'KUBE_URL',
      KUBE_TOKEN: 'KUBE_TOKEN',
      KUBE_CA_PEM: 'KUBE_CA_PEM',
    },
  },
  dashboards: [{
    id: 'my-d1',
    label: 'the d1',
    url: 'http://d1.com',
    type: 'iframe',
    category: {
      label: 'cat 1',
    },
  }],
  deploy: {
    type: 'gitlab-ci',
    providerId: 'my-provider-id',
    jobId: 'the-job-id',
    paramsMap: {
      revision: 'rev',
      environment: 'foo',
    },
    strategy: 'push',
    runnerTool: 'my-tool',
  },
  links: [{
    url: 'http://my-env-links',
    id: 'the-link',
  }],
  environmentsVariables: {
    type: 'vault',
    providerId: 'my-provider-id',
    baseUrl: 'the-base-url',
    storage: {
      type: 'groups',
      path: 'group-path',
    },
  },
}

t.test('environment validated', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<IEnvironment>(environment)

  t.test('only required fields', t => {
    const environment: IEnvironment = {
      envId: 'env-id',
    }

    t.ok(validate(environment), validationMessage(validate.errors))
    t.end()
  })

  t.test('all fields', t => {
    t.ok(validate(fullEnvironment), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('environments validated', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<IEnvironment[]>(environments)

  t.test('only required fields', t => {
    const environments: IEnvironment[] = []

    t.ok(validate(environments), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    t.ok(validate([fullEnvironment]), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})

t.test('project validated', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<IProject>(project)

  t.test('only required fields', t => {
    const project: IProject = {
      name: 'template-name',
      configurationGitPath: 'config-path',
      projectId: 'my-project-id',
      _id: 'object-id',
      environments: [],
      repository: {},
    }

    t.ok(validate(project), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const project: Required<IProject> = {
      name: 'template-name',
      configurationGitPath: 'config-path',
      projectId: 'my-project-id',
      repositoryUrl: 'repo-url',
      _id: 'object-id',
      environments: [fullEnvironment],
      monitoring: {
        systems: [{
          type: PROMETHEUS_OPERATOR,
        }],
      },
      repository: {
        providerId: 'provider-id',
        provider: {
          type: 'gitlab',
          baseUrl: 'base-url',
          apiBaseUrl: 'api-base-url',
          accessToken: 'my-secret-access-token',
          providerId: 'provider-id',
        },
      },
      defaultBranch: 'main',
      description: 'my description',
      environmentsVariables: {
        type: 'gitlab',
        baseUrl: 'base-url',
        storage: {
          type: 'groups',
          id: '123',
        },
      },
      branches: [],
      tags: [],
      deploy: {
        runnerTool: 'my-tool',
        useMiaPrefixEnvs: false,
      },
      links: {
        cms: {
          path: '/the-path',
          isBackoffice: false,
          isEnvironmentLink: true,
        },
        external: {
          name: 'url name',
          url: 'link-url',
        },
      },
      hostnames: {},
      projectNamespaceVariable: '',
      availableNamespaces: [],
      enabledServices: {
        'cms-site': true,
      },
      dockerImageNameSuggestion: {
        type: 'PROJECT_ID',
      },
      pipelines: {
        type: 'gitlab-ci',
      },
      tenantId: 'my-tenant',
      color: '#666666',
      info: {
        projectOwner: 'the owner',
        teamContact: 'the team contact',
        technologies: ['node', 'golang'],
      },
      enabledFeaturesPreview: {},
      enabledSecurityFeatures: {
        seccompProfile: true,
        appArmor: true,
        hostProperties: true,
        privilegedPod: true,
      },
      layerId: '',
      logicalScopeLayers: [{
        name: 'l1',
        order: 1,
      }],
      tenantName: 'The tenant name',
      configurationManagement: {
        saveMessageOptions: {
          isConfirmationRequired: { value: false },
        },
      },
      featureToggles: {
        viewBasicHomepage: true,
      },
      imagePullSecretNames: ['some-imagePullSecret-here', 'some-other-one'],
    }

    t.ok(validate(project), validationMessage(validate.errors))
    t.end()
  })

  t.test('with jenkins pipelines', t => {
    const project: IProject = {
      name: 'template-name',
      configurationGitPath: 'config-path',
      projectId: 'my-project-id',
      repositoryUrl: 'repo-url',
      _id: 'object-id',
      environments: [],
      repository: {},
      pipelines: {
        type: 'jenkins',
        providerId: 'myprovider',
        options: {
          view: {
            name: 'myview',
          },
        },
      },
    }

    t.ok(validate(project), validationMessage(validate.errors))

    t.end()
  })

  t.test('all field - with useDefaults true', t => {
    const ajv = new Ajv({ useDefaults: true })
    const validate = ajv.compile<IProject>(project)

    const projectObj: Required<IProject> = {
      name: 'template-name',
      configurationGitPath: 'config-path',
      projectId: 'my-project-id',
      repositoryUrl: 'repo-url',
      _id: 'object-id',
      environments: [fullEnvironment],
      repository: {
        providerId: 'provider-id',
        provider: {
          type: 'gitlab',
          baseUrl: 'base-url',
          apiBaseUrl: 'api-base-url',
          accessToken: 'my-secret-access-token',
          providerId: 'provider-id',
        },
      },
      monitoring: {
        systems: [{
          type: PROMETHEUS_OPERATOR,
        }],
      },
      defaultBranch: 'main',
      description: 'my description',
      environmentsVariables: {
        type: 'gitlab',
        baseUrl: 'base-url',
        storage: {
          type: 'groups',
          id: '123',
        },
      },
      branches: [],
      tags: [],
      deploy: {
        runnerTool: 'my-tool',
        useMiaPrefixEnvs: false,
      },
      links: {
        cms: {
          path: '/the-path',
          isBackoffice: false,
          isEnvironmentLink: true,
        },
        external: {
          name: 'url name',
          url: 'link-url',
        },
      },
      hostnames: {},
      projectNamespaceVariable: '',
      availableNamespaces: [],
      enabledServices: {
        'cms-site': true,
      },
      dockerImageNameSuggestion: {
        type: 'PROJECT_ID',
      },
      pipelines: {
        type: 'gitlab-ci',
      },
      tenantId: 'my-tenant',
      color: '#666666',
      info: {
        projectOwner: 'the owner',
        teamContact: 'the team contact',
        technologies: ['node', 'golang'],
      },
      enabledFeaturesPreview: {},
      enabledSecurityFeatures: {
        seccompProfile: true,
        appArmor: true,
        hostProperties: true,
        privilegedPod: true,
      },
      layerId: '',
      logicalScopeLayers: [{
        name: 'l1',
        order: 1,
      }],
      tenantName: 'The tenant name',
      configurationManagement: {
        saveMessageOptions: {
          isConfirmationRequired: {
            value: true,
            isInheritedFromTenant: false,
          },
        },
      },
      featureToggles: {
        viewBasicHomepage: true,
      },
      imagePullSecretNames: ['some-imagePullSecret-here', 'some-other-one'],
    }

    t.ok(validate(projectObj), validationMessage(validate.errors))
    t.end()
  })

  t.test('valid deploy strategy', t => {
    const ajv = new Ajv({ useDefaults: true })
    const validate = ajv.compile<IProject>(project)

    const baseProject: IProject = {
      name: 'template-name',
      configurationGitPath: 'config-path',
      projectId: 'my-project-id',
      _id: 'object-id',
      environments: [],
      repository: {},
    }

    t.test('pull', t => {
      const projectObj:IProject = {
        ...baseProject,
        deploy: { strategy: 'pull' },
      }

      t.ok(validate(projectObj), validationMessage(validate.errors))
      t.end()
    })

    t.test('push', t => {
      const projectObj:IProject = {
        ...baseProject,
        deploy: { strategy: 'push' },
      }

      t.ok(validate(projectObj), validationMessage(validate.errors))
      t.end()
    })

    t.test('invalid', t => {
      const projectObj = {
        ...baseProject,
        deploy: {
          strategy: 'another',
        },
      }

      t.notOk(validate(projectObj), validationMessage(validate.errors))
      t.end()
    })

    t.end()
  })

  t.end()
})

t.test('branchName json schema pattern', t => {
  const regex = new RegExp(branchName.pattern)

  const tests: PatternTest[] = [{
    name: 'is a valid branch name',
    items: [
      'master',
      'foo-bar',
      'FOO-BAR',
      'FOO-bar',
      'foo/bar',
      'foo.bar',
    ],
    assertion: 'ok',
  }, {
    name: 'is not a valid branch name',
    items: [
      'foo bar',
      'FOO BAR',
      'foo..bar',
      'foo:bar',
      'foo?bar',
      'foo*bar',
      '.foobar',
      'foobar.',
      '',
      'foo.lock',
    ],
    assertion: 'notOk',
  }]

  createTestsRegex(t, tests, regex)

  t.end()
})
