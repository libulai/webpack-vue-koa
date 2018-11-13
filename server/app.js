const Koa = require('koa')
const serve = require('koa-static')
const koaBody = require('koa-body')
const path = require('path')
const router = require('./router/index')

const app = new Koa();

app.use(koaBody())

// 静态资源
const static = serve(path.join(__dirname,'public'))
app.use(static)

//路由
app.use(router.routes(), router.allowedMethods());

//错误处理
app.on('error',(ctx,err)=>{
    if(err.status = 404) ctx.body = '404了哎'
    if(err.status = 500) ctx.body = '500了哎'
})

app.listen(3600)


