const passport = require('koa-passport')
const JwtStrategy = require('./JwtStrategy')

JwtStrategy(passport)

module.exports = passport
