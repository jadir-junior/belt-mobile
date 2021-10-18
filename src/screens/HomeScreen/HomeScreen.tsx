import { Button, Text, View, ViewProps } from 'react-native'

import { Container } from '../../components/Container/Container'
import React from 'react'

export type HomeScreenProps = ViewProps

const HomeScreen = ({ ...props }: HomeScreenProps) => {
  return (
    <Container>
      <View {...props}></View>
    </Container>
  )
}

export { HomeScreen }
