import { FromSchema } from 'json-schema-to-ts'

import { FEEDBACK_TYPES } from '../constants/feedback'

export const feedbackSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'type',
    'description',
  ],
  properties: {
    type: {
      type: 'string',
      enum: FEEDBACK_TYPES,
    },
    description: { type: 'string' },
  },
} as const

export type Feedback = FromSchema<typeof feedbackSchema>
