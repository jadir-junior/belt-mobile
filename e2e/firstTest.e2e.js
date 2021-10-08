describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Login Page'))).toBeVisible()
  })

  it('should show hello screen after tap', async () => {
    await element(by.label('email')).typeText('johndoe@email.com')
    await element(by.label('password')).typeText('12345')
    await element(by.label('Log in')).tap()
  })
})
