import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthProvider } from './src/contexts/Auth'
import React from 'react'
import Reactotron from 'reactotron-react-native'
import { Router } from './src/routes/Routes'

if (__DEV__) {
  Reactotron.configure().useReactNative().setAsyncStorageHandler!(
    AsyncStorage
  ).connect()
  console.log('Reactron Configured')
}

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
