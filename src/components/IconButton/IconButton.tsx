import * as S from './IconButton.styles'

import { Text, TouchableOpacityProps } from 'react-native'

import React from 'react'

export type IconButtonProps = {
  icon: React.ReactNode
  onPress?: () => void
  error?: string
} & TouchableOpacityProps

const IconButton = ({ icon, error, onPress, ...props }: IconButtonProps) => (
  <S.Wrapper {...props} onPress={onPress} activeOpacity={0.6}>
    <S.Icon error={!!error} testID="icon">
      {icon}
    </S.Icon>
  </S.Wrapper>
)

export { IconButton }
