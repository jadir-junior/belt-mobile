import * as S from './UserInfo.styles'

import { Avatar } from '../Avatar/Avatar'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { Title } from '../Title/Title'

export type UserInfoProps = {
  photo?: string
  name?: string
  position?: string
}

const UserInfo = ({ name, photo, position }: UserInfoProps) => (
  <S.Wrapper>
    <Avatar size={76} url={photo} accessibilityLabel="user information" />
    <S.TitleWrapper>{name && <Title>{name}</Title>}</S.TitleWrapper>
    <S.PositionWrapper>
      {position && <Paragraph color="primary">{position}</Paragraph>}
    </S.PositionWrapper>
  </S.Wrapper>
)

export { UserInfo }
