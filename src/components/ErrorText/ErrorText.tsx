import * as S from './ErrorText.styles'

import React from 'react'
import { Text } from 'react-native'

export type ErrorTextProps = {
  errorMessage: string
}

const ErrorText = ({ errorMessage }: ErrorTextProps) => (
  <S.Wrapper>{errorMessage}</S.Wrapper>
)

export { ErrorText }
