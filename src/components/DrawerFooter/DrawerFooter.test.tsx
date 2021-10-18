import { DrawerFooter } from './DrawerFooter'
import React from 'react'
import { render } from '../../utils/tests/test-utils'
import { version } from '../../../package.json'

describe('DrawerFooter', () => {
  it('should render default elements', async () => {
    const { getByLabelText } = render(<DrawerFooter />)

    expect(getByLabelText(/footer menu/i)).toBeDefined()
  })

  it('should render logo in footer', async () => {
    const { getByText } = render(<DrawerFooter />)

    expect(getByText(/belt/i)).toBeDefined()
  })

  it('should render a version of app', async () => {
    const { getByText } = render(<DrawerFooter />)

    expect(getByText(`v${version}`)).toBeDefined()
  })
})
