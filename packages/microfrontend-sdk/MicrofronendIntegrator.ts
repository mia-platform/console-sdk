import {Subject} from 'rxjs'

import {IMountingProps, IContextType, IConsoleCommand, Events} from './types'

export interface IConsoleSDK {
  getContext(): Record<string, unknown>
  getContainerId(): string,
  sendEvent(event: Events): void
}

export default class MicrofronendIntegrator implements IConsoleSDK {
  private mountingProps: IMountingProps
  private events: Subject<Events>

  constructor(mountingProps: IMountingProps) {
    const {console} = mountingProps
    const {eventBus} = console
    this.events = new Subject()
    this.events.subscribe(eventBus)

    this.mountingProps = mountingProps
  }

  getContext() {
    return {}
  }

  getContainerId() {
    return ''
  }

  sendEvent(event: Events) {
    this.events.next(event)
  }
}