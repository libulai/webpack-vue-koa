const db = require('../utils/db')
const crypto = require('crypto')

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
        let rs = await db.query(`select * from tbl_user_basic where username='${data.username}'`)

        if (rs[0] && rs[0].password == data.password) {
            return true
        } else {
            return false
        }
    }
}