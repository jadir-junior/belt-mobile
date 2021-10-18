import { ListItem } from './ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { render } from '../../utils/tests/test-utils'

describe('ListItem', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(
      <ListItem accessibilityLabel="list item" title="activity" />
    )

    expect(getByLabelText(/list item/i)).toBeDefined()
  })

  it('Should render with a title', async () => {
    const { getByText } = render(
      <ListItem accessibilityLabel="list item" title="activity" />
    )

    expect(getByText(/activity/i)).toBeDefined()
  })

  it('should render a icon if a icon', async () => {
    const { getByText } = render(
      <ListItem
        accessibilityLabel="list item"
        title="activity"
        icon={<MaterialIcons name="notifications" size={24} />}
      />
    )

    expect(getByText(/activity/i)).toBeDefined()
  })
})
