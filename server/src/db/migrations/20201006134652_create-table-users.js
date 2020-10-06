
exports.up = async (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username', 256)
    table.string('password_hash', 256)
  })
}

exports.down = async (knex) => knex.schema.dropTable('users')
