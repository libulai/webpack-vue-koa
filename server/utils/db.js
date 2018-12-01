const mysql = require('mysql')
const uuid = require('node-uuid')
const config = require('../config/db.config')

//创建连接池
const pool = mysql.createPool(config.mysql)

const dbObj = {
    // 数据库操作query
    query: (sql, params) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                if (err) reject(err)
                else {
                    conn.query(sql, params, function (error, results, fields) {
                        if (error) reject(error)
                        else {
                            //释放连接  
                            conn.release()
                            resolve(results)
                        }
                    })
                }
            })
        })
    },

    // 生成随机uuid
    uuid: () => {
        return uuid.v1()
    }
}

module.exports = dbObj


