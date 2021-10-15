import { HomeScreen } from './HomeScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('HomeScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<HomeScreen />)

    expect(getByText(/home screen/i)).toBeDefined()
  })
})
