import { FormLogin } from './FormLogin'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('FormLogin', () => {
  it('should render default elements', async () => {
    const { getByTestId } = render(<FormLogin />)

    expect(getByTestId(/formLogin/i)).toBeDefined()
  })
})
