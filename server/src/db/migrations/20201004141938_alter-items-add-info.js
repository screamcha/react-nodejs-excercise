
exports.up = async (knex) =>
  knex.schema.alterTable('items', table => {
    table.text('description')
    table.float('price')
  })

exports.down = async (knex) =>
  knex.schema.alterTable('items', table => {
    table.dropColumns(['description', 'price'])
  })
