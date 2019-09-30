const router = require('koa-router')()

const sign = require('./sign')

const homePage = require('./homePage')

const jwt = require('jsonwebtoken')

const key_token = 'zoo'

// 验证jwt
router.post('*', async (ctx, next) => {
    if (!ctx.path.includes('signUp') && !ctx.path.includes('signIn')) {
        let token = ctx.header.authorization.split(' ')[1]  // 获取jwt
        if (token !== 'null') {
            try {
                jwt.verify(token, key_token)
                await next()
            } catch (error) {
                ctx.body = {
                    data: error.message,
                    code: -1
                }
                return
            }
        } else {
            return ctx.body = {
                message: 'token 错误',
                code: -1
            }
        }
    } else {
        await next()
    }
})

router
    .use(sign.routes(), sign.allowedMethods())
    .use(homePage.routes(), homePage.allowedMethods())

module.exports = router