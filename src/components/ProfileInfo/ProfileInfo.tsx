import * as S from './ProfileInfo.styles'

import { Image, Text } from 'react-native'

import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'

export type ProfileInfoProps = {
  name?: string
  position?: string
  photo?: string
}

const ProfileInfo = ({ name, position, photo }: ProfileInfoProps) => (
  <S.Wrapper>
    <S.Photo source={{ uri: photo }} />
    <Paragraph color="primary" weight="bold">
      {name}
    </Paragraph>
    <Paragraph>{position}</Paragraph>
  </S.Wrapper>
)

export { ProfileInfo }
