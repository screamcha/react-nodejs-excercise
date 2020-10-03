const { StatusCodes } = require('http-status-codes')

const itemsService = require('../services/items')

const getItems = async (ctx) => {
  const items = await itemsService.getItems()

  ctx.body = items
}

const updateItem = async (ctx) => {
  const { id: itemId } = ctx.request.params
  const { quantity } = ctx.request.body

  if (!quantity) {
    ctx.response.status = StatusCodes.BAD_REQUEST
    return
  }

  const item = await itemsService.updateItem(itemId, quantity)

  if (!item) {
    ctx.response.status = StatusCodes.NOT_FOUND
    return
  }

  ctx.body = item
}

module.exports = {
  getItems,
  updateItem
}