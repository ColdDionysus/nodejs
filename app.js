const http = require("http")

const myFunction = (req, res) => {res.end("Hello World")}



http.createServer(myFunction).listen(3000)