# Types

This repo contains the main types of the Mia-Platform Console.
It should be used to develop a Console plugin in typescript.

## Plugins and extensions

This lib exports the schema and types of Console.

It uses the `VALIDATION_ERROR_ID` to add errorId to the schema, which allows for
use better error message than default.

### Ajv Plugins Console errors

To simplify the fields management, since they are not valid json-schema definitions,
it is created an ajv plugins which define the keyword inside Ajv. To use it:

```js
const ajv = new Ajv()
addConsoleErrors(ajv)

const schema = {}
const validate = ajv.compile(schema)
```

### Fastify transform schema

This transform schema function works for `@fastify/swagger` plugin. It removes
`VALIDATION_ERROR_ID` field, which is not a correct oas definition.
