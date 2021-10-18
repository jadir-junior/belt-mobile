import { api } from './api'

export type AuthData = {
  accessToken: string
  refreshToken: string
}

const signIn = (email: string, password: string): Promise<AuthData> => {
  const payload = {
    email,
    password
  }
  return api.post(`login`, payload)
}

export const authService = {
  signIn
}
