import tap from 'tap'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import { CredentialsClientCredential, CredentialsClientCredentialCertificate, CredentialsM2M, credentialsSchema, CredentialsToken, CredentialsUserPass } from './credentials'
import { CredentialsTypes } from '../constants/credentials'
import { validationMessage } from './validate-utils.test'

tap.test('credentials exposes a correct schema with type', t => {
  const ajv = new Ajv({ allErrors: true })
  addFormats(ajv)
  const validateCredentials = ajv.compile(credentialsSchema)

  t.test('token', t => {
    const credentials: CredentialsToken = {
      expirationDate: '2009-06-15T13:45:30',
      type: CredentialsTypes.TOKEN,
      content: {
        accessToken: 'token',
      },
    }
    t.ok(validateCredentials(credentials), validationMessage(validateCredentials.errors))

    t.end()
  })

  t.test('m2m', t => {
    const credentials: CredentialsM2M = {
      expirationDate: '2009-06-15T13:45:30',
      type: CredentialsTypes.M2M,
      content: {
        token: 'token',
        accessTokenURL: 'my url',
      },
    }
    t.ok(validateCredentials(credentials), validationMessage(validateCredentials.errors))

    t.end()
  })

  t.test('clientCredentials', t => {
    const credentials: CredentialsClientCredential = {
      expirationDate: '2009-06-15T13:45:30',
      type: CredentialsTypes.CLIENT_CREDENTIALS,
      content: {
        clientId: 'id',
        clientSecret: 'secret',
        accessTokenURL: 'my url',
      },
    }
    t.ok(validateCredentials(credentials), validationMessage(validateCredentials.errors))

    t.end()
  })

  t.test('client_credentials_certificate', t => {
    const credentials: CredentialsClientCredentialCertificate = {
      expirationDate: '2009-06-15T13:45:30',
      type: CredentialsTypes.CLIENT_CREDENTIALS_CERTIFICATE,
      content: {
        clientId: 'id',
        accessTokenURL: 'the url',
        certificateThumbprint: 'the thumbprint',
        privateKeyBase64: 'the private key',
        scope: 'optional scope',
      },
    }
    t.ok(validateCredentials(credentials), validationMessage(validateCredentials.errors))

    t.end()
  })

  t.test('userPass', t => {
    const credentials: CredentialsUserPass = {
      expirationDate: '2009-06-15T13:45:30',
      type: CredentialsTypes.USER_PASS,
      content: {
        userName: 'my-username',
        password: 'psw',
      },
    }
    t.ok(validateCredentials(credentials), validationMessage(validateCredentials.errors))

    t.end()
  })

  t.end()
})
