export default function generate() {
  let password: string = ''

  // pode-se usar table ASCII
  let possibleChars: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+'
  let passwordLen: number = 8

  for (let i = 0; i < passwordLen; i++) {
    password += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    )
  }

  return password
}
