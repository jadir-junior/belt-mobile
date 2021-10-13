import * as S from './LoginScreen.styles'

import { Keyboard, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Button } from '../../components/Button/Button'
import { COLORS } from '../../theme/theme'
import { Chip } from '../../components/Chip/Chip'
import { FormLogin } from '../../components/Auth/FormLogin/FormLogin'
import { Input } from '../../components/Input/Input'
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
        <FormLogin />
      </View>
    </TouchableWithoutFeedback>
  )
}

export { LoginScreen }
