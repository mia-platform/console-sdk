# CHANGELOG

## 0.38.1

### Patch Changes

- fix: tags

## 0.38.0

### Minor Changes

- a91a902: replaced not used `isPipelineEventWebhookActive` property with `pipelineEventWebhookId`
- updates on infrastructure components, saveChangesRules, uri-reference in Catalog related schema
- ab6ee7a: renamed field `action` of project and tenant saveChangesRules to `actions` and changed type

### Patch Changes

- 0c3582d: Removed "uri-reference" format from Catalog-related JSON schemas

## 0.37.7

### Patch Changes

- dc624e3: add `allowedRuleSet` to project and tenant `saveChangesRules` field
- dc624e3: change type of `action` field in project and tenant `saveChangesRules` field

## 0.37.6

### Patch Changes

- 2b0db37: feat(infrastructure components): add properties related to the pipeline webhook and pipeline status
- 45b422c: added: properties related to the pipeline webhook

## 0.37.5

### Patch Changes

- 4777ea9: fix: export emptyDir schemas

## 0.37.4

### Patch Changes

- af2f916: fix: export config service secret types

## 0.37.3

### Patch Changes

- 6a8c235: fix: missing listeners type export

## 0.37.2

### Patch Changes

- a61a136: fix: export configmap type

## 0.37.1

### Patch Changes

- 1e9f9f8: Added examples to Catalog well-known items resources schemas

## 0.37.0

### Minor Changes

- 41f3418: update peer dependencies for allowing fastify 5

## 0.36.0

### Minor Changes

- 9b35932: Added new Infrastructure Component Runtime data Catalog CRD

## 0.35.2

### Patch Changes

- b9838cc: feat: add originaltemplate project metadata

## 0.35.1

### Patch Changes

- move json-schema-to-ts from devDeps to desp

## 0.35.0

### Minor Changes

- 8be43ca: Changed "releaseStage" and "comingSoon" for "lifecycleStatus" in Software Catalog items

## 0.34.1

### Patch Changes

- 5da5a9f: add emptydir support on custom services

## 0.34.0

### Minor Changes

- 7a14433: Updated Catalog CRDs schema

## 0.33.5

### Patch Changes

- c080ef7: Added release-date to catalog items

## 0.33.4

### Patch Changes

- 58ae899: updated Catalog well-known items CRDs

## 0.33.3

### Patch Changes

- 3a8de18: feat: add providerType to infrastructureComponent pipelineInfo

## 0.33.2

### Patch Changes

- efbb7de: improve Catalog well-known items CRDs validation

## 0.33.1

### Patch Changes

- 9f189ac: removed nullable from catalog item schemas

## 0.33.0

### Minor Changes

- 0087f5f: feat: infrastructure project flavor and type definitions

## 0.32.0

### Minor Changes

- cced7cd: Reorganized Software Catalog files and exports

### Patch Changes

- 873439e: add aiSettings to tenant and project settings

## 0.31.2

### Patch Changes

- dcfe9e6: add missing service account exports

## 0.31.1

### Patch Changes

- fcb3d3e: Update catalog well-known items manifests

## 0.31.0

### Minor Changes

- a4839b3: refactor service account implementation

## 0.30.2

### Patch Changes

- ec54fb9: Updated catalog well-known-items schemas

## 0.30.1

### Patch Changes

- ca0e978: add serviceAccountName property to CustomService type
- 7028f50: exposed catalogWellKnownItems map

## 0.30.0

### Minor Changes

- 99ab857: fixed undeterministic service label schema type

## 0.29.8

### Patch Changes

- 614a059: Fixed Catalog custom resource definitions

## 0.29.7

### Patch Changes

- 28f78a1: Added controlled fields to Catalog Infrastructure Resource CRD
- 28f78a1: Exposed catalog well-known items CRDs

## 0.29.6

### Patch Changes

- 27bbeac: fixed: missed runtime object to infrastructure definition

## 0.29.5

### Patch Changes

- 35bf29e: add Catalog Item Metadata schema and type

## 0.29.4

### Patch Changes

- a4a63f3: Updated catalog endpoints schema

## 0.29.3

### Patch Changes

- c667129: added: jsonSchema field to infrastructure-resource definitions

## 0.29.2

### Patch Changes

- 00a1696: Added catalog items' Custom Resource Definitions

## 0.29.1

### Patch Changes

- efc6140: add missing ServiceLabel and ServiceAnnotation export in index file

## 0.29.0

### Minor Changes

- 0652cd6: expose serviceSecrets schema

## 0.28.0

### Minor Changes

- 19fdfd2: add support for marking labels as deployment selector

### Patch Changes

- 155451d: Added repositoryUrl to catalog items resources schema
- 5e3d431: Fixed catalog proxy resources JSON schema

## 0.27.1

### Patch Changes

- 9eb8db2: added: github app credential type

## 0.27.0

### Minor Changes

- 24bec4b: Added catalog-related types and schemas

## 0.26.5

### Patch Changes

- feat: removed from custom resources runtime kubernetes values as const

## 0.26.4

### Patch Changes

- 17ceb69: feat: expose customResources schema

## 0.26.3

### Patch Changes

- 7e924b4: fix: add missing TS type in endpoints

## 0.26.2

### Patch Changes

- 4d08669: add "port" field to custom endpoints

## 0.26.1

### Patch Changes

- 4feb792: fixed envid validation pattern

## 0.26.0

### Minor Changes

- 4e4a9a6: added environment `type` property

### Patch Changes

- bddedd6: added environment cluster namespace validation pattern

## 0.25.1

### Patch Changes

- 1129bd6: hotfix: `rateLimit` property in routes not required

## 0.25.0

### Minor Changes

- 5316390: feat: supporting interpolation for service environment variable secret key"

## 0.24.7

### Patch Changes

- e489192: backporting hotfix: `rateLimit` property in routes not required

## 0.24.6

### Patch Changes

- 0a2e173: Added: allowed project structure

## 0.24.5

### Patch Changes

- 04c5d77: feat: include new rule engin type

## 0.24.4

### Patch Changes

- 94dca5e: fix: test snapshots don't depend anymore on packages versions

## 0.24.3

### Patch Changes

- 9a49e7b: feat(IDP-2275): add id to container registry

## 0.24.2

### Patch Changes

- 73dafa7: feat(endpoint): add requestsPerSecond property also in endpoint subroutes

## 0.24.1

### Patch Changes

- feat: added configurationManagement new rules for design

## 0.24.0

### Minor Changes

- 13e95a1: feat(IDP-1803): add service container registry name to service type

## 0.23.3

### Patch Changes

- d9ba206: feat: add repoUrl and sshUrl to custom resources

## 0.23.2

### Patch Changes

- e94584b: fix: misleading errors on validation copies

## 0.23.1

### Patch Changes

- be71a60: added new runtime field to marketplace custom resource item

## 0.23.0

### Minor Changes

- a80cf97: feat: add Jenkins pipeline and url templates to provider and project

## 0.22.0

### Minor Changes

- 986c56b: add HEAD verb for endpoint routes

## 0.21.8

### Patch Changes

- 2f3edfa: support detached state in sourceMarkatplaceItem option

## 0.21.7

### Patch Changes

- fccb23d: fix unexported variable TEMPLATE_DASHBOARD_INTERPOLATE_VARIABLES

## 0.21.6

### Patch Changes

- 52bbb44: added constant TEMPLATE_DASHBOARD_INTERPOLATE_VARIABLES

## 0.21.5

### Patch Changes

- 5ad7c3b: bump version

## 0.21.4

### Patch Changes

- dddb1e3: feat: sourceMarketplaceItem also for external and cross-project services

## 0.21.3

### Patch Changes

- bump version
- 1badd01: fix(types): revert MongoDB view routes, expose MongoDB view lookup routes

## 0.21.2

### Patch Changes

- bump version

## 0.21.1

### Patch Changes

- 602d39d: feat: add `downwardAPI` environment variables
- e67ded5: add missing endpoint routes for CRUD Service Views with enabled lookup feature
- 21d47f7: fix: regex with chars limitation on downwardAPI fields, better i18n on labels and annotation validation

## 0.21.0

### Minor Changes

- 4afbc3e: feat(IDP-1478): container registry new type in tenants and project

## 0.20.1

### Patch Changes

- 3c32903: export constant FROM_CONFIGMAP

## 0.20.0

### Minor Changes

- 1358942: feat: remove container registry from provider types and from providers

## 0.19.27

### Patch Changes

- f1ea7ac: export type EnvironmentVariablesFromConfigMap

## 0.19.26

### Patch Changes

- bump version & fix workflow

## 0.19.25

### Patch Changes

- bump version

## 0.19.24

### Patch Changes

- de7f56f: add environment variables from configmap

## 0.19.23

### Patch Changes

- 10a75a0: fix: exported MongoDB view default routes

## 0.19.22

### Patch Changes

- 9f2263c: fix: added MongoDB View default routes

## 0.19.21

### Patch Changes

- 327eb42: remove ssh url regex

## 0.19.20

### Patch Changes

- 4d47d63: additional containers now support monitoring properties

## 0.19.19

### Patch Changes

- f68b7f2: fix([IDP-365](https://makeitapp.atlassian.net/browse/IDP-365)): validation error ids for branch name and tag name"

## 0.19.18

### Patch Changes

- fix: bump install for version

## 0.19.17

### Patch Changes

- d2d4d30: feat: expose LabelAnnotation and EnvironmentVariablesTypes

## 0.19.16

### Patch Changes

- bump version

### Added

- export `environment` schema from services as `serviceEnvironmentVariables`

## 0.19.15

### Patch Changes

- version bump

## 0.19.14

### Patch Changes

- bump version

### Fixed

- kubeContextVariables additional properties types

## 0.19.13

### Patch Changes

- bump version

### Added

- added kubeContextVariables field to cluster

## 0.19.12

### Added

- Validate template archive url as url

## 0.19.11

### Patch Changes

- bump version

## 0.19.10

### Patch Changes

- bump version

### Added

- Added default strategy to template schema

## 0.19.9

### Patch Changes

- bump version

### Added

- Added strategy to template schema

## 0.19.8

### Patch Changes

- version bump

### Added

- [COMP-235](https://makeitapp.atlassian.net/browse/COMP-235): added optional `hidePrefix` property in Link type

## 0.19.7

### Patch Changes

- bump version

## 0.19.6

### Added

- [IDP-808](https://makeitapp.atlassian.net/browse/IDP-808): exported `DASHBOARD_TYPE_NEW_TAB` from dashboard constants

## 0.19.5

### Patch Changes

- version bump

## 0.19.4

### Patch Changes

- version bump

## 0.19.3

### Patch Changes

- hotfix ci

## 0.19.2

### Patch Changes

- added endpoint iframe options

## 0.19.1

### Patch Changes

- version bump

## 0.19.0

### Minor Changes

- bump version

## 0.18.17

### Patch Changes

- version bump

### Added

- added `dashboards` to `template`

## 0.18.16

### Patch Changes

- version bump

### Patch Changes

- removed required fields from `environmentsVariables` definition

## 0.18.15

### Patch Changes

- bump version

## 0.18.14

### Patch Changes

- bump version

### Added

- [IDP-435](https://makeitapp.atlassian.net/browse/IDP-435): added 'HISTORY_RECORD_STATUS' to webhooks constants

## 0.18.13

### Added

- Added `enabledSecurityFeatures` to tenant

## 0.18.12

### Patch Changes

- bump version

## 0.18.11

### Patch Changes

- bump version

## 0.18.10

### Patch Changes

- bump version

### Changed

- Added `dockerImageNameSuggestion` to tenant

## 0.18.9

### Patch Changes

- version bump

### Fixed

- project `configurationManagement` correct type definition for isConfirmationRequired to be object rather than bool

## 0.18.8

### Patch Changes

- bump to 0.18.8

### Changed

- ProviderTypes: Add Container Registry provider type and provider

## 0.18.7

### Patch Changes

- version bump

### Added

- added `configurationManagement` fields with save message options to `project` schema

## 0.18.6

### Patch Changes

- version bump

## 0.18.5

### Patch Changes

- version bump

### Added

- added `configurationManagement` fields with save message options to `tenant` schema

## 0.18.4

### Fixed

- Fixed capitalization in visibility descriptions

## 0.18.3

### Patch Changes

- version bump

## 0.18.2

- [IDP-86](https://makeitapp.atlassian.net/browse/IDP-86): added `repositoryPathTemplate` to provider's `capabilities`

## [0.18.1] 2024-02-06

### Fixed

- [CPR-283](https://makeitapp.atlassian.net/browse/CPR-283): update gitSshUrl regex pattern in order to support GitHub enterprise

## [0.18.0] 2024-02-05

### Added

- [CRSE-194](https://makeitapp.atlassian.net/browse/CRSE-194): added `defaultSortingIndex` string field to `collections` schema
- [MKEA-155](https://makeitapp.atlassian.net/browse/MKEA-155): new capability `CONTAINER_REGISTRY`

## [0.17.1] 2024-01-22

### Fixed

- fixed `provider-types` schema, added `label` and `description` to `functionalities` object

## [0.17.0] 2024-01-17

### Added

- [MPE-352](https://makeitapp.atlassian.net/browse/MPE-352): added `allowedRepositoryVisibilities` to `provider-types` schema

## [0.16.0] 2023-12-12

### Added

- [SNARM-34](https://makeitapp.atlassian.net/browse/SNARM-34): added `sourceMarketplaceItem` to custom service schema

## [0.15.0] 2023-12-04

### Added

- [JCE-677](https://makeitapp.atlassian.net/browse/JCE-677): custom service startup probe support

## [0.14.6] 2023-10-25

### Added

- added `label` field to provider types schema

## [0.14.5] 2023-10-16

### Removed

- removed unused credential type `signature`

## [0.14.4] 2023-10-13

### Added

- [JCE-649](https://makeitapp.atlassian.net/browse/JCE-649): `orchestrator-configurator` capability
- [JCE-649](https://makeitapp.atlassian.net/browse/JCE-649): new project configuration for external conf generator

## [0.14.3] 2023-10-13

### Added

- [PIAK-10](https://makeitapp.atlassian.net/browse/PIAK-10): Added azure key vault `environmentsVariables` definition

## [0.14.2] 2023-10-09

### Added

- [PIAK-9](https://makeitapp.atlassian.net/browse/PIAK-9): Added support for new secret store type `azure-key-vault`

## [0.14.1] 2023-10-09

### Added

- [FIC-56](https://makeitapp.atlassian.net/browse/FIC-56): exclusiveServiceExposure flag to let service containers control which container ports should be exposed

## [0.14.0] 2023-10-03

### BREAKING CHANGES

- [FIC-56](https://makeitapp.atlassian.net/browse/FIC-56): probes port is now a string to support container port name rather than an arbitrary numeric port

## [0.13.5] 2023-10-02

### Fixed

- Collection `id` and `name` can have length up to 80 characters

## [0.13.4] 2023-09-28

### Fixed

- fixed type for listener port

### Added

- [FIC-25](https://makeitapp.atlassian.net/browse/FIC-25): added `readonly` property to config.listeners

## [0.13.3] 2023-09-18

### Added

- [JSG-224](https://makeitapp.atlassian.net/browse/JSG-224): added deploy.runnerTool property to environments

## [0.13.2] 2023-09-15

### Added

- Added `client_credentials_certificate` credentials type

## [0.13.1] 2023-09-13

### Changed

- [FIC-15](https://makeitapp.atlassian.net/browse/FIC-15): Changed listeners port type to be numeric or interpolated string

## [0.13.0] 2023-09-13

### Added

- [FIC-15](https://makeitapp.atlassian.net/browse/FIC-15): Added listeners type to api console config

## [0.12.5] 2023-09-08

### Feat

- Added property `pipeline.statusWebhookSecretCredentialsId` to project's schema

## [0.12.4] 2023-09-05

### Fix

- Included property `hidden` in collections

## [0.12.3] 2023-09-05

- Collections and Views include property `hidden`

## [0.12.2] 2023-08-28

- [JSG-151](https://makeitapp.atlassian.net/browse/JSG-151): exported `PUSH_DEPLOY_STRATEGY` and `PULL_DEPLOY_STRATEGY` as constants

## [0.12.1] 2023-08-24

### Fixed

- [JSG-151](https://makeitapp.atlassian.net/browse/JSG-151): deploy.strategy for environments

## [0.12.0] 2023-08-24

### Added

- [JSG-151](https://makeitapp.atlassian.net/browse/JSG-151): deploy.strategy pull or push

## [0.11.5] 2023-08-01

### Added

- [MPE-279](https://makeitapp.atlassian.net/browse/MPE-279): Added CLIENT_CREDENTIALS_CERTIFICATE to constants

## [0.11.4] 2023-07-19

### Added

- [MEOW-53](https://makeitapp.atlassian.net/browse/MEOW-53): Added ALLOWED_RUNNER_TOOLS to constants

## [0.11.3] 2023-07-13

### Added

- [MKPC-46](https://makeitapp.atlassian.net/browse/MKPC-46): Added CAPABILITIES_FUNCTIONALITIES to constants

## [0.11.2] 2023-07-10

### Added

- [CSCE-3](https://makeitapp.atlassian.net/browse/CSCE-3) Added "enableLookup" field to mongo view schema

## [0.11.1] 2023-07-07

### Added

- [MBA-234](https://makeitapp.atlassian.net/browse/MBA-234): Added monitoring fields to tenant

## [0.11.0] 2023-07-06

### BREAKING CHANGES

- [MKPC-37](https://makeitapp.atlassian.net/browse/MKPC-37): Modified `provider` and `providerType` schemas. `capabilities` property is now an array of objects (previously was an array of strings)

## [0.10.20] 2023-07-07

### Added

- [MBA-234](https://makeitapp.atlassian.net/browse/MBA-234): Added monitoring fields to tenant

## [0.10.19] 2023-07-04

### Fixed

- [MEOW-21](https://makeitapp.atlassian.net/browse/MEOW-21): Fixed typo in docker image name suggestion types name

## [0.10.18] 2023-07-04

### Added

- [MEOW-21](https://makeitapp.atlassian.net/browse/MEOW-21): Added docker image name suggestion types constant

## [0.10.17] 2023-06-21

### Added

- [MFUC-7](https://makeitapp.atlassian.net/browse/MFUC-7): Added feedback schema and type

## [0.10.16] 2023-06-21

### Removed

- removed `repoInfo` to project schema

## [0.10.15] 2023-06-21

### Added

- exported `PIPELINE_STATUS` from constants

## [0.10.14] 2023-06-20

### Added

- add `repoInfo` to project schema

## [0.10.13] 2023-06-20

### Added

- added `PipelineStatus` enum

## [0.10.12] 2023-06-13

### Added

- add `visibility` object to providers

## [0.10.11] 2023-05-30

### Added

- export PublicVariables, Endpoints, Collections and Services type

## [0.10.10] 2023-05-29

### Fixed

- added trailing slash to repoUrl regex

## [0.10.9] 2023-05-26

### Added

- export for gitSshUrl

## [0.10.8] 2023-05-11

### Fixed

- aligned with `v0.8.23`

## [0.10.7] 2023-05-10

### Added

- Added providerId to pipelines object in Azure case

## [0.10.6] 2023-05-10

### Fixed

- fix json schema to add type when misses

## [0.10.5] 2023-05-10

### Fixed

- fix json schema to add type when misses

## [0.10.4] 2023-05-09

## [0.10.3] - 2023-05-03

### Added

- added `statusWebhookSecretCredentialsId` to `environments.deploy` object inside project's schema

## [0.10.0] - 2023-05-02

### Added

- export VALIDATION_ERROR_ID
- create ajv-plugin to handle VALIDATION_ERROR_ID and fastify schema transformation to remove it

## [0.8.23] 2023-05-10

### Added

- providerId to Azure pipelines schema

## [0.8.22] 2023-05-09

- add github-actions to `ProjectPipelinesTypes`

## [0.8.21] 2023-05-09

## [0.8.20] 2023-05-05

### Fixed

- removed `enum` from `deploy.type` in project environment's schema

## [0.8.19] 2023-05-05

### Fixed

- fixed `project.pipelines.type`'s schema by exporting `DEPLOYMENT_TYPES` as `const`

## [0.8.18] - 2023-05-03

- added `statusWebhookSecretCredentialsId` to `environments.deploy` object inside project's schema

## [0.8.17] - 2023-04-27

### Added

- [MPIC-88](https://makeitapp.atlassian.net/browse/MPIC-88): Added repository types and environments variables types constants, exported capability type.

## [0.8.16] - 2023-04-14

- Added tenant environmentsVariables, pipelines.providerId & repository.type to schema

## [0.8.15] - 2023-03-31

### Added

- [MPIC-40](https://makeitapp.atlassian.net/browse/MPIC-40): Added github actions and azure pipelines to deployment types

## [0.8.14] - 2023-03-8

### Changed

- expirationDate moved out of content in credentials schema

## [0.8.13] - 2023-03-8

### Added

- Added required credentialsType to provider schema

## [0.8.12] - 2023-03-8

### Added

- Added description to provider schema and exported type

## [0.8.11] - 2023-02-24

### Added

- Added credentialTypes to providerType schema and exported type; added expirationDate to credentials schema and exported type

## [0.8.10] - 2023-02-24

### Added

- [MPIC-25](https://makeitapp.atlassian.net/browse/MPIC-26): Added capabilities to providers schema and exported type

## [0.8.9] - 2023-02-23

### Fixed

- [MPIC-26](https://makeitapp.atlassian.net/browse/MPIC-26): Fixed providerType schema and type

## [0.8.8] - 2023-02-23

### Added

- [MPIC-26](https://makeitapp.atlassian.net/browse/MPIC-26): Added providerTypes schema and type

## [0.8.7] - 2023-02-23

### Added

- [JCE-488](https://makeitapp.atlassian.net/browse/JCE-488): Added imagePullSecretNames property to tenant and project

## [0.8.6] - 2023-02-22

### Fixed

- ssh url with dash in host

## [0.8.5] - 2023-02-22

### Fixed

- ssh url with optional `.git` extension

## [0.8.4] - 2023-02-22

### Fixed

- ssh url regex to be more inclusive

## [0.8.3] - 2023-01-12

### Added

- [JCE-383](https://makeitapp.atlassian.net/browse/JCE-383): Added interpolation to cronjobs schedule's pattern

## [0.8.2] - 2022-12-20

### Added

- [CSM-114](https://makeitapp.atlassian.net/browse/CSM-114): Add `proxy` and `base64CA` to project's `repository` schema

## [0.8.1] - 2022-12-14

### Added

- [CSM-114](https://makeitapp.atlassian.net/browse/CSM-114): Added provider schema and type

## [0.8.0] - 2022-11-22

### Added

- [FDBE-504](https://makeitapp.atlassian.net/browse/FDBE-504): Added fields "readOnly" and "managedBy" to services environment variables

## [0.7.4] - 2022-11-18

### Fixed

- [JCE-236](https://makeitapp.atlassian.net/browse/JCE-236): Fixed container ports scheme

## [0.7.3] - 2022-11-18

### Fixed

- [JCE-236](https://makeitapp.atlassian.net/browse/JCE-236): Fixed container ports scheme

## [0.7.2] - 2022-11-17

### Fixed

- [JCE-236](https://makeitapp.atlassian.net/browse/JCE-236): Fixed container ports scheme

## [0.7.1] - 2022-11-15

### Added

- [JCE-236](https://makeitapp.atlassian.net/browse/JCE-236): Added container ports validation

## [0.7.0] - 2022-11-14

### Breaking Changes

- Removed required repositoryUrl from project model

## [0.6.37] - 2022-11-02

### Fixed

- Fixed omitValidationErrorID return type

## [0.6.36] - 2022-10-28

### Updated

- [MBA-172](https://makeitapp.atlassian.net/browse/MBA-172): Removed required hostnames

## [0.6.35] - 2022-10-27

### Added

- [JCE-306](https://makeitapp.atlassian.net/browse/JCE-306): Improve validation for Public Variables (export variableKey with validation)

## [0.6.34] - 2022-10-27

### Added

- [JCE-305](https://makeitapp.atlassian.net/browse/JCE-305): Improve validation for API Keys (export apiKeyString and clientType with validation)

## [0.6.33] - 2022-10-27

### Added

- [JCE-304](https://makeitapp.atlassian.net/browse/JCE-304): Improve validation for Proxies section

## [0.6.32] - 2022-10-26

### Added

- [JCE-309](https://makeitapp.atlassian.net/browse/JCE-309): Improve validation for RBAC (export collectionName with validation)

## [0.6.31] - 2022-10-21

### Added

- [JCE-308](https://makeitapp.atlassian.net/browse/JCE-308): Improve validation for microservice and cronjob sections

## [0.6.30] - 2022-10-19

### Added

- [RJC-398](https://makeitapp.atlassian.net/browse/RJC-398): Add mount path validation string for configMaps and secrets

## [0.6.29] - 2022-10-18

### Added

- add \_id in cluster

## [0.6.28] - 2022-10-14

### Changed

- environment serviceAccount name & clusterRoleName now is required

## [0.6.27] - 2022-10-05

### Changed

- validator oas key to x-validation-error-id

## [0.6.26] - 2022-10-04

### Added

- [MAAR-69](https://makeitapp.atlassian.net/browse/MAAR-69): Add optional parameter `base64CA` in environments cluster

## [0.6.25] - 2022-09-30

### Fixed

- typo

## [0.6.24] - 2022-09-30

### Fixed

- reset required cluster.hostname

## [0.6.23] - 2022-09-30

### Fixed

- fix links exported as type instead of const

## [0.6.22] - 2022-09-29

### Added

- Links schema export

## [0.6.21] - 2022-09-29

### Fixed

- export QuickLink and ProjectEnvironmentLink types

## [0.6.20] - 2022-09-29

- remove required cluster.hostname

## [0.6.19] - 2022-09-29

- add project links new data model

## [0.6.18]

### Changed

- use fromSchema to generate Credentials type

## [0.6.17] - 2022-09-27

### Added

- [RJCD-75](https://makeitapp.atlassian.net/browse/RJCD-75): support `usePartialFilter` and `partialFilterExpression` inside collection indexes

## [0.6.16] - 2022-09-26

### Added

- [JCE-281](https://makeitapp.atlassian.net/browse/JCE-281): added support for `providerId` in project pipelines when type is `jenkins`

## [0.6.15] - 2022-09-26

### Added

- [JCE-280](https://makeitapp.atlassian.net/browse/JCE-280): support clientCrendentials type for providers

### Changed

- [CSM-107](https://makeitapp.atlassian.net/browse/CSM-107): `baseUrl` in project's `environmentsVariables` is not required

## [0.6.14] - 2022-09-21

### Fixed

- fix oneOf in credentials

## [0.6.13] - 2022-09-16

### Fixed

- fix credentials to use oneOf instead of if/then/else

## [0.6.12] - 2022-09-12

### Changed

- update collection types

## [0.6.11] - 2022-08-29

### Added

- add endpoint request body size

## [0.6.10] - 2022-08-23

### Changed

- grouped endpoint common fields

### Added

- endpoint rate limit and request body

## [0.6.9] - 2022-08-23

### Fixed

- fix collection fields type

## [0.6.8] - 2022-08-22

### Fixed

- fix endpoint backofficeAcl type

## [0.6.7] - 2022-08-22

### Fixed

- fix cmsAnalytics types

## [0.6.6] - 2022-08-18

### Added

- [RJC-286](https://makeitapp.atlassian.net/browse/RJC-286): Added (and exported) strings for internationalization

## [0.6.5] - 2022-08-04

### Fixed

- [CMS-99](https://makeitapp.atlassian.net/browse/CMS-99): Fix credentials schema by avoiding `anyOf` since it is not supported by `lc39`

## [0.6.4] - 2022-08-03

- [JCE-232](https://makeitapp.atlassian.net/browse/JCE-232): Added providerId and tenantId types and constants for project templates

## [0.6.3] - 2022-08-03

### Added

- [CMS-99](https://makeitapp.atlassian.net/browse/CMS-99): Added new types and constants for credentials

## [0.6.2] - 2022-08-01

### Added

- export FieldTypes enum

## [0.6.1] - 2022-08-01

### Added

- export Verb enum

## [0.6.0] - 2022-08-01

### Added

- exported Config types
- export Endpoint and Collection types
- add pattern types

### Changed

- move `terminationGracePeriodSeconds` in container

### Fixed

- fix various wrong schemas

### Removed

- remove Service types since it is set as unknown

## [0.5.1] - 2022-07-29

### Fixed

- fix schedule schema

## [0.5.0] - 2022-07-26

### Added

- exported various types

### Fixed

- improve export of types

## [0.4.2] - 2022-07-22

### Added

- exported timeout among endpoint properties

## [0.4.1] - 2022-07-21

### Fixed

- fixed config defaults and endpoints pathName

## [0.4.0] - 2022-07-20

### Added

- [JCE-209](https://makeitapp.atlassian.net/browse/JCE-209): added schema exports

## [0.3.1] - 2022-07-19

### Fixed

- switch back to if chain inside endpoints schema due to feedback compatibility

## [0.3.0] - 2022-07-19

### Changed

- refactor endpoints schema definition

### Added

- [MPE-112](https://makeitapp.atlassian.net/browse/MPE-112): added endpoints timeout

## [0.2.1] - 2022-07-14

### Added

- export EnvironmentVariablesTypes

### Fixed

- fix pipelines schema

## [0.2.0] - 2022-07-14

### Added

- export dashboard schema
- export cluster schema

## [0.1.2] - 2022-07-13

### Fixed

- rename enabledServices schema

## [0.1.1] - 2022-07-13

### Added

- export enabledServices schema

## [0.1.0] - 2022-07-12

Initial release

### Added

- template schema and type
- tenant schema and type
- project schema and type
- environment schema and type

[Unreleased]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.10.0...main
[0.10.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.7...v0.10.0
[0.8.7]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.6...v0.8.7
[0.8.6]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.5...v0.8.6
[0.8.5]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.4...v0.8.5
[0.8.4]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.3...v0.8.4
[0.8.3]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.2...v0.8.3
[0.8.2]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.1...v0.8.2
[0.8.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.8.0...v0.8.1
[0.8.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.7.4...v0.8.0
[0.7.4]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.7.3...v0.7.4
[0.7.3]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.7.2...v0.7.3
[0.7.2]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.7.1...v0.7.2
[0.7.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.7.0...v0.7.1
[0.7.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.36...v0.7.0
[0.6.36]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.35...v0.6.36
[0.6.35]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.34...v0.6.35
[0.6.34]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.33...v0.6.34
[0.6.33]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.32...v0.6.33
[0.6.32]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.31...v0.6.32
[0.6.31]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.30...v0.6.31
[0.6.30]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.29...v0.6.30
[0.6.14]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.13...v0.6.14
[0.6.13]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.12...v0.6.13
[0.6.12]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.11...v0.6.12
[0.6.11]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.10...v0.6.11
[0.6.10]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.9...v0.6.10
[0.6.9]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.8...v0.6.9
[0.6.8]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.7...v0.6.8
[0.6.7]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.6...v0.6.7
[0.6.6]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.5...v0.6.6
[0.6.5]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.4...v0.6.5
[0.6.4]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.3...v0.6.4
[0.6.3]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.2...v0.6.3
[0.6.2]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.1...v0.6.2
[0.6.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.6.0...v0.6.1
[0.6.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.5.1...v0.6.0
[0.5.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.5.0...v0.5.1
[0.5.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.4.2...v0.5.0
[0.4.2]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.4.1...v0.4.2
[0.4.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.4.0...v0.4.1
[0.4.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.3.1...v0.4.0
[0.3.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.3.0...v0.3.1
[0.3.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.2.0...v0.3.0
[0.2.0]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.1.2...v0.2.0
[0.1.2]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.1.1...v0.1.2
[0.1.1]: https://git.tools.mia-platform.eu/platform/console/types/-/compare/v0.1.0...v0.1.1
[0.1.0]: https://git.tools.mia-platform.eu/platform/console/types/-/tags/v0.1.0
