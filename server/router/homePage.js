const router = require('koa-router')()
const homePage = require('../controllers/homePage')

router.post('/v1/getWebInfos', homePage.getWebInfos)

router.post('/v1/getWebList', homePage.getWebList)

router.post('/v1/deleteWebItems', homePage.deleteWebItems)

module.exports = router



