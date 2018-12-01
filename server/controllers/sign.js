const code = require('../config/code.config')
const sign = require('../models/sign')
const crypto = require("crypto");

exports.signIn = async ctx => {
    const data = ctx.request.body
    const md5 = crypto.createHash("md5")
    data.password = md5.update(data.password).digest("hex")
    const rs = await sign.signIn(data)

    if (rs) {
        ctx.body = {
            status: 1,
            msg: '注册成功'
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '该用户名已注册'
        }
    }
}

exports.signUp = async ctx => {
    const data = ctx.request.body
    const md5 = crypto.createHash("md5")
    data.password = md5.update(data.password).digest("hex")
    const rs = await sign.signUp(data)

    if (rs) {
        ctx.body = {
            status: 1
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '用户名或密码错误'
        }
    }
}

