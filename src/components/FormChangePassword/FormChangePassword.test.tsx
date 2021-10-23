import { fireEvent, render, waitFor } from '../../utils/tests/test-utils'

import { FormChangePassword } from './FormChangePassword'
import React from 'react'

describe('FormChangePassword', () => {
  it('should render default elements', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormChangePassword onSubmit={onSubmit} />)

    expect(getByText(/nova senha/i)).toBeDefined()
    expect(getByText(/confirme sua senha/i)).toBeDefined()
    expect(getByText(/atualizar a senha/i)).toBeDefined()
  })

  // verifu how put two waitFor on only one it
  it('should render a input new password and when click on icon button show password', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByTestId, getByLabelText } = render(
      <FormChangePassword onSubmit={onSubmit} />
    )

    const input = getByLabelText('password')
    const iconButton = getByTestId('passwordIconButton')

    fireEvent.changeText(input, '1234')
    fireEvent.press(iconButton)

    await waitFor(() => {
      expect(input.props.secureTextEntry).toBe(false)
    })
  })

  // verifu how put two waitFor on only one it
  it('should render a input confirm password and when click on icon button show password', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <FormChangePassword onSubmit={onSubmit} />
    )

    const input = getByLabelText('confirm password')
    const iconButton = getByTestId('confirmPasswordIconButton')

    expect(input).toBeDefined()
    expect(iconButton).toBeDefined()

    fireEvent.changeText(input, '1234')
    fireEvent.press(iconButton)

    await waitFor(() => {
      expect(input.props.secureTextEntry).toBe(false)
    })
  })
})
