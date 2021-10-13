import * as S from './ErrorText.styles'

import React from 'react'

export type ErrorTextProps = {
  children: React.ReactNode
}

const ErrorText = ({ children }: ErrorTextProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export { ErrorText }
