import * as S from './DrawerContent.styles'

import React, { useEffect, useState } from 'react'
import { User, getUser } from '../../services/user.service'

import { Divider } from '../Divider/Divider'
import { Text } from 'react-native'
import { UserInfo } from '../UserInfo/UserInfo'

const DrawerContent = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function getUserInfo(): Promise<void> {
      try {
        const user: User | undefined = await getUser()
        setUser(user)
      } catch (error) {
        console.error(error)
      }
    }

    getUserInfo()
  }, [])

  return (
    <S.Wrapper>
      {user && <UserInfo {...user} />}
      <Divider />
    </S.Wrapper>
  )
}

export { DrawerContent }
