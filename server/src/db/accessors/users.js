const db = require('../index')
const UserModel = require('../../models/User')

const getUserById = async (userId) => {
  const data = await db('users')
    .where({ id: userId })
    .select()

  if (!data[0]) {
    return
  }

  return new UserModel(data[0])
}

const getUser = async (username) => {
  const data = await db('users')
    .where({ username })
    .select()

  if (!data[0]) {
    return
  }

  return new UserModel(data[0])
}

module.exports = {
  getUserById,
  getUser
}
