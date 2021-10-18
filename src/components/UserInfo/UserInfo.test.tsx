import React from 'react'
import { UserInfo } from './UserInfo'
import { render } from '@testing-library/react-native'

describe('UserInfo', () => {
  it.skip('should render default elements', async () => {
    const { getByText } = render(<UserInfo />)

    expect(getByText(/UserInfo/i)).toBeDefined()
  })
})
