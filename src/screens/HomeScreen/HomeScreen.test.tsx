import { HomeScreen } from './HomeScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('HomeScreen', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(<HomeScreen />)

    expect(getByLabelText(/home/i)).toBeDefined()
  })
})
