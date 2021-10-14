import '@testing-library/jest-native/extend-expect'

import { act, fireEvent, render, waitFor } from '@testing-library/react-native'

import { Input } from './Input'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

describe('Input', () => {
  it('should render with placeholder', async () => {
    const { getByPlaceholderText } = render(<Input placeholder="Email" />)

    expect(getByPlaceholderText(/email/i)).toBeDefined()
  })

  it('should render with a border black when user focus input', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="Email" />
    )

    const input = getByPlaceholderText(/email/i)
    const wrapper = getByTestId('inputWrapper')

    fireEvent(input, 'focus')

    act(() => {
      expect(wrapper).toHaveStyle({
        borderColor: '#040404'
      })
    })
  })

  it('should change after focus to border color gray dark', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="Email" />
    )

    const input = getByPlaceholderText(/email/i)
    const wrapper = getByTestId('inputWrapper')

    fireEvent(input, 'focus')

    act(() => {
      expect(wrapper).toHaveStyle({
        borderColor: '#040404'
      })
    })

    // on blur
    fireEvent(input, 'blur')

    act(() => {
      expect(wrapper).toHaveStyle({
        borderColor: '#9E9E9E'
      })
    })
  })

  it('should render with a icon', async () => {
    const { getByTestId } = render(
      <Input
        placeholder="Email"
        icon={<MaterialIcons name="mail-outline" size={24} />}
      />
    )

    await waitFor(() => {
      expect(getByTestId('icon')).toBeDefined()
    })
  })

  it('should render with error', async () => {
    const { getByTestId } = render(
      <Input
        placeholder="Email"
        error={'email invalido'}
        icon={<MaterialIcons name="mail-outline" size={24} />}
      />
    )

    const wrapper = getByTestId('inputWrapper')
    const icon = getByTestId('icon')

    expect(wrapper).toHaveStyle({
      borderColor: '#D61B0A'
    })
    await waitFor(() => {
      expect(icon).toHaveStyle({
        color: '#D61B0A'
      })
    })
  })
})
