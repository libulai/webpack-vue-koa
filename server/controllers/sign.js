const code = require('../config/code.config')
const sign = require('../models/sign')
const crypto = require("crypto");

exports.signIn = async ctx => {
    const data = ctx.request.body
    let md5 = crypto.createHash("md5");
    data.password = md5.update(data.password).digest("hex");
    const rs = await sign.signIn(data) 
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

