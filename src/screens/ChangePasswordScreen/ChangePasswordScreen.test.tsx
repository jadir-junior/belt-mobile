import { ChangePasswordScreen } from './ChangePasswordScreen'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('ChangePasswordScreen', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<ChangePasswordScreen />)

    const informationText = getByText(
      /crie sua senha que deve ter \n no minimo 6 caracteres/i
    )

    expect(informationText).toBeDefined()
    expect(informationText).toHaveStyle({
      color: '#040404'
    })
    expect(getByText(/nova senha/i)).toBeDefined()
  })
})
