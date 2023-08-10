const qrcode = require('qrcode')
const http = require('http')




const generateQR = async(text) => {
    const urlData = await qrcode.toDataURL(text, {type:'terminal'})

    return urlData
}


const server = http.createServer(async (req, res) => {
    const data = await generateQR("http://github.com")
    res.writeHead(200, {'Content-Type': 'text/html'})
    const html = `<img src="${data}"></img>`
    res.end(html)
});

server.listen(3000)