import { Card } from './Card'
import React from 'react'
import { Text } from 'react-native'
import { render } from '../../utils/tests/test-utils'

describe('Card', () => {
  it('should render default elements', async () => {
    const { getByText } = render(
      <Card>
        <Text>card</Text>
      </Card>
    )

    expect(getByText(/card/i)).toBeDefined()
  })
})
