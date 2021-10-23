import * as S from './FormChangePassword.styles'

import { Controller, useForm } from 'react-hook-form'
import React, { useState } from 'react'

import { IconButton } from '../IconButton/IconButton'
import { Input } from '../Input/Input'

const FormChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const [passwordSecurity, setPasswordSecurity] = useState(true)

  const toogleSecuityText = async (password: string) => {
    if (password === 'passwordSecutiry') {
      setPasswordSecurity(!passwordSecurity)
    } else {
    }
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
    </S.Wrapper>
  )
}

export { FormChangePassword }
