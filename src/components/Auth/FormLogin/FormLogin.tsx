import * as S from './FormLogin.styles'

import React, { useState } from 'react'

import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import { Input } from '../../Input/Input'
import { MaterialIcons } from '@expo/vector-icons'

const FormLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [securityText, setSecurityText] = useState(true)

  const toogleSecurityText = async () => {
    setSecurityText(!securityText)
    console.log(securityText)
  }

  const handleSubmit = async () => {
    console.log(email)
  }

  return (
    <S.Wrapper testID="formLogin">
      <S.InputWrapper>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          accessibilityLabel="email"
          icon={<MaterialIcons name="mail-outline" size={24} />}
          onInputChange={setEmail}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input
          onInputChange={setPassword}
          accessibilityLabel="password"
          placeholder="Senha"
          value={password}
          secureTextEntry={securityText}
          iconButton={
            <IconButton
              onPress={toogleSecurityText}
              icon={
                <MaterialIcons
                  name={securityText ? 'lock-outline' : 'lock-open'}
                  size={24}
                />
              }
            />
          }
        />
      </S.InputWrapper>
      <Button title="Login" onPress={handleSubmit} />
    </S.Wrapper>
  )
}

export { FormLogin }
