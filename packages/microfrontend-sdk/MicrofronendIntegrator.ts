import {IMountingProps, IContextType, IConsoleCommand} from './types'

export default class MicrofronendIntegrator {
  private mountingProps: IMountingProps

  constructor(mountingProps: IMountingProps) {
    this.mountingProps = mountingProps
  }

  getContext(contextType: IContextType) {}

  getContainerId(): string { return '' }
}