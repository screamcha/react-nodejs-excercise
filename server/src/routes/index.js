const Router = require('koa-router')
const itemsController = require('../controllers/items')

const router = new Router({ prefix: '/api/v1' })

// items
router.get('/items', itemsController.getItems)
router.get('/items/:id', itemsController.getItem)
router.patch('/items/:id', itemsController.updateItem)

module.exports = router
