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

export const uploadProfilePhoto = async (
  id: string,
  formData: FormData
): Promise<any> => {
  return await api({
    method: 'post',
    url: `/auth/me/photo/${id}`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
