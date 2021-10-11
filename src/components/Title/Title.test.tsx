import React from 'react'
import { Title } from './Title'
import { render } from '@testing-library/react-native'

describe('Title', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<Title>belt</Title>)

    expect(getByText(/belt/i)).toBeDefined()
  })
})
