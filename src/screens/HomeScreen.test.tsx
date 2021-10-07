import HomeScreen from './HomeScreen'
import React from 'react'
import { render } from '@testing-library/react-native'

describe('HomeScreen', () => {
  it('should render title Home Screen', async () => {
    const { getByText } = render(<HomeScreen />)

    const title = getByText('Home Screen')

    expect(title).toBeTruthy()
  })
})
