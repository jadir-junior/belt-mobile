import * as S from './UserInfo.styles'

import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { Text } from 'react-native'
import { Title } from '../Title/Title'

const UserInfo = () => (
  <S.Wrapper>
    <S.Photo></S.Photo>
    <S.TitleWrapper>
      <Title>Nome Sobrenome</Title>
    </S.TitleWrapper>
    <S.PositionWrapper>
      <Paragraph color="primary">Diretora Financeira</Paragraph>
    </S.PositionWrapper>
  </S.Wrapper>
)

export { UserInfo }
