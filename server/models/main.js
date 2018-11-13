const db = require('../utils/db')
const crypto = require('crypto')

module.exports = {
    async login (data){
        
        let rs = await db.query(`select * from tbl_user_basic where username='${data.name}' and password='${data.password}'`)
        
        if(rs.length>0){
            return rs[0]
        }else{
            db.query(`insert into tbl_user_basic (user_uuid, username, password) values (?,?,?)`,[db.uuid(),data.name,data.password])
            return 'sucessed'
        }
    }
}