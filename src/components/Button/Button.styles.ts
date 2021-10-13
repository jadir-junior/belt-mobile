import { COLORS, COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'
import styled, { css } from 'styled-components/native'

import { ButtonProps } from './Button'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'

type WrapperProps = Pick<ButtonProps, 'color'> & TouchableOpacityProps

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ color }) => css`
    padding: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${color === 'primary'
      ? COLORS.PRIMARY
      : COLORS.SECONDARY};
    border-radius: 12px;
  `}
`

type ButtonTextProps = Pick<ButtonProps, 'color'>

export const Text = styled.Text<ButtonTextProps>`
  ${({ color }) => css`
    color: ${color === 'primary' ? COLORS_TEXT.WHITE : COLORS_TEXT.PRIMARY};
    font-family: ${FONT_FAMILY.BOLD};
  `}
`
