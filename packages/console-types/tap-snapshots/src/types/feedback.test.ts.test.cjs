/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/feedback.test.ts TAP feedback match schema > must match snapshot 1`] = `
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "type",
    "description"
  ],
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "issue",
        "idea",
        "other"
      ]
    },
    "description": {
      "type": "string"
    }
  }
}
`
