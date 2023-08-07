const http = require("http")
const date = require('./myModule')

const myFunction = (req, res) => {
    const dateTime = date()
    
    res.end(`${dateTime}`)
}


PORT = 3000
http.createServer(myFunction).listen(PORT)
console.log(`Server is running on ${PORT}`)