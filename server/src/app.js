require('dotenv').config()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { StatusCodes } = require('http-status-codes')

const router = require('./routes')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.response.status = error.code || StatusCodes.INTERNAL_SERVER_ERROR
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
