import { LoginScreen } from './LoginScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('LoginScreen', () => {
  it('should renders elements default', async () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />)

    expect(getByText(/belt/i)).toBeDefined()
    expect(getByText(/por favor faça login para continuar/i)).toBeDefined()
    expect(getByPlaceholderText(/email/i)).toBeDefined()
    expect(getByPlaceholderText(/senha/i)).toBeDefined()
    expect(getByText('Login')).toBeDefined()
  })
})
