const code = require('../config/code.config')
const main = require('../models/main')
const crypto = require("crypto");

exports.login = async ctx => {
    const data = ctx.request.body
    let md5 = crypto.createHash("md5");
    data.password = md5.update(data.password).digest("hex");
    const rs = await main.login(data) 
    // ctx.session = rs
    // console.log(ctx.session)

    if(rs == 'sucessed'){
        ctx.body = {
            status:0,
            msg:'注册成功，即将登陆'
        }
    }else if(rs){
        ctx.body = {
            status:0,
            msg:'验真成功，即将登陆'
        }
    }else{
        ctx.body = {
            status:1,
            msg:'密码错误'
        }
    }
}

