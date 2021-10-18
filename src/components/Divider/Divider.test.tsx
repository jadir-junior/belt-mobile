import { Divider } from './Divider'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('Divider', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(<Divider />)

    expect(getByLabelText(/divider/i)).toBeDefined()
    expect(getByLabelText(/divider/i)).toHaveStyle({
      borderBottomColor: '#F6F6F7',
      borderBottomWidth: 1
    })
  })
})
