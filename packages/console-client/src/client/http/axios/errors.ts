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

class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidArgumentError'
  }
}


const InvalidArgumentErrorThrower = {

  /**
   * Assert that property is not Falsy, throws an error otherwise
   * @param {string} propName the name of the property to check
   * @param {unknown} prop the property to assert
   * @returns {void} nothing if prop is not Falsy
   * @throws InvalidArgumentError if prop is Falsy
   */
  Assert: (propName: string, prop: unknown): void => {
    if (!prop) {
      throw new InvalidArgumentError(`${propName} cannot be falsy`)
    }
  },
}

export {
  InvalidArgumentErrorThrower as InvalidArgumentError,
}
