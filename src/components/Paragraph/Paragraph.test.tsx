import { Paragraph } from './Paragraph'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('Paragraph', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<Paragraph>im a paragraph</Paragraph>)

    expect(getByText(/im a paragraph/i)).toBeDefined()
  })

  it('should render default color', async () => {
    const { getByText } = render(<Paragraph>im a paragraph</Paragraph>)

    expect(getByText(/im a paragraph/i)).toHaveStyle({
      color: '#9E9E9E'
    })
  })

  it('should render with a primary color', async () => {
    const { getByText } = render(
      <Paragraph color="primary">im a paragraph</Paragraph>
    )

    expect(getByText(/im a paragraph/i)).toHaveStyle({
      color: '#040404'
    })
  })
})
