import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import { SettingsScreen } from '../screens/SettingsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const Root = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
)

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
)
