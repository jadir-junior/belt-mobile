import * as S from './Small.styles'

import React from 'react'
import { TextProps } from 'react-native'

export type SmallProps = {
  children: React.ReactNode
  color?: 'default' | 'primary'
  weight?: 'regular' | 'bold'
} & TextProps

const Small = ({
  children,
  color = 'default',
  weight = 'regular',
  ...props
}: SmallProps) => (
  <S.Text {...props} color={color} weight={weight}>
    {children}
  </S.Text>
)

export { Small }
