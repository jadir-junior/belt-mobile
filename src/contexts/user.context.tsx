import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../types/user.type'
import { getMe } from '../services/user.service'
import { useAuth } from './Auth'

type UserContextData = {
  user: User
  setUserStorageData(user: User): Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>({ _id: '', email: '' })
  const { authData } = useAuth()

  useEffect(() => {
    async function init() {
      await getUser()
      await loadStorageData()
    }

    if (authData) {
      init()
    }
  }, [authData])

  async function getUser(): Promise<void> {
    try {
      const response: any = await getMe()
      const user: Omit<User, 'password'> = response.data
      await AsyncStorage.setItem('@BELT:USER', JSON.stringify(user))
    } catch (error) {
      console.error(error)
    }
  }

  async function loadStorageData(): Promise<void> {
    try {
      const userSerialized = await AsyncStorage.getItem('@BELT:USER')
      if (userSerialized) {
        const _user: User = JSON.parse(userSerialized)
        setUser(_user)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function setUserStorageData(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem('@BELT:USER', JSON.stringify(user))
      setUser(user)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUserStorageData }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser(): UserContextData {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an userProvider')
  }

  return context
}

export { UserProvider, UserContext, useUser }
