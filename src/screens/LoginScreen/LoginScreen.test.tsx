import { LoginScreen } from './LoginScreen'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('LoginScreen', () => {
  it('should renders elements default', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <LoginScreen />
    )

    expect(getByText(/belt/i)).toBeDefined()
    expect(getByText(/por favor faça login para continuar/i)).toBeDefined()
    expect(getByPlaceholderText(/email/i)).toBeDefined()
    expect(getByPlaceholderText(/password/i)).toBeDefined()
    expect(getByText('Login')).toBeDefined()
  })
})
