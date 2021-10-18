import { COLORS } from '../../theme/theme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity``

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(MaterialIcons)`
  margin-right: 16px;
  color: ${COLORS.GRAY_DARK};
  padding-bottom: 8px;
  padding-top: 8px;
`
