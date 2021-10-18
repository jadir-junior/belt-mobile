import * as S from './IconButton.styles'

import React from 'react'
import { TouchableOpacityProps } from 'react-native'

export type IconButtonProps = {
  icon: React.ReactNode
  error?: string
  size?: number
  color?: 'default' | 'primary'
  onPress?: () => void
} & TouchableOpacityProps

const IconButton = ({
  icon,
  error,
  size = 24,
  color = 'default',
  onPress,
  ...props
}: IconButtonProps) => (
  <S.Wrapper {...props} onPress={onPress} activeOpacity={0.6}>
    <S.Icon error={!!error} testID="icon" size={size} color={color}>
      {icon}
    </S.Icon>
  </S.Wrapper>
)

export { IconButton }
