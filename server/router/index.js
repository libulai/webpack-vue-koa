const router = require('koa-router')()

const main = require('./main')

router.use(main.routes(),main.allowedMethods())

module.exports = router




