import * as S from './DrawerContent.styles'

import React, { useEffect, useState } from 'react'
import { User, getUser } from '../../services/user.service'

import { Divider } from '../Divider/Divider'
import { DrawerFooter } from '../DrawerFooter/DrawerFooter'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem } from '../ListItem/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import { UserInfo } from '../UserInfo/UserInfo'
import { useAuth } from '../../contexts/Auth'

const DrawerContent = () => {
  const [user, setUser] = useState<User>()
  const auth = useAuth()

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
          icon={<Icon name="archive-outline" size={24} />}
        ></ListItem>
        <ListItem
          title="Sair"
          onPress={auth.signOut}
          icon={<MaterialIcons name="logout" size={24} />}
        ></ListItem>
      </S.ListContent>
      <Divider />
      <S.FooterContent>
        <DrawerFooter />
      </S.FooterContent>
    </S.Wrapper>
  )
}

export { DrawerContent }
