import { COLORS, FONT_FAMILY } from '../theme/theme'

import { ChangePasswordScreen } from '../screens/ChangePasswordScreen/ChangePasswordScreen'
import { DrawerContent } from '../components/DrawerContent/DrawerContent'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { IconButton } from '../components/IconButton/IconButton'
import { PerfilScreen } from '../screens/PerfilScreen/PerfilScreen'
import { ProfileEditScreen } from '../screens/ProfileEditScreen/ProfileEditScreen'
import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AppStackParamList = {
  Root: undefined
  Perfil: undefined
  ProfileEdit: undefined
  ChangePassword: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

const Drawer = createDrawerNavigator()

const Root = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      headerTintColor: COLORS.PRIMARY,
      headerTitleStyle: {
        fontFamily: FONT_FAMILY.BOLD,
        letterSpacing: -1.3,
        fontSize: 30
      },
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0
      }
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'belt',
        headerRightContainerStyle: {
          alignItems: 'flex-start'
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: 120
            }}
          >
            <IconButton icon="bell-outline" size={24} color="primary" />
          </View>
        )
      }}
    />
  </Drawer.Navigator>
)

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: COLORS.PRIMARY,
      headerShadowVisible: false,
      headerTitleStyle: {
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: 30
      },
      headerTitleAlign: 'center'
    }}
  >
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Perfil" component={PerfilScreen} />
    <Stack.Screen
      name="ProfileEdit"
      component={ProfileEditScreen}
      options={{ title: 'editar perfil' }}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{ title: 'troca de senha' }}
    />
  </Stack.Navigator>
)
