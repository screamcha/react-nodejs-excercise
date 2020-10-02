
exports.up = async (knex) => {
  return knex.schema.createTable('items', table => {
    table.increments('id')
    table.string('name', 256)
  })
}

exports.down = async (knex) => knex.schema.dropTable('items')
