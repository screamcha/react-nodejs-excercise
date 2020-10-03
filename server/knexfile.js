const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

module.exports = {
  client: 'pg',
  connection: {
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  migrations: {
    directory: './src/db/migrations'
  },
  seeds: {
    directory: './src/db/seeds'
  }
}
