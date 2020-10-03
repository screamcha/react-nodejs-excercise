const db = require('../index')
const ItemModel = require('../../models/Item')

const getItemById = async (id) => {
  const item = await db('items').where('id', id).select('*')

  if (item[0]) {
    return new ItemModel(item[0])
  }
}

const getItems = async () => {
  const data = await db.select()
    .from('items')
    .join('quantities', 'quantities.item_id', '=', 'items.id')

  return data.map((item) => new ItemModel(item))
}

module.exports = {
  getItemById,
  getItems
}
