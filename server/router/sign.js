const router = require('koa-router')()
const sign = require('../controllers/sign')

router.post('/signIn',sign.signIn)

module.exports = router



