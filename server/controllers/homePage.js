const code = require('../config/code.config')
const homePage = require('../models/homePage')

exports.getWebInfos = async ctx => {
    const data = ctx.request.body
    const rs = await homePage.getWebInfos(data)
    
    if (rs) {
        ctx.body = {
            status: 1,
            msg: '获取爬虫数据成功'
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '获取爬虫数据失败'
        }
    }
}

exports.getWebList = async ctx => {
    const rs = await homePage.getWebList()
  
    if (rs) {
        ctx.body = {
            status: 1,
            data: rs
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '获取列表失败'
        }
    }
}

