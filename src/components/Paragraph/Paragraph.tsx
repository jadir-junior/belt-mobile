import * as S from './Paragraph.styles'

import React from 'react'

export type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export { Paragraph }
