import * as S from './Container.styles'

import { Keyboard, TouchableWithoutFeedbackProps } from 'react-native'

import React from 'react'

export type ContainerProps = {
  children: React.ReactNode
} & TouchableWithoutFeedbackProps

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Wrapper {...props} onPress={Keyboard.dismiss}>
    <S.View testID="container">{children}</S.View>
  </S.Wrapper>
)

export { Container }
