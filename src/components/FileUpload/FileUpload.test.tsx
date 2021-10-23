import { FileUpload } from './FileUpload'
import React from 'react'
import { Text } from 'react-native'
import { render } from '../../utils/tests/test-utils'

describe('FileUpload', () => {
  it('should render default elements', async () => {
    const onSelectPhoto = jest.fn()
    const { getByLabelText } = render(
      <FileUpload onSelectPhoto={onSelectPhoto}>
        <Text>File</Text>
      </FileUpload>
    )

    expect(getByLabelText(/file upload/i)).toBeDefined()
  })
})
