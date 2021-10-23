import * as S from './ChangePasswordScreen.styles'

import {
  FormChangePassword,
  changePasswordDTO
} from '../../components/FormChangePassword/FormChangePassword'

import { Container } from '../../components/Container/Container'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import React from 'react'

const ChangePasswordScreen = () => {
  const onSubmit = async (data: changePasswordDTO) => {}

  return (
    <Container>
      <S.TextContent>
        <Paragraph color="primary">
          crie sua senha que deve ter {'\n'} no minimo 6 caracteres
        </Paragraph>
      </S.TextContent>
      <FormChangePassword onSubmit={onSubmit} />
    </Container>
  )
}

export { ChangePasswordScreen }
