const Koa = require('koa')
const serve = require('koa-static')
const koaBody = require('koa-body')
const path = require('path')
const router = require('./router/index')
const koajwt = require('koa-jwt')
const key_token = 'zoo'

const app = new Koa();

app.use(koaBody())

// 静态资源
const static = serve(path.join(__dirname, 'public'))
app.use(static)

// 解决跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200
    } else {
        await next()
    }
})

// 拦截器
// app.use(async (ctx, next) => {
//     return next().catch((err) => {
//         console.log(3333)
//         if (err.status === 401) {
//             ctx.status = 401
//             ctx.body = 'Protected resource, use Authorization header to get access\n'
//         } else {
//             throw err
//         }
//     })
// })

// jwt 鉴权
// app.use(koajwt({ secret: key_token, passthrough:true }).unless({
//     path: [/^\/login/]
// }))

// 路由
app.use(router.routes(), router.allowedMethods())


// 错误处理
app.on('error', (ctx, err) => {
    if (err) console.error(err);
})

app.listen(3789)


