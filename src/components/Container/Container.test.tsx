import { Container } from './Container'
import React from 'react'
import { Text } from 'react-native'
import { render } from '../../utils/tests/test-utils'

describe('Container', () => {
  it('should render default elements and children element', async () => {
    const { getByTestId, getByText } = render(
      <Container>
        <Text>Test</Text>
      </Container>
    )

    expect(getByTestId(/container/i)).toBeDefined()
    expect(getByText(/test/i)).toBeDefined()
  })

  it('should render with configuration initials', async () => {
    const { getByTestId } = render(
      <Container>
        <Text>Test</Text>
      </Container>
    )

    expect(getByTestId(/container/i)).toHaveStyle({
      paddingLeft: 24,
      paddingRight: 24,
      backgroundColor: '#FFFFFF'
    })
  })
})
