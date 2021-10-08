import * as S from './LoginScreen.styles'

import { Button, Text } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../contexts/Auth'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()

  const onSubmit = () => {
    if (email && password) {
      auth.signIn(email, password)
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 20
      }}
    >
      <Text>Login Page</Text>
      <S.Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        accessibilityLabel="email"
      />
      <S.Input
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        accessibilityLabel="password"
      />
      <Button title="Log in" onPress={onSubmit} accessibilityLabel="Log in" />
    </SafeAreaView>
  )
}

export { LoginScreen }
