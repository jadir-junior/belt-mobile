import * as S from './DrawerContent.styles'

import { AppStackParamList } from '../../routes/AppStack'
import { Divider } from '../Divider/Divider'
import { DrawerFooter } from '../DrawerFooter/DrawerFooter'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem } from '../ListItem/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { UserInfo } from '../UserInfo/UserInfo'
import { useNavigation } from '@react-navigation/core'
import { useUser } from '../../contexts/user.context'

type DrawerContentProps = NativeStackNavigationProp<AppStackParamList>

const DrawerContent = () => {
  const { user } = useUser()
  const navigation = useNavigation<DrawerContentProps>()

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
          icon={<MaterialIcons name="person" size={24} />}
          onPress={() => navigation.navigate('Perfil')}
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
