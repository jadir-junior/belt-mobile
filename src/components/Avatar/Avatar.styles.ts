import styled, { css } from 'styled-components/native'

import { AvatarProps } from './Avatar'
import { COLORS } from '../../theme/theme'
import React from 'react'

export const Wrapper = styled.View<AvatarProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50px;
    background-color: ${COLORS.GRAY_DARK};
  `}
`
