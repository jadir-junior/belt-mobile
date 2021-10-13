import '@testing-library/jest-native/extend-expect'

import { Chip } from './Chip'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('Chip', () => {
  it('should render default elements', async () => {
    const { getByText, getByLabelText } = render(
      <Chip title="default" accessibilityLabel="chip" />
    )

    expect(getByLabelText(/chip/i)).toBeDefined()
    expect(getByText(/default/i)).toBeDefined()
    expect(getByLabelText(/chip/i)).toHaveStyle({
      backgroundColor: '#9E9E9E'
    })
    expect(getByText(/default/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a chip with primary color', async () => {
    const { getByText, getByLabelText } = render(
      <Chip title="primary" accessibilityLabel="chip" color="primary" />
    )

    expect(getByLabelText(/chip/i)).toHaveStyle({
      backgroundColor: '#040404'
    })
    expect(getByText(/primary/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a chip with success color', async () => {
    const { getByText, getByLabelText } = render(
      <Chip title="success" accessibilityLabel="chip" color="success" />
    )

    expect(getByLabelText(/chip/i)).toHaveStyle({
      backgroundColor: '#005A09'
    })
    expect(getByText(/success/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })
})
