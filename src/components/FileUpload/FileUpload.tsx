import * as S from './FileUpload.styles'

import {
  ImagePickerOptions,
  ImagePickerResult,
  launchImageLibraryAsync
} from 'expo-image-picker'

import { ExpandImagePickerResult } from 'expo-image-picker/build/ImagePicker.types'
import React from 'react'
import { View } from 'react-native'

export type PhotoImageProps = ImagePickerResult

export type FileUploadProps = {
  children: React.ReactNode
  onSelectPhoto: (uri: string) => void
}

const FileUpload = ({ onSelectPhoto, children }: FileUploadProps) => {
  const handleChoosePhoto = async () => {
    try {
      const photo = await launchImageLibraryAsync({
        allowsEditing: true,
        base64: true
      })
      if (!photo.cancelled) {
        onSelectPhoto(photo.uri)
      } else {
        console.warn(
          'The use canceled a action to send photo to parent component!'
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Wrapper
      onPress={handleChoosePhoto}
      activeOpacity={1}
      accessibilityLabel="fileUpload"
    >
      <View>{children}</View>
    </S.Wrapper>
  )
}

export { FileUpload }
