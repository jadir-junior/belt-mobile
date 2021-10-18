import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.15.18:3000'
})

export const configureAxiosHeaders = (accessToken: string): void => {
  api.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}
