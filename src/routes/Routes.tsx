import * as SplashScreen from 'expo-splash-screen'

import React, { useEffect, useState } from 'react'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../utils/toast/toast.config'
import { useAuth } from '../contexts/Auth'

export const Router = () => {
  const { authData, loading } = useAuth()
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    async function hideSplashScreen() {
      try {
        if (loading && appIsReady) {
          await SplashScreen.hideAsync()
        }
      } catch (error) {
        console.warn(error)
      }
    }

    hideSplashScreen()
  }, [loading, appIsReady])

  if (loading) {
    return <></>
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  )
}
