if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  client: 'pg',
  connection: {
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432
  },
  migrations: {
    directory: './src/db/migrations'
  },
  seeds: {
    directory: './src/db/seeds'
  }
}
