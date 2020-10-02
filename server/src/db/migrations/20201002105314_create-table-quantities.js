
exports.up = async (knex) => {
  return knex.schema.createTable('quantities', table => {
    table.increments('id')
    table.integer('item_id').references('id').inTable('items')
    table.integer('quantity').defaultTo(0)
  })
}

exports.down = async (knex) => knex.schema.dropTable('quantities')
