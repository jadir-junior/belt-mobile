import axios from 'axios'

export type AuthData = {
  accessToken: string
  refreshToken: string
}

const signIn = (email: string, password: string): Promise<AuthData> => {
  const payload = {
    email,
    password
  }
  return axios.post(`http://10.0.2.2:3000/login`, payload)
}

export const authService = {
  signIn
}
