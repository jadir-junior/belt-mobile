import { PerfilScreen } from './PerfilScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('PerfilScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<PerfilScreen />)

    // expect(getByText(/PerfilScreen/i)).toBeDefined()
  })
})
