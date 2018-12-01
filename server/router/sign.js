const router = require('koa-router')()
const sign = require('../controllers/sign')

router.post('/signIn', sign.signIn)
router.post('/signUp', sign.signUp)

module.exports = router



