
exports.seed = async (knex) => {
  await knex('quantities').del()

  return knex('quantities').insert([
    { item_id: 1, quantity: 10 },
    { item_id: 2, quantity: 9 },
    { item_id: 3, quantity: 11 },
    { item_id: 4, quantity: 10 }
  ])
}
