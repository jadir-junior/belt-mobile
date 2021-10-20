import * as S from './Card.styles'

import { TouchableHighlightProps, View } from 'react-native'

import { COLORS } from '../../theme/theme'
import React from 'react'

export type CardProps = {
  children: React.ReactNode
} & TouchableHighlightProps

const Card = ({ children, ...props }: CardProps) => (
  <S.Wrapper {...props} underlayColor={COLORS.GRAY_LIGHT}>
    <View>{children}</View>
  </S.Wrapper>
)

export { Card }
