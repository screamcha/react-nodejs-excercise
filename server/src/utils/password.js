const crypto = require('crypto')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const createPasswordHmac = (password) => {
  const hmac = crypto.createHmac('sha256', process.env.HASH_SECRET)

  hmac.update(password)
  return hmac.digest('base64')
}

module.exports = {
  createPasswordHmac
}
