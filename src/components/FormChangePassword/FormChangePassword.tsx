import * as S from './FormChangePassword.styles'

import { Controller, useForm } from 'react-hook-form'
import React, { useState } from 'react'

import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { Input } from '../Input/Input'

export type changePasswordDTO = {
  password: string
  confirmPassword: string
}

export type FormChangePasswordProps = {
  onSubmit: (data: changePasswordDTO) => void
}

const FormChangePassword = ({ onSubmit }: FormChangePasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const [passwordSecurity, setPasswordSecurity] = useState(true)
  const [confirmPasswordSecurity, setConfirmPasswordSecurity] = useState(true)

  const toogleSecuityText = async (password: string) => {
    if (password === 'passwordSecutiry') {
      setPasswordSecurity(!passwordSecurity)
    } else {
      setConfirmPasswordSecurity(!confirmPasswordSecurity)
    }
  }

  const submit = (data: changePasswordDTO) => {
    console.log(data)
    onSubmit(data)
  }

  return (
    <S.Wrapper>
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <Input
            label="Nova senha"
            placeholder="Nova senha"
            accessibilityLabel="password"
            secureTextEntry={passwordSecurity}
            error={errors?.password?.message}
            value={value}
            onChangeText={(value) => onChange(value)}
            iconButton={
              <IconButton
                testID="passwordIconButton"
                onPress={() => toogleSecuityText('passwordSecutiry')}
                error={errors?.password?.message}
                icon={passwordSecurity ? 'lock-outline' : 'lock-open-outline'}
              />
            }
          />
        )}
      />
      <S.InputWrapper>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              accessibilityLabel="confirm password"
              error={errors?.confirmPassword?.message}
              value={value}
              onChangeText={(value) => onChange(value)}
              secureTextEntry={confirmPasswordSecurity}
              iconButton={
                <IconButton
                  testID="confirmPasswordIconButton"
                  error={errors?.confirmPassword?.messsage}
                  icon={
                    confirmPasswordSecurity
                      ? 'lock-outline'
                      : 'lock-open-outline'
                  }
                  onPress={() => toogleSecuityText('confirmPasswordIconBUtton')}
                />
              }
            />
          )}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button title="Atualizar a Senha" onPress={handleSubmit(submit)} />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export { FormChangePassword }
