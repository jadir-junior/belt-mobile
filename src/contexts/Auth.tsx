import { AuthData, authService } from '../services/authService'
import { Error, handleError } from '../utils/errors/errors'
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Toaster } from '../components/Toaster/Toaster.component'
import { configureAxiosHeaders } from '../services/api'

type AuthContextData = {
  authData?: AuthData
  loading: boolean
  errors?: Error
  signIn(email: string, password: string): Promise<void>
  signOut(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()
  const [errors, setErrors] = useState<Error>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData')
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized)
        configureAxiosHeaders(_authData.accessToken)
        setAuthData(_authData)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const response: any = await authService.signIn(email, password)
      const _authData = response.data
      await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData))
      configureAxiosHeaders(_authData.accessToken)
      setAuthData(_authData)
    } catch (err) {
      const error = handleError(err)
      setErrors(error?.errors[0])
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      setAuthData(undefined)
      await AsyncStorage.removeItem('@AuthData')
      await AsyncStorage.clear()
    } catch (error) {
      Toaster('error', error as string)
    }
  }

  return (
    <AuthContext.Provider
      value={{ authData, loading, errors, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, AuthContext, useAuth }
