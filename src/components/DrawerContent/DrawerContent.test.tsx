import { fireEvent, render } from '../../utils/tests/test-utils'

import { DrawerContent } from './DrawerContent'
import { MockedNavigator } from '../../utils/tests/MockedScreen'
import React from 'react'

describe('DrawerContent', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(
      <MockedNavigator component={DrawerContent} />
    )

    expect(
      getByLabelText(/disponibilização de produtos para venda/i)
    ).toBeDefined()
    expect(getByLabelText(/perfil/i)).toBeDefined()
  })
})
