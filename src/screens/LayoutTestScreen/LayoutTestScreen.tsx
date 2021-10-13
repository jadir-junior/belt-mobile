import * as S from './LayoutTestScreen.styles'

import { Chip } from '../../components/Chip/Chip'
import React from 'react'
import { Text } from 'react-native'

const LayoutTestScreen = () => (
  <S.Wrapper>
    <Text>LayoutTestScreen</Text>
    <Chip title="chip" color="success" />
  </S.Wrapper>
)

export { LayoutTestScreen }
