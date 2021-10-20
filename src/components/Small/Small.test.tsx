import React from 'react'
import { Small } from './Small'
import { render } from '../../utils/tests/test-utils'

describe('Small', () => {
  it('should render small with default properties', async () => {
    const { getByText } = render(<Small>text</Small>)

    expect(getByText(/text/i)).toBeDefined()
    expect(getByText(/text/i)).toHaveStyle({
      color: '#9E9E9E'
    })
  })

  it('should render small with color primary', async () => {
    const { getByText } = render(<Small color="primary">text</Small>)

    expect(getByText(/text/i)).toHaveStyle({
      color: '#040404'
    })
  })

  it('should render small with weight bold', async () => {
    const { getByText } = render(<Small weight="bold">text</Small>)

    expect(getByText(/text/i)).toHaveStyle({
      fontWeight: 'bold'
    })
  })
})
