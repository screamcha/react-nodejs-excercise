const Router = require('koa-router')
const passport = require('../passport')

const itemsController = require('../controllers/items')
const usersController = require('../controllers/users')

const router = new Router({ prefix: '/api/v1' })

// items
router.get('/items', passport.authenticate('jwt', { session: false }), itemsController.getItems)
router.get('/items/:id', passport.authenticate('jwt', { session: false }), itemsController.getItem)
router.patch('/items/:id', passport.authenticate('jwt', { session: false }), itemsController.updateItem)

router.post('/auth/login', usersController.login)

module.exports = router
