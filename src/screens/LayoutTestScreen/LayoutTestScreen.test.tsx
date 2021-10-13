import React from 'react'
import { LayoutTestScreen } from './LayoutTestScreen'
import { render } from '@testing-library/react-native'

describe('LayoutTestScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<LayoutTestScreen />)

    expect(getByText(/LayoutTestScreen/i)).toBeDefined()
  })
})