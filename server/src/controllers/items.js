const itemsService = require('../services/items')

const getItems = async (ctx) => {
  const items = await itemsService.getItems()

  ctx.body = items
}

module.exports = {
  getItems
}
