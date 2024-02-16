export const CAPABILITIES = {
  GIT_PROVIDER: 'git-provider',
  SECRET_MANAGER: 'secret-manager',
  CI_CD_TOOL: 'ci-cd-tool',
  ORCHESTRATOR_GENERATOR: 'orchestrator-generator',
  CONTAINER_REGISTRY: 'container-registry',
} as const

export const CAPABILITIES_FUNCTIONALITIES = {
  'git-provider': {
    PROJECT: 'project',
    MARKETPLACE: 'marketplace',
  },
  'secret-manager': {},
  'ci-cd-tool': {},
} as const

export const PIPELINE_STATUS = {
  SUCCESS: 'success',
  CANCELED: 'canceled',
  FAILED: 'failed',
  SKIPPED: 'skipped',
  RUNNING: 'running',
  PENDING: 'pending',
  LOADING: 'loading',
}
