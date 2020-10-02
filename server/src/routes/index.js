const Router = require('koa-router')
const itemsController = require('../controllers/items')

const router = new Router({ prefix: '/api/v1' })

router.get('/items', itemsController.getItems)

module.exports = router
