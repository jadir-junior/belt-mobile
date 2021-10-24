import Toast from 'react-native-toast-message'

export const Toaster = (type: 'success' | 'error', message: string) => {
  const TOP_OFFSET = 40

  return Toast.show({
    type: type,
    text1: message,
    topOffset: TOP_OFFSET
  })
}
