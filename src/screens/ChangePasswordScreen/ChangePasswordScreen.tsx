import * as S from './ChangePasswordScreen.styles'

import { Container } from '../../components/Container/Container'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import React from 'react'

const ChangePasswordScreen = () => (
  <Container>
    <S.TextContent>
      <Paragraph color="primary">
        crie sua senha que deve ter {'\n'} no minimo 6 caracteres
      </Paragraph>
    </S.TextContent>
  </Container>
)

export { ChangePasswordScreen }
