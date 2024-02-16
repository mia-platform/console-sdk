import Ajv from 'ajv'
import t from 'tap'

import { ITemplate, template } from './template'
import { validationMessage } from './validate-utils.test'

t.test('templates validated', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<ITemplate>(template)

  t.test('only required fields', t => {
    const template: ITemplate = {
      name: 'template-name',
      templateId: 'my-template-id',
    }

    t.ok(validate(template), validationMessage(validate.errors))

    t.end()
  })

  t.test('all fields', t => {
    const template: Required<ITemplate> = {
      _id: 'object-id',
      name: 'template-name',
      templateId: 'my-template-id',
      tenantId: 'my-tenant-id',
      providerId: 'my-provider-id',
      description: 'my description',
      enabledServices: {
        'my-service': true,
      },
      staticSecret: {
        secret: 'the-secret',
        description: 'the description',
        active: true,
        clientType: 'clienttype',
      },
      cmsImageName: 'cms-image',
    }

    t.ok(validate(template), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
