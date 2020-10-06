const { createPasswordHmac } = require('../../utils/password')

exports.seed = async (knex) => {
  await knex('users').del()

  return knex('users').insert([
    {
      id: 1,
      username: 'testuser',
      password_hash: createPasswordHmac('123456')
    }
  ])
}
