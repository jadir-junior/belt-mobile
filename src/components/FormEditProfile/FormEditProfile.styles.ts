import { COLORS } from '../../theme/theme'
import React from 'react'
import styled from 'styled-components/native'

export const Wrapper = styled.View``

export const UploadFileWrapper = styled.View`
  margin-top: 16px;
  align-items: center;
`

export const FileUploadWrapper = styled.View`
  margin-top: -36px;
  margin-right: -66px;
  z-index: 6;
  elevation: 6;
`

export const PhotoButton = styled.View`
  background-color: ${COLORS.PRIMARY};
  padding: 10px;
  border: 2px solid ${COLORS.WHITE};
  border-radius: 50px;
  elevation: 4;
`
