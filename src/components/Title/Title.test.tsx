import React from 'react'
import { Title } from './Title'
import { render } from '@testing-library/react-native'

describe('Title', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<Title />)

    expect(getByText(/Title/i)).toBeDefined()
  })
})