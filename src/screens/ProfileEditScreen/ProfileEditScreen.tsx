import * as S from './ProfileEditScreen.styles'

import { Container } from '../../components/Container/Container'
import { FormEditProfile } from '../../components/FormEditProfile/FormEditProfile'
import React from 'react'
import { useUser } from '../../contexts/user.context'

const ProfileEditScreen = () => {
  const { user, setUserStorageData } = useUser()

  return (
    <Container>
      <FormEditProfile updatedPhoto={setUserStorageData} {...user} />
    </Container>
  )
}

export { ProfileEditScreen }
