let http = require("http")
let myApp = http.createServer(function (req, res) {
 res.writeHead(200, {"Content-Type": "../index/html"})
 res.end("welcome")
})
myApp.listen(3000)