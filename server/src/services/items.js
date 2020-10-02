const itemsAccessor = require('../db/accessors/items')

const getItems = async () => {
  const items = await itemsAccessor.getItems()

  return items
}

module.exports = {
  getItems
}
