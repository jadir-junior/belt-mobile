import { ProfileEditScreen } from './ProfileEditScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('ProfileEditScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<ProfileEditScreen />)

    // expect(getByText(/ProfileEditScreen/i)).toBeDefined()
  })
})
