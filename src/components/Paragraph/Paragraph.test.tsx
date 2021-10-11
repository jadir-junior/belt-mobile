import { Paragraph } from './Paragraph'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('Paragraph', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<Paragraph>im a paragraph</Paragraph>)

    expect(getByText(/im a paragraph/i)).toBeDefined()
  })
})
