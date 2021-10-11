import { COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'

import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.Text`
  font-family: ${FONT_FAMILY.BOLD};
  font-size: 30px;
  letter-spacing: -1.3px;
  color: ${COLORS_TEXT.PRIMARY};
`
