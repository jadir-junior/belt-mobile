import { User } from '../types/user.type'
import { api } from './api'

export type Tokens = {
  accessToken: string
  refreshToken: string
}

type ResponseUser = Omit<User, 'password'>

export const getMe = async (): Promise<ResponseUser | undefined> => {
  return await api.get('/auth/me')
}
