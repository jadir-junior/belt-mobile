import * as S from './LoginScreen.styles'

import { Keyboard, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Button } from '../../components/Button/Button'
import { COLORS } from '../../theme/theme'
import { Input } from '../../components/Input/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title } from '../../components/Title/Title'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/Auth'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()

  const onSubmit = () => {
    console.log(email)
    if (email && password) {
      auth.signIn(email, password)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
      }}
    >
      <View
        style={{
          alignItems: 'stretch',
          justifyContent: 'center',
          margin: 20
        }}
      >
        <S.Content>
          <Title>belt</Title>
        </S.Content>
        <S.Content>
          <Paragraph>Por favor faça login para continuar</Paragraph>
        </S.Content>
        <S.InputWrapper>
          <Input
            placeholder="Email"
            accessibilityLabel="password"
            keyboardType="email-address"
            icon={<MaterialIcons name="mail-outline" size={24} />}
            onInputChange={(value) => setEmail(value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            placeholder="Password"
            accessibilityLabel="password"
            secureTextEntry={true}
            onInputChange={(value) => setPassword(value)}
            icon={<MaterialIcons name="lock-outline" size={24} />}
          />
        </S.InputWrapper>
        <Button
          title={'Login'}
          onPress={onSubmit}
          accessibilityLabel="Log in"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export { LoginScreen }
