/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/listeners.test.ts TAP listeners schema > must match snapshot 1`] = `
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "port": {
        "if": {
          "type": "number"
        },
        "then": {
          "type": "integer",
          "minimum": 0,
          "maximum": 65535
        },
        "else": {
          "type": "string",
          "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$"
        }
      },
      "description": {
        "type": "string"
      },
      "selectedByDefault": {
        "type": "boolean"
      },
      "readonly": {
        "type": "boolean"
      }
    },
    "additionalProperties": false,
    "required": [
      "name",
      "port"
    ]
  }
}
`
