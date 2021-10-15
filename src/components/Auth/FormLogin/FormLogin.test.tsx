import { fireEvent, render, waitFor } from '../../../utils/tests/test-utils'

import { FormLogin } from './FormLogin'
import React from 'react'

describe('FormLogin', () => {
  it('should render default elements', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<FormLogin onSubmit={onSubmit} />)

    expect(getByTestId(/formLogin/i)).toBeDefined()
  })

  it('should render messages error to email and password when press button login without fill', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormLogin onSubmit={onSubmit} />)

    const button = getByText('Login')

    fireEvent.press(button)

    await waitFor(() => {
      expect(getByText(/o email é obrigatorio/i)).toBeDefined()
      expect(getByText(/a senha é obrigatoria/i)).toBeDefined()
    })
  })

  it('should render a message error email invalid when not fill correctly', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText, queryByText } = render(
      <FormLogin onSubmit={onSubmit} />
    )

    const button = getByText('Login')
    const inputPassword = getByLabelText(/password/i)
    const inputEmail = getByLabelText(/email/i)

    fireEvent.changeText(inputEmail, 'abc')
    fireEvent.changeText(inputPassword, 'abcdefg')
    fireEvent.press(button)

    await waitFor(() => {
      expect(getByText(/digite um email válido/i)).toBeDefined()
      expect(queryByText(/a senha é obrigatoria/i)).toBeNull()
    })
  })

  it('should render a message error if a password is less than 6', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText, queryByText } = render(
      <FormLogin onSubmit={onSubmit} />
    )

    const button = getByText('Login')
    const inputPassword = getByLabelText(/password/i)
    const inputEmail = getByLabelText(/email/i)

    fireEvent.changeText(inputEmail, 'johndoe@email.com')
    fireEvent.changeText(inputPassword, 'abc')
    fireEvent.press(button)

    await waitFor(() => {
      expect(queryByText(/digite um email válido/i)).toBeNull()
      expect(queryByText(/o email é obrigatorio/i)).toBeNull()
      expect(
        getByText(/A senha deve conter pelo menos 6 digitos/i)
      ).toBeDefined()
    })
  })

  it('should if fields correctly fill than call onSubmit with payload', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText } = render(
      <FormLogin onSubmit={onSubmit} />
    )

    const button = getByText('Login')
    const inputPassword = getByLabelText(/password/i)
    const inputEmail = getByLabelText(/email/i)

    fireEvent.changeText(inputEmail, 'johndoe@email.com')
    fireEvent.changeText(inputPassword, 'abcdef')
    fireEvent.press(button)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
      expect(onSubmit).toHaveBeenCalledWith({
        email: 'johndoe@email.com',
        password: 'abcdef'
      })
    })
  })

  it('should show and hide a password text if pressed icon button lock', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <FormLogin onSubmit={onSubmit} />
    )

    const inputPassword = getByLabelText(/password/i)
    const iconButtonSecurityPassword = getByTestId(/securityPassword/i)

    fireEvent.changeText(inputPassword, 'abcdef')
    fireEvent.press(iconButtonSecurityPassword)

    expect(inputPassword.props.secureTextEntry).toBe(false)

    fireEvent.press(iconButtonSecurityPassword)

    expect(inputPassword.props.secureTextEntry).toBe(true)
  })

  it.skip('should try logged with user not exist', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByLabelText } = render(
      <FormLogin onSubmit={onSubmit} />
    )

    const button = getByText('Login')
    const inputPassword = getByLabelText(/password/i)
    const inputEmail = getByLabelText(/email/i)

    fireEvent.changeText(inputEmail, 'john@email.com')
    fireEvent.changeText(inputPassword, '123456')
    fireEvent.press(button)

    await waitFor(() => {
      expect(getByText('Não existe esse email cadastrado')).toBeDefined()
    })
  })
})
