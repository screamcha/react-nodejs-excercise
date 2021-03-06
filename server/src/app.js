const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const { StatusCodes } = require('http-status-codes')

const passport = require('./passport')
const router = require('./routes')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const app = new Koa()

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))
app.use(bodyParser())
app.use(passport.initialize())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.error(error)
    ctx.response.status = StatusCodes.INTERNAL_SERVER_ERROR
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
