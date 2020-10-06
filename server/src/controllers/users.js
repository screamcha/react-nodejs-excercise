const { StatusCodes } = require('http-status-codes')

const usersService = require('../services/users')
const { AUTH_COOKIE_NAME } = require('../constants')

const login = async (ctx) => {
  const { username, password } = ctx.request.body

  if (!username || !password) {
    ctx.response.status = StatusCodes.BAD_REQUEST
    return
  }

  const jwt = await usersService.loginUser(username, password)

  if (!jwt) {
    ctx.response.status = StatusCodes.UNAUTHORIZED
    return
  }

  ctx.cookies.set(AUTH_COOKIE_NAME, jwt, { domain: process.env.CLIENT_URL })
  ctx.status = StatusCodes.OK
}

module.exports = {
  login
}
