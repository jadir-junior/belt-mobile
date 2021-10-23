import * as S from './ProfileInfo.styles'

import { Avatar } from '../Avatar/Avatar'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'

export type ProfileInfoProps = {
  name?: string
  position?: string
  photo?: string
}

const ProfileInfo = ({ name, position, photo }: ProfileInfoProps) => (
  <S.Wrapper>
    <S.PhotoContent>
      <Avatar url={photo} accessibilityLabel="profile photo" />
    </S.PhotoContent>
    <S.InfoContent>
      <Paragraph color="primary" weight="bold">
        {name}
      </Paragraph>
      <Paragraph>{position}</Paragraph>
    </S.InfoContent>
  </S.Wrapper>
)

export { ProfileInfo }
