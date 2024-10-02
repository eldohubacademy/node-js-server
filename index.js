const http = require("http")

http.createServer((req,res)=>{
    console.log(req.headers);
    res.end("hello!! A message from Albert's server")
    
}).listen(8000)
