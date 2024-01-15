import { IConsoleProps } from '@mia-platform/console-sdk-microfrontend'

declare module 'vite-plugin-qiankun/dist/helper' {
  // IConsoleProps are passed from Quiankun across QuiankusProps to microfrontend 
  interface QiankunProps extends IConsoleProps {}
}
  