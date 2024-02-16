const url = {
  type: 'string',
  anyOf: [{
    format: 'uri',
    pattern: '^https?://',
  }, {
    format: 'hostname',
  }, {
    format: 'ipv4',
  }, {
    format: 'ipv6',
  }],
} as const

export default url
