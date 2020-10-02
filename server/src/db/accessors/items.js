const db = require('../index')
const ItemModel = require('../../models/Item')

const getItems = async () => {
  const data = await db.select()
    .from('items')
    .join('quantities', 'quantities.item_id', '=', 'items.id')

  return data.map((item) => new ItemModel(item))
}

module.exports = {
  getItems
}
