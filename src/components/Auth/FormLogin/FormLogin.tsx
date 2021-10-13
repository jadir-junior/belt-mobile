import * as S from './FormLogin.styles'

import { Controller, useForm } from 'react-hook-form'
import React, { useState } from 'react'

import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import { Input } from '../../Input/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { fieldsValidationSchema } from '../../../utils/validations/auth'
import { yupResolver } from '@hookform/resolvers/yup'

type SignIn = {
  email: string
  password: string
}

const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(fieldsValidationSchema)
  })

  const [securityText, setSecurityText] = useState(true)

  const toogleSecurityText = async () => {
    setSecurityText(!securityText)
  }

  const onSubmit = (data: SignIn) => {
    console.log(data)
  }

  return (
    <S.Wrapper testID="formLogin">
      <S.InputWrapper>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Email"
              keyboardType="email-address"
              accessibilityLabel="email"
              icon={<MaterialIcons name="mail-outline" size={24} />}
              value={value}
              onChangeText={(value) => onChange(value)}
              errorMessage={errors?.email?.message}
            />
          )}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <Input
              accessibilityLabel="password"
              placeholder="Senha"
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
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export { FormLogin }
