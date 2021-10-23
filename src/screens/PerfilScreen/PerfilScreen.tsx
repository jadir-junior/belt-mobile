import * as S from './PerfilScreen.styles'

import { AppStackParamList } from '../../routes/AppStack'
import { COLORS } from '../../theme/theme'
import { Container } from '../../components/Container/Container'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProfileListItem } from '../../components/ProfileListItem/ProfileListItem'
import React from 'react'
import { useAuth } from '../../contexts/Auth'
import { useNavigation } from '@react-navigation/core'
import { useUser } from '../../contexts/user.context'

type PerfilScreenProps = NativeStackNavigationProp<AppStackParamList>

const PerfilScreen = () => {
  const { user } = useUser()
  const { signOut } = useAuth()
  const navigation = useNavigation<PerfilScreenProps>()

  return (
    <Container>
      <ProfileInfo {...user} />
      <S.ListContent>
        <S.ItemContent>
          <ProfileListItem
            title="Perfil"
            subtitle="Edite o seu perfil"
            onPress={() => {
              navigation.navigate('ProfileEdit')
            }}
          />
        </S.ItemContent>
        <S.ItemContent>
          <ProfileListItem
            title="Alterar a senha"
            subtitle="Atualize frequentemente sua senha"
            onPress={() => {
              navigation.navigate('ChangePassword')
            }}
          />
        </S.ItemContent>
        <S.ItemContent>
          <ProfileListItem
            title="Sair"
            subtitle="Você irá sair do aplicativo"
            icon="logout"
            iconColor={COLORS.DANGER}
            onPress={() => {
              signOut()
            }}
          />
        </S.ItemContent>
      </S.ListContent>
    </Container>
  )
}

export { PerfilScreen }
