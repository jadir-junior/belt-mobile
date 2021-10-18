import * as S from './LoginScreen.styles'

import {
  FormLogin,
  SignInProps
} from '../../components/Auth/FormLogin/FormLogin'
import { Keyboard, View } from 'react-native'

import { Paragraph } from '../../components/Paragraph/Paragraph'
import React from 'react'
import { Title } from '../../components/Title/Title'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/Auth'

const LoginScreen = () => {
  const { errors, signIn } = useAuth()

  const onSubmit = (payload: SignInProps) => {
    signIn(payload.email, payload.password)
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
        <FormLogin onSubmit={onSubmit} error={errors} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export { LoginScreen }
