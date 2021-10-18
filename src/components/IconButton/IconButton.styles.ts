import styled, { css } from 'styled-components/native'

import { COLORS } from '../../theme/theme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export const Wrapper = styled.TouchableOpacity``

const colorsModifiers = (color: string) => {
  switch (color) {
    case 'default':
      return COLORS.GRAY_DARK
    case 'primary':
      return COLORS.PRIMARY
    default:
      return COLORS.GRAY_DARK
  }
}

type IconProps = {
  error: boolean
  color: string
  size: number
}

export const Icon = styled(MaterialIcons)<IconProps>`
  ${({ error, color, size }) => css`
    color: ${error && COLORS.DANGER ? COLORS.DANGER : colorsModifiers(color)};
    font-size: ${size}px;
  `}
`
