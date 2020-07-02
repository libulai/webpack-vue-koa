const superagent = require('superagent')
const cheerio = require('cheerio')
const nodemailer = require('nodemailer');
var n;


module.exports.getInfo = async function () {
    superagent
        .get(`http://shop.cgbchina.com.cn/mall/goods/03140714143403208122?itemCode=03140714143403208122`)
        .end((err, rs) => {
            let $ = cheerio.load(rs.text)
            let num = $('.num').text();
            let icon = $('.icon-sold-out').length
          
            // if (icon && icon == 1) {
            //     console.log('无货', ` 已售:${num}`, ` 时间：${new Date().toLocaleTimeString()}`)
            //     n = num
            // } else {
            //     n = num
            //     console.log('有货', ` 已售:${num}`, ` 时间：${new Date().toLocaleTimeString()}`)
            //     sendMail()
            // }
            // if (n < num && n) {
            if(icon != 1 && (n < num)) {
                n = num
                console.log(icon, '有货', ` 已售:${num}`, ` 时间：${new Date().toLocaleTimeString()}`)
                // console.log($('.icon-sold-out1'))
                sendMail()
            } else {
                // console.log($('.icon-sold-out1'))
                console.log(n, icon, '无货', ` 已售:${num}`, ` 时间：${new Date().toLocaleTimeString()}`)
                n = num
            }
        })
}



function sendMail() {
    var mailTransport = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
        auth: {
            user: '617069197@qq.com',
            pass: 'neuysfqdqkccbfca'
        },
    });

    var options = {
        from: '"你的名字" <617069197@qq.com>',
        to: '"用户1" <邮箱地址1>, "用户2" <617069197@qq.com>',
        subject: '广发签账额',
        text: '广发签账额',
        html: '<h1>广发签账额</p>',
        attachments: []
    };

    mailTransport.sendMail(options, function (err, msg) {
        if (err) {
            console.log(err);
        }
    });
}


