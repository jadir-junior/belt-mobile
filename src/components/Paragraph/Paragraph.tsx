import * as S from './Paragraph.styles'

import React from 'react'

export type ParagraphProps = {
  children: React.ReactNode
  color?: 'default' | 'primary'
}

const Paragraph = ({ children, color = 'default' }: ParagraphProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export { Paragraph }
