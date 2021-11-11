import bcrypt from 'bcryptjs'

const comparePassword = (passwordToTest:string, passwordToVerify:string) => {
  return bcrypt.compareSync(passwordToTest, passwordToVerify)
}