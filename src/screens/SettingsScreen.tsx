import { Button, Text, View } from 'react-native'

import React from 'react'

export const SettingsScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings Screen</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
)
