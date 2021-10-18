import { Avatar } from './Avatar'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('Avatar', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(<Avatar accessibilityLabel="avatar" />)

    expect(getByLabelText(/avatar/i)).toBeDefined()
  })

  it('should render with default size', async () => {
    const { getByLabelText } = render(<Avatar accessibilityLabel="avatar" />)

    expect(getByLabelText(/avatar/i)).toHaveStyle({
      width: 64,
      height: 64
    })
  })

  it('should render with a size 76', async () => {
    const { getByLabelText } = render(
      <Avatar accessibilityLabel="avatar" size={76} />
    )

    expect(getByLabelText(/avatar/i)).toHaveStyle({
      width: 76,
      height: 76
    })
  })
})
