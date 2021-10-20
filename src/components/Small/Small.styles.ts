import { COLORS, FONT_FAMILY } from '../../theme/theme'
import styled, { css } from 'styled-components/native'

import React from 'react'

type TextStyleProps = {
  color: string
  weight: string
}

export const Text = styled.Text<TextStyleProps>`
  ${({ color, weight }) => css`
    font-size: 12px;
    color: ${color === 'default' ? COLORS.GRAY_DARK : COLORS.PRIMARY};
    font-family: ${FONT_FAMILY.REGULAR};
    font-weight: ${weight === 'bold' ? 'bold' : 400};
  `}
`
