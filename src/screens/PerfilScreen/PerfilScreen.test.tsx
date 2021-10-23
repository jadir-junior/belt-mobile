import { MockedNavigator } from '../../utils/tests/MockedScreen'
import { PerfilScreen } from './PerfilScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('PerfilScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(
      <MockedNavigator component={PerfilScreen}></MockedNavigator>
    )

    // expect(getByText(/PerfilScreen/i)).toBeDefined()
  })
})
