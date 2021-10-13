import * as S from './Chip.styles'

import { Text, View, ViewProps } from 'react-native'

import React from 'react'

export type ChipProps = {
  title: string
  color?: 'default' | 'primary' | 'success'
} & ViewProps

const Chip = ({ title, color = 'default', ...props }: ChipProps) => (
  <View>
    <S.Wrapper {...props} color={color}>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  </View>
)

export { Chip }
