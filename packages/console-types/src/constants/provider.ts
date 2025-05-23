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

export const CAPABILITIES = {
  GIT_PROVIDER: 'git-provider',
  SECRET_MANAGER: 'secret-manager',
  CI_CD_TOOL: 'ci-cd-tool',
  ORCHESTRATOR_GENERATOR: 'orchestrator-generator',
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
  MANUAL: 'manual',
}
