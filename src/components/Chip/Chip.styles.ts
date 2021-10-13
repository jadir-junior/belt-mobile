import { COLORS, COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'
import styled, { css } from 'styled-components/native'

import { ChipProps } from './Chip'
import React from 'react'

type WrapperProps = Pick<ChipProps, 'color'>

const colorModifiers = {
  default: () => css`
    background-color: ${COLORS.GRAY_DARK};
  `,
  primary: () => css`
    background-color: ${COLORS.PRIMARY};
  `,
  success: () => css`
    background-color: ${COLORS.SUCCESS};
  `
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ color }) => css`
    padding: 6px 12px;
    width: 78px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    ${colorModifiers[color!]}
  `}
`

export const Text = styled.Text`
  color: ${COLORS_TEXT.WHITE};
  font-family: ${FONT_FAMILY.REGULAR};
  font-size: 12px;
`
