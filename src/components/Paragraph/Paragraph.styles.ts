import { COLORS, COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'
import styled, { css } from 'styled-components/native'

import React from 'react'

const colorsTextModifiers = (color: string) => {
  switch (color) {
    case 'default':
      return COLORS_TEXT.GRAY_DARK
    case 'primary':
      return COLORS_TEXT.PRIMARY
    default:
      return COLORS_TEXT.GRAY_DARK
  }
}

type ParagraphStyleProps = {
  color: string
  weight: string
}

export const Wrapper = styled.Text<ParagraphStyleProps>`
  ${({ color, weight }) => css`
    font-family: ${FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${colorsTextModifiers(color)};
    letter-spacing: -0.7px;
    font-weight: ${weight === 'regular' ? 400 : 'bold'};
  `}
`
