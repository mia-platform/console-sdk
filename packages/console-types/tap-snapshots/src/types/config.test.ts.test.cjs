/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/types/config.test.ts TAP config compile correctly and match snapshot > must match snapshot 1`] = `
Object {
  "additionalProperties": false,
  "properties": Object {
    "apiVersions": Object {
      "default": Array [],
      "type": "array",
    },
    "applications": Object {
      "additionalProperties": false,
      "default": Object {},
      "patternProperties": Object {
        "^[a-z]([-a-z0-9]*[a-z0-9])?$": Object {
          "properties": Object {
            "description": Object {
              "type": "string",
            },
            "generatedFrom": Object {
              "type": "string",
            },
            "name": Object {
              "type": "string",
            },
            "resources": Object {
              "properties": Object {
                "collections": Object {
                  "patternProperties": Object {
                    "(^[\\\\w-]+$)": Object {
                      "additionalProperties": true,
                      "properties": Object {
                        "name": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                      ],
                      "type": "object",
                    },
                  },
                  "type": "object",
                },
                "endpoints": Object {
                  "patternProperties": Object {
                    "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$": Object {
                      "additionalProperties": true,
                      "properties": Object {
                        "basePath": Object {
                          "type": "string",
                        },
                        "service": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "basePath",
                        "service",
                      ],
                      "type": "object",
                    },
                  },
                  "type": "object",
                },
                "services": Object {
                  "patternProperties": Object {
                    "^[a-z]([-a-z0-9]*[a-z0-9])?$": Object {
                      "additionalProperties": true,
                      "properties": Object {
                        "name": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                      ],
                      "type": "object",
                    },
                  },
                  "type": "object",
                },
                "unsecretedVariables": Object {
                  "patternProperties": Object {
                    ".*": Object {
                      "additionalProperties": true,
                      "properties": Object {
                        "name": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                      ],
                      "type": "object",
                    },
                  },
                  "type": "object",
                },
              },
              "type": "object",
            },
          },
          "type": "object",
        },
      },
      "type": "object",
    },
    "cmsAnalytics": Object {
      "additionalProperties": Object {
        "else": Object {
          "else": false,
          "if": Object {
            "properties": Object {
              "type": Object {
                "enum": Array [
                  "chart",
                  "chart-summary",
                ],
                "type": "string",
              },
            },
            "type": "object",
          },
          "then": Object {
            "additionalProperties": false,
            "properties": Object {
              "customRangeDates": Object {
                "type": "boolean",
              },
              "endDate": Object {
                "type": "integer",
              },
              "id": Object {
                "type": "string",
              },
              "legend": Object {
                "type": "boolean",
              },
              "series": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "color": Object {
                      "type": "string",
                    },
                    "id": Object {
                      "type": "string",
                    },
                    "labelType": Object {
                      "enum": Array [
                        "euro",
                        "",
                      ],
                      "type": "string",
                    },
                    "name": Object {
                      "type": "string",
                    },
                    "params": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "collection": Object {
                          "maxLength": 80,
                          "pattern": "(^[\\\\w-]+$)",
                          "type": "string",
                          "x-validation-error-id": "collectionName.patternError",
                        },
                        "filter": Object {
                          "type": "string",
                        },
                        "format": Object {
                          "enum": Array [
                            "y",
                            "ym",
                            "yw",
                            "ymd",
                            "ymdh",
                            "ymdhM",
                          ],
                          "type": "string",
                        },
                        "group": Object {
                          "type": "string",
                        },
                        "groupDate": Object {
                          "type": "string",
                        },
                        "operations": Object {
                          "items": Object {
                            "items": Object {
                              "type": "string",
                            },
                            "type": "array",
                          },
                          "type": "array",
                        },
                      },
                      "required": Array [
                        "collection",
                      ],
                      "type": "object",
                    },
                    "type": Object {
                      "enum": Array [
                        "line",
                        "area",
                        "spline",
                        "column",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "id",
                    "name",
                    "type",
                    "color",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "sortBy": Object {
                "enum": Array [
                  "label-asc",
                  "label-desc",
                  "value-asc",
                  "value-desc",
                ],
                "type": "string",
              },
              "startDate": Object {
                "type": "integer",
              },
              "title": Object {
                "type": "string",
              },
              "type": Object {
                "enum": Array [
                  "chart",
                  "chart-summary",
                ],
                "type": "string",
              },
            },
            "required": Array [
              "type",
              "title",
              "legend",
              "series",
            ],
            "type": "object",
          },
        },
        "if": Object {
          "properties": Object {
            "type": Object {
              "const": "custom_stock",
              "type": "string",
            },
          },
          "type": "object",
        },
        "then": Object {
          "additionalProperties": false,
          "properties": Object {
            "customRangeDates": Object {
              "type": "boolean",
            },
            "defaultZoom": Object {
              "maximum": 6,
              "minimum": 0,
              "type": "integer",
            },
            "id": Object {
              "type": "string",
            },
            "legend": Object {
              "type": "boolean",
            },
            "series": Object {
              "items": Object {
                "additionalProperties": false,
                "properties": Object {
                  "color": Object {
                    "type": "string",
                  },
                  "id": Object {
                    "type": "string",
                  },
                  "labelType": Object {
                    "enum": Array [
                      "euro",
                      "",
                    ],
                    "type": "string",
                  },
                  "name": Object {
                    "type": "string",
                  },
                  "params": Object {
                    "additionalProperties": false,
                    "properties": Object {
                      "collection": Object {
                        "maxLength": 80,
                        "pattern": "(^[\\\\w-]+$)",
                        "type": "string",
                        "x-validation-error-id": "collectionName.patternError",
                      },
                      "filter": Object {
                        "type": "string",
                      },
                      "format": Object {
                        "enum": Array [
                          "y",
                          "ym",
                          "yw",
                          "ymd",
                          "ymdh",
                          "ymdhM",
                        ],
                        "type": "string",
                      },
                      "group": Object {
                        "type": "string",
                      },
                      "groupDate": Object {
                        "type": "string",
                      },
                      "operations": Object {
                        "items": Object {
                          "items": Object {
                            "type": "string",
                          },
                          "type": "array",
                        },
                        "type": "array",
                      },
                    },
                    "required": Array [
                      "collection",
                    ],
                    "type": "object",
                  },
                  "type": Object {
                    "enum": Array [
                      "line",
                      "area",
                      "spline",
                      "column",
                    ],
                    "type": "string",
                  },
                },
                "required": Array [
                  "id",
                  "name",
                  "type",
                  "color",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "title": Object {
              "type": "string",
            },
            "type": Object {
              "const": "custom_stock",
              "type": "string",
            },
            "yAxis": Object {
              "additionalProperties": false,
              "properties": Object {
                "labelType": Object {
                  "enum": Array [
                    "euro",
                    "",
                  ],
                  "type": "string",
                },
                "shared": Object {
                  "type": "boolean",
                },
                "title": Object {
                  "type": "string",
                },
              },
              "required": Array [
                "shared",
                "title",
              ],
              "type": "object",
            },
          },
          "required": Array [
            "type",
            "title",
            "legend",
            "series",
          ],
          "type": "object",
        },
        "type": "object",
      },
      "default": Object {},
      "type": "object",
    },
    "cmsCategories": Object {
      "additionalProperties": false,
      "default": Object {},
      "patternProperties": Object {
        "(^[a-zA-Z0-9_\\\\-\\\\s]+$)": Object {
          "additionalProperties": false,
          "properties": Object {
            "id": Object {
              "type": "string",
            },
            "name": Object {
              "maxLength": 32,
              "minLength": 1,
              "pattern": "(^[a-zA-Z0-9_\\\\-\\\\s]+$)",
              "type": "string",
            },
            "order": Object {
              "minimum": 0,
              "type": "integer",
            },
            "pages": Object {
              "additionalProperties": false,
              "patternProperties": Object {
                "(^[a-zA-Z0-9_\\\\-\\\\s]+$)": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "aclExpression": Object {
                      "type": "string",
                    },
                    "actions": Object {
                      "items": Object {
                        "properties": Object {
                          "icon": Object {
                            "type": "string",
                          },
                          "id": Object {
                            "type": "string",
                          },
                          "label": Object {
                            "type": "string",
                          },
                          "route": Object {
                            "type": "string",
                          },
                        },
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "analytics": Object {
                      "default": Array [],
                      "items": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "id": Object {
                            "type": "string",
                          },
                          "order": Object {
                            "default": 0,
                            "minimum": 0,
                            "type": "integer",
                          },
                          "width": Object {
                            "default": 6,
                            "enum": Array [
                              6,
                              12,
                            ],
                            "type": "integer",
                          },
                        },
                        "required": Array [
                          "id",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "baseQuery": Object {
                      "type": "string",
                    },
                    "blocked": Object {
                      "type": "boolean",
                    },
                    "defaultDelete": Object {
                      "type": "boolean",
                    },
                    "endpoint": Object {
                      "minLength": 1,
                      "type": "string",
                    },
                    "hidden": Object {
                      "type": "boolean",
                    },
                    "highlight": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "backgroundColor": Object {
                          "type": "string",
                        },
                        "color": Object {
                          "type": "string",
                        },
                        "query": Object {
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "icon": Object {
                      "type": "string",
                    },
                    "id": Object {
                      "type": "string",
                    },
                    "layout": Object {
                      "enum": Array [
                        "table",
                        "push-table",
                        "user-table",
                        "cards",
                        "gallery",
                      ],
                      "type": "string",
                    },
                    "name": Object {
                      "maxLength": 32,
                      "minLength": 1,
                      "pattern": "(^[a-zA-Z0-9_\\\\-\\\\s]+$)",
                      "type": "string",
                    },
                    "notification": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "query": Object {
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "order": Object {
                      "minimum": 0,
                      "type": "integer",
                    },
                    "properties": Object {
                      "additionalProperties": false,
                      "patternProperties": Object {
                        "(^[a-zA-Z0-9_\\\\-\\\\s]+$)": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "cmsCardPosition": Object {
                              "minimum": 0,
                              "type": "integer",
                            },
                            "cmsDateFormat": Object {
                              "type": "string",
                            },
                            "cmsEditable": Object {
                              "type": "boolean",
                            },
                            "cmsLookup": Object {
                              "additionalProperties": false,
                              "properties": Object {
                                "autoSelect": Object {
                                  "type": "boolean",
                                },
                                "endpoint": Object {
                                  "type": "string",
                                },
                                "inlineSource": Object {
                                  "items": Object {
                                    "additionalProperties": true,
                                    "properties": Object {
                                      "label": Object {
                                        "type": "string",
                                      },
                                    },
                                    "type": "object",
                                  },
                                  "type": "array",
                                },
                                "limit": Object {
                                  "minimum": 0,
                                  "type": "integer",
                                },
                                "query": Object {
                                  "type": "string",
                                },
                                "reset": Object {
                                  "type": "boolean",
                                },
                                "searchLive": Object {
                                  "type": "boolean",
                                },
                                "text": Object {
                                  "additionalProperties": false,
                                  "properties": Object {
                                    "delimiters": Object {
                                      "items": Object {
                                        "type": "string",
                                      },
                                      "type": "array",
                                    },
                                    "sources": Object {
                                      "items": Object {
                                        "type": "string",
                                      },
                                      "type": "array",
                                    },
                                  },
                                  "required": Array [
                                    "sources",
                                    "delimiters",
                                  ],
                                  "type": "object",
                                },
                                "value": Object {
                                  "type": "string",
                                },
                              },
                              "type": "object",
                            },
                            "cmsOrder": Object {
                              "minimum": 0,
                              "type": "integer",
                            },
                            "cmsVisibility": Object {
                              "additionalProperties": false,
                              "properties": Object {
                                "edit": Object {
                                  "additionalProperties": false,
                                  "properties": Object {
                                    "query": Object {
                                      "type": "string",
                                    },
                                  },
                                  "type": "object",
                                },
                                "level": Object {
                                  "enum": Array [
                                    0,
                                    1,
                                    2,
                                    3,
                                  ],
                                  "type": "integer",
                                },
                                "new": Object {
                                  "additionalProperties": false,
                                  "properties": Object {
                                    "query": Object {
                                      "type": "string",
                                    },
                                  },
                                  "type": "object",
                                },
                              },
                              "required": Array [
                                "level",
                              ],
                              "type": "object",
                            },
                            "cmsZoom": Object {
                              "minimum": 0,
                              "type": "integer",
                            },
                            "description": Object {
                              "type": "string",
                            },
                            "id": Object {
                              "pattern": "^[^$\\\\.]+$",
                              "type": "string",
                            },
                            "interfaceType": Object {
                              "enum": Array [
                                "string",
                                "date",
                                "geopoint",
                                "cmslookup",
                                "number",
                                "text",
                                "files",
                                "textArea",
                                "cmsmultilookup",
                                "datetime",
                                "array",
                                "boolean",
                                "object",
                                "rawarray",
                                "rawobject",
                              ],
                              "type": "string",
                            },
                            "label": Object {
                              "minLength": 1,
                              "type": "string",
                            },
                          },
                          "required": Array [
                            "id",
                            "label",
                            "interfaceType",
                            "cmsVisibility",
                          ],
                          "type": "object",
                        },
                      },
                      "type": "object",
                    },
                  },
                  "required": Array [
                    "id",
                    "name",
                    "endpoint",
                    "layout",
                    "properties",
                  ],
                  "type": "object",
                },
              },
              "type": "object",
            },
          },
          "required": Array [
            "id",
            "name",
            "order",
            "pages",
          ],
          "type": "object",
        },
      },
      "type": "object",
    },
    "cmsDashboard": Object {
      "default": Array [],
      "items": Object {
        "additionalProperties": false,
        "properties": Object {
          "id": Object {
            "type": "string",
          },
          "order": Object {
            "default": 0,
            "minimum": 0,
            "type": "integer",
          },
          "width": Object {
            "default": 6,
            "enum": Array [
              6,
              12,
            ],
            "type": "integer",
          },
        },
        "required": Array [
          "id",
        ],
        "type": "object",
      },
      "type": "array",
    },
    "cmsSettings": Object {
      "additionalProperties": false,
      "default": Object {
        "accessGroupsExpression": "isBackoffice && groups.admin",
      },
      "properties": Object {
        "accessGroupsExpression": Object {
          "default": "isBackoffice && groups.admin",
          "type": "string",
        },
      },
      "required": Array [
        "accessGroupsExpression",
      ],
      "type": "object",
    },
    "collections": Object {
      "additionalProperties": Object {
        "else": Object {
          "additionalProperties": false,
          "properties": Object {
            "description": Object {
              "type": "string",
            },
            "fields": Object {
              "items": Object {
                "else": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "encryptionEnabled": Object {
                      "type": "boolean",
                    },
                    "encryptionSearchable": Object {
                      "type": "boolean",
                    },
                    "name": Object {
                      "pattern": "^[^$\\\\.]+$",
                      "type": "string",
                    },
                    "nullable": Object {
                      "type": "boolean",
                    },
                    "required": Object {
                      "type": "boolean",
                    },
                    "sensitivityDescription": Object {
                      "type": "string",
                    },
                    "sensitivityValue": Object {
                      "maximum": 4,
                      "minimum": 0,
                      "type": "number",
                    },
                    "type": Object {
                      "enum": Array [
                        "string",
                        "number",
                        "boolean",
                        "Date",
                        "GeoPoint",
                        "RawObject",
                        "Array_string",
                        "Array_number",
                        "Array_RawObject",
                        "ObjectId",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "type",
                    "required",
                    "nullable",
                  ],
                  "type": "object",
                },
                "if": Object {
                  "properties": Object {
                    "type": Object {
                      "enum": Array [
                        "RawObject",
                        "Array_RawObject",
                      ],
                    },
                  },
                  "type": "object",
                },
                "then": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "encryptionEnabled": Object {
                      "type": "boolean",
                    },
                    "encryptionSearchable": Object {
                      "type": "boolean",
                    },
                    "name": Object {
                      "pattern": "^[^$\\\\.]+$",
                      "type": "string",
                    },
                    "nullable": Object {
                      "type": "boolean",
                    },
                    "required": Object {
                      "type": "boolean",
                    },
                    "schema": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "additionalProperties": Object {
                          "type": "boolean",
                        },
                        "encryption": Object {
                          "properties": Object {
                            "enabled": Object {
                              "type": "boolean",
                            },
                            "searchable": Object {
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "properties": Object {
                          "additionalProperties": true,
                          "type": "object",
                        },
                        "required": Object {
                          "items": Object {
                            "type": "string",
                          },
                          "type": "array",
                        },
                        "type": Object {
                          "enum": Array [
                            "object",
                          ],
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "sensitivityDescription": Object {
                      "type": "string",
                    },
                    "sensitivityValue": Object {
                      "maximum": 4,
                      "minimum": 0,
                      "type": "number",
                    },
                    "type": Object {
                      "enum": Array [
                        "string",
                        "number",
                        "boolean",
                        "Date",
                        "GeoPoint",
                        "RawObject",
                        "Array_string",
                        "Array_number",
                        "Array_RawObject",
                        "ObjectId",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "type",
                    "required",
                    "nullable",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "type": "array",
            },
            "hidden": Object {
              "type": "boolean",
            },
            "id": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "indexes": Object {
              "items": Object {
                "else": Object {
                  "else": Object {
                    "else": Object {
                      "else": false,
                      "if": Object {
                        "properties": Object {
                          "type": Object {
                            "const": "TTL",
                            "type": "string",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "properties": Object {
                          "description": Object {
                            "type": "string",
                          },
                          "expireAfterSeconds": Object {
                            "minimum": 1,
                            "type": "number",
                          },
                          "fields": Object {
                            "items": Object {
                              "properties": Object {
                                "name": Object {
                                  "pattern": "^_?[ \\\\w-]+(\\\\.[\\\\w-]+|(\\\\.\\\\$\\\\*\\\\*))*$|^(\\\\$\\\\*\\\\*)$",
                                  "type": "string",
                                },
                                "order": Object {
                                  "enum": Array [
                                    1,
                                    -1,
                                  ],
                                  "type": "number",
                                },
                              },
                              "required": Array [
                                "name",
                                "order",
                              ],
                              "type": "object",
                            },
                            "maxItems": 1,
                            "minItems": 1,
                            "type": "array",
                          },
                          "name": Object {
                            "pattern": "^[a-zA-Z_][\\\\w-]*$",
                            "type": "string",
                          },
                          "partialFilterExpression": Object {
                            "type": "string",
                          },
                          "type": Object {
                            "const": "TTL",
                            "type": "string",
                          },
                          "unique": Object {
                            "type": "boolean",
                          },
                          "usePartialFilter": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "name",
                          "type",
                          "fields",
                          "unique",
                          "expireAfterSeconds",
                        ],
                        "type": "object",
                      },
                    },
                    "if": Object {
                      "properties": Object {
                        "type": Object {
                          "const": "hash",
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "properties": Object {
                        "description": Object {
                          "type": "string",
                        },
                        "field": Object {
                          "pattern": "^_?[ \\\\w-]+(\\\\.[\\\\w-]+|(\\\\.\\\\$\\\\*\\\\*))*$|^(\\\\$\\\\*\\\\*)$",
                          "type": "string",
                        },
                        "name": Object {
                          "pattern": "^[a-zA-Z_][\\\\w-]*$",
                          "type": "string",
                        },
                        "partialFilterExpression": Object {
                          "type": "string",
                        },
                        "type": Object {
                          "const": "hash",
                          "type": "string",
                        },
                        "unique": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "usePartialFilter": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "name",
                        "type",
                        "field",
                        "unique",
                      ],
                      "type": "object",
                    },
                  },
                  "if": Object {
                    "properties": Object {
                      "type": Object {
                        "const": "geo",
                        "type": "string",
                      },
                    },
                    "type": "object",
                  },
                  "then": Object {
                    "properties": Object {
                      "description": Object {
                        "type": "string",
                      },
                      "field": Object {
                        "pattern": "^_?[ \\\\w-]+(\\\\.[\\\\w-]+|(\\\\.\\\\$\\\\*\\\\*))*$|^(\\\\$\\\\*\\\\*)$",
                        "type": "string",
                      },
                      "name": Object {
                        "pattern": "^[a-zA-Z_][\\\\w-]*$",
                        "type": "string",
                      },
                      "partialFilterExpression": Object {
                        "type": "string",
                      },
                      "type": Object {
                        "const": "geo",
                        "type": "string",
                      },
                      "unique": Object {
                        "type": "boolean",
                      },
                      "usePartialFilter": Object {
                        "type": "boolean",
                      },
                    },
                    "required": Array [
                      "name",
                      "type",
                      "unique",
                      "field",
                    ],
                    "type": "object",
                  },
                },
                "if": Object {
                  "properties": Object {
                    "type": Object {
                      "const": "normal",
                      "type": "string",
                    },
                  },
                  "type": "object",
                },
                "then": Object {
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "fields": Object {
                      "items": Object {
                        "properties": Object {
                          "name": Object {
                            "pattern": "^_?[ \\\\w-]+(\\\\.[\\\\w-]+|(\\\\.\\\\$\\\\*\\\\*))*$|^(\\\\$\\\\*\\\\*)$",
                            "type": "string",
                          },
                          "order": Object {
                            "enum": Array [
                              1,
                              -1,
                            ],
                            "type": "number",
                          },
                        },
                        "required": Array [
                          "name",
                          "order",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "name": Object {
                      "pattern": "^[a-zA-Z_][\\\\w-]*$",
                      "type": "string",
                    },
                    "partialFilterExpression": Object {
                      "type": "string",
                    },
                    "type": Object {
                      "const": "normal",
                      "type": "string",
                    },
                    "unique": Object {
                      "type": "boolean",
                    },
                    "usePartialFilter": Object {
                      "type": "boolean",
                    },
                  },
                  "required": Array [
                    "name",
                    "type",
                    "unique",
                    "fields",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "type": "array",
            },
            "internalEndpoints": Object {
              "items": Object {
                "additionalProperties": false,
                "properties": Object {
                  "basePath": Object {
                    "type": "string",
                  },
                  "defaultSortingIndex": Object {
                    "type": "string",
                  },
                  "defaultState": Object {
                    "default": "DRAFT",
                    "enum": Array [
                      "DRAFT",
                      "PUBLIC",
                    ],
                    "type": "string",
                  },
                },
                "required": Array [
                  "defaultState",
                  "basePath",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "name": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "owners": Object {
              "items": Object {
                "additionalProperties": true,
                "properties": Object {
                  "owner": Object {
                    "type": "string",
                  },
                },
                "required": Array [
                  "owner",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "tags": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
            "type": Object {
              "const": "collection",
              "type": "string",
            },
          },
          "required": Array [
            "id",
            "name",
            "fields",
            "internalEndpoints",
            "type",
            "indexes",
          ],
          "type": "object",
        },
        "if": Object {
          "properties": Object {
            "type": Object {
              "const": "view",
              "type": "string",
            },
          },
          "type": "object",
        },
        "then": Object {
          "additionalProperties": false,
          "properties": Object {
            "description": Object {
              "type": "string",
            },
            "enableLookup": Object {
              "type": "boolean",
            },
            "fields": Object {
              "items": Object {
                "else": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "encryptionEnabled": Object {
                      "type": "boolean",
                    },
                    "encryptionSearchable": Object {
                      "type": "boolean",
                    },
                    "name": Object {
                      "pattern": "^[^$\\\\.]+$",
                      "type": "string",
                    },
                    "nullable": Object {
                      "type": "boolean",
                    },
                    "required": Object {
                      "type": "boolean",
                    },
                    "sensitivityDescription": Object {
                      "type": "string",
                    },
                    "sensitivityValue": Object {
                      "maximum": 4,
                      "minimum": 0,
                      "type": "number",
                    },
                    "type": Object {
                      "enum": Array [
                        "string",
                        "number",
                        "boolean",
                        "Date",
                        "GeoPoint",
                        "RawObject",
                        "Array_string",
                        "Array_number",
                        "Array_RawObject",
                        "ObjectId",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "type",
                    "required",
                    "nullable",
                  ],
                  "type": "object",
                },
                "if": Object {
                  "properties": Object {
                    "type": Object {
                      "enum": Array [
                        "RawObject",
                        "Array_RawObject",
                      ],
                    },
                  },
                  "type": "object",
                },
                "then": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "encryptionEnabled": Object {
                      "type": "boolean",
                    },
                    "encryptionSearchable": Object {
                      "type": "boolean",
                    },
                    "name": Object {
                      "pattern": "^[^$\\\\.]+$",
                      "type": "string",
                    },
                    "nullable": Object {
                      "type": "boolean",
                    },
                    "required": Object {
                      "type": "boolean",
                    },
                    "schema": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "additionalProperties": Object {
                          "type": "boolean",
                        },
                        "encryption": Object {
                          "properties": Object {
                            "enabled": Object {
                              "type": "boolean",
                            },
                            "searchable": Object {
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "properties": Object {
                          "additionalProperties": true,
                          "type": "object",
                        },
                        "required": Object {
                          "items": Object {
                            "type": "string",
                          },
                          "type": "array",
                        },
                        "type": Object {
                          "enum": Array [
                            "object",
                          ],
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "sensitivityDescription": Object {
                      "type": "string",
                    },
                    "sensitivityValue": Object {
                      "maximum": 4,
                      "minimum": 0,
                      "type": "number",
                    },
                    "type": Object {
                      "enum": Array [
                        "string",
                        "number",
                        "boolean",
                        "Date",
                        "GeoPoint",
                        "RawObject",
                        "Array_string",
                        "Array_number",
                        "Array_RawObject",
                        "ObjectId",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "type",
                    "required",
                    "nullable",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "type": "array",
            },
            "hidden": Object {
              "type": "boolean",
            },
            "id": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "internalEndpoints": Object {
              "items": Object {
                "additionalProperties": false,
                "properties": Object {
                  "basePath": Object {
                    "type": "string",
                  },
                  "defaultSortingIndex": Object {
                    "type": "string",
                  },
                  "defaultState": Object {
                    "default": "DRAFT",
                    "enum": Array [
                      "DRAFT",
                      "PUBLIC",
                    ],
                    "type": "string",
                  },
                },
                "required": Array [
                  "defaultState",
                  "basePath",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "name": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "owners": Object {
              "items": Object {
                "additionalProperties": true,
                "properties": Object {
                  "owner": Object {
                    "type": "string",
                  },
                },
                "required": Array [
                  "owner",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "pipeline": Object {
              "anyOf": Array [
                Object {
                  "items": Object {
                    "additionalProperties": true,
                    "type": "object",
                  },
                  "type": "array",
                },
                Object {
                  "type": "string",
                },
              ],
            },
            "source": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "tags": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
            "type": Object {
              "const": "view",
              "type": "string",
            },
          },
          "required": Array [
            "id",
            "name",
            "fields",
            "internalEndpoints",
            "type",
            "pipeline",
            "source",
          ],
          "type": "object",
        },
        "type": "object",
      },
      "default": Object {},
      "type": "object",
    },
    "commitId": Object {
      "type": "string",
    },
    "committedDate": Object {
      "type": "string",
    },
    "configMaps": Object {
      "patternProperties": Object {
        "^[a-z][a-z0-9]*(-[a-z0-9]+)*$": Object {
          "additionalProperties": false,
          "properties": Object {
            "deleted": Object {
              "type": "boolean",
            },
            "files": Object {
              "items": Object {
                "additionalProperties": false,
                "properties": Object {
                  "content": Object {
                    "type": "string",
                  },
                  "deleted": Object {
                    "type": "boolean",
                  },
                  "name": Object {
                    "pattern": "^[-._a-zA-Z0-9]+$",
                    "type": "string",
                    "x-validation-error-id": "configMapFileName.patternError",
                  },
                },
                "required": Array [
                  "name",
                  "content",
                ],
                "type": "object",
              },
              "type": "array",
            },
            "gitFilesFolder": Object {
              "description": "folder on git inside /config-maps where to save the files",
              "type": "string",
            },
            "name": Object {
              "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
              "type": "string",
              "x-validation-error-id": "resourceName.patternError",
            },
            "path": Object {
              "pattern": "^[^\\\\/]",
              "type": "string",
            },
          },
          "required": Array [
            "name",
            "files",
          ],
          "type": "object",
        },
      },
      "type": "object",
    },
    "decorators": Object {
      "default": Object {},
      "properties": Object {
        "postDecorators": Object {
          "additionalProperties": Object {
            "additionalProperties": false,
            "properties": Object {
              "description": Object {
                "type": "string",
              },
              "isCatchDecorator": Object {
                "default": false,
                "type": "boolean",
              },
              "name": Object {
                "type": "string",
              },
              "path": Object {
                "pattern": "^(\\\\/$|(\\\\/([a-z]|(:[a-z])|\\\\$[0-9])[a-zA-Z0-9-_]*)+)$",
                "type": "string",
              },
              "port": Object {
                "maximum": 65535,
                "minimum": 0,
                "type": "integer",
              },
              "protocol": Object {
                "enum": Array [
                  "http:",
                ],
                "type": "string",
              },
              "requireRequestBody": Object {
                "type": "boolean",
              },
              "requireResponseBody": Object {
                "type": "boolean",
              },
              "service": Object {
                "type": "string",
              },
            },
            "required": Array [
              "name",
              "protocol",
              "service",
              "port",
              "path",
              "requireRequestBody",
              "requireResponseBody",
            ],
            "type": "object",
          },
          "default": Object {},
          "type": "object",
        },
        "preDecorators": Object {
          "additionalProperties": Object {
            "additionalProperties": false,
            "properties": Object {
              "description": Object {
                "type": "string",
              },
              "name": Object {
                "type": "string",
              },
              "path": Object {
                "pattern": "^(\\\\/$|(\\\\/([a-z]|(:[a-z])|\\\\$[0-9])[a-zA-Z0-9-_]*)+)$",
                "type": "string",
              },
              "port": Object {
                "maximum": 65535,
                "minimum": 0,
                "type": "integer",
              },
              "protocol": Object {
                "enum": Array [
                  "http:",
                ],
                "type": "string",
              },
              "requireRequestBody": Object {
                "type": "boolean",
              },
              "service": Object {
                "type": "string",
              },
            },
            "required": Array [
              "name",
              "protocol",
              "service",
              "port",
              "path",
              "requireRequestBody",
            ],
            "type": "object",
          },
          "default": Object {},
          "type": "object",
        },
      },
      "type": "object",
    },
    "endpoints": Object {
      "additionalProperties": Object {
        "else": Object {
          "else": Object {
            "else": Object {
              "if": Object {
                "properties": Object {
                  "type": Object {
                    "const": "fast-data-single-view",
                    "type": "string",
                  },
                },
                "type": "object",
              },
              "then": Object {
                "properties": Object {
                  "acl": Object {
                    "type": "string",
                  },
                  "allowUnknownRequestContentType": Object {
                    "default": false,
                    "type": "boolean",
                  },
                  "allowUnknownResponseContentType": Object {
                    "default": false,
                    "type": "boolean",
                  },
                  "backofficeAcl": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "basePath": Object {
                    "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                    "type": "string",
                  },
                  "description": Object {
                    "type": "string",
                  },
                  "forceMicroserviceGatewayProxy": Object {
                    "default": false,
                    "type": "boolean",
                  },
                  "internalEndpoint": Object {
                    "type": "string",
                  },
                  "listeners": Object {
                    "additionalProperties": Object {
                      "type": "boolean",
                    },
                    "type": "object",
                  },
                  "pathName": Object {
                    "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$",
                    "type": "string",
                  },
                  "pathRewrite": Object {
                    "type": "string",
                  },
                  "public": Object {
                    "type": "boolean",
                  },
                  "rateLimit": Object {
                    "properties": Object {
                      "requestsPerSecond": Object {
                        "description": "The number of request that can be made each second",
                        "type": "integer",
                      },
                    },
                    "type": "object",
                  },
                  "requestBody": Object {
                    "properties": Object {
                      "maxSizeMB": Object {
                        "description": "Maximum size of the request body",
                        "type": "number",
                      },
                    },
                    "type": "object",
                  },
                  "routes": Object {
                    "additionalProperties": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "acl": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "string",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "allowUnknownRequestContentType": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "allowUnknownResponseContentType": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "backofficeAcl": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "string",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "catchDecorator": Object {
                          "type": "string",
                        },
                        "id": Object {
                          "type": "string",
                        },
                        "path": Object {
                          "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$",
                          "type": "string",
                        },
                        "postDecorators": Object {
                          "default": Array [],
                          "items": Object {
                            "type": "string",
                          },
                          "type": "array",
                        },
                        "preDecorators": Object {
                          "default": Array [],
                          "items": Object {
                            "type": "string",
                          },
                          "type": "array",
                        },
                        "public": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "schema": Object {
                          "type": "object",
                        },
                        "secreted": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "showInDocumentation": Object {
                          "default": Object {
                            "inherited": true,
                          },
                          "else": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": true,
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                            ],
                            "type": "object",
                          },
                          "if": Object {
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "inherited": Object {
                                "const": false,
                                "type": "boolean",
                              },
                              "value": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "inherited",
                              "value",
                            ],
                            "type": "object",
                          },
                          "type": "object",
                        },
                        "verb": Object {
                          "enum": Array [
                            "GET",
                            "POST",
                            "PUT",
                            "PATCH",
                            "DELETE",
                          ],
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "id",
                        "path",
                        "acl",
                        "backofficeAcl",
                        "public",
                        "secreted",
                        "showInDocumentation",
                        "verb",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "secreted": Object {
                    "type": "boolean",
                  },
                  "showInDocumentation": Object {
                    "type": "boolean",
                  },
                  "tags": Object {
                    "items": Object {
                      "type": "string",
                    },
                    "type": "array",
                  },
                  "timeout": Object {
                    "properties": Object {
                      "readSeconds": Object {
                        "description": "The number of seconds to wait before the request is rejected",
                        "type": "number",
                      },
                    },
                    "type": "object",
                  },
                  "type": Object {
                    "const": "fast-data-single-view",
                    "type": "string",
                  },
                },
                "required": Array [
                  "internalEndpoint",
                  "routes",
                  "pathName",
                  "basePath",
                  "type",
                  "public",
                  "secreted",
                  "showInDocumentation",
                  "acl",
                ],
                "type": "object",
              },
            },
            "if": Object {
              "properties": Object {
                "type": Object {
                  "const": "fast-data-projection",
                  "type": "string",
                },
              },
              "type": "object",
            },
            "then": Object {
              "properties": Object {
                "acl": Object {
                  "type": "string",
                },
                "allowUnknownRequestContentType": Object {
                  "default": false,
                  "type": "boolean",
                },
                "allowUnknownResponseContentType": Object {
                  "default": false,
                  "type": "boolean",
                },
                "backofficeAcl": Object {
                  "default": Object {
                    "inherited": true,
                  },
                  "else": Object {
                    "additionalProperties": false,
                    "properties": Object {
                      "inherited": Object {
                        "const": true,
                        "type": "boolean",
                      },
                    },
                    "required": Array [
                      "inherited",
                    ],
                    "type": "object",
                  },
                  "if": Object {
                    "properties": Object {
                      "inherited": Object {
                        "const": false,
                        "type": "boolean",
                      },
                    },
                    "type": "object",
                  },
                  "then": Object {
                    "additionalProperties": false,
                    "properties": Object {
                      "inherited": Object {
                        "const": false,
                        "type": "boolean",
                      },
                      "value": Object {
                        "type": "string",
                      },
                    },
                    "required": Array [
                      "inherited",
                      "value",
                    ],
                    "type": "object",
                  },
                  "type": "object",
                },
                "basePath": Object {
                  "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                  "type": "string",
                },
                "description": Object {
                  "type": "string",
                },
                "forceMicroserviceGatewayProxy": Object {
                  "default": false,
                  "type": "boolean",
                },
                "listeners": Object {
                  "additionalProperties": Object {
                    "type": "boolean",
                  },
                  "type": "object",
                },
                "pathName": Object {
                  "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$",
                  "type": "string",
                },
                "pathRewrite": Object {
                  "type": "string",
                },
                "projectionId": Object {
                  "type": "string",
                },
                "public": Object {
                  "type": "boolean",
                },
                "rateLimit": Object {
                  "properties": Object {
                    "requestsPerSecond": Object {
                      "description": "The number of request that can be made each second",
                      "type": "integer",
                    },
                  },
                  "type": "object",
                },
                "requestBody": Object {
                  "properties": Object {
                    "maxSizeMB": Object {
                      "description": "Maximum size of the request body",
                      "type": "number",
                    },
                  },
                  "type": "object",
                },
                "routes": Object {
                  "additionalProperties": Object {
                    "additionalProperties": false,
                    "properties": Object {
                      "acl": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "string",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "allowUnknownRequestContentType": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "allowUnknownResponseContentType": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "backofficeAcl": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "string",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "catchDecorator": Object {
                        "type": "string",
                      },
                      "id": Object {
                        "type": "string",
                      },
                      "path": Object {
                        "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$",
                        "type": "string",
                      },
                      "postDecorators": Object {
                        "default": Array [],
                        "items": Object {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "preDecorators": Object {
                        "default": Array [],
                        "items": Object {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "public": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "schema": Object {
                        "type": "object",
                      },
                      "secreted": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "showInDocumentation": Object {
                        "default": Object {
                          "inherited": true,
                        },
                        "else": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": true,
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                          ],
                          "type": "object",
                        },
                        "if": Object {
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "inherited": Object {
                              "const": false,
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "boolean",
                            },
                          },
                          "required": Array [
                            "inherited",
                            "value",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "verb": Object {
                        "enum": Array [
                          "GET",
                          "POST",
                          "PUT",
                          "PATCH",
                          "DELETE",
                        ],
                        "type": "string",
                      },
                    },
                    "required": Array [
                      "id",
                      "path",
                      "acl",
                      "backofficeAcl",
                      "public",
                      "secreted",
                      "showInDocumentation",
                      "verb",
                    ],
                    "type": "object",
                  },
                  "type": "object",
                },
                "secreted": Object {
                  "type": "boolean",
                },
                "showInDocumentation": Object {
                  "type": "boolean",
                },
                "tags": Object {
                  "items": Object {
                    "type": "string",
                  },
                  "type": "array",
                },
                "timeout": Object {
                  "properties": Object {
                    "readSeconds": Object {
                      "description": "The number of seconds to wait before the request is rejected",
                      "type": "number",
                    },
                  },
                  "type": "object",
                },
                "type": Object {
                  "const": "fast-data-projection",
                  "type": "string",
                },
              },
              "required": Array [
                "projectionId",
                "routes",
                "pathName",
                "basePath",
                "type",
                "public",
                "secreted",
                "showInDocumentation",
                "acl",
              ],
              "type": "object",
            },
          },
          "if": Object {
            "properties": Object {
              "type": Object {
                "enum": Array [
                  "external",
                  "custom",
                  "cross-projects",
                ],
                "type": "string",
              },
            },
            "type": "object",
          },
          "then": Object {
            "properties": Object {
              "acl": Object {
                "type": "string",
              },
              "allowUnknownRequestContentType": Object {
                "default": false,
                "type": "boolean",
              },
              "allowUnknownResponseContentType": Object {
                "default": false,
                "type": "boolean",
              },
              "backofficeAcl": Object {
                "default": Object {
                  "inherited": true,
                },
                "else": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "inherited": Object {
                      "const": true,
                      "type": "boolean",
                    },
                  },
                  "required": Array [
                    "inherited",
                  ],
                  "type": "object",
                },
                "if": Object {
                  "properties": Object {
                    "inherited": Object {
                      "const": false,
                      "type": "boolean",
                    },
                  },
                  "type": "object",
                },
                "then": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "inherited": Object {
                      "const": false,
                      "type": "boolean",
                    },
                    "value": Object {
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "inherited",
                    "value",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "basePath": Object {
                "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                "type": "string",
              },
              "description": Object {
                "type": "string",
              },
              "forceMicroserviceGatewayProxy": Object {
                "default": false,
                "type": "boolean",
              },
              "listeners": Object {
                "additionalProperties": Object {
                  "type": "boolean",
                },
                "type": "object",
              },
              "pathRewrite": Object {
                "type": "string",
              },
              "public": Object {
                "type": "boolean",
              },
              "rateLimit": Object {
                "properties": Object {
                  "requestsPerSecond": Object {
                    "description": "The number of request that can be made each second",
                    "type": "integer",
                  },
                },
                "type": "object",
              },
              "requestBody": Object {
                "properties": Object {
                  "maxSizeMB": Object {
                    "description": "Maximum size of the request body",
                    "type": "number",
                  },
                },
                "type": "object",
              },
              "routes": Object {
                "additionalProperties": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "acl": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "allowUnknownRequestContentType": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "allowUnknownResponseContentType": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "backofficeAcl": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "catchDecorator": Object {
                      "type": "string",
                    },
                    "id": Object {
                      "type": "string",
                    },
                    "path": Object {
                      "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$",
                      "type": "string",
                    },
                    "postDecorators": Object {
                      "default": Array [],
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "preDecorators": Object {
                      "default": Array [],
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "public": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "schema": Object {
                      "type": "object",
                    },
                    "secreted": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "showInDocumentation": Object {
                      "default": Object {
                        "inherited": true,
                      },
                      "else": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": true,
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                        ],
                        "type": "object",
                      },
                      "if": Object {
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "inherited": Object {
                            "const": false,
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "inherited",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "verb": Object {
                      "enum": Array [
                        "GET",
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "id",
                    "path",
                    "acl",
                    "backofficeAcl",
                    "public",
                    "secreted",
                    "showInDocumentation",
                    "verb",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "secreted": Object {
                "type": "boolean",
              },
              "service": Object {
                "minLength": 1,
                "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                "type": "string",
                "x-validation-error-id": "resourceName.patternError",
              },
              "showInDocumentation": Object {
                "type": "boolean",
              },
              "tags": Object {
                "items": Object {
                  "type": "string",
                },
                "type": "array",
              },
              "timeout": Object {
                "properties": Object {
                  "readSeconds": Object {
                    "description": "The number of seconds to wait before the request is rejected",
                    "type": "number",
                  },
                },
                "type": "object",
              },
              "type": Object {
                "enum": Array [
                  "external",
                  "custom",
                  "cross-projects",
                ],
                "type": "string",
              },
            },
            "required": Array [
              "service",
              "basePath",
              "type",
              "public",
              "secreted",
              "showInDocumentation",
              "acl",
            ],
            "type": "object",
          },
        },
        "if": Object {
          "properties": Object {
            "type": Object {
              "enum": Array [
                "crud",
                "view",
              ],
              "type": "string",
            },
          },
          "type": "object",
        },
        "then": Object {
          "properties": Object {
            "acl": Object {
              "type": "string",
            },
            "allowUnknownRequestContentType": Object {
              "default": false,
              "type": "boolean",
            },
            "allowUnknownResponseContentType": Object {
              "default": false,
              "type": "boolean",
            },
            "backofficeAcl": Object {
              "default": Object {
                "inherited": true,
              },
              "else": Object {
                "additionalProperties": false,
                "properties": Object {
                  "inherited": Object {
                    "const": true,
                    "type": "boolean",
                  },
                },
                "required": Array [
                  "inherited",
                ],
                "type": "object",
              },
              "if": Object {
                "properties": Object {
                  "inherited": Object {
                    "const": false,
                    "type": "boolean",
                  },
                },
                "type": "object",
              },
              "then": Object {
                "additionalProperties": false,
                "properties": Object {
                  "inherited": Object {
                    "const": false,
                    "type": "boolean",
                  },
                  "value": Object {
                    "type": "string",
                  },
                },
                "required": Array [
                  "inherited",
                  "value",
                ],
                "type": "object",
              },
              "type": "object",
            },
            "basePath": Object {
              "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
              "type": "string",
            },
            "collectionId": Object {
              "maxLength": 80,
              "pattern": "(^[\\\\w-]+$)",
              "type": "string",
              "x-validation-error-id": "collectionName.patternError",
            },
            "description": Object {
              "type": "string",
            },
            "forceMicroserviceGatewayProxy": Object {
              "default": false,
              "type": "boolean",
            },
            "listeners": Object {
              "additionalProperties": Object {
                "type": "boolean",
              },
              "type": "object",
            },
            "pathName": Object {
              "pattern": "^\\\\/(([\\\\w\\\\-:])\\\\/?)*$",
              "type": "string",
            },
            "pathRewrite": Object {
              "type": "string",
            },
            "public": Object {
              "type": "boolean",
            },
            "rateLimit": Object {
              "properties": Object {
                "requestsPerSecond": Object {
                  "description": "The number of request that can be made each second",
                  "type": "integer",
                },
              },
              "type": "object",
            },
            "requestBody": Object {
              "properties": Object {
                "maxSizeMB": Object {
                  "description": "Maximum size of the request body",
                  "type": "number",
                },
              },
              "type": "object",
            },
            "routes": Object {
              "additionalProperties": Object {
                "additionalProperties": false,
                "properties": Object {
                  "acl": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "allowUnknownRequestContentType": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "allowUnknownResponseContentType": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "backofficeAcl": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "catchDecorator": Object {
                    "type": "string",
                  },
                  "id": Object {
                    "type": "string",
                  },
                  "path": Object {
                    "pattern": "^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*\\\\/?)+)$",
                    "type": "string",
                  },
                  "postDecorators": Object {
                    "default": Array [],
                    "items": Object {
                      "type": "string",
                    },
                    "type": "array",
                  },
                  "preDecorators": Object {
                    "default": Array [],
                    "items": Object {
                      "type": "string",
                    },
                    "type": "array",
                  },
                  "public": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "schema": Object {
                    "type": "object",
                  },
                  "secreted": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "showInDocumentation": Object {
                    "default": Object {
                      "inherited": true,
                    },
                    "else": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": true,
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                      ],
                      "type": "object",
                    },
                    "if": Object {
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "inherited": Object {
                          "const": false,
                          "type": "boolean",
                        },
                        "value": Object {
                          "type": "boolean",
                        },
                      },
                      "required": Array [
                        "inherited",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "object",
                  },
                  "verb": Object {
                    "enum": Array [
                      "GET",
                      "POST",
                      "PUT",
                      "PATCH",
                      "DELETE",
                    ],
                    "type": "string",
                  },
                },
                "required": Array [
                  "id",
                  "path",
                  "acl",
                  "backofficeAcl",
                  "public",
                  "secreted",
                  "showInDocumentation",
                  "verb",
                ],
                "type": "object",
              },
              "type": "object",
            },
            "secreted": Object {
              "type": "boolean",
            },
            "showInDocumentation": Object {
              "type": "boolean",
            },
            "tags": Object {
              "items": Object {
                "type": "string",
              },
              "type": "array",
            },
            "timeout": Object {
              "properties": Object {
                "readSeconds": Object {
                  "description": "The number of seconds to wait before the request is rejected",
                  "type": "number",
                },
              },
              "type": "object",
            },
            "type": Object {
              "enum": Array [
                "crud",
                "view",
              ],
              "type": "string",
            },
          },
          "required": Array [
            "routes",
            "collectionId",
            "pathName",
            "basePath",
            "type",
            "public",
            "secreted",
            "showInDocumentation",
            "acl",
          ],
          "type": "object",
        },
        "type": "object",
      },
      "default": Object {},
      "type": "object",
    },
    "groups": Object {
      "default": Array [],
      "type": "array",
    },
    "lastCommitAuthor": Object {
      "type": "string",
    },
    "lastConfigFileCommitId": Object {
      "type": "string",
    },
    "listeners": Object {
      "additionalProperties": Object {
        "additionalProperties": false,
        "properties": Object {
          "description": Object {
            "type": "string",
          },
          "name": Object {
            "type": "string",
          },
          "port": Object {
            "else": Object {
              "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
              "type": "string",
            },
            "if": Object {
              "type": "number",
            },
            "then": Object {
              "maximum": 65535,
              "minimum": 0,
              "type": "integer",
            },
          },
          "readonly": Object {
            "type": "boolean",
          },
          "selectedByDefault": Object {
            "type": "boolean",
          },
        },
        "required": Array [
          "name",
          "port",
        ],
        "type": "object",
      },
      "type": "object",
    },
    "platformVersion": Object {
      "type": "string",
    },
    "secrets": Object {
      "default": Array [],
      "items": Object {
        "additionalProperties": false,
        "properties": Object {
          "active": Object {
            "type": "boolean",
          },
          "clientType": Object {
            "pattern": "^[a-zA-Z_][A-Za-z0-9_]*$",
            "type": "string",
            "x-validation-error-id": "clientType.patternError",
          },
          "description": Object {
            "type": "string",
          },
          "secret": Object {
            "minLength": 1,
            "pattern": "^[^\\\\s]+$",
            "type": "string",
            "x-validation-error-id": "apiKey.patternError",
          },
        },
        "required": Array [
          "secret",
          "active",
          "clientType",
        ],
        "type": "object",
      },
      "type": "array",
    },
    "services": Object {
      "additionalProperties": false,
      "default": Object {},
      "patternProperties": Object {
        "^[a-z]([-a-z0-9]*[a-z0-9])?$": Object {
          "else": Object {
            "else": Object {
              "else": Object {
                "else": Object {
                  "else": Object {
                    "else": Object {
                      "else": false,
                      "if": Object {
                        "properties": Object {
                          "type": Object {
                            "const": "custom-resource",
                            "type": "string",
                          },
                        },
                        "type": "object",
                      },
                      "then": Object {
                        "properties": Object {
                          "description": Object {
                            "type": "string",
                          },
                          "generatedFrom": Object {
                            "properties": Object {
                              "_id": Object {
                                "type": "string",
                              },
                            },
                            "type": "object",
                          },
                          "meta": Object {
                            "properties": Object {
                              "apiVersion": Object {
                                "type": "string",
                              },
                              "kind": Object {
                                "type": "string",
                              },
                            },
                            "required": Array [
                              "kind",
                              "apiVersion",
                            ],
                            "type": "object",
                          },
                          "name": Object {
                            "minLength": 1,
                            "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                            "type": "string",
                            "x-validation-error-id": "resourceName.patternError",
                          },
                          "spec": Object {
                            "additionalProperties": true,
                            "type": "object",
                          },
                          "type": Object {
                            "const": "custom-resource",
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "name",
                          "type",
                        ],
                        "type": "object",
                      },
                    },
                    "if": Object {
                      "properties": Object {
                        "advanced": Object {
                          "const": true,
                          "type": "boolean",
                        },
                        "type": Object {
                          "const": "cronjob",
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "advanced": Object {
                          "const": true,
                          "type": "boolean",
                        },
                        "configMaps": Object {
                          "items": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "link": Object {
                                "properties": Object {
                                  "targetSection": Object {
                                    "type": "string",
                                  },
                                },
                                "type": "object",
                              },
                              "mountPath": Object {
                                "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                                "type": "string",
                                "x-validation-error-id": "configMountPath.patternError",
                              },
                              "name": Object {
                                "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                                "type": "string",
                                "x-validation-error-id": "resourceName.patternError",
                              },
                              "subPaths": Object {
                                "items": Object {
                                  "type": "string",
                                },
                                "type": "array",
                              },
                              "viewAsReadOnly": Object {
                                "type": "boolean",
                              },
                            },
                            "required": Array [
                              "name",
                              "mountPath",
                            ],
                            "type": "object",
                          },
                          "type": "array",
                        },
                        "description": Object {
                          "type": "string",
                        },
                        "files": Object {
                          "items": Object {
                            "additionalProperties": true,
                            "properties": Object {
                              "content": Object {
                                "type": "string",
                              },
                              "deleted": Object {
                                "type": "boolean",
                              },
                              "kind": Object {
                                "const": "cronjob",
                                "type": "string",
                              },
                              "lastCommitId": Object {
                                "type": "string",
                              },
                              "name": Object {
                                "type": "string",
                              },
                              "path": Object {
                                "pattern": "^\\\\/?(([a-z0-9_\\\\-:.])\\\\/?)*$",
                                "type": "string",
                              },
                            },
                            "required": Array [
                              "name",
                              "path",
                              "content",
                            ],
                            "type": "object",
                          },
                          "type": "array",
                        },
                        "name": Object {
                          "minLength": 1,
                          "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                          "type": "string",
                          "x-validation-error-id": "resourceName.patternError",
                        },
                        "secrets": Object {
                          "items": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "mountPath": Object {
                                "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                                "type": "string",
                                "x-validation-error-id": "configMountPath.patternError",
                              },
                              "name": Object {
                                "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                                "type": "string",
                                "x-validation-error-id": "resourceName.patternError",
                              },
                            },
                            "type": "object",
                          },
                          "type": "array",
                        },
                        "type": Object {
                          "const": "cronjob",
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                        "advanced",
                        "type",
                        "files",
                      ],
                      "type": "object",
                    },
                  },
                  "if": Object {
                    "properties": Object {
                      "type": Object {
                        "const": "core",
                        "type": "string",
                      },
                    },
                    "type": "object",
                  },
                  "then": Object {
                    "properties": Object {
                      "description": Object {
                        "type": "string",
                      },
                      "name": Object {
                        "minLength": 1,
                        "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                        "type": "string",
                        "x-validation-error-id": "resourceName.patternError",
                      },
                      "productionReplicas": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "cpuThreshold": Object {
                            "type": "string",
                          },
                          "deleted": Object {
                            "type": "boolean",
                          },
                          "generate": Object {
                            "type": "boolean",
                          },
                          "max": Object {
                            "type": "string",
                          },
                          "min": Object {
                            "type": "string",
                          },
                        },
                        "type": "object",
                      },
                      "resources": Object {
                        "properties": Object {
                          "cpuLimits": Object {
                            "properties": Object {
                              "max": Object {
                                "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                                "type": "string",
                              },
                              "min": Object {
                                "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                                "type": "string",
                              },
                            },
                            "type": "object",
                          },
                          "memoryLimits": Object {
                            "properties": Object {
                              "max": Object {
                                "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                                "type": "string",
                              },
                              "min": Object {
                                "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                                "type": "string",
                              },
                            },
                            "type": "object",
                          },
                        },
                        "type": "object",
                      },
                      "type": Object {
                        "const": "core",
                        "type": "string",
                      },
                      "version": Object {
                        "type": "string",
                      },
                    },
                    "required": Array [
                      "name",
                      "type",
                    ],
                    "type": "object",
                  },
                },
                "if": Object {
                  "properties": Object {
                    "type": Object {
                      "const": "cross-projects",
                      "type": "string",
                    },
                  },
                  "type": "object",
                },
                "then": Object {
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "host": Object {
                      "pattern": "^([-a-z0-9]+)\\\\.([-_{}a-z0-9A-Z]+)\\\\.svc\\\\.cluster\\\\.local(:([1-9]\\\\d{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$",
                      "type": "string",
                    },
                    "name": Object {
                      "minLength": 1,
                      "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                      "type": "string",
                      "x-validation-error-id": "resourceName.patternError",
                    },
                    "type": Object {
                      "const": "cross-projects",
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "host",
                    "type",
                  ],
                  "type": "object",
                },
              },
              "if": Object {
                "properties": Object {
                  "type": Object {
                    "const": "external",
                    "type": "string",
                  },
                },
                "type": "object",
              },
              "then": Object {
                "properties": Object {
                  "description": Object {
                    "type": "string",
                  },
                  "headers": Object {
                    "default": Array [],
                    "items": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "description": Object {
                          "type": "string",
                        },
                        "name": Object {
                          "type": "string",
                        },
                        "value": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                        "value",
                      ],
                      "type": "object",
                    },
                    "type": "array",
                  },
                  "name": Object {
                    "minLength": 1,
                    "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                    "type": "string",
                    "x-validation-error-id": "resourceName.patternError",
                  },
                  "type": Object {
                    "const": "external",
                    "type": "string",
                  },
                  "url": Object {
                    "pattern": "^https?:\\\\/\\\\/([^:\\\\/\\\\s]+)((:[0-9]{1,5})?(\\\\/.*)?)([^\\\\/:])\\\\/?$",
                    "type": "string",
                    "x-validation-error-id": "url.patternError",
                  },
                },
                "required": Array [
                  "name",
                  "url",
                  "type",
                ],
                "type": "object",
              },
            },
            "if": Object {
              "properties": Object {
                "advanced": Object {
                  "const": true,
                  "type": "boolean",
                },
                "type": Object {
                  "const": "custom",
                  "type": "string",
                },
              },
              "type": "object",
            },
            "then": Object {
              "additionalProperties": false,
              "properties": Object {
                "advanced": Object {
                  "const": true,
                  "type": "boolean",
                },
                "description": Object {
                  "type": "string",
                },
                "files": Object {
                  "default": Array [],
                  "items": Object {
                    "properties": Object {
                      "added": Object {
                        "type": "boolean",
                      },
                      "changed": Object {
                        "type": "boolean",
                      },
                      "content": Object {
                        "type": "string",
                      },
                      "deleted": Object {
                        "type": "boolean",
                      },
                      "description": Object {
                        "type": "string",
                      },
                      "kind": Object {
                        "enum": Array [
                          "configmap",
                          "deployment",
                          "service",
                        ],
                        "type": "string",
                      },
                      "lastCommitId": Object {
                        "type": "string",
                      },
                      "name": Object {
                        "type": "string",
                      },
                      "path": Object {
                        "pattern": "^\\\\/?(([a-z0-9_\\\\-:.])\\\\/?)*$",
                        "type": "string",
                      },
                    },
                    "required": Array [
                      "name",
                      "path",
                      "kind",
                    ],
                    "type": "object",
                  },
                  "type": "array",
                },
                "name": Object {
                  "minLength": 1,
                  "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                  "type": "string",
                  "x-validation-error-id": "resourceName.patternError",
                },
                "productionReplicas": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "cpuThreshold": Object {
                      "type": "string",
                    },
                    "deleted": Object {
                      "type": "boolean",
                    },
                    "generate": Object {
                      "type": "boolean",
                    },
                    "max": Object {
                      "type": "string",
                    },
                    "min": Object {
                      "type": "string",
                    },
                  },
                  "type": "object",
                },
                "repoUrl": Object {
                  "pattern": "^https?:\\\\/\\\\/([^:\\\\/\\\\s]+)((:[0-9]{1,5})?(\\\\/.*)?)([^\\\\/:])\\\\/?$",
                  "type": "string",
                  "x-validation-error-id": "url.patternError",
                },
                "sshUrl": Object {
                  "pattern": "^((git|ssh|http(s)?)|([\\\\w-]*@[\\\\w.=\\\\-]+))(:(\\\\/\\\\/)?)([\\\\w\\\\.@:\\\\/\\\\-~=]+)(.git)?(\\\\/)?$",
                  "type": "string",
                  "x-validation-error-id": "sshUrl.patternError",
                },
                "swaggerPath": Object {
                  "pattern": "^$|^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                  "type": "string",
                  "x-validation-error-id": "swaggerPath.patternError",
                },
                "tags": Object {
                  "items": Object {
                    "type": "string",
                  },
                  "type": "array",
                },
                "type": Object {
                  "const": "custom",
                  "type": "string",
                },
              },
              "required": Array [
                "name",
                "advanced",
                "type",
                "files",
              ],
              "type": "object",
            },
          },
          "if": Object {
            "properties": Object {
              "advanced": Object {
                "const": false,
                "type": "boolean",
              },
              "type": Object {
                "const": "custom",
                "type": "string",
              },
            },
            "type": "object",
          },
          "then": Object {
            "additionalProperties": false,
            "properties": Object {
              "additionalContainers": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "annotations": Object {
                      "items": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "description": Object {
                            "type": "string",
                          },
                          "name": Object {
                            "pattern": "^([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,253}[\\\\/])?([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,63}[a-zA-Z0-9]?)$",
                            "type": "string",
                            "x-validation-error-id": "kubernetesDefinition.patternError",
                          },
                          "readOnly": Object {
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "name",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "args": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "configMaps": Object {
                      "items": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "link": Object {
                            "properties": Object {
                              "targetSection": Object {
                                "type": "string",
                              },
                            },
                            "type": "object",
                          },
                          "mountPath": Object {
                            "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                            "type": "string",
                            "x-validation-error-id": "configMountPath.patternError",
                          },
                          "name": Object {
                            "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                            "type": "string",
                            "x-validation-error-id": "resourceName.patternError",
                          },
                          "subPaths": Object {
                            "items": Object {
                              "type": "string",
                            },
                            "type": "array",
                          },
                          "viewAsReadOnly": Object {
                            "type": "boolean",
                          },
                        },
                        "required": Array [
                          "name",
                          "mountPath",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "containerPorts": Object {
                      "items": Object {
                        "properties": Object {
                          "from": Object {
                            "else": Object {
                              "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
                              "type": "string",
                            },
                            "if": Object {
                              "type": "number",
                            },
                            "then": Object {
                              "maximum": 65535,
                              "minimum": 0,
                              "type": "integer",
                            },
                          },
                          "name": Object {
                            "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                            "type": "string",
                            "x-validation-error-id": "resourceName.patternError",
                          },
                          "protocol": Object {
                            "type": "string",
                          },
                          "to": Object {
                            "else": Object {
                              "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
                              "type": "string",
                            },
                            "if": Object {
                              "type": "number",
                            },
                            "then": Object {
                              "maximum": 65535,
                              "minimum": 0,
                              "type": "integer",
                            },
                          },
                        },
                        "required": Array [
                          "name",
                          "from",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "createdAt": Object {
                      "type": "string",
                    },
                    "description": Object {
                      "type": "string",
                    },
                    "dockerImage": Object {
                      "pattern": "^(?:[a-z0-9.\\\\-\\\\/:]+\\\\/)?([\\\\w.}{\\\\-\\\\/]+)(:[\\\\w.}{\\\\-]+)?$",
                      "type": "string",
                      "x-validation-error-id": "dockerImage.patternError",
                    },
                    "environment": Object {
                      "items": Object {
                        "else": Object {
                          "else": false,
                          "if": Object {
                            "properties": Object {
                              "valueType": Object {
                                "const": "secret",
                                "type": "string",
                              },
                            },
                            "type": "object",
                          },
                          "then": Object {
                            "additionalProperties": false,
                            "properties": Object {
                              "description": Object {
                                "type": "string",
                              },
                              "managedBy": Object {
                                "type": "string",
                              },
                              "name": Object {
                                "minLength": 1,
                                "type": "string",
                              },
                              "readOnly": Object {
                                "type": "boolean",
                              },
                              "secretKey": Object {
                                "pattern": "^[a-zA-Z0-9-_.]*$",
                                "type": "string",
                                "x-validation-error-id": "serviceSecretKey.patternError",
                              },
                              "secretName": Object {
                                "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                                "type": "string",
                                "x-validation-error-id": "resourceName.patternError",
                              },
                              "valueType": Object {
                                "const": "secret",
                                "type": "string",
                              },
                            },
                            "required": Array [
                              "name",
                              "secretName",
                              "secretKey",
                              "valueType",
                            ],
                            "type": "object",
                          },
                        },
                        "if": Object {
                          "properties": Object {
                            "valueType": Object {
                              "const": "plain",
                              "type": "string",
                            },
                          },
                          "type": "object",
                        },
                        "then": Object {
                          "additionalProperties": false,
                          "properties": Object {
                            "description": Object {
                              "type": "string",
                            },
                            "managedBy": Object {
                              "type": "string",
                            },
                            "name": Object {
                              "minLength": 1,
                              "type": "string",
                            },
                            "readOnly": Object {
                              "type": "boolean",
                            },
                            "value": Object {
                              "type": "string",
                            },
                            "valueType": Object {
                              "const": "plain",
                              "type": "string",
                            },
                          },
                          "required": Array [
                            "name",
                            "value",
                            "valueType",
                          ],
                          "type": "object",
                        },
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "exclusiveServiceExposure": Object {
                      "type": "boolean",
                    },
                    "execPreStop": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "generatedFrom": Object {
                      "properties": Object {
                        "_id": Object {
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "imagePullPolicy": Object {
                      "type": "string",
                    },
                    "labels": Object {
                      "items": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "description": Object {
                            "type": "string",
                          },
                          "name": Object {
                            "pattern": "^([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,253}[\\\\/])?([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,63}[a-zA-Z0-9]?)$",
                            "type": "string",
                            "x-validation-error-id": "kubernetesDefinition.patternError",
                          },
                          "readOnly": Object {
                            "type": "boolean",
                          },
                          "value": Object {
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "name",
                          "value",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "links": Object {
                      "items": Object {
                        "properties": Object {
                          "enableIf": Object {
                            "type": "string",
                          },
                          "label": Object {
                            "type": "string",
                          },
                          "targetSection": Object {
                            "type": "string",
                          },
                        },
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "mapEnvVarToMountPath": Object {
                      "additionalProperties": Object {
                        "properties": Object {
                          "envName": Object {
                            "type": "string",
                          },
                          "type": Object {
                            "enum": Array [
                              "file",
                              "folder",
                            ],
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "type",
                          "envName",
                        ],
                        "type": "object",
                      },
                      "type": "object",
                    },
                    "name": Object {
                      "minLength": 1,
                      "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                      "type": "string",
                      "x-validation-error-id": "resourceName.patternError",
                    },
                    "owners": Object {
                      "items": Object {
                        "additionalProperties": true,
                        "properties": Object {
                          "owner": Object {
                            "type": "string",
                          },
                        },
                        "required": Array [
                          "owner",
                        ],
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "probes": Object {
                      "properties": Object {
                        "liveness": Object {
                          "properties": Object {
                            "cmd": Object {
                              "items": Object {
                                "type": "string",
                              },
                              "type": "array",
                            },
                            "failureThreshold": Object {
                              "type": "number",
                            },
                            "initialDelaySeconds": Object {
                              "type": "number",
                            },
                            "path": Object {
                              "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                              "type": "string",
                              "x-validation-error-id": "probesPath.patternError",
                            },
                            "periodSeconds": Object {
                              "type": "number",
                            },
                            "port": Object {
                              "type": "string",
                            },
                            "successThreshold": Object {
                              "type": "number",
                            },
                            "timeoutSeconds": Object {
                              "type": "number",
                            },
                          },
                          "type": "object",
                        },
                        "readiness": Object {
                          "properties": Object {
                            "cmd": Object {
                              "items": Object {
                                "type": "string",
                              },
                              "type": "array",
                            },
                            "failureThreshold": Object {
                              "type": "number",
                            },
                            "initialDelaySeconds": Object {
                              "type": "number",
                            },
                            "path": Object {
                              "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                              "type": "string",
                              "x-validation-error-id": "probesPath.patternError",
                            },
                            "periodSeconds": Object {
                              "type": "number",
                            },
                            "port": Object {
                              "type": "string",
                            },
                            "successThreshold": Object {
                              "type": "number",
                            },
                            "timeoutSeconds": Object {
                              "type": "number",
                            },
                          },
                          "type": "object",
                        },
                        "startup": Object {
                          "properties": Object {
                            "cmd": Object {
                              "items": Object {
                                "type": "string",
                              },
                              "type": "array",
                            },
                            "failureThreshold": Object {
                              "type": "number",
                            },
                            "initialDelaySeconds": Object {
                              "type": "number",
                            },
                            "path": Object {
                              "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                              "type": "string",
                              "x-validation-error-id": "probesPath.patternError",
                            },
                            "periodSeconds": Object {
                              "type": "number",
                            },
                            "port": Object {
                              "type": "string",
                            },
                            "successThreshold": Object {
                              "type": "number",
                            },
                            "timeoutSeconds": Object {
                              "type": "number",
                            },
                          },
                          "type": "object",
                        },
                      },
                      "type": "object",
                    },
                    "repoUrl": Object {
                      "pattern": "^https?:\\\\/\\\\/([^:\\\\/\\\\s]+)((:[0-9]{1,5})?(\\\\/.*)?)([^\\\\/:])\\\\/?$",
                      "type": "string",
                      "x-validation-error-id": "url.patternError",
                    },
                    "resources": Object {
                      "properties": Object {
                        "cpuLimits": Object {
                          "properties": Object {
                            "max": Object {
                              "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                              "type": "string",
                            },
                            "min": Object {
                              "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                              "type": "string",
                            },
                          },
                          "type": "object",
                        },
                        "memoryLimits": Object {
                          "properties": Object {
                            "max": Object {
                              "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                              "type": "string",
                            },
                            "min": Object {
                              "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                              "type": "string",
                            },
                          },
                          "type": "object",
                        },
                      },
                      "type": "object",
                    },
                    "secrets": Object {
                      "items": Object {
                        "additionalProperties": false,
                        "properties": Object {
                          "mountPath": Object {
                            "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                            "type": "string",
                            "x-validation-error-id": "configMountPath.patternError",
                          },
                          "name": Object {
                            "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                            "type": "string",
                            "x-validation-error-id": "resourceName.patternError",
                          },
                        },
                        "type": "object",
                      },
                      "type": "array",
                    },
                    "sourceComponentId": Object {
                      "type": "string",
                    },
                    "sourceMarketplaceItem": Object {
                      "properties": Object {
                        "itemId": Object {
                          "type": "string",
                        },
                        "tenantId": Object {
                          "type": "string",
                        },
                        "version": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "itemId",
                        "version",
                        "tenantId",
                      ],
                      "type": "object",
                    },
                    "sshUrl": Object {
                      "pattern": "^((git|ssh|http(s)?)|([\\\\w-]*@[\\\\w.=\\\\-]+))(:(\\\\/\\\\/)?)([\\\\w\\\\.@:\\\\/\\\\-~=]+)(.git)?(\\\\/)?$",
                      "type": "string",
                      "x-validation-error-id": "sshUrl.patternError",
                    },
                    "swaggerPath": Object {
                      "pattern": "^$|^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                      "type": "string",
                      "x-validation-error-id": "swaggerPath.patternError",
                    },
                    "tags": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "terminationGracePeriodSeconds": Object {
                      "type": "number",
                    },
                  },
                  "required": Array [
                    "name",
                    "dockerImage",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "advanced": Object {
                "const": false,
                "type": "boolean",
              },
              "annotations": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "name": Object {
                      "pattern": "^([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,253}[\\\\/])?([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,63}[a-zA-Z0-9]?)$",
                      "type": "string",
                      "x-validation-error-id": "kubernetesDefinition.patternError",
                    },
                    "readOnly": Object {
                      "type": "boolean",
                    },
                    "value": Object {
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "value",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "args": Object {
                "items": Object {
                  "type": "string",
                },
                "type": "array",
              },
              "configMaps": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "link": Object {
                      "properties": Object {
                        "targetSection": Object {
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "mountPath": Object {
                      "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                      "type": "string",
                      "x-validation-error-id": "configMountPath.patternError",
                    },
                    "name": Object {
                      "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                      "type": "string",
                      "x-validation-error-id": "resourceName.patternError",
                    },
                    "subPaths": Object {
                      "items": Object {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "viewAsReadOnly": Object {
                      "type": "boolean",
                    },
                  },
                  "required": Array [
                    "name",
                    "mountPath",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "containerPorts": Object {
                "items": Object {
                  "properties": Object {
                    "from": Object {
                      "else": Object {
                        "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
                        "type": "string",
                      },
                      "if": Object {
                        "type": "number",
                      },
                      "then": Object {
                        "maximum": 65535,
                        "minimum": 0,
                        "type": "integer",
                      },
                    },
                    "name": Object {
                      "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                      "type": "string",
                      "x-validation-error-id": "resourceName.patternError",
                    },
                    "protocol": Object {
                      "type": "string",
                    },
                    "to": Object {
                      "else": Object {
                        "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
                        "type": "string",
                      },
                      "if": Object {
                        "type": "number",
                      },
                      "then": Object {
                        "maximum": 65535,
                        "minimum": 0,
                        "type": "integer",
                      },
                    },
                  },
                  "required": Array [
                    "name",
                    "from",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "createdAt": Object {
                "type": "string",
              },
              "description": Object {
                "type": "string",
              },
              "dockerImage": Object {
                "pattern": "^(?:[a-z0-9.\\\\-\\\\/:]+\\\\/)?([\\\\w.}{\\\\-\\\\/]+)(:[\\\\w.}{\\\\-]+)?$",
                "type": "string",
                "x-validation-error-id": "dockerImage.patternError",
              },
              "dockerImagePullSecrets": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "name": Object {
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "environment": Object {
                "items": Object {
                  "else": Object {
                    "else": false,
                    "if": Object {
                      "properties": Object {
                        "valueType": Object {
                          "const": "secret",
                          "type": "string",
                        },
                      },
                      "type": "object",
                    },
                    "then": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "description": Object {
                          "type": "string",
                        },
                        "managedBy": Object {
                          "type": "string",
                        },
                        "name": Object {
                          "minLength": 1,
                          "type": "string",
                        },
                        "readOnly": Object {
                          "type": "boolean",
                        },
                        "secretKey": Object {
                          "pattern": "^[a-zA-Z0-9-_.]*$",
                          "type": "string",
                          "x-validation-error-id": "serviceSecretKey.patternError",
                        },
                        "secretName": Object {
                          "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                          "type": "string",
                          "x-validation-error-id": "resourceName.patternError",
                        },
                        "valueType": Object {
                          "const": "secret",
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "name",
                        "secretName",
                        "secretKey",
                        "valueType",
                      ],
                      "type": "object",
                    },
                  },
                  "if": Object {
                    "properties": Object {
                      "valueType": Object {
                        "const": "plain",
                        "type": "string",
                      },
                    },
                    "type": "object",
                  },
                  "then": Object {
                    "additionalProperties": false,
                    "properties": Object {
                      "description": Object {
                        "type": "string",
                      },
                      "managedBy": Object {
                        "type": "string",
                      },
                      "name": Object {
                        "minLength": 1,
                        "type": "string",
                      },
                      "readOnly": Object {
                        "type": "boolean",
                      },
                      "value": Object {
                        "type": "string",
                      },
                      "valueType": Object {
                        "const": "plain",
                        "type": "string",
                      },
                    },
                    "required": Array [
                      "name",
                      "value",
                      "valueType",
                    ],
                    "type": "object",
                  },
                  "type": "object",
                },
                "type": "array",
              },
              "exclusiveServiceExposure": Object {
                "type": "boolean",
              },
              "execPreStop": Object {
                "items": Object {
                  "type": "string",
                },
                "type": "array",
              },
              "generatedFrom": Object {
                "properties": Object {
                  "_id": Object {
                    "type": "string",
                  },
                },
                "type": "object",
              },
              "imagePullPolicy": Object {
                "type": "string",
              },
              "labels": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "description": Object {
                      "type": "string",
                    },
                    "name": Object {
                      "pattern": "^([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,253}[\\\\/])?([a-zA-Z0-9][a-zA-Z0-9\\\\.\\\\-]{0,63}[a-zA-Z0-9]?)$",
                      "type": "string",
                      "x-validation-error-id": "kubernetesDefinition.patternError",
                    },
                    "readOnly": Object {
                      "type": "boolean",
                    },
                    "value": Object {
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "name",
                    "value",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "links": Object {
                "items": Object {
                  "properties": Object {
                    "enableIf": Object {
                      "type": "string",
                    },
                    "label": Object {
                      "type": "string",
                    },
                    "targetSection": Object {
                      "type": "string",
                    },
                  },
                  "type": "object",
                },
                "type": "array",
              },
              "logParser": Object {
                "type": "string",
              },
              "mapEnvVarToMountPath": Object {
                "additionalProperties": Object {
                  "properties": Object {
                    "envName": Object {
                      "type": "string",
                    },
                    "type": Object {
                      "enum": Array [
                        "file",
                        "folder",
                      ],
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "type",
                    "envName",
                  ],
                  "type": "object",
                },
                "type": "object",
              },
              "monitoring": Object {
                "additionalProperties": false,
                "properties": Object {
                  "deleted": Object {
                    "type": "boolean",
                  },
                  "endpoints": Object {
                    "items": Object {
                      "additionalProperties": false,
                      "properties": Object {
                        "interval": Object {
                          "pattern": "^(\\\\d)+[s]$",
                          "type": "string",
                        },
                        "path": Object {
                          "pattern": "^\\\\/(([\\\\w-])\\\\/?)*$",
                          "type": "string",
                        },
                        "port": Object {
                          "type": "string",
                        },
                      },
                      "required": Array [
                        "interval",
                        "port",
                        "path",
                      ],
                      "type": "object",
                    },
                    "type": "array",
                  },
                },
                "type": "object",
              },
              "name": Object {
                "minLength": 1,
                "pattern": "^[a-z]([-a-z0-9]*[a-z0-9])?$",
                "type": "string",
                "x-validation-error-id": "resourceName.patternError",
              },
              "owners": Object {
                "items": Object {
                  "additionalProperties": true,
                  "properties": Object {
                    "owner": Object {
                      "type": "string",
                    },
                  },
                  "required": Array [
                    "owner",
                  ],
                  "type": "object",
                },
                "type": "array",
              },
              "probes": Object {
                "properties": Object {
                  "liveness": Object {
                    "properties": Object {
                      "cmd": Object {
                        "items": Object {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "failureThreshold": Object {
                        "type": "number",
                      },
                      "initialDelaySeconds": Object {
                        "type": "number",
                      },
                      "path": Object {
                        "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                        "type": "string",
                        "x-validation-error-id": "probesPath.patternError",
                      },
                      "periodSeconds": Object {
                        "type": "number",
                      },
                      "port": Object {
                        "type": "string",
                      },
                      "successThreshold": Object {
                        "type": "number",
                      },
                      "timeoutSeconds": Object {
                        "type": "number",
                      },
                    },
                    "type": "object",
                  },
                  "readiness": Object {
                    "properties": Object {
                      "cmd": Object {
                        "items": Object {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "failureThreshold": Object {
                        "type": "number",
                      },
                      "initialDelaySeconds": Object {
                        "type": "number",
                      },
                      "path": Object {
                        "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                        "type": "string",
                        "x-validation-error-id": "probesPath.patternError",
                      },
                      "periodSeconds": Object {
                        "type": "number",
                      },
                      "port": Object {
                        "type": "string",
                      },
                      "successThreshold": Object {
                        "type": "number",
                      },
                      "timeoutSeconds": Object {
                        "type": "number",
                      },
                    },
                    "type": "object",
                  },
                  "startup": Object {
                    "properties": Object {
                      "cmd": Object {
                        "items": Object {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "failureThreshold": Object {
                        "type": "number",
                      },
                      "initialDelaySeconds": Object {
                        "type": "number",
                      },
                      "path": Object {
                        "pattern": "^\\\\/(([\\\\w\\\\-:.\\\\{\\\\}])\\\\/?)*$|^$",
                        "type": "string",
                        "x-validation-error-id": "probesPath.patternError",
                      },
                      "periodSeconds": Object {
                        "type": "number",
                      },
                      "port": Object {
                        "type": "string",
                      },
                      "successThreshold": Object {
                        "type": "number",
                      },
                      "timeoutSeconds": Object {
                        "type": "number",
                      },
                    },
                    "type": "object",
                  },
                },
                "type": "object",
              },
              "productionReplicas": Object {
                "additionalProperties": false,
                "properties": Object {
                  "cpuThreshold": Object {
                    "type": "string",
                  },
                  "deleted": Object {
                    "type": "boolean",
                  },
                  "generate": Object {
                    "type": "boolean",
                  },
                  "max": Object {
                    "type": "string",
                  },
                  "min": Object {
                    "type": "string",
                  },
                },
                "type": "object",
              },
              "replicas": Object {
                "else": Object {
                  "pattern": "^$|^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|([1-9]\\\\d*|0))$",
                  "type": "string",
                },
                "if": Object {
                  "type": "number",
                },
                "then": Object {
                  "minimum": 0,
                  "type": "number",
                },
              },
              "repoUrl": Object {
                "pattern": "^https?:\\\\/\\\\/([^:\\\\/\\\\s]+)((:[0-9]{1,5})?(\\\\/.*)?)([^\\\\/:])\\\\/?$",
                "type": "string",
                "x-validation-error-id": "url.patternError",
              },
              "resources": Object {
                "properties": Object {
                  "cpuLimits": Object {
                    "properties": Object {
                      "max": Object {
                        "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                        "type": "string",
                      },
                      "min": Object {
                        "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))m$)|^$",
                        "type": "string",
                      },
                    },
                    "type": "object",
                  },
                  "memoryLimits": Object {
                    "properties": Object {
                      "max": Object {
                        "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                        "type": "string",
                      },
                      "min": Object {
                        "pattern": "(^((\\\\{\\\\{([A-Z])([A-Z0-9_]*)\\\\}\\\\})|(\\\\d+))Mi$)|^$",
                        "type": "string",
                      },
                    },
                    "type": "object",
                  },
                },
                "type": "object",
              },
              "secrets": Object {
                "items": Object {
                  "additionalProperties": false,
                  "properties": Object {
                    "mountPath": Object {
                      "pattern": "^[a-zA-Z0-9-/_\\\\s.|\\\\\\\\!\\"£$%&()=?^\\"{}[\\\\]*+@]+$",
                      "type": "string",
                      "x-validation-error-id": "configMountPath.patternError",
                    },
                    "name": Object {
                      "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
                      "type": "string",
                      "x-validation-error-id": "resourceName.patternError",
                    },
                  },
                  "type": "object",
                },
                "type": "array",
              },
              "sourceComponentId": Object {
                "type": "string",
              },
              "sourceMarketplaceItem": Object {
                "properties": Object {
                  "itemId": Object {
                    "type": "string",
                  },
                  "tenantId": Object {
                    "type": "string",
                  },
                  "version": Object {
                    "type": "string",
                  },
                },
                "required": Array [
                  "itemId",
                  "version",
                  "tenantId",
                ],
                "type": "object",
              },
              "sshUrl": Object {
                "pattern": "^((git|ssh|http(s)?)|([\\\\w-]*@[\\\\w.=\\\\-]+))(:(\\\\/\\\\/)?)([\\\\w\\\\.@:\\\\/\\\\-~=]+)(.git)?(\\\\/)?$",
                "type": "string",
                "x-validation-error-id": "sshUrl.patternError",
              },
              "swaggerPath": Object {
                "pattern": "^$|^(\\\\/$|(\\\\/([\\\\w\\\\-\\\\.]|(:[a-zA-Z]))[\\\\w\\\\-\\\\.]*)+)$",
                "type": "string",
                "x-validation-error-id": "swaggerPath.patternError",
              },
              "tags": Object {
                "items": Object {
                  "type": "string",
                },
                "type": "array",
              },
              "terminationGracePeriodSeconds": Object {
                "type": "number",
              },
              "type": Object {
                "const": "custom",
                "type": "string",
              },
            },
            "required": Array [
              "name",
              "advanced",
              "type",
              "dockerImage",
            ],
            "type": "object",
          },
          "type": "object",
        },
      },
      "type": "object",
    },
    "serviceSecrets": Object {
      "patternProperties": Object {
        "^[a-z][a-z0-9]*(-[a-z0-9]+)*$": Object {
          "additionalProperties": false,
          "properties": Object {
            "name": Object {
              "pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
              "type": "string",
              "x-validation-error-id": "resourceName.patternError",
            },
          },
          "required": Array [
            "name",
          ],
          "type": "object",
        },
      },
      "type": "object",
    },
    "unsecretedVariables": Object {
      "default": Array [],
      "items": Object {
        "additionalProperties": false,
        "properties": Object {
          "environments": Object {
            "additionalProperties": Object {
              "additionalProperties": false,
              "properties": Object {
                "value": Object {
                  "type": "string",
                },
              },
              "required": Array [
                "value",
              ],
              "type": "object",
            },
            "type": "object",
          },
          "name": Object {
            "type": "string",
          },
          "readOnly": Object {
            "type": "boolean",
          },
        },
        "required": Array [
          "name",
          "environments",
        ],
        "type": "object",
      },
      "type": "array",
    },
    "version": Object {
      "type": "string",
    },
  },
  "required": Array [
    "endpoints",
    "collections",
    "groups",
    "secrets",
    "cmsCategories",
    "cmsSettings",
    "cmsAnalytics",
    "services",
    "decorators",
    "cmsDashboard",
  ],
  "type": "object",
}
`
