import '@testing-library/jest-native/extend-expect'

import { ErrorText } from './ErrorText'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('ErrorText', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<ErrorText errorMessage="email invalido" />)

    expect(getByText(/email invalido/i)).toBeDefined()
    expect(getByText(/email invalid/i)).toHaveStyle({
      color: '#D61B0A'
    })
  })
})
