import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type MockedNavigatorProps = {
  component: React.ComponentType<any>
  params?: any
}

const Stack = createNativeStackNavigator()
const MockedNavigator = ({ component, params = {} }: MockedNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { MockedNavigator }
