/**
 * Copyright 2024 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
