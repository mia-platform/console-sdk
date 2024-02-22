/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/provider.test.ts TAP providers match schema > must match snapshot 1`] = `
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "providerId",
    "type",
    "urls"
  ],
  "properties": {
    "providerId": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "urls": {
      "type": "object",
      "required": [
        "base",
        "apiBase"
      ],
      "properties": {
        "base": {
          "type": "string"
        },
        "apiBase": {
          "type": "string"
        }
      }
    },
    "base64CA": {
      "type": "string"
    },
    "proxy": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      },
      "required": [
        "url"
      ]
    },
    "credentials": {
      "oneOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "type",
            "content"
          ],
          "properties": {
            "expirationDate": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "const": "token"
            },
            "content": {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "accessToken"
              ],
              "properties": {
                "accessToken": {
                  "type": "string"
                }
              }
            }
          }
        },
        {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "type",
            "content"
          ],
          "properties": {
            "expirationDate": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "const": "userPass"
            },
            "content": {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "userName",
                "password"
              ],
              "properties": {
                "userName": {
                  "type": "string"
                },
                "password": {
                  "type": "string"
                }
              }
            }
          }
        },
        {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "type",
            "content"
          ],
          "properties": {
            "expirationDate": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "const": "m2m"
            },
            "content": {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "token",
                "accessTokenURL"
              ],
              "properties": {
                "accessTokenURL": {
                  "type": "string"
                },
                "token": {
                  "type": "string"
                }
              }
            }
          }
        },
        {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "type",
            "content"
          ],
          "properties": {
            "expirationDate": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "const": "client_credentials"
            },
            "content": {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "clientId",
                "clientSecret",
                "accessTokenURL"
              ],
              "properties": {
                "accessTokenURL": {
                  "type": "string"
                },
                "clientId": {
                  "type": "string"
                },
                "clientSecret": {
                  "type": "string"
                },
                "scope": {
                  "type": "string"
                }
              }
            }
          }
        },
        {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "type",
            "content"
          ],
          "properties": {
            "expirationDate": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "const": "client_credentials_certificate"
            },
            "content": {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "accessTokenURL",
                "certificateThumbprint",
                "clientId",
                "privateKeyBase64"
              ],
              "properties": {
                "accessTokenURL": {
                  "type": "string"
                },
                "certificateThumbprint": {
                  "type": "string"
                },
                "clientId": {
                  "type": "string"
                },
                "privateKeyBase64": {
                  "type": "string"
                },
                "scope": {
                  "type": "string"
                }
              }
            }
          }
        }
      ]
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
                  "orchestrator-generator"
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
              "name"
            ],
            "properties": {
              "name": {
                "const": "container-registry"
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
                    }
                  }
                }
              },
              "imagePullSecretName": {
                "type": "string"
              }
            }
          },
          {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "name"
            ],
            "properties": {
              "name": {
                "const": "git-provider"
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
                    }
                  }
                }
              },
              "repositoryPathTemplate": {
                "type": "string"
              }
            }
          }
        ]
      }
    },
    "visibility": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "allTenants": {
          "type": "boolean"
        }
      }
    }
  }
}
`
