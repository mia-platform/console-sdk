# @mia-platform/console-client

## 0.5.0

### Minor Changes

- eb671c4: feat(IDP-2831): Exposed POST, PATCH and DELETE APIs for an extension App. Added App to GET extension by id

## 0.4.7

### Patch Changes

- 33919d4: added patch marketplace item metadata API

## 0.4.6

### Patch Changes

- 72301b9: removed enum in `format` query parameter in marketplace item detail api
- 3d8679b: Update GET /api/marketplace/ query parameters

## 0.4.5

### Patch Changes

- 12f11c6: Updated marketplace APIs schemas

## 0.4.4

### Patch Changes

- 6018932: updated marketplace apply item API response

## 0.4.3

### Patch Changes

- 155451d: Updated Kiota libraries to version `1.0.0-preview.81`

## 0.4.2

### Patch Changes

- feat: e11y service account integration api

## 0.4.1

### Patch Changes

- b716291: feat(IDP-2411): added `tokenIssuerUrl` to extension proxy

## 0.4.0

### Minor Changes

- 914de98: feat(IDP-2418): Exposed `PATCH` and `DELETE` APIs to edit and remove an extension proxy

## 0.3.7

### Patch Changes

- fcb45a4: exposed API to create a proxy for an extension

## 0.3.6

### Patch Changes

- 89a7395: expose proxy information in GET extension APIs

## 0.3.5

### Patch Changes

- fix: marketplace resources api

## 0.3.4

### Patch Changes

- f25be20: exposed POST and DELETE marketplace APIs:
  - POST `/api/marketplace/tenants/{tenantId}/files`
  - POST `/api/marketplace/tenants/{tenantId}/resources`
  - DELETE `/api/marketplace/tenants/{tenantId}/resources/{itemId}/versions`

## 0.3.3

### Patch Changes

- c796de3: added configuration field to extension type

## 0.3.2

### Patch Changes

- fc85231: expose marketplace categories list api

## 0.3.1

### Patch Changes

- e4ba70a: Exposed GET marketplace endpoints

## 0.3.0

### Minor Changes

- 986c56b: expose userinfo api

## 0.2.9

### Patch Changes

- bump version

## 0.2.8

### Patch Changes

- c141c75: added DELETE extension activation bulk API

## 0.2.7

### Patch Changes

- 11adab8: proxy client to allow unknown properties

## 0.2.6

### Patch Changes

- db0ad51: feat: activate extension bulk API and update PUT extensions API with new schema

## 0.2.5

### Patch Changes

- 3b5e525: Fixed GET "/api/extensibility/tenants/{tenantId}/categories" API schema

## 0.2.4

### Patch Changes

- 819bb85: Added GET "/api/extensibility/tenants/{tenantId}/categories" API

## 0.2.3

### Patch Changes

- 0adcf49: Include query parameter "resolveDetails" in "/api/extensibility/tenants/${testTenantId}/extensions"
- 0adcf49: GET for "/api/extensibility/tenants/{tenantId}/extensions/{extensionId}"

## 0.2.2

### Patch Changes

- 27a47f4: changed extensions PUT `contexts` property to string array

## 0.2.1

### Patch Changes

- dd273b4: improved errors to always return ConsoleRequestError

## 0.2.0

### Minor Changes

- 214e422: throw ConsoleRequestError on http failure

### Patch Changes

- 214e422: added support for put and delete verbs

## 0.1.3

### Patch Changes

- 6b20160: baseUrl is no more mandatory in constructor

## 0.1.2

### Patch Changes

- d0b569e: console-client usable only with ESM, updated kiota dependencies to preview.57

## 0.1.1

### Patch Changes

- update dependencies

## 0.1.0

### Minor Changes

- 962edd8: Created console-client package with extensibility APIs
