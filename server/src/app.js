require('dotenv').config()
const Koa = require('koa')
const router = require('./routes')

const port = process.env.PORT || 4000

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, async () => {
  console.log(`listening on ${port} PORT in ${process.env.NODE_ENV} mode`)
})
