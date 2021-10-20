import * as S from './ProfileListItem.styles'

import { Card } from '../Card/Card'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { Small } from '../Small/Small'
import { TouchableHighlightProps } from 'react-native'

export type ProfileListItemProps = {
  title: string
  subtitle: string
} & TouchableHighlightProps

const ProfileListItem = ({
  title,
  subtitle,
  ...props
}: ProfileListItemProps) => (
  <Card activeOpacity={0.9} {...props}>
    <>
      <S.TextContent>
        <Paragraph weight="bold" color="primary">
          {title}
        </Paragraph>
        <Small>{subtitle}</Small>
      </S.TextContent>
      <S.IconContent></S.IconContent>
    </>
  </Card>
)

export { ProfileListItem }
