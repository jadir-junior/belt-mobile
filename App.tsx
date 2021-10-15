import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthProvider } from './src/contexts/Auth'
import React from 'react'
import Reactotron from 'reactotron-react-native'
import { Router } from './src/routes/Routes'
import { useFonts } from 'expo-font'

if (__DEV__) {
  // Reacttron configuration
  Reactotron.configure().useReactNative().setAsyncStorageHandler!(
    AsyncStorage
  ).connect()
  console.log('Reactron Configured')
}

export default function App() {
  const [loaded] = useFonts({
    DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSansBold: require('./assets/fonts/DMSans-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
