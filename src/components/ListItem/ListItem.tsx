import * as S from './ListItem.styles'

import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'

export type ListItemProps = {
  title: string
  icon?: React.ReactNode
} & TouchableOpacityProps

const ListItem = ({ title, icon, ...props }: ListItemProps) => (
  <S.Wrapper {...props} activeOpacity={0.8}>
    <S.Content>
      {icon && <S.Icon>{icon}</S.Icon>}
      <Paragraph color="primary">{title}</Paragraph>
    </S.Content>
  </S.Wrapper>
)

export { ListItem }
