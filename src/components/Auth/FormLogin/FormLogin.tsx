import * as S from './FormLogin.styles'

import { Controller, useForm } from 'react-hook-form'
import React, { useState } from 'react'

import { Button } from '../../Button/Button'
import { Error } from '../../../utils/errors/errors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconButton } from '../../IconButton/IconButton'
import { Input } from '../../Input/Input'
import { fieldsValidationSchema } from '../../../utils/validations/auth'
import { yupResolver } from '@hookform/resolvers/yup'

export type SignInProps = {
  email: string
  password: string
}

export type FormLoginProps = {
  onSubmit: (payload: SignInProps) => void
  error?: Error
}

const FormLogin = ({ onSubmit, error }: FormLoginProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(fieldsValidationSchema)
  })

  const [securityTextHide, setSecurityTextHide] = useState(true)

  const toogleSecurityText = async () => {
    setSecurityTextHide(!securityTextHide)
  }

  const submit = (data: SignInProps) => {
    onSubmit(data)
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
              icon={<Icon name="email-outline" size={24} />}
              value={value}
              onChangeText={(value) => onChange(value)}
              error={errors?.email?.message}
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
              secureTextEntry={securityTextHide}
              error={errors?.password?.message}
              iconButton={
                <IconButton
                  testID="securityPassword"
                  onPress={toogleSecurityText}
                  error={errors?.password?.message}
                  icon={securityTextHide ? 'lock-outline' : 'lock-open-outline'}
                />
              }
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button
          title="Login"
          onPress={handleSubmit(submit)}
          accessibilityLabel="login"
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export { FormLogin }
