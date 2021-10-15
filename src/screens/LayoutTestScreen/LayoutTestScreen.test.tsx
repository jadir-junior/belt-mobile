import { LayoutTestScreen } from './LayoutTestScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('LayoutTestScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<LayoutTestScreen />)

    expect(getByText(/LayoutTestScreen/i)).toBeDefined()
  })
})
