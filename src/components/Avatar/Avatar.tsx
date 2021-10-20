import * as S from './Avatar.styles'

import { Image, ViewProps } from 'react-native'

import React from 'react'

export type AvatarProps = {
  size?: number
  url?: string
} & ViewProps

const Avatar = ({ size = 64, url, ...props }: AvatarProps) => (
  <S.ImageWrapper {...props} size={size}>
    <Image
      source={url ? { uri: url } : require('../../../assets/avatar.png')}
      style={{ width: size, height: size }}
    />
  </S.ImageWrapper>
)

export { Avatar }
