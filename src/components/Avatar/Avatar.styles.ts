import styled, { css } from 'styled-components/native'

import { AvatarProps } from './Avatar'
import { COLORS } from '../../theme/theme'
import React from 'react'

export const Wrapper = styled.View<AvatarProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    background-color: ${COLORS.GRAY_DARK};
    border-radius: 50px;
  `}
`
