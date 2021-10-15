import '@testing-library/jest-native/extend-expect'

import { Button } from './Button'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('Button', () => {
  it('should render default elements', async () => {
    const { getByText, getByLabelText } = render(
      <Button title={'Log in'} accessibilityLabel="login" />
    )

    expect(getByText(/log in/i)).toBeDefined()
    expect(getByLabelText('login')).toBeDefined()
  })

  it('should render a button with color primary', async () => {
    const { getByText, getByLabelText } = render(
      <Button title={'Log in'} color="primary" accessibilityLabel="login" />
    )

    expect(getByLabelText('login')).toHaveStyle({
      backgroundColor: '#040404'
    })
    expect(getByText(/log in/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a button with color secondary', async () => {
    const { getByText, getByLabelText } = render(
      <Button title={'Log in'} color="secondary" accessibilityLabel="login" />
    )

    expect(getByLabelText('login')).toHaveStyle({
      backgroundColor: '#FB9902'
    })
    expect(getByText(/log in/i)).toHaveStyle({
      color: '#040404'
    })
  })
})
