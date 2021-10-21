import { FormEditProfile } from './FormEditProfile'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('FormEditProfile', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<FormEditProfile />)

    // expect(getByText(/FormEditProfile/i)).toBeDefined()
  })
})
