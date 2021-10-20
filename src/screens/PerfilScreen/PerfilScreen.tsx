import * as S from './PerfilScreen.styles'

import { Card } from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProfileListItem } from '../../components/ProfileListItem/ProfileListItem'
import React from 'react'
import { useUser } from '../../contexts/user.context'

const PerfilScreen = () => {
  const { user } = useUser()

  return (
    <Container>
      <ProfileInfo {...user} />
      <ProfileListItem title="Perfil" subtitle="Edite o seu perfil" />
    </Container>
  )
}

export { PerfilScreen }
