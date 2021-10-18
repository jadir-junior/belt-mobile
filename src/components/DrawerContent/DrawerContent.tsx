import * as S from './DrawerContent.styles'

import React from 'react'
import { Text } from 'react-native'
import { UserInfo } from '../UserInfo/UserInfo'

const DrawerContent = () => (
  <S.Wrapper>
    <UserInfo />
  </S.Wrapper>
)

export { DrawerContent }
