import { COLORS } from '../../theme/theme'
import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.TouchableHighlight`
  border: 1px solid ${COLORS.GRAY_LIGHT};
  padding: 24px;
  border-radius: 16px;
  background-color: ${COLORS.WHITE};
  elevation: 4;
`
