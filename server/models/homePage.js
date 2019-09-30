const db = require('../utils/db')
const superagent = require('superagent')
const cheerio = require('cheerio')

module.exports = {
    async getWebInfos(data) {
        const keywordArr = data.keyword.split(',')
        let promiseArr = []

        for (let i = 0; i < keywordArr.length; i++) {
            promiseArr.push(superagentPromise(keywordArr[i]))
        }
        
        return Promise.all(promiseArr).then((rs) => {
            let handleInfo = handleData(rs, keywordArr)
            db.query(`insert into tbl_web_info 
                    (web_uuid, keyword, create_time) value (?, ?, CURDATE())`, [db.uuid(), JSON.stringify(handleInfo)])
            return handleInfo
        })
    },

    async getWebList() {
        let rs = await db.query(`select * from tbl_web_info order by create_time desc`)
        rs.forEach(item => {
            item.keyword = JSON.parse(item.keyword)
        })
        return rs
    },

    async deleteWebItems(data) {
        let rs = await db.query(`delete from tbl_web_info where web_uuid = ?`, [data.id])
        
        return rs
    }
}


function superagentPromise(key) {
    // 转义
    key = encodeURIComponent(encodeURIComponent(key))
    return new Promise((resolve, reject) => {
        superagent
        .get(`https://search.51job.com/list/070200,000000,0000,00,9,99,${key},2,1.html`)
        .end((err, rs) => {
            if (err) reject(err) && console.error(err)
            else {
                resolve(rs)
            }
        })
    })
}

function handleData(res, keywordArr) {
    let resultObj = {}
    res.forEach((item,index) => {
        let $ = cheerio.load(item.text)
        let num = $('#resultList .rt').eq(0).text().replace(/[^0-9]/ig, '')
        resultObj[keywordArr[index]] = num
    })
    return resultObj
}