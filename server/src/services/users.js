const jwt = require('jsonwebtoken')
const usersAccessor = require('../db/accessors/users')
const { createPasswordHmac } = require('../utils/password')

const loginUser = async (username, password) => {
  const user = await usersAccessor.getUser(username)

  if (!user) {
    return
  }

  const passwordHash = createPasswordHmac(password)

  if (passwordHash !== user.passwordHash) {
    return
  }

  return jwt.sign({ id: user.id }, process.env.AUTH_SECRET, {
    audience: process.env.CLIENT_URL,
    expiresIn: '1y'
  })
}

module.exports = {
  loginUser
}
