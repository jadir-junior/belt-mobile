import * as S from './Input.styles'

import React, { useState } from 'react'

import { TextInputProps } from 'react-native'

export type InputProps = {
  icon?: React.ReactNode
  errorMessage?: string
  onInputChange: (value: string) => void
} & TextInputProps

const Input = ({ onInputChange, icon, errorMessage, ...props }: InputProps) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  const onChangeText = (text: string) => {
    setValue(text)
    onInputChange(text)
  }

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
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
        {!!icon && (
          <S.Icon error={!!errorMessage} testID="icon">
            {icon}
          </S.Icon>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export { Input }
