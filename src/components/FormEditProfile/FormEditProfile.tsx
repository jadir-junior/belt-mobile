import * as S from './FormEditProfile.styles'

import { Controller, useForm } from 'react-hook-form'

import { Avatar } from '../Avatar/Avatar'
import { Button } from '../Button/Button'
import { COLORS } from '../../theme/theme'
import { FileUpload } from '../FileUpload/FileUpload'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input } from '../Input/Input'
import React from 'react'
import { User } from '../../types/user.type'

export type FormEditProfileProps = {
  email: string
  _id: string
  photo?: string
  name?: string
  position?: string
  updatePhoto: (photo: string) => void
  updateUser: (user: User) => void
}

const FormEditProfile = ({
  _id,
  email,
  name,
  position,
  photo,
  updatePhoto,
  updateUser
}: FormEditProfileProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      _id: _id,
      email: email,
      name: name,
      position: position
    }
  })

  const selectedPhoto = async (photo: string) => {
    updatePhoto(photo)
  }

  const submit = (data: User) => {
    updateUser(data)
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
      <S.InputsWrapper>
        <Controller
          control={control}
          name="email"
          render={({ field: { value } }) => (
            <Input
              label="Email"
              value={value}
              accessibilityLabel="email"
              disabled
            />
          )}
        />
        <S.InputWrapper>
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                label="Nome"
                placeholder="Nome"
                accessibilityLabel="name"
                value={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <Controller
            control={control}
            name="position"
            render={({ field: { value, onChange } }) => (
              <Input
                label="Cargo"
                placeholder="Cargo"
                accessibilityLabel="position"
                value={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <Button
            title="Atualizar"
            accessibilityLabel="update"
            onPress={handleSubmit(submit)}
          />
        </S.ButtonWrapper>
      </S.InputsWrapper>
    </S.Wrapper>
  )
}

export { FormEditProfile }
