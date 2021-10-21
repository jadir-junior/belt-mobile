import {
  ImageInfoProps,
  PhotoImageProps
} from '../../components/FileUpload/FileUpload'

import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'
import { Platform } from 'react-native'
import { data } from 'msw/lib/types/context'

export const createFormData = (
  nameAppend: string,
  photo: string,
  body = {}
) => {
  const uriParts = photo.split('.')
  const fileType = uriParts[uriParts.length - 1]

  const data = new FormData()
  data.append(nameAppend, {
    uri: photo,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  })

  // const uri: string | Blob =
  //   Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri

  return data
}
