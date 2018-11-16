const router = require('koa-router')()

const sign = require('./sign')

router.use(sign.routes(),sign.allowedMethods())

module.exports = router




