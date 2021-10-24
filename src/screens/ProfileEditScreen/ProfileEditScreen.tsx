import * as S from './ProfileEditScreen.styles'

import {
  updateProfileUser,
  uploadProfilePhoto
} from '../../services/user.service'

import { AppStackParamList } from '../../routes/AppStack'
import { Container } from '../../components/Container/Container'
import { FormEditProfile } from '../../components/FormEditProfile/FormEditProfile'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import Toast from 'react-native-toast-message'
import { User } from '../../types/user.type'
import { createFormData } from '../../utils/form-data/form-data'
import { useNavigation } from '@react-navigation/core'
import { useUser } from '../../contexts/user.context'

type ProfileEditScreenProps = NativeStackNavigationProp<AppStackParamList>

const ProfileEditScreen = () => {
  const { user, setUserStorageData } = useUser()
  const navigation = useNavigation<ProfileEditScreenProps>()

  const updatePhoto = async (photo: string) => {
    const data = createFormData('file', photo)
    const response: any = await uploadProfilePhoto(user._id, data)
    await setUserStorageData(response.data)
  }

  const updateUser = async (user: User) => {
    try {
      const response: any = await updateProfileUser(user)
      await setUserStorageData(response.data)
      Toast.show({
        type: 'success',
        text1: 'Perfil atualizado com sucesso',
        topOffset: 40
      })
      navigation.pop()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container accessibilityLabel="edit profile">
      <FormEditProfile
        updateUser={updateUser}
        updatePhoto={updatePhoto}
        {...user}
      />
    </Container>
  )
}

export { ProfileEditScreen }
