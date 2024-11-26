/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/endpoints.test.ts TAP endpoints schema > must match snapshot 1`] = `
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "if": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "crud",
            "view"
          ]
        }
      }
    },
    "then": {
      "type": "object",
      "properties": {
        "basePath": {
          "type": "string",
          "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$"
        },
        "pathRewrite": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "routes": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "path": {
                "type": "string",
                "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$"
              },
              "public": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "showInDocumentation": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "schema": {
                "type": "object"
              },
              "secreted": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "allowUnknownRequestContentType": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "allowUnknownResponseContentType": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "acl": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "backofficeAcl": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "verb": {
                "type": "string",
                "enum": [
                  "GET",
                  "POST",
                  "PUT",
                  "PATCH",
                  "DELETE",
                  "HEAD"
                ]
              },
              "catchDecorator": {
                "type": "string"
              },
              "preDecorators": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "default": []
              },
              "postDecorators": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "default": []
              },
              "rateLimit": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "requestsPerSecond": {
                      "type": "number",
                      "description": "Maximum number of requests allowed per second"
                    }
                  },
                  "required": [
                    "inherited",
                    "requestsPerSecond"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "additionalProperties": false,
            "required": [
              "id",
              "path",
              "acl",
              "backofficeAcl",
              "public",
              "secreted",
              "showInDocumentation",
              "verb"
            ]
          }
        },
        "type": {
          "type": "string",
          "enum": [
            "crud",
            "view"
          ]
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "public": {
          "type": "boolean"
        },
        "showInDocumentation": {
          "type": "boolean"
        },
        "secreted": {
          "type": "boolean"
        },
        "acl": {
          "type": "string"
        },
        "backofficeAcl": {
          "type": "object",
          "default": {
            "inherited": true
          },
          "if": {
            "type": "object",
            "properties": {
              "inherited": {
                "type": "boolean",
                "const": false
              }
            }
          },
          "then": {
            "type": "object",
            "properties": {
              "inherited": {
                "type": "boolean",
                "const": false
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "inherited",
              "value"
            ],
            "additionalProperties": false
          },
          "else": {
            "type": "object",
            "properties": {
              "inherited": {
                "type": "boolean",
                "const": true
              }
            },
            "required": [
              "inherited"
            ],
            "additionalProperties": false
          }
        },
        "allowUnknownRequestContentType": {
          "type": "boolean",
          "default": false
        },
        "allowUnknownResponseContentType": {
          "type": "boolean",
          "default": false
        },
        "forceMicroserviceGatewayProxy": {
          "type": "boolean",
          "default": false
        },
        "timeout": {
          "type": "object",
          "properties": {
            "readSeconds": {
              "type": "number",
              "description": "The number of seconds to wait before the request is rejected"
            }
          }
        },
        "rateLimit": {
          "type": "object",
          "properties": {
            "requestsPerSecond": {
              "type": "integer",
              "description": "The number of request that can be made each second"
            }
          }
        },
        "requestBody": {
          "type": "object",
          "properties": {
            "maxSizeMB": {
              "type": "number",
              "description": "Maximum size of the request body"
            }
          }
        },
        "listeners": {
          "type": "object",
          "additionalProperties": {
            "type": "boolean"
          }
        },
        "options": {
          "type": "object",
          "properties": {
            "iframePolicy": {
              "type": "string",
              "enum": [
                "all",
                "deny",
                "sameorigin"
              ]
            }
          }
        },
        "pathName": {
          "type": "string",
          "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$"
        },
        "collectionId": {
          "type": "string",
          "maxLength": 80,
          "pattern": "(^[\\\\w-]+$)",
          "x-validation-error-id": "collectionName.patternError"
        }
      },
      "required": [
        "routes",
        "collectionId",
        "pathName",
        "basePath",
        "type",
        "public",
        "secreted",
        "showInDocumentation",
        "acl"
      ]
    },
    "else": {
      "if": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "external",
              "custom",
              "cross-projects"
            ]
          }
        }
      },
      "then": {
        "type": "object",
        "properties": {
          "basePath": {
            "type": "string",
            "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$"
          },
          "pathRewrite": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "routes": {
            "type": "object",
            "additionalProperties": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "path": {
                  "type": "string",
                  "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$"
                },
                "public": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "showInDocumentation": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "schema": {
                  "type": "object"
                },
                "secreted": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "allowUnknownRequestContentType": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "allowUnknownResponseContentType": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "acl": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "backofficeAcl": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "inherited",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                },
                "verb": {
                  "type": "string",
                  "enum": [
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE",
                    "HEAD"
                  ]
                },
                "catchDecorator": {
                  "type": "string"
                },
                "preDecorators": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "default": []
                },
                "postDecorators": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "default": []
                },
                "rateLimit": {
                  "type": "object",
                  "default": {
                    "inherited": true
                  },
                  "if": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      }
                    }
                  },
                  "then": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": false
                      },
                      "requestsPerSecond": {
                        "type": "number",
                        "description": "Maximum number of requests allowed per second"
                      }
                    },
                    "required": [
                      "inherited",
                      "requestsPerSecond"
                    ],
                    "additionalProperties": false
                  },
                  "else": {
                    "type": "object",
                    "properties": {
                      "inherited": {
                        "type": "boolean",
                        "const": true
                      }
                    },
                    "required": [
                      "inherited"
                    ],
                    "additionalProperties": false
                  }
                }
              },
              "additionalProperties": false,
              "required": [
                "id",
                "path",
                "acl",
                "backofficeAcl",
                "public",
                "secreted",
                "showInDocumentation",
                "verb"
              ]
            }
          },
          "type": {
            "type": "string",
            "enum": [
              "external",
              "custom",
              "cross-projects"
            ]
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "public": {
            "type": "boolean"
          },
          "showInDocumentation": {
            "type": "boolean"
          },
          "secreted": {
            "type": "boolean"
          },
          "acl": {
            "type": "string"
          },
          "backofficeAcl": {
            "type": "object",
            "default": {
              "inherited": true
            },
            "if": {
              "type": "object",
              "properties": {
                "inherited": {
                  "type": "boolean",
                  "const": false
                }
              }
            },
            "then": {
              "type": "object",
              "properties": {
                "inherited": {
                  "type": "boolean",
                  "const": false
                },
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "inherited",
                "value"
              ],
              "additionalProperties": false
            },
            "else": {
              "type": "object",
              "properties": {
                "inherited": {
                  "type": "boolean",
                  "const": true
                }
              },
              "required": [
                "inherited"
              ],
              "additionalProperties": false
            }
          },
          "allowUnknownRequestContentType": {
            "type": "boolean",
            "default": false
          },
          "allowUnknownResponseContentType": {
            "type": "boolean",
            "default": false
          },
          "forceMicroserviceGatewayProxy": {
            "type": "boolean",
            "default": false
          },
          "timeout": {
            "type": "object",
            "properties": {
              "readSeconds": {
                "type": "number",
                "description": "The number of seconds to wait before the request is rejected"
              }
            }
          },
          "rateLimit": {
            "type": "object",
            "properties": {
              "requestsPerSecond": {
                "type": "integer",
                "description": "The number of request that can be made each second"
              }
            }
          },
          "requestBody": {
            "type": "object",
            "properties": {
              "maxSizeMB": {
                "type": "number",
                "description": "Maximum size of the request body"
              }
            }
          },
          "listeners": {
            "type": "object",
            "additionalProperties": {
              "type": "boolean"
            }
          },
          "options": {
            "type": "object",
            "properties": {
              "iframePolicy": {
                "type": "string",
                "enum": [
                  "all",
                  "deny",
                  "sameorigin"
                ]
              }
            }
          },
          "service": {
            "type": "string",
            "minLength": 1,
            "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
            "x-validation-error-id": "resourceName.patternError"
          }
        },
        "required": [
          "service",
          "basePath",
          "type",
          "public",
          "secreted",
          "showInDocumentation",
          "acl"
        ]
      },
      "else": {
        "if": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "fast-data-projection"
            }
          }
        },
        "then": {
          "type": "object",
          "properties": {
            "basePath": {
              "type": "string",
              "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$"
            },
            "pathRewrite": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "routes": {
              "type": "object",
              "additionalProperties": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "path": {
                    "type": "string",
                    "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$"
                  },
                  "public": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "showInDocumentation": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "schema": {
                    "type": "object"
                  },
                  "secreted": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "allowUnknownRequestContentType": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "allowUnknownResponseContentType": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "acl": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "backofficeAcl": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "value": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "inherited",
                        "value"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "verb": {
                    "type": "string",
                    "enum": [
                      "GET",
                      "POST",
                      "PUT",
                      "PATCH",
                      "DELETE",
                      "HEAD"
                    ]
                  },
                  "catchDecorator": {
                    "type": "string"
                  },
                  "preDecorators": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "default": []
                  },
                  "postDecorators": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "default": []
                  },
                  "rateLimit": {
                    "type": "object",
                    "default": {
                      "inherited": true
                    },
                    "if": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        }
                      }
                    },
                    "then": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": false
                        },
                        "requestsPerSecond": {
                          "type": "number",
                          "description": "Maximum number of requests allowed per second"
                        }
                      },
                      "required": [
                        "inherited",
                        "requestsPerSecond"
                      ],
                      "additionalProperties": false
                    },
                    "else": {
                      "type": "object",
                      "properties": {
                        "inherited": {
                          "type": "boolean",
                          "const": true
                        }
                      },
                      "required": [
                        "inherited"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "additionalProperties": false,
                "required": [
                  "id",
                  "path",
                  "acl",
                  "backofficeAcl",
                  "public",
                  "secreted",
                  "showInDocumentation",
                  "verb"
                ]
              }
            },
            "type": {
              "type": "string",
              "const": "fast-data-projection"
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "public": {
              "type": "boolean"
            },
            "showInDocumentation": {
              "type": "boolean"
            },
            "secreted": {
              "type": "boolean"
            },
            "acl": {
              "type": "string"
            },
            "backofficeAcl": {
              "type": "object",
              "default": {
                "inherited": true
              },
              "if": {
                "type": "object",
                "properties": {
                  "inherited": {
                    "type": "boolean",
                    "const": false
                  }
                }
              },
              "then": {
                "type": "object",
                "properties": {
                  "inherited": {
                    "type": "boolean",
                    "const": false
                  },
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "inherited",
                  "value"
                ],
                "additionalProperties": false
              },
              "else": {
                "type": "object",
                "properties": {
                  "inherited": {
                    "type": "boolean",
                    "const": true
                  }
                },
                "required": [
                  "inherited"
                ],
                "additionalProperties": false
              }
            },
            "allowUnknownRequestContentType": {
              "type": "boolean",
              "default": false
            },
            "allowUnknownResponseContentType": {
              "type": "boolean",
              "default": false
            },
            "forceMicroserviceGatewayProxy": {
              "type": "boolean",
              "default": false
            },
            "timeout": {
              "type": "object",
              "properties": {
                "readSeconds": {
                  "type": "number",
                  "description": "The number of seconds to wait before the request is rejected"
                }
              }
            },
            "rateLimit": {
              "type": "object",
              "properties": {
                "requestsPerSecond": {
                  "type": "integer",
                  "description": "The number of request that can be made each second"
                }
              }
            },
            "requestBody": {
              "type": "object",
              "properties": {
                "maxSizeMB": {
                  "type": "number",
                  "description": "Maximum size of the request body"
                }
              }
            },
            "listeners": {
              "type": "object",
              "additionalProperties": {
                "type": "boolean"
              }
            },
            "options": {
              "type": "object",
              "properties": {
                "iframePolicy": {
                  "type": "string",
                  "enum": [
                    "all",
                    "deny",
                    "sameorigin"
                  ]
                }
              }
            },
            "pathName": {
              "type": "string",
              "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$"
            },
            "projectionId": {
              "type": "string"
            }
          },
          "required": [
            "projectionId",
            "routes",
            "pathName",
            "basePath",
            "type",
            "public",
            "secreted",
            "showInDocumentation",
            "acl"
          ]
        },
        "else": {
          "if": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "const": "fast-data-single-view"
              }
            }
          },
          "then": {
            "type": "object",
            "properties": {
              "basePath": {
                "type": "string",
                "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$"
              },
              "pathRewrite": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "routes": {
                "type": "object",
                "additionalProperties": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "path": {
                      "type": "string",
                      "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$"
                    },
                    "public": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "showInDocumentation": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "schema": {
                      "type": "object"
                    },
                    "secreted": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "allowUnknownRequestContentType": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "allowUnknownResponseContentType": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "acl": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "backofficeAcl": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "inherited",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "verb": {
                      "type": "string",
                      "enum": [
                        "GET",
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE",
                        "HEAD"
                      ]
                    },
                    "catchDecorator": {
                      "type": "string"
                    },
                    "preDecorators": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "default": []
                    },
                    "postDecorators": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "default": []
                    },
                    "rateLimit": {
                      "type": "object",
                      "default": {
                        "inherited": true
                      },
                      "if": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          }
                        }
                      },
                      "then": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": false
                          },
                          "requestsPerSecond": {
                            "type": "number",
                            "description": "Maximum number of requests allowed per second"
                          }
                        },
                        "required": [
                          "inherited",
                          "requestsPerSecond"
                        ],
                        "additionalProperties": false
                      },
                      "else": {
                        "type": "object",
                        "properties": {
                          "inherited": {
                            "type": "boolean",
                            "const": true
                          }
                        },
                        "required": [
                          "inherited"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  "additionalProperties": false,
                  "required": [
                    "id",
                    "path",
                    "acl",
                    "backofficeAcl",
                    "public",
                    "secreted",
                    "showInDocumentation",
                    "verb"
                  ]
                }
              },
              "type": {
                "type": "string",
                "const": "fast-data-single-view"
              },
              "tags": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "public": {
                "type": "boolean"
              },
              "showInDocumentation": {
                "type": "boolean"
              },
              "secreted": {
                "type": "boolean"
              },
              "acl": {
                "type": "string"
              },
              "backofficeAcl": {
                "type": "object",
                "default": {
                  "inherited": true
                },
                "if": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    }
                  }
                },
                "then": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": false
                    },
                    "value": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "inherited",
                    "value"
                  ],
                  "additionalProperties": false
                },
                "else": {
                  "type": "object",
                  "properties": {
                    "inherited": {
                      "type": "boolean",
                      "const": true
                    }
                  },
                  "required": [
                    "inherited"
                  ],
                  "additionalProperties": false
                }
              },
              "allowUnknownRequestContentType": {
                "type": "boolean",
                "default": false
              },
              "allowUnknownResponseContentType": {
                "type": "boolean",
                "default": false
              },
              "forceMicroserviceGatewayProxy": {
                "type": "boolean",
                "default": false
              },
              "timeout": {
                "type": "object",
                "properties": {
                  "readSeconds": {
                    "type": "number",
                    "description": "The number of seconds to wait before the request is rejected"
                  }
                }
              },
              "rateLimit": {
                "type": "object",
                "properties": {
                  "requestsPerSecond": {
                    "type": "integer",
                    "description": "The number of request that can be made each second"
                  }
                }
              },
              "requestBody": {
                "type": "object",
                "properties": {
                  "maxSizeMB": {
                    "type": "number",
                    "description": "Maximum size of the request body"
                  }
                }
              },
              "listeners": {
                "type": "object",
                "additionalProperties": {
                  "type": "boolean"
                }
              },
              "options": {
                "type": "object",
                "properties": {
                  "iframePolicy": {
                    "type": "string",
                    "enum": [
                      "all",
                      "deny",
                      "sameorigin"
                    ]
                  }
                }
              },
              "pathName": {
                "type": "string",
                "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$"
              },
              "internalEndpoint": {
                "type": "string"
              }
            },
            "required": [
              "internalEndpoint",
              "routes",
              "pathName",
              "basePath",
              "type",
              "public",
              "secreted",
              "showInDocumentation",
              "acl"
            ]
          }
        }
      }
    }
  },
  "default": {}
}
`
