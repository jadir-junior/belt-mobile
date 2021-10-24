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

  it('should render the fields is required', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormChangePassword onSubmit={onSubmit} />)

    fireEvent.press(getByText(/atualizar a senha/i))

    await waitFor(() => {
      expect(getByText(/A senha é obrigatória/i))
      expect(getByText(/A confirmação de senha é obrigatória/i))
    })
  })

  it('should render a ERROR if the fields dont fill with more than 5 characters', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText } = render(
      <FormChangePassword onSubmit={onSubmit} />
    )

    fireEvent.changeText(getByLabelText('password'), 'abc')
    fireEvent.changeText(getByLabelText('confirm password'), 'abc')

    fireEvent.press(getByText(/atualizar a senha/i))

    await waitFor(() => {
      expect(getByText(/A senha deve conter pelo menos 6 digitos/i))
      expect(
        getByText(/A confirmação de senha deve conter pelo menos 6 digitos/i)
      )
    })
  })

  it('should render a ERROR if the field not match', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText } = render(
      <FormChangePassword onSubmit={onSubmit} />
    )

    fireEvent.changeText(getByLabelText('password'), 'abcd1234')
    fireEvent.changeText(getByLabelText('confirm password'), 'abcd123')

    fireEvent.press(getByText(/atualizar a senha/i))

    await waitFor(() => {
      expect(getByText(/As senhas não são iguais/i))
    })
  })

  it('should send a change password', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText } = render(
      <FormChangePassword onSubmit={onSubmit} />
    )

    fireEvent.changeText(getByLabelText('password'), 'abcd123')
    fireEvent.changeText(getByLabelText('confirm password'), 'abcd123')

    fireEvent.press(getByText(/atualizar a senha/i))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        password: 'abcd123',
        confirmPassword: 'abcd123'
      })
    })
  })
})
