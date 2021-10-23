import { fireEvent, render, waitFor } from '../../utils/tests/test-utils'

import { FormEditProfile } from './FormEditProfile'
import React from 'react'

describe('FormEditProfile', () => {
  const updatePhoto = jest.fn()
  const updateUser = jest.fn()
  const user = {
    _id: '1234',
    email: 'johndoe@email',
    name: 'John Doe',
    position: 'CTO'
  }

  it('should render default elements', async () => {
    const { getByText, getByLabelText } = render(
      <FormEditProfile
        updateUser={updateUser}
        updatePhoto={updatePhoto}
        {...user}
      />
    )

    expect(getByText(/email/i)).toBeDefined()
    expect(getByText(/nome/i)).toBeDefined()
    expect(getByText(/cargo/i)).toBeDefined()
    expect(getByText(/atualizar/i)).toBeDefined()
    expect(getByLabelText(/file upload/i)).toBeDefined()
  })

  it('should change a name', async () => {
    const { getByText, getByLabelText } = render(
      <FormEditProfile
        updateUser={updateUser}
        updatePhoto={updatePhoto}
        {...user}
      />
    )

    const inputName = getByLabelText(/name/i)
    const button = getByText(/atualizar/i)

    fireEvent.changeText(inputName, 'John Smith')
    fireEvent.press(button)

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({
        _id: '1234',
        email: 'johndoe@email',
        name: 'John Smith',
        position: 'CTO'
      })
    })
  })

  it('should change a name', async () => {
    const { getByText, getByLabelText } = render(
      <FormEditProfile
        updateUser={updateUser}
        updatePhoto={updatePhoto}
        {...user}
      />
    )

    const inputName = getByLabelText(/position/i)
    const button = getByText(/atualizar/i)

    fireEvent.changeText(inputName, 'Diretor Financeiro')
    fireEvent.press(button)

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({
        _id: '1234',
        email: 'johndoe@email',
        name: 'John Doe',
        position: 'Diretor Financeiro'
      })
    })
  })
})
