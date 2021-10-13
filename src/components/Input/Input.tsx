import * as S from './Input.styles'

import React, { useState } from 'react'
import { Text, TextInputProps } from 'react-native'

export type InputProps = {
  icon?: React.ReactNode
  iconButton?: React.ReactNode
  errorMessage?: string
} & TextInputProps

const Input = ({ icon, iconButton, errorMessage, ...props }: InputProps) => {
  const [focus, setFocus] = useState(false)

  return (
    <S.Wrapper>
      <S.InputWrapper
        focus={focus}
        error={!!errorMessage}
        testID="inputWrapper"
      >
        <S.Input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
        {!!icon && (
          <S.Icon error={!!errorMessage} testID="icon">
            {icon}
          </S.Icon>
        )}
        {!!iconButton && <S.IconButton>{iconButton}</S.IconButton>}
      </S.InputWrapper>
      {!!errorMessage && <Text>{errorMessage}</Text>}
    </S.Wrapper>
  )
}

export { Input }
