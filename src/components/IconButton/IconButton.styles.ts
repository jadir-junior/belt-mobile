import styled, { css } from 'styled-components/native'

import { COLORS } from '../../theme/theme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
`

type IconProps = {
  error: boolean
}

export const Icon = styled(MaterialIcons)<IconProps>`
  ${({ error }) => css`
    color: ${error ? COLORS.DANGER : COLORS.GRAY_DARK};
  `}
`
