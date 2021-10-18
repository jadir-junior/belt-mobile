import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'

export type Tokens = {
  accessToken: string
  refreshToken: string
}

export type User = {
  _id: string
  email: string
  permissionFlags: number
  name?: string
  photo?: string
  position?: string
}

export const getUser = async (): Promise<User | undefined> => {
  try {
    const authDataSerialized = await AsyncStorage.getItem('@AuthData')
    if (authDataSerialized) {
      const tokens: Tokens = JSON.parse(authDataSerialized)
      const accessToken = tokens.accessToken
      const decoded: any = jwtDecode(accessToken)
      console.log(decoded)
      const user: User = {
        _id: decoded._id,
        email: decoded.email,
        permissionFlags: decoded.permissionFlags,
        name: decoded?.name,
        position: decoded?.position
      }
      return user
    }
  } catch (error) {
    console.error(error)
  }
}
