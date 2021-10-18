import { rest } from 'msw'

type LoginReqBody = {
  email: string
  password: string
}

export const handlers = [
  rest.post<LoginReqBody>('/login', (req, res, ctx) => {
    const { email } = req.body

    if (email !== 'johndoe@email.com') {
      return res(
        ctx.json({
          errors: [
            {
              msg: 'Invalid email',
              param: 'email',
              location: 'verify user email'
            }
          ]
        })
      )
    }
  })
]
