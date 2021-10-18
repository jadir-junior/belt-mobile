import axios, { AxiosError } from 'axios'

export type Error = {
  msg: string
  param: string
  location: string
}

export type ServerError = {
  errors: Array<Error>
}

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<ServerError>
    if (serverError && serverError.response) {
      return serverError.response.data
    }
  }
}
