/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseRequestBuilder } from '@microsoft/kiota-abstractions'

export function isRequestBuilder(obj: any, name: string): boolean {
  const proto = Object.getPrototypeOf(obj)
  const descriptor = Object.getOwnPropertyDescriptor(proto, name)

  const isInstance1 = instanceOfRequestBuilder(obj)
  const isInstance2 = instanceOfRequestBuilder(obj[name])
  const isInstance3 = instanceOfRequestBuilder(proto)
  if (descriptor?.get) {
    const isInstance4 = instanceOfRequestBuilder(descriptor.get())
  }

  return 'withUrl' in proto
}

function instanceOfRequestBuilder<T>(obj: any): obj is BaseRequestBuilder<T> {
  return 'withUrl' in obj
}

export function isGetter(obj: any, name: string): boolean {
  if (!obj) {
    return false
  }

  const proto = Object.getPrototypeOf(obj)
  const propDescriptor = Object.getOwnPropertyDescriptor(proto, name)
  if (!propDescriptor) {
    return false
  }

  return !!propDescriptor['get']
}

export function invokeGetter(obj: any, name: string): any {
  const proto = Object.getPrototypeOf(obj)
  const getterDescriptor = Object.getOwnPropertyDescriptor(proto, name)

  return getterDescriptor?.get?.call(obj)
}
