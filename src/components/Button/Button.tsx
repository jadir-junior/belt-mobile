import * as S from './Button.styles'

import React from 'react'
import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = {
  title: string
  color?: 'primary' | 'secondary'
} & TouchableOpacityProps

const Button = ({ title, color = 'primary', ...props }: ButtonProps) => (
  <S.Wrapper
    {...props}
    activeOpacity={0.9}
    style={{ elevation: 2 }}
    color={color}
  >
    <S.Text color={color}>{title}</S.Text>
  </S.Wrapper>
)

export { Button }
