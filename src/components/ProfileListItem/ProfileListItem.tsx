import * as S from './ProfileListItem.styles'

import { COLORS } from '../../theme/theme'
import { Card } from '../Card/Card'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { Small } from '../Small/Small'
import { TouchableHighlightProps } from 'react-native'

export type ProfileListItemProps = {
  title: string
  subtitle: string
  icon?: string
  iconColor?: string
} & TouchableHighlightProps

const ProfileListItem = ({
  title,
  subtitle,
  icon,
  iconColor,
  ...props
}: ProfileListItemProps) => (
  <Card activeOpacity={0.9} {...props}>
    <S.CardContent>
      <S.TextContent>
        <Paragraph weight="bold" color="primary">
          {title}
        </Paragraph>
        <Small>{subtitle}</Small>
      </S.TextContent>
      <S.IconContent>
        <Icon
          size={24}
          name={icon ? icon : 'chevron-right'}
          color={iconColor ? iconColor : COLORS.GRAY_DARK}
        />
      </S.IconContent>
    </S.CardContent>
  </Card>
)

export { ProfileListItem }
