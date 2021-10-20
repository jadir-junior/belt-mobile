import * as S from './ProfileListItem.styles'

import { Card } from '../Card/Card'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'

export type ProfileListItemProps = {
  title: string
  subtitle: string
}

const ProfileListItem = ({ title, subtitle }: ProfileListItemProps) => (
  <Card>
    <S.TextContent>
      <Paragraph weight="bold" color="primary">
        {title}
      </Paragraph>
    </S.TextContent>
    <S.IconContent></S.IconContent>
  </Card>
)

export { ProfileListItem }
