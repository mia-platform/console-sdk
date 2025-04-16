/**
 * Copyright 2025 Mia srl
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

import { type Event as BkEvent, type ChangeQueryPayload, type EventBus, Filter, changeQuery, displayData, loadingData } from '@micro-lc/back-kit-engine'
import { BkHttpBase } from '@micro-lc/back-kit-engine/base'
import { type Manifest } from '@micro-lc/compose-toolkit'
import { customElement, property } from 'lit/decorators.js'
import { filter, Subscription } from 'rxjs'

@customElement('console-client')
class ConsoleClient extends BkHttpBase {
  static get __manifest(): Promise<Manifest> {
    return import('./manifest').then(({ default: manifest }) => manifest)
  }

  baseFilters: Filter[] = []
  currentPage?: number
  currentPageSize?: number

  // <console-client base-api="/api/marketplace" />
  @property({ attribute: true, type: String }) baseApi = ''

  protected _wasDisconnected = false

  constructor() {
    super(fetchDataListener)
  }
}

function appendFilters(urlParams: URLSearchParams, filters: Filter[]): void {
  if (filters.length === 0) {
    return
  }

  for (const filter of filters) {
    if (Array.isArray(filter.value)) {
      urlParams.append(filter.property, filter.value.join(','))
      continue
    }
    urlParams.append(filter.property, filter.value.toString())
  }
}

function fetchData(this: ConsoleClient, payload: ChangeQueryPayload): void {
  this.eventBus?.next(loadingData({ loading: true }))

  const url = new URL(this.baseApi, window.location.origin)
  const urlParams = new URLSearchParams()

  // Some base filters (e.g. from a Tab) have been provided,
  // save them as baseFilters to be used on each subsequent request
  if (payload.characteristic?.filters) {
    this.baseFilters = payload.characteristic.filters
  }

  appendFilters(urlParams, this.baseFilters)

  if (payload.filters) {
    appendFilters(urlParams, payload.filters)
  }

  if (payload.pageNumber) {
    this.currentPage = payload.pageNumber
  }
  if (this.currentPage) {
    urlParams.append('page', this.currentPage.toString())
  }

  if (payload.pageSize) {
    this.currentPageSize = payload.pageSize
  }
  if (this.currentPageSize) {
    urlParams.append('per_page', this.currentPageSize.toString())
    urlParams.append('perPage', this.currentPageSize.toString())
  }

  // TODO: use proper type system from console-client + console-types
  this._httpClient
    .get(url.href, {
      params: urlParams,
    })
    // TODO: send pagination event
    .then((res) => { this.eventBus?.next(displayData({ data: res.data ?? [] })) })
    .catch(() => { this.eventBus?.next(displayData({ data: [] })) })
    .finally(() => { this.eventBus?.next(loadingData({ loading: false })) })
}

function fetchDataListener(this: ConsoleClient, eventBus: EventBus): Subscription {
  return eventBus
    .pipe(filter<BkEvent, BkEvent<ChangeQueryPayload>>(changeQuery.is))
    .subscribe((event) => { fetchData.call(this, event.payload) })
}
