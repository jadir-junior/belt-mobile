import * as S from './UserInfo.styles'

import { Avatar } from '../Avatar/Avatar'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { Title } from '../Title/Title'

const UserInfo = () => (
  <S.Wrapper>
    <Avatar size={76} />
    <S.TitleWrapper>
      <Title>Nome Sobrenome</Title>
    </S.TitleWrapper>
    <S.PositionWrapper>
      <Paragraph color="primary">Diretora Financeira</Paragraph>
    </S.PositionWrapper>
  </S.Wrapper>
)

export { UserInfo }
