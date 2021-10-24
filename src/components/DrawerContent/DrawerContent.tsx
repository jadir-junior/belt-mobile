import * as S from './DrawerContent.styles'

import { Divider } from '../Divider/Divider'
import { DrawerFooter } from '../DrawerFooter/DrawerFooter'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem } from '../ListItem/ListItem'
import React from 'react'
import { UserInfo } from '../UserInfo/UserInfo'
import { useUser } from '../../contexts/user.context'

type DrawerContentProps = {
  navigation: DrawerNavigationHelpers
}

const DrawerContent = ({ navigation }: DrawerContentProps) => {
  const { user } = useUser()

  return (
    <S.Wrapper>
      {user && <UserInfo {...user} />}
      <Divider />
      <S.ListContent>
        <ListItem
          title="Disp. produtos para venda"
          accessibilityLabel="disponibilização de produtos para venda"
          icon={<Icon name="archive-outline" size={24} />}
        ></ListItem>
        <ListItem
          title="Perfil"
          accessibilityLabel="perfil"
          icon={<Icon name="account-outline" size={24} />}
          onPress={() => {
            navigation.closeDrawer()
            navigation.navigate('Perfil')
          }}
        />
      </S.ListContent>
      <Divider />
      <S.FooterContent>
        <DrawerFooter />
      </S.FooterContent>
    </S.Wrapper>
  )
}

export { DrawerContent }
