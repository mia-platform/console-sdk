import Ajv from 'ajv'
import t from 'tap'

import { Feedback, feedbackSchema } from './feedback'
import { validationMessage } from './validate-utils.test'
import { FeedbackTypes } from '../constants/feedback'

t.test('feedback', t => {
  const ajv = new Ajv()
  const validate = ajv.compile<Feedback>(feedbackSchema)

  t.test('match schema', t => {
    t.matchSnapshot(JSON.stringify(feedbackSchema, null, 2))
    t.end()
  })

  t.test('validate - only required fields', t => {
    const feedback: Feedback = {
      type: FeedbackTypes.ISSUE,
      description: 'My useful feedback',
    }

    t.ok(validate(feedback), validationMessage(validate.errors))
    t.end()
  })

  t.end()
})
