import * as S from './ChangePasswordScreen.styles'

import {
  FormChangePassword,
  changePasswordDTO
} from '../../components/FormChangePassword/FormChangePassword'

import { AppStackParamList } from '../../routes/AppStack'
import { Container } from '../../components/Container/Container'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import React from 'react'
import Toast from 'react-native-toast-message'
import { updateProfileUser } from '../../services/user.service'
import { useNavigation } from '@react-navigation/core'
import { useUser } from '../../contexts/user.context'

type changePasswordScreenProps = NativeStackNavigationProp<AppStackParamList>

const ChangePasswordScreen = () => {
  const { user } = useUser()
  const navigation = useNavigation<changePasswordScreenProps>()

  const onSubmit = async (data: changePasswordDTO) => {
    updateProfileUser({ ...user, ...{ password: data.password } })
    Toast.show({
      type: 'success',
      text1: 'Senha atualizada com sucesso',
      topOffset: 40
    })
    navigation.pop()
  }

  return (
    <Container>
      <S.TextContent>
        <Paragraph color="primary">
          crie sua senha que deve ter {'\n'} no minimo 6 caracteres
        </Paragraph>
      </S.TextContent>
      <FormChangePassword onSubmit={onSubmit} />
    </Container>
  )
}

export { ChangePasswordScreen }
