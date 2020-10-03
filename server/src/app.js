const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { StatusCodes } = require('http-status-codes')

const router = require('./routes')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = new Koa()

app.use(bodyParser())

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
