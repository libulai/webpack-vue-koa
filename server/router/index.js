const router = require('koa-router')()

const sign = require('./sign')

const homePage = require('./homePage')

const jwt = require('jsonwebtoken')

const key_token = 'zoo'

router.post('*', async (ctx, next) => {
    if (!ctx.path.includes('login')) {
        let token = ctx.header.authorization  // 获取jwt
        if (token) {
            console.log(token.split(' ')[1])
            jwt.verify(token.split(' ')[1], key_token, (err, payload) => {
                console.log(payload, err)
                ctx.body = {
                    payload
                }
                return
            })
        } else {
            ctx.body = {
                message: 'token 错误',
                code: -1
            }
        }
    }

    await next()
});

router
    .use(sign.routes(), sign.allowedMethods())
    .use(homePage.routes(), homePage.allowedMethods())

module.exports = router