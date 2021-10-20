import * as S from './PerfilScreen.styles'

import { Container } from '../../components/Container/Container'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import React from 'react'
import { useUser } from '../../contexts/user.context'

const PerfilScreen = () => {
  const { user } = useUser()

  return (
    <Container>
      <ProfileInfo {...user} />
    </Container>
  )
}

export { PerfilScreen }
