const router = require('koa-router')()
const main = require('../controllers/main')

router.post('/postUser',main.login)

module.exports = router



