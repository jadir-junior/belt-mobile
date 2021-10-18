import { DrawerContent } from './DrawerContent'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('DrawerContent', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<DrawerContent />)

    // expect(getByText(/DrawerContent/i)).toBeDefined()
  })
})
