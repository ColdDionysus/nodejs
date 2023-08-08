const http = require('http')

const uc = require('upper-case')
const starter = (req, res) => {
    const string = uc.upperCase("my World js")
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`${string}`)
    res.end()
}

PORT = 3000

http.createServer(starter).listen(PORT)
console.log(`Server Started on ${PORT}`)