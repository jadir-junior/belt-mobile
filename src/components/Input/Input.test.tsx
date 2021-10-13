import '@testing-library/jest-native/extend-expect'

import { act, fireEvent, render, waitFor } from '@testing-library/react-native'

import { Input } from './Input'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

describe('Input', () => {
  it('should render with placeholder', async () => {
    const onInputChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Email" onInputChange={onInputChange} />
    )

    expect(getByPlaceholderText(/email/i)).toBeDefined()
  })

  it('should changes its value when typing', async () => {
    const onInputChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Email" onInputChange={onInputChange} />
    )

    const input = getByPlaceholderText(/email/i)

    fireEvent.changeText(input, 'johndoe@email.com')

    await waitFor(() => {
      expect(input.props.value).toEqual('johndoe@email.com')
    })
  })

  it('should render with a border black when user focus input', async () => {
    const onInputChange = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="Email" onInputChange={onInputChange} />
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
    const onInputChange = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="Email" onInputChange={onInputChange} />
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
    const onInputChange = jest.fn()
    const { getByTestId } = render(
      <Input
        placeholder="Email"
        icon={<MaterialIcons name="mail-outline" size={24} />}
        onInputChange={onInputChange}
      />
    )

    await waitFor(() => {
      expect(getByTestId('icon')).toBeDefined()
    })
  })

  it('should render with error', async () => {
    const onInputChange = jest.fn()
    const { getByTestId } = render(
      <Input
        placeholder="Email"
        errorMessage={'email invalido'}
        icon={<MaterialIcons name="mail-outline" size={24} />}
        onInputChange={onInputChange}
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

  it('should changes its value when typing', async () => {
    const onInputChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input placeholder="Email" onInputChange={onInputChange} />
    )

    const input = await getByPlaceholderText(/email/i)
    const text = 'This is my new text'
    fireEvent(input, 'changeText', text)

    expect(input.props.value).toEqual(text)
    expect(onInputChange).toHaveBeenCalledWith(text)
  })
})
