const { Strategy } = require('passport-jwt')
const cookie = require('cookie')

const usersAccessor = require('../db/accessors/users')
const { AUTH_COOKIE_NAME } = require('../constants')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const cookieExtractor = (req) => {
  const cookies = cookie.parse(req.headers.cookie)
  return cookies[AUTH_COOKIE_NAME]
}

const options = {
  secretOrKey: process.env.AUTH_SECRET,
  audience: process.env.CLIENT_URL,
  jwtFromRequest: cookieExtractor
}

module.exports = (passport) => {
  passport.use(new Strategy(options, async (payload, done) => {
    try {
      const user = await usersAccessor.getUserById(payload)

      if (!user) {
        return done(false)
      }

      return done(null, user)
    } catch (error) {
      return done(error)
    }
  }))
}
