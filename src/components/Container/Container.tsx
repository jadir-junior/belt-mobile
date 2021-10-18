import * as S from './Container.styles'

import React from 'react'
import { ViewProps } from 'react-native'

export type ContainerProps = {
  children: React.ReactNode
} & ViewProps

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Wrapper {...props} testID="container">
    {children}
  </S.Wrapper>
)

export { Container }
