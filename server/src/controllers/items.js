const { StatusCodes } = require('http-status-codes')

const itemsService = require('../services/items')

const getItems = async (ctx) => {
  const items = await itemsService.getItems()

  ctx.body = items
}

const getItem = async (ctx) => {
  const { id: itemId } = ctx.request.params

  const item = await itemsService.getItem(itemId)

  if (!item) {
    ctx.response.status = StatusCodes.NOT_FOUND
    return
  }

  ctx.body = item
}

const updateItem = async (ctx) => {
  const { id: itemId } = ctx.request.params
  const { quantity } = ctx.request.body

  if (quantity === undefined) {
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
  getItem,
  updateItem
}
