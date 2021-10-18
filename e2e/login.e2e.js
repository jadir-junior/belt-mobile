describe('login', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    // await device.reloadReactNative()
  })

  it(`should try login with fields dont fill and receive a message 'O email é obrigatorio' and 'A senha é obrigatoria'`, async () => {
    await element(by.label('login')).tap()

    await expect(element(by.text('o email é obrigatorio'))).toBeVisible()
    await expect(element(by.text('a senha é obrigatoria'))).toBeVisible()
  })
})
