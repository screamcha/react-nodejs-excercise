
exports.seed = async (knex) => {
  await knex('items').del()

  return knex('items').insert([
    { id: 1, name: 'Apple iPhone 11 Red' },
    { id: 2, name: 'Apple iPhone 11 Black' },
    { id: 3, name: 'Apple iPhone 11 Pro Green' },
    { id: 4, name: 'Apple iPhone SE 2' }
  ])
}
