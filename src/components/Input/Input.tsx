import * as S from './Input.styles'

import React, { useState } from 'react'
import { Text, TextInputProps } from 'react-native'

import { ErrorText } from '../ErrorText/ErrorText'

export type InputProps = {
  icon?: React.ReactNode
  iconButton?: React.ReactNode
  error?: string
} & TextInputProps

const Input = ({ icon, iconButton, error, ...props }: InputProps) => {
  const [focus, setFocus] = useState(false)

  return (
    <S.Wrapper>
      <S.InputWrapper focus={focus} error={!!error} testID="inputWrapper">
        <S.Input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
        {!!icon && (
          <S.Icon error={!!error} testID="icon">
            {icon}
          </S.Icon>
        )}
        {!!iconButton && <S.IconButton>{iconButton}</S.IconButton>}
      </S.InputWrapper>
      <S.ErrorWrapper>
        {!!error && <ErrorText>{error}</ErrorText>}
      </S.ErrorWrapper>
    </S.Wrapper>
  )
}

export { Input }
