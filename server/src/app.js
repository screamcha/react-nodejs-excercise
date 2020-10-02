require('dotenv').config()
const Koa = require('koa')
const db = require('./db')

const port = process.env.PORT || 4000

const app = new Koa()

app.listen(port, async () => {
  console.log(`listening on ${port} PORT in ${process.env.NODE_ENV} mode`)
  const a = await db.raw('select * from items')
  console.log(a)
})
