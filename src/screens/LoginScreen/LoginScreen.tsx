import { Button, StyleSheet, Text, TextInput } from 'react-native'
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
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={onSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 24
  }
})

export { LoginScreen }
