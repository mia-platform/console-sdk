# @mia-platform/console-client

## 0.3.5

### Patch Changes

- removed marketplace POST /files API, fixed marketplace POST /resources API

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
