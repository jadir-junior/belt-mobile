import * as S from './FormEditProfile.styles'

import { FileUpload, PhotoImageProps } from '../FileUpload/FileUpload'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Avatar } from '../Avatar/Avatar'
import { COLORS } from '../../theme/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { User } from '../../types/user.type'
import { createFormData } from '../../utils/form-data/form-data'
import { uploadProfilePhoto } from '../../services/user.service'

export type FormEditProfileProps = {
  email: string
  _id: string
  photo?: string
  name?: string
  position?: string
  updatedPhoto: (user: User) => void
}

const FormEditProfile = ({
  _id,
  email,
  name,
  position,
  photo,
  updatedPhoto
}: FormEditProfileProps) => {
  const selectedPhoto = async (photo: string) => {
    const data = createFormData('file', photo)
    const response: any = await uploadProfilePhoto(_id, data)
    updatedPhoto(response.data)
  }

  return (
    <S.Wrapper>
      <S.UploadFileWrapper>
        <Avatar size={100} url={photo} />
        <S.FileUploadWrapper>
          <FileUpload onSelectPhoto={selectedPhoto}>
            <S.PhotoButton>
              <Icon name="camera-outline" size={20} color={COLORS.WHITE} />
            </S.PhotoButton>
          </FileUpload>
        </S.FileUploadWrapper>
      </S.UploadFileWrapper>
    </S.Wrapper>
  )
}

export { FormEditProfile }
