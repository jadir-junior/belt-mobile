import React from 'react'
import { User } from '../../services/user.service'
import { UserInfo } from './UserInfo'
import { render } from '@testing-library/react-native'

describe('UserInfo', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(<UserInfo />)

    expect(getByLabelText(/user information/i)).toBeDefined()
  })

  it('should render render with name', async () => {
    const user: User = {
      _id: '124',
      email: 'johndoe@email.com',
      permissionFlags: 1,
      name: 'John Doe'
    }
    const { getByText } = render(<UserInfo {...user} />)

    expect(getByText(/john doe/i)).toBeDefined()
  })

  it('should render render with position', async () => {
    const user: User = {
      _id: '124',
      email: 'johndoe@email.com',
      permissionFlags: 1,
      name: 'John Doe',
      position: 'CTO'
    }
    const { getByText } = render(<UserInfo {...user} />)

    expect(getByText(/cto/i)).toBeDefined()
  })
})
