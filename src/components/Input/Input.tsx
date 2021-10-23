import * as S from './Input.styles'

import React, { useState } from 'react'
import { Text, TextInputProps } from 'react-native'

import { COLORS } from '../../theme/theme'
import { ErrorText } from '../ErrorText/ErrorText'
import { Paragraph } from '../Paragraph/Paragraph'

export type InputProps = {
  icon?: React.ReactNode
  iconButton?: React.ReactNode
  error?: string
  label?: string
  disabled?: boolean
  accessibilityLabel?: string
} & TextInputProps

const Input = ({
  icon,
  iconButton,
  error,
  label,
  disabled = false,
  accessibilityLabel,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false)

  return (
    <S.Wrapper>
      {label && (
        <S.Label>
          <Paragraph color="primary">{label}</Paragraph>
        </S.Label>
      )}
      <S.InputWrapper
        focus={focus}
        error={!!error}
        disabled={disabled}
        testID="inputWrapper"
      >
        <S.Input
          accessibilityLabel={accessibilityLabel}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          editable={!disabled}
          disabled={disabled}
          placeholderTextColor={COLORS.GRAY_DARK}
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
