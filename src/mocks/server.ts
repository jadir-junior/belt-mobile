import { handlers } from './handlers'
import { setupServer } from 'msw/native'

export const server = setupServer(...handlers)

if (__DEV__) {
  server.listen({ onUnhandledRequest: 'error' })
}
