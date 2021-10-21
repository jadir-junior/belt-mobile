import { IconButton } from './IconButton'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('IconButton', () => {
  it('should render default elements', async () => {
    const { getByTestId } = render(
      <IconButton testID="iconButton" icon="email-outline" />
    )

    expect(getByTestId(/iconButton/i)).toBeDefined()
  })

  it('should render a icon with color default', async () => {
    const { getByTestId } = render(<IconButton icon="email-outline" />)

    expect(getByTestId('icon')).toHaveStyle({
      color: '#9E9E9E'
    })
  })

  it('should render a icon with color danger if a error', async () => {
    const { getByTestId } = render(
      <IconButton error="email invalido" icon="email-outline" />
    )

    expect(getByTestId('icon')).toHaveStyle({
      color: '#D61B0A'
    })
  })

  it('should render a icon with a color primary', async () => {
    const { getByTestId } = render(
      <IconButton color="primary" icon="email-outline" />
    )

    expect(getByTestId('icon')).toHaveStyle({
      color: '#040404'
    })
  })

  it('should render a icon without size with 24px', async () => {
    const { getByTestId } = render(<IconButton icon="email-outline" />)

    expect(getByTestId(/icon/i)).toHaveStyle({
      fontSize: 24
    })
  })

  it('should render a icon with size 30px', async () => {
    const { getByTestId } = render(
      <IconButton size={30} icon="email-outline" />
    )

    expect(getByTestId(/icon/i)).toHaveStyle({
      fontSize: 30
    })
  })
})
