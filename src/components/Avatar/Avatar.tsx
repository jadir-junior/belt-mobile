import * as S from './Avatar.styles'

import React from 'react'

export type AvatarProps = {
  size?: number
}

const Avatar = ({ size = 64, ...props }) => (
  <S.Wrapper size={size} {...props}></S.Wrapper>
)

export { Avatar }
