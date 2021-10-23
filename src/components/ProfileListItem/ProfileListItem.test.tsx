import { ProfileListItem } from './ProfileListItem'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('ProfileListItem', () => {
  it('should render default elements', async () => {
    const { getByText } = render(
      <ProfileListItem title="Profile" subtitle="Edit your profile" />
    )

    expect(getByText(/edit/i)).toBeDefined()
  })
})
