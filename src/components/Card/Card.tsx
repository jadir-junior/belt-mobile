import * as S from './Card.styles'

import React from 'react'
import { View } from 'react-native'

export type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => (
  <S.Wrapper>
    <View>{children}</View>
  </S.Wrapper>
)

export { Card }
