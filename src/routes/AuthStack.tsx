import { LoginScreen } from '../screens/LoginScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
  </Stack.Navigator>
)
