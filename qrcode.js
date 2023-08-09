const qrcode = require('qrcode')


qrcode.toDataURL('github.com/ColdDionysus', {type:'terminal'}, (err, url) => {
    console.log(url)
})