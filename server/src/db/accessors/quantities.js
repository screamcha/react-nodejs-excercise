
const db = require('../index')
const QuantityModel = require('../../models/Quantity')

const updateQuantity = async (itemId, quantity) => {
  const data = await db('quantities')
    .where({ item_id: itemId })
    .update({ quantity })
    .returning('*')

  return new QuantityModel(data[0])
}

module.exports = {
  updateQuantity
}
