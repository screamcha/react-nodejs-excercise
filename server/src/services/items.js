const itemsAccessor = require('../db/accessors/items')
const quantitiesAccessor = require('../db/accessors/quantities')
const ItemModel = require('../models/Item')

const getItems = async () => {
  const items = await itemsAccessor.getItems()

  return items
}

const updateItem = async (itemId, quantity) => {
  const item = await itemsAccessor.getItemById(itemId)

  if (!item) {
    return
  }

  const updatedQuantity = await quantitiesAccessor.updateQuantity(itemId, quantity)

  return new ItemModel({ ...item, ...updatedQuantity })
}

module.exports = {
  getItems,
  updateItem
}
