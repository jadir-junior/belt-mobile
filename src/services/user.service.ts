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
      const user: User = {
        _id: decoded._id,
        email: decoded.email,
        permissionFlags: decoded.permissionFlags
      }
      return user
    }
  } catch (error) {
    console.error(error)
  }
}
