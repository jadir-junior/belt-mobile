import { LoginScreen } from './LoginScreen'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('LoginScreen', () => {
  it('should renders elements default', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <LoginScreen />
    )

    expect(getByText(/login page/i)).toBeDefined()
    expect(getByPlaceholderText(/email/i)).toBeDefined()
    expect(getByPlaceholderText(/password/i)).toBeDefined()
    expect(getByLabelText(/log in/i)).toBeDefined()
  })
})
