import { COLORS } from '../../theme/theme'
import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  padding-bottom: 16px;
`

export const Photo = styled.View`
  width: 76px;
  height: 76px;
  background-color: ${COLORS.GRAY_DARK};
  border-radius: 50px;
`

export const TitleWrapper = styled.View`
  margin-top: 8px;
`

export const PositionWrapper = styled.View`
  margin-top: 4px;
`
