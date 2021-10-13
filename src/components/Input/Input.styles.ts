import { COLORS, COLORS_TEXT, FONT_FAMILY } from '../../theme/theme'
import styled, { css } from 'styled-components/native'

import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { TextInput } from 'react-native'

const inputWrapperModifiers = {
  error: () => css`
    border-color: ${COLORS.DANGER};
  `,
  focus: () => css`
    border-color: ${COLORS.PRIMARY};
  `
}

type InputWrapperProps = {
  focus: boolean
  error: boolean
}

type IconWrapperProps = {
  error: boolean
}

export const Wrapper = styled.View``

export const InputWrapper = styled.View<InputWrapperProps>`
  ${({ error, focus }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    height: 49px;
    border: 1px solid ${COLORS.GRAY_DARK};
    width: 100%;
    ${error && inputWrapperModifiers.error()};
    ${focus && inputWrapperModifiers.focus()};
  `}
`

export const Icon = styled(MaterialIcons)<IconWrapperProps>`
  ${({ error }) => css`
    color: ${error ? COLORS.DANGER : COLORS.GRAY_DARK};
    padding: 0 8px;
  `}
`

export const IconButton = styled.View`
  padding: 0 8px;
`

export const Input = styled(TextInput)`
  color: ${COLORS_TEXT.PRIMARY};
  font-family: ${FONT_FAMILY.REGULAR};
  background-color: transparent;
  flex: 1;
  padding: 16px 16px;
`

export const ErrorWrapper = styled.View`
  margin-top: 4px;
`
