import { HomeScreen } from './HomeScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('Home Screen', () => {
  it('should render', async () => {
    const { getByTestId } = render(<HomeScreen testID="home" />)

    expect(getByTestId('home')).toBeDefined()
  })
})
