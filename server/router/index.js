const router = require('koa-router')()

const sign = require('./sign')

const homePage = require('./homePage')

router
    .use(sign.routes(), sign.allowedMethods())
    .use(homePage.routes(), homePage.allowedMethods())

module.exports = router

