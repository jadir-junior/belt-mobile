import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://10.0.0.8:3000'
  baseURL: 'http://192.168.15.18:3000'
})

export const configureAxiosHeaders = (accessToken: string): void => {
  api.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}
