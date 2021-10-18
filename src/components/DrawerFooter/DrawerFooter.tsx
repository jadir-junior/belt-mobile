import * as S from './DrawerFooter.styles'

import { Paragraph } from '../Paragraph/Paragraph'
import React from 'react'
import { version } from '../../../package.json'

const DrawerFooter = () => (
  <S.Wrapper accessibilityLabel="footer menu">
    <Paragraph color="primary">belt</Paragraph>
    <Paragraph color="primary">v{version}</Paragraph>
  </S.Wrapper>
)

export { DrawerFooter }
