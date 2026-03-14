import messages from './messages/en.json'

declare module 'next-intl' {
  // eslint-disable-next-line
  interface AppConfig {
    Messages: typeof messages
  }
}
