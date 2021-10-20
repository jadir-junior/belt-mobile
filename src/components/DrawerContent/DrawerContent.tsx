import * as S from './DrawerContent.styles'

import { Divider } from '../Divider/Divider'
import { DrawerFooter } from '../DrawerFooter/DrawerFooter'
import { ListItem } from '../ListItem/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { UserInfo } from '../UserInfo/UserInfo'
import { useUser } from '../../contexts/user.context'

const DrawerContent = () => {
  const { user } = useUser()

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
      <Divider />
      <S.FooterContent>
        <DrawerFooter />
      </S.FooterContent>
    </S.Wrapper>
  )
}

export { DrawerContent }
