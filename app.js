const http = require("http");


http.createServer( (req, resp)=>{
    resp.statusCode= 200;
    resp.setHeader("Content-type", "text/plain");
    resp.end("Prueba, server node.js");

}).listen(3000, 'localhost',()=>{
    console.log(`Server corriendo en http://localhost:3000`);
})