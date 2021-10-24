import { fireEvent, render, waitFor } from '../../utils/tests/test-utils'

import { MockedNavigator } from '../../utils/tests/MockedScreen'
import { ProfileEditScreen } from './ProfileEditScreen'
import React from 'react'
import { User } from '../../types/user.type'
import { UserContext } from '../../contexts/user.context'

describe('ProfileEditScreen', () => {
  const user: User = {
    _id: '1234',
    email: 'johndoe@email.com',
    name: 'John Doe',
    position: 'CTO',
    permissionFlags: 1,
    photo: 'https//photo.com'
  }

  const setUserStorageData = jest.fn()

  const updateUser = jest.fn()

  it('should render default elements', async () => {
    const { getByText, getByLabelText } = render(
      <UserContext.Provider value={{ user, setUserStorageData }}>
        <MockedNavigator component={ProfileEditScreen}></MockedNavigator>
      </UserContext.Provider>
    )

    expect(getByText(/email/i)).toBeDefined()
    expect(getByText(/nome/i)).toBeDefined()
    expect(getByText(/cargo/i)).toBeDefined()
    expect(getByText(/atualizar/i)).toBeDefined()
    expect(getByLabelText(/file upload/i)).toBeDefined()
  })
})
