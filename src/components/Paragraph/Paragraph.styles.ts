import { COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'

import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.Text`
  font-family: ${FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${COLORS_TEXT.GRAY_DARK};
  letter-spacing: -0.7px;
`
