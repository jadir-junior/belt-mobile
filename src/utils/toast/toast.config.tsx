import { BaseToast, BaseToastProps } from 'react-native-toast-message'
import { COLORS, FONT_FAMILY } from '../../theme/theme'

import React from 'react'

export const toastConfig = {
  success: ({ text1, ...rest }: BaseToastProps) => (
    <BaseToast
      {...rest}
      text1={text1}
      style={{
        backgroundColor: COLORS.SUCCESS,
        borderLeftWidth: 0,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        height: 48
      }}
      text1Style={{
        color: COLORS.WHITE,
        fontSize: 14,
        fontFamily: FONT_FAMILY.REGULAR,
        fontWeight: '400'
      }}
      trailingIconContainerStyle={{
        display: 'none'
      }}
    />
  )
}
