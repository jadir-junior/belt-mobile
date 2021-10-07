import { AuthData, authService } from '../services/authService'
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
  authData?: AuthData
  loading: boolean
  signIn(email: string, password: string): Promise<void>
  signOut(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData')
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized)
        setAuthData(_authData)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const _authData = await authService.signIn(email, password)
      await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData))
      setAuthData(_authData)
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async (): Promise<void> => {
    setAuthData(undefined)
    await AsyncStorage.removeItem('@AuthData')
  }

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
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
