import * as S from './Paragraph.styles'

import React from 'react'

export type ParagraphProps = {
  children: React.ReactNode
  color?: 'default' | 'primary'
  weight?: 'regular' | 'bold'
}

const Paragraph = ({
  children,
  color = 'default',
  weight = 'regular'
}: ParagraphProps) => (
  <S.Wrapper color={color} weight={weight}>
    {children}
  </S.Wrapper>
)

export { Paragraph }
