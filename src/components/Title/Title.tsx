import * as S from './Title.styles'

import React from 'react'
import { Text } from 'react-native'

export type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => <S.Wrapper>{children}</S.Wrapper>

export { Title }
