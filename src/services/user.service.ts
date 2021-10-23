import { User } from '../types/user.type'
import { api } from './api'

export type Tokens = {
  accessToken: string
  refreshToken: string
}

type ResponseUser = Omit<User, 'password'>

export const getMe = async (): Promise<ResponseUser | undefined> => {
  return api.get('/auth/me')
}

export const uploadProfilePhoto = async (
  id: string,
  formData: FormData
): Promise<any> => {
  return api({
    method: 'post',
    url: `/auth/me/photo/${id}`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const updateProfileUser = async (user: User) => {
  return api.patch(`/auth/me/${user._id}`, user)
}
