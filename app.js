const http = require("http");

http.createServer( (req, res)=>{
    if (req.url == "/normal") {
         return res.end("Prueba")
    }

}).listen(3020,"localhost",()=>{
    console.log("Server corriendo en: http://localhost:3020/normal");
})