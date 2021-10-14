import '@testing-library/jest-native/extend-expect'

import { IconButton } from './IconButton'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('IconButton', () => {
  it('should render default elements', async () => {
    const { getByTestId } = render(
      <IconButton
        testID="iconButton"
        icon={<MaterialIcons name="mail-outline" size={24} />}
      />
    )

    expect(getByTestId(/iconButton/i)).toBeDefined()
  })

  it('should render a icon with color default', async () => {
    const { getByTestId } = render(
      <IconButton icon={<MaterialIcons name="mail-outline" size={24} />} />
    )

    expect(getByTestId('icon')).toHaveStyle({
      color: '#9E9E9E'
    })
  })

  it('should render a icon with color danger if a error', async () => {
    const { getByTestId } = render(
      <IconButton
        error="email invalido"
        icon={<MaterialIcons name="mail-outline" size={24} />}
      />
    )

    expect(getByTestId('icon')).toHaveStyle({
      color: '#D61B0A'
    })
  })
})
