const { reloadApp, launchApp } = require('detox-expo-helpers')

describe('Example', () => {
  beforeAll(async () => {
    await launchApp()
  })

  beforeEach(async () => {
    await reloadApp()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
  })

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap()
    await expect(element(by.text('Hello!!!'))).toBeVisible()
  })

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap()
    await expect(element(by.text('World!!!'))).toBeVisible()
  })
})
