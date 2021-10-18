import { COLORS, FONT_FAMILY } from '../theme/theme'

import { DrawerContent } from '../components/DrawerContent/DrawerContent'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { IconButton } from '../components/IconButton/IconButton'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const Root = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent />}
    screenOptions={{
      headerTintColor: COLORS.PRIMARY,
      headerTitleStyle: {
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: 30
      },
      headerTitleAlign: 'center'
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'belt',
        headerTitleStyle: {
          letterSpacing: -1.3,
          fontSize: 30,
          fontFamily: FONT_FAMILY.BOLD
        },
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
            <IconButton icon="notifications" size={24} color="primary" />
          </View>
        )
      }}
    />
  </Drawer.Navigator>
)

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
