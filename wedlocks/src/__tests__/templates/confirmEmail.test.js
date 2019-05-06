import confirmEmail from '../../templates/confirmEmail'

describe('confirmEmail', () => {
  it('should have the right subject', () => {
    expect.assertions(1)
    expect(confirmEmail.subject()).toBe('Please confirm your email address')
  })

  it('should have the right text', () => {
    expect.assertions(1)
    expect(
      confirmEmail.text({
        confirmLink: 'https://unlock-protocol.com/confirm...',
      })
    ).toBe(
      `Welcome to Unlock!

To get started, please confirm your email address by clicking on the following link:

  https://unlock-protocol.com/confirm...

Once your email address is confirmed, you'll be able to use your Unlock account to pay for content and services.

If you have any questions, you can always email us at hello@unlock-protocol.com.

And again, welcome!

The Unlock team
`
    )
  })
})
