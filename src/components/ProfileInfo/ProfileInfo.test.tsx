import { ProfileInfo } from './ProfileInfo'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('ProfileInfo', () => {
  const user = {
    name: 'John Doe',
    position: 'CTO'
  }

  it('should render default elements', async () => {
    const { getByText, getByLabelText } = render(<ProfileInfo {...user} />)

    expect(getByText(/john doe/i)).toBeDefined()
    expect(getByText(/cto/i)).toBeDefined()
    expect(getByLabelText(/profile photo/i)).toBeDefined()
    expect(getByText(/john doe/i)).toHaveStyle({
      color: '#040404'
    })
    expect(getByText(/cto/i)).toHaveStyle({
      color: '#9E9E9E'
    })
  })
})
