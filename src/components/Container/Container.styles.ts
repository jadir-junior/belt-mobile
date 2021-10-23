import { COLORS } from '../../theme/theme'
import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.TouchableWithoutFeedback`
  height: 100%;
`

export const View = styled.View`
  background-color: ${COLORS.WHITE};
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
`
