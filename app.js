const http = require("http")
const dt = require('./myModule')

const myFunction = (req, res) => {
    const dateTime = dt()
    
    res.end(`${dateTime}`)
}


PORT = 3000
http.createServer(myFunction).listen(PORT)
console.log(`Server is running on ${PORT}`)