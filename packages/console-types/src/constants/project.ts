export const NUMERIC_VISIBILITY = {
  private: 1,
  internal: 2,
  public: 3,
}

export const PUSH_DEPLOY_STRATEGY = 'push' as const
export const PULL_DEPLOY_STRATEGY = 'pull' as const

export const VISIBILITY_PROJECT_FIELDS = [
  { value: 'private', label: 'Private', description: 'Private projects can only be cloned and viewed by project members', numeric: NUMERIC_VISIBILITY.private },
  { value: 'internal', label: 'Internal', description: 'Internal projects can be cloned by any logged in user', numeric: NUMERIC_VISIBILITY.internal },
  { value: 'public', label: 'Public', description: 'Public projects can be cloned without any authentication', numeric: NUMERIC_VISIBILITY.public },
]

export const GITLAB_CI = 'gitlab-ci'
export const AZURE_PIPELINES = 'azure-pipelines'

export const REPOSITORY_TYPES = {
  BITBUCKET: 'bitbucket',
  GITHUB: 'github',
  GITLAB: 'gitlab',
  AZURE: 'azure-devops',
}

export const ENVIRONMENTS_VARIABLES_TYPES = {
  GITLAB: 'gitlab',
  VAULT: 'vault',
  AZURE_KEY_VAULT: 'azure-key-vault',
} as const

export const DEPLOYMENT_TYPES = {
  WEBHOOK: 'webhook',
  JENKINS: 'jenkins',
  GITLAB_CI,
  GITHUB: 'github-actions',
  AZURE_PIPELINES,
} as const

export const PIPELINE_FROM_TEMPLATE = [
  DEPLOYMENT_TYPES.GITLAB_CI,
  DEPLOYMENT_TYPES.AZURE_PIPELINES,
  DEPLOYMENT_TYPES.GITHUB,
]

export const MLP = 'mlp'
export const ALLOWED_RUNNER_TOOLS = [MLP]

export const PROMETHEUS_OPERATOR = 'prometheus-operator'
export const ALLOWED_MONITORING_SYSTEMS = [PROMETHEUS_OPERATOR]

export const KUBERNETES_FILES_FOLDER = 'configuration'

export const DOCKER_IMAGE_NAME_SUGGESTION_TYPES = {
  REPOSITORY: 'REPOSITORY',
  PROJECT_ID: 'PROJECT_ID',
  CONSTANT_PREFIX: 'CONSTANT_PREFIX',
}

/**
 * @deprecated Use the new constant {@link DEPLOYMENT_TYPES} instead.
 */
export enum ProjectPipelinesTypes {
  WEBHOOK = 'webhook',
  JENKINS = 'jenkins',
  GITLAB_CI = 'gitlab-ci',
  AZURE_PIPELINES = 'azure-pipelines',
  GITHUB = 'github-actions',
}
