import * as S from './DrawerContent.styles'

import React, { useEffect, useState } from 'react'
import { User, getUser } from '../../services/user.service'

import { Divider } from '../Divider/Divider'
import { ListItem } from '../ListItem/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
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
      <S.ListContent>
        <ListItem
          title="Disp. produtos para venda"
          icon={<MaterialIcons name="inventory" size={24} />}
        ></ListItem>
      </S.ListContent>
    </S.Wrapper>
  )
}

export { DrawerContent }
