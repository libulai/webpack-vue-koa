const db = require('../utils/db')
// const crypto = require('crypto')
const jwt = require('jsonwebtoken')

module.exports = {
    async signIn(data) {
        let rs = await db.query(`select * from tbl_user_basic where username='${data.username}' and password='${data.password}'`)

        if (rs.length > 0) {
            return false
        } else {
            db.query(`insert into tbl_user_basic (user_uuid, username, password) values (?,?,?)`, [db.uuid(), data.username, data.password])
            return true
        }
    },

    async signUp(data) {
        // 生成jwt
        const token = jwt.sign({
            n: data.username,
            p: data.password
        }, 'zoo', { expiresIn: '5000' })

        let rs = await db.query(`select * from tbl_user_basic where username='${data.username}'`)

        if (rs[0] && rs[0].password == data.password) {
            rs = await db.query(`update tbl_user_basic set token = '${token}' where user_uuid = '${rs[0].user_uuid}'`)
            if (rs) return token
            else return false
        } else {
            return false
        }
    }
}