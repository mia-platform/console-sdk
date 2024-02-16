/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/providerType.test.ts TAP providerType match schema > must match snapshot 1`] = `
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "type",
    "imageUrl",
    "capabilities",
    "credentialTypes"
  ],
  "properties": {
    "type": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "imageUrl": {
      "description": "file location",
      "type": "string"
    },
    "capabilities": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "name"
            ],
            "properties": {
              "name": {
                "type": "string",
                "enum": [
                  "secret-manager",
                  "ci-cd-tool",
                  "orchestrator-generator",
                  "container-registry"
                ]
              },
              "functionalities": {
                "type": "array",
                "items": {
                  "type": "object",
                  "additionalProperties": false,
                  "required": [
                    "name"
                  ],
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "defaultActive": {
                      "type": "boolean"
                    },
                    "description": {
                      "type": "string"
                    },
                    "label": {
                      "type": "string"
                    },
                    "rules": {
                      "type": "object",
                      "properties": {
                        "excludeOtherFunctionalities": {
                          "type": "boolean",
                          "description": "If true, any other functionality of this capability will be excluded"
                        },
                        "excludeOtherCapabilities": {
                          "type": "boolean",
                          "description": "If true, any other capability will be excluded"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "name",
              "allowedRepositoryVisibilities"
            ],
            "properties": {
              "name": {
                "const": "git-provider"
              },
              "allowedRepositoryVisibilities": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "private",
                    "internal",
                    "public"
                  ]
                },
                "description": "The visibility levels allowed by this git provider"
              },
              "functionalities": {
                "type": "array",
                "items": {
                  "type": "object",
                  "additionalProperties": false,
                  "required": [
                    "name"
                  ],
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "defaultActive": {
                      "type": "boolean"
                    },
                    "description": {
                      "type": "string"
                    },
                    "label": {
                      "type": "string"
                    },
                    "rules": {
                      "type": "object",
                      "properties": {
                        "excludeOtherFunctionalities": {
                          "type": "boolean",
                          "description": "If true, any other functionality of this capability will be excluded"
                        },
                        "excludeOtherCapabilities": {
                          "type": "boolean",
                          "description": "If true, any other capability will be excluded"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      }
    },
    "credentialTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "token",
          "userPass",
          "m2m",
          "client_credentials",
          "client_credentials_certificate"
        ]
      }
    }
  }
}
`
