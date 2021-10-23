import { fireEvent, render, waitFor } from '../../utils/tests/test-utils'

import { FormChangePassword } from './FormChangePassword'
import React from 'react'

describe('FormChangePassword', () => {
  it('should render default elements', async () => {
    const { getByText } = render(<FormChangePassword />)

    expect(getByText(/nova senha/i)).toBeDefined()
  })

  // verifu how put two waitFor on only one it
  it('should render a input new password and when click on icon button show password', async () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <FormChangePassword />
    )

    const input = getByLabelText(/password/i)
    const iconButton = getByTestId(/passwordiconbutton/i)

    fireEvent.changeText(input, '1234')
    fireEvent.press(iconButton)

    await waitFor(async () => {
      expect(input.props.secureTextEntry).toBe(false)
    })
  })
})
